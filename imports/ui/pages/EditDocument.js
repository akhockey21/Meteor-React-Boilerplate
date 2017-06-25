import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents';
import DocumentEditor from '../components/DocumentEditor';
import NotFound from './NotFound';
import container from '../../modules/container';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';


const style = {
  height: 'auto',
  width: '100%',
  padding: 20,
  display: 'inline-block',
};

const EditDocument = ({ doc }) => (doc ? (
  <Col xs={12} md={8} mdOffset={2}>
    <Paper style={style} zDepth={1}>
      <Row>
        <Col xs={12}>
          <h4 className="pull-left">Editing "{ doc.title }"</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DocumentEditor doc={ doc }/>
        </Col>
      </Row>
    </Paper>
  </Col>
) : <NotFound />);

EditDocument.propTypes = {
  doc: PropTypes.object,
};

export default container((props, onData) => {
  const documentId = props.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, { doc });
  }
}, EditDocument);
