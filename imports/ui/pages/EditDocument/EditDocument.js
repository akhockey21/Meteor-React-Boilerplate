import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Documents from '../../../api/Documents/Documents';
import DocumentEditor from '../../components/DocumentEditor/DocumentEditor';
import NotFound from '../NotFound/NotFound';
import { Grid, Breadcrumb } from 'react-bootstrap';
import Paper from 'material-ui/Paper'

const EditDocument = ({ doc, history }) => (doc ? (
  <div>
    <Paper zDepth={1}>
      <Breadcrumb>
        <Breadcrumb.Item active>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Documents
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Edit
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
    <Grid className="EditDocument">
      <Paper style={{padding: 20}} zDepth={1}>
        <h4 className="page-header">{`Editing "${doc.title}"`}</h4>
        <DocumentEditor doc={doc} history={history} />
      </Paper>
    </Grid>
  </div>
) : <NotFound />);

EditDocument.defaultProps = {
  doc: null,
};

EditDocument.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default createContainer(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  return {
    loading: !subscription.ready(),
    doc: Documents.findOne(documentId),
  };
}, EditDocument);
