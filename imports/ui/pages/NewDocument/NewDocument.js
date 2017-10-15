import React from 'react';
import PropTypes from 'prop-types';
import DocumentEditor from '../../components/DocumentEditor/DocumentEditor';
import { Grid, Breadcrumb } from 'react-bootstrap';
import Paper from 'material-ui/Paper'

const NewDocument = ({ history }) => (
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
          New
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
    <Grid className="NewDocument">
      <Paper style={{padding: 20}} zDepth={1}>
        <h4 className="page-header">New Document</h4>
        <DocumentEditor history={history} />
      </Paper>
    </Grid>
  </div>
);

NewDocument.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NewDocument;
