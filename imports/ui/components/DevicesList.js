import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Button, ButtonGroup, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Devices from '../../api/devices/devices';
import { removeDevice } from '../../api/devices/methods';
import container from '../../modules/container';
import Griddle from 'griddle-react';
import RaisedButton from 'material-ui/RaisedButton';

const handleNav = (_id, datas) => console.log(_id);

const handleRemove = (_id) => {
    if (confirm('Are you sure? This is permanent!')) {
        removeDevice.call({ _id }, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Device deleted!', 'success');
                browserHistory.push('/devices');
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
                onClick={()=> browserHistory.push('/devices/'+this.props.rowData._id) }/>
            <RaisedButton
                label="Delete"
                primary={true}
                onClick={ ()=> handleRemove(this.props.rowData._id) }/>
        </div>
    );
  }
});

const columnList = ['deviceName','installDate','testMonth','nextTestDue','status','actions'];
const columnMetadata = [
  {columnName: 'deviceName', order: "1", displayName: 'Device Name', cssClassName: 'col-xs-2' },
  {columnName: 'installDate', order: "2", displayName: 'Install Date', cssClassName: 'col-xs-2' },
  {columnName: 'testMonth', order: "3", displayName: 'Test Month', cssClassName: 'col-xs-1' },
  {columnName: 'nextTestDue', order: "4", displayName: 'Next Test Due', cssClassName: 'col-xs-1' },
  {columnName: 'status', order: "6", displayName: 'Status', cssClassName: 'col-xs-1' },
  {columnName: 'actions', customComponent: actionButtons, sortable: false, cssClassName: 'col-xs-3',
    displayName: 'Actions'}
];

const DevicesList = ({ devices }) => (
devices.length > 0 ?
    <Griddle
        results={devices}
        useGriddleStyles={false}
        tableClassName={'griddle-flex table table-bordered table-striped table-hover highlight striped bordered'}
        settingsToggleClassName='btn btn-default'
        useCustomPagerComponent={false}
        showFilter={true}
        showSettings={true}
        resultsPerPage={50}
        columnMetadata={columnMetadata}
        columns={columnList}/> :
   <Alert bsStyle="warning">No devices yet.</Alert>
);

DevicesList.propTypes = {
    devices: PropTypes.array,
};

export default container((props, onData) => {
    const subscription = Meteor.subscribe('devices.list');
    if (subscription.ready()) {
        const devices = Devices.find().fetch();
        onData(null, { devices });
    }
}, DevicesList);
