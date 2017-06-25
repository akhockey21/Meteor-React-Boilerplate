import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Button, ButtonGroup, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Customers from '../../api/customers/customers';
import { removeCustomer } from '../../api/customers/methods';
import container from '../../modules/container';
import Griddle from 'griddle-react';
import RaisedButton from 'material-ui/RaisedButton';

const handleNav = (_id, datas) => console.log(_id);

const handleRemove = (_id) => {
    if (confirm('Are you sure? This is permanent!')) {
        removeCustomer.call({ _id }, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Customer deleted!', 'success');
                browserHistory.push('/customers');
            }
        });
    }
};

const style = {
    marginRight: 10
}

var actionButtons = React.createClass({
  render: function () {
    return (
        <div>
            <RaisedButton
                label="Edit"
                style={style}
                onClick={()=> browserHistory.push('/customers/'+this.props.rowData._id) }/>
            <RaisedButton
                label="Delete"
                primary={true}
                onClick={ ()=> handleRemove(this.props.rowData._id) }/>
        </div>
    );
  }
});

const columnList = ['customerName','address1','city','state','zipCode','status','actions'];
const columnMetadata = [
  {columnName: 'customerName', order: "1", displayName: 'Customer Name', cssClassName: 'col-xs-2' },
  {columnName: 'address1', order: "2", displayName: 'Mailing Address 1', cssClassName: 'col-xs-2' },
  {columnName: 'state', order: "3", displayName: 'State', cssClassName: 'col-xs-1' },
  {columnName: 'city', order: "4", displayName: 'City', cssClassName: 'col-xs-1' },
  {columnName: 'zipCode', order: "5", displayName: 'Zip Code', cssClassName: 'col-xs-1' },
  {columnName: 'status', order: "6", displayName: 'Status', cssClassName: 'col-xs-1' },
  {columnName: 'actions', customComponent: actionButtons, sortable: false, cssClassName: 'col-xs-3',
    displayName: 'Actions'}
];

const CustomersList = ({ customers }) => (
customers.length > 0 ?
    <Griddle
        results={customers}
        useGriddleStyles={false}
        tableClassName={'griddle-flex table table-bordered table-striped table-hover highlight striped bordered'}
        settingsToggleClassName='btn btn-default'
        useCustomPagerComponent={false}
        showFilter={true}
        showSettings={true}
        resultsPerPage={50}
        columnMetadata={columnMetadata}
        columns={columnList}/> :
   <Alert bsStyle="warning">No customers yet.</Alert>
);

CustomersList.propTypes = {
    customers: PropTypes.array,
};

export default container((props, onData) => {
    const subscription = Meteor.subscribe('customers.list');
    if (subscription.ready()) {
        const customers = Customers.find().fetch();
        onData(null, { customers });
    }
}, CustomersList);
