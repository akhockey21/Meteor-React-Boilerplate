
import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import _ from 'lodash';

var moment = require('moment');


export default class DeviceEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = _.debounce(this.handleInput.bind(this), 2500);
        this.state = {
            deviceId: this.props.device ? this.props.device._id : '',
            installDate: null,
            testMonth: null
        }
    }

    getValues() {
        var values = {};
        var booleanValues = ['active'];
        var dateValues = ['installDate', 'testMonth'];
        for (var key in this.refs) {
            values[key] = this.refs[key].getValue();
            if (booleanValues.indexOf(key) > -1) {
                values[key] = this.refs[key].getValue() ? true : false;
            }
        }
        _.each(dateValues, (dateValue)=>{values[dateValue]=this.state[dateValue];})
        return values;
    }

    handleDateInput(name, e, date) {
        v = {};
        v[name] = moment(date).format('YYYY-MM-DD');
        this.setState(v,()=>{this.saveDevice()});
    }

    handleInput(e) {
        e.preventDefault;
        this.saveDevice();
    }

    saveDevice() {
        var device = this.getValues();
        const {deviceId} = this.state;
        device['facilityId'] = this.props.getFacility() ? this.props.getFacility()._id : null;
        Meteor.call('saveDevice', deviceId, device, (err, res) => {
            if (!err) {
              Bert.alert({
                  title: 'All Changes Saved',
                  type: 'success',
                  style: 'growl-top-right',
                  icon: 'fa-check'
              });
              if (!deviceId)
                  this.setState({deviceId: res.insertedId})
            }
            else{
                console.log(err)
            }
        });
    }


    render() {
        const { device } = this.props;
        const styles = {
          block: {
            maxWidth: 250,
          },
          checkbox: {
            marginBottom: 16,
          },
        };

        return (
            <Row>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="deviceName"
                        floatingLabelText="Device Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.deviceName }
                        hintText="Device Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="serialNumber"
                        floatingLabelText="Serial Number"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.serialNumber }
                        hintText="Serial Number"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="make"
                        floatingLabelText="Make"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.make }
                        hintText="Make"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="model"
                        floatingLabelText="Model"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.model }
                        hintText="Model"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="size"
                        floatingLabelText="Size"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.size }
                        hintText="Size"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="orientationConfig"
                        floatingLabelText="Orientation Config"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.orientationConfig }
                        hintText="Orientation Config"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="type"
                        floatingLabelText="Type"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.type }
                        hintText="Type"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="deviceLocation"
                        floatingLabelText="Device Location"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.deviceLocation }
                        hintText="Device Location"/>
                </Col>
                <Col xs={12} md={4} sm={6}>
                    <TextField
                        ref="waterServiceType"
                        floatingLabelText="Water Service Type"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.waterServiceType }
                        hintText="Water Service Type"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="hazardType"
                        floatingLabelText="Hazard Type"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.hazardType }
                        hintText="Hazard Type"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="waterAgency"
                        floatingLabelText="Water Agency"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.waterAgency }
                        hintText="Water Agency"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="protectionType"
                        fullWidth={true}
                        floatingLabelText="Protection Type"
                        onChange={ this.handleInput }
                        defaultValue={ device && device.protectionType }
                        hintText="Protection Type"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="active"
                        floatingLabelText="Active"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.active }
                        hintText="Active"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="hazardLevel"
                        floatingLabelText="Hazard Level"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ device && device.hazardLevel }
                        hintText="Hazard Level"/>
                </Col>
                <Col xs={12} md={2} sm={6}>

                    <DatePicker
                        name="installDate"
                        floatingLabelText="Install Date"
                        onChange={  this.handleDateInput.bind(this, 'installDate') }
                        value={ this.state.installDate }
                        defaultValue={ device && device.installDate }
                        hintText="Install Date"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="testCycle"
                        fullWidth={true}
                        name="testCycle"
                        floatingLabelText="Test Cycle"
                        onChange={ this.handleInput }
                        defaultValue={ device && device.testCycle }
                        hintText="testCycle"/>
                </Col>
                <Col xs={12} md={2} sm={3}>
                    <DatePicker
                            name="testMonth"
                            floatingLabelText="Test Month"
                            onChange={  this.handleDateInput.bind(this, 'testMonth') }
                            value={ this.state.testMonth }
                            defaultValue={ device && device.testMonth }
                            hintText="Test Month"/>
                </Col>
                <Col xs={12} md={12} sm={12}>
                    <TextField
                        ref="nextTestDue"
                        fullWidth={true}
                        floatingLabelText="Next Test Due"
                        onChange={ this.handleInput }
                        defaultValue={ device && device.nextTestDue }
                        hintText="nextTestDue"/>
                </Col>
            </Row>
        );
    }
}

DeviceEditor.propTypes = {
  device: PropTypes.object,
};
