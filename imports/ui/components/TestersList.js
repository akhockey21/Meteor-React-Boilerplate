import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Button, ButtonGroup, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Testers from '../../api/testers/testers';
import { removeTester } from '../../api/testers/methods';
import container from '../../modules/container';
import Griddle from 'griddle-react';

const handleNav = (_id, datas) => console.log(_id);

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeTester.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Tester deleted!', 'success');
        browserHistory.push('/testers');
      }
    });
  }
};

var actionButtons = React.createClass({
  render: function () {
    return (
        <div>
          <ButtonGroup>
            <Button bsSize="xsmall" href={'/testers/' + this.props.rowData._id}>View</Button>
            <Button bsSize="xsmall" href={'/testers/' + this.props.rowData._id + '/edit'}>Edit</Button>
            <Button bsSize="xsmall" onClick={ () => handleRemove(this.props.rowData._id) } bsStyle="danger">Delete</Button>
          </ButtonGroup>
        </div>
    );
  }
});

const columnList = ['testerName','address1','city','state','zipCode','status','actions'];
const columnMetadata = [
  {columnName: 'testerName', order: "1", displayName: 'Tester Name', cssClassName: 'col-xs-2' },
  {columnName: 'address1', order: "2", displayName: 'Mailing Address 1', cssClassName: 'col-xs-2' },
  {columnName: 'state', order: "3", displayName: 'State', cssClassName: 'col-xs-1' },
  {columnName: 'city', order: "4", displayName: 'City', cssClassName: 'col-xs-1' },
  {columnName: 'zipCode', order: "5", displayName: 'Zip Code', cssClassName: 'col-xs-1' },
  {columnName: 'status', order: "6", displayName: 'Status', cssClassName: 'col-xs-1' },
  {columnName: 'actions', customComponent: actionButtons, sortable: false, cssClassName: 'col-xs-3',
    displayName: 'Actions'}
];

 const TestersList = ({ testers }) => (
    testers.length > 0 ?
        <Griddle
            results={testers}
            useGriddleStyles={false}
            tableClassName={'griddle-flex table table-bordered table-striped table-hover highlight striped bordered'}
            settingsToggleClassName='btn btn-default'
            useCustomPagerComponent={false}
            showFilter={true}
            showSettings={true}
            resultsPerPage={50}
            columnMetadata={columnMetadata}
            columns={columnList}/> :
   <Alert bsStyle="warning">No testers yet.</Alert>
 );




TestersList.propTypes = {
  testers: PropTypes.array,
};

export default container((props, onData) => {
  const subscription = Meteor.subscribe('testers.list');
  if (subscription.ready()) {
    const testers = Testers.find().fetch();
    onData(null, { testers });
  }
}, TestersList);
