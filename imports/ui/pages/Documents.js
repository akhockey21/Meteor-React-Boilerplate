import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import DocumentsList from '../components/DocumentsList';

const style = {
  height: 'auto',
  width: '100%',
  padding: 20,
  display: 'inline-block',
};

const Documents = () => (
  <Col xs={12} md={8} mdOffset={2}>
    <Paper style={style} zDepth={1}>
      <Row>
        <Col xs={12}>
          <h4 className="pull-left">Documents</h4>
          <Link to="/documents/new">
            <RaisedButton
              onTouchTap={() => (browserHistory.push('/documents'))}
              className="pull-right"
              primary={true}
              label="Start"/>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DocumentsList />
        </Col>
      </Row>
    </Paper>
  </Col>
);


export default Documents;
