import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Button, ButtonGroup, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Facilities from '../../api/facilities/facilities';
import { removeFacility } from '../../api/facilities/methods';
import container from '../../modules/container';
import Griddle from 'griddle-react';
import RaisedButton from 'material-ui/RaisedButton';

const handleRemove = (_id) => {
    if (confirm('Are you sure? This is permanent!')) {
        Meteor.call('removeFacility', _id, (error, res) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Facility deleted!', 'success');
                browserHistory.push('/facilities');
            }
        });
    }
};

const style = {
    marginRight: 10,
};

var actionButtons = React.createClass({
  render: function () {
    return (
        <div>
            <RaisedButton
                label="Edit"
                style={style}
                onClick={ () => browserHistory.push('/facilities/' + this.props.rowData._id) }/>
            <RaisedButton
                label="Delete"
                primary={true}
                onClick={ () => handleRemove(this.props.rowData._id) }/>
        </div>
    );
  }
});

const columnList = ['facilityName','address1','city','state','zipCode','storeNumber','actions'];
const columnMetadata = [
    {columnName: 'facilityName', order: "1", displayName: 'Facility Name', cssClassName: 'col-xs-2' },
    {columnName: 'address1', order: "2", displayName: 'Mailing Address 1', cssClassName: 'col-xs-2' },
    {columnName: 'state', order: "3", displayName: 'State', cssClassName: 'col-xs-1' },
    {columnName: 'city', order: "4", displayName: 'City', cssClassName: 'col-xs-1' },
    {columnName: 'zipCode', order: "5", displayName: 'Zip Code', cssClassName: 'col-xs-2' },
    {columnName: 'storeNumber', order: "6", displayName: 'Store Number', cssClassName: 'col-xs-1' },
    {columnName: 'actions', customComponent: actionButtons, sortable: false, cssClassName: 'col-xs-3',
    displayName: 'Actions'}
];

 const FacilitiesListSpecific = ({ facilities }) => (
    facilities.length > 0 ?
        <Griddle
            results={facilities}
            useGriddleStyles={false}
            tableClassName={'griddle-flex table table-bordered table-striped table-hover highlight striped bordered'}
            settingsToggleClassName='btn btn-default'
            useCustomPagerComponent={false}
            showFilter={true}
            showSettings={true}
            resultsPerPage={50}
            columnMetadata={columnMetadata}
            columns={columnList}/> :
   <Alert bsStyle="warning">No facilities yet.</Alert>
 );

FacilitiesListSpecific.propTypes = {
    facilities: PropTypes.array,
    customerID: PropTypes.String,
};

export default container((props, onData) => {
    const subscription = Meteor.subscribe('facilities.list');
    console.log(props);
    if (subscription.ready()) {
        const facilities = Facilities.find({ customerID: props.customerID }).fetch();
        onData(null, { facilities });
    }
}, FacilitiesListSpecific);
