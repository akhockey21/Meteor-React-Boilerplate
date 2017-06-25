import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import _ from 'lodash';

export default class FacilityEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = _.debounce(this.handleInput.bind(this), 2500);
        this.state = {
            facilityId: this.props.facility ? this.props.facility._id : '',
            nextSurvey: this.props.facility ? this.props.facility.nextSurvey : null,
            testMonth: this.props.facility ? this.props.facility.testMonth : null
        }
    }

    getValues() {
        var values = {};
        var booleanValues = ['active'];
        var dateValues = ['nextSurvey', 'testMonth'];
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
        v[name] = date;
        this.setState(v, ()=>{
            this.saveFacility();
        });

    }

    handleInput(e) {
        e.preventDefault;
        this.saveFacility();
    }

    saveFacility() {
        var facility = this.getValues();
        facility['customerID'] = this.props.getCustomer() ? this.props.getCustomer()._id : null;
        const {facilityId} = this.state;
        Meteor.call('saveFacility', facilityId, facility, (err, res) => {
            if (!err) {
              Bert.alert({
                  title: 'All Changes Saved',
                  type: 'success',
                  style: 'growl-top-right',
                  icon: 'fa-check'
              });
              if (!facilityId)
                  this.setState({facilityId: res.insertedId})
            } else {

            }
        })
    }

    componentDidUpdate() {
        this.saveFacility();
    }


    render() {
        const { facility } = this.props;
        return (
            <Row>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="facilityName"
                        floatingLabelText="Facility name"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.facilityName }
                        fullWidth={true}
                        hintText="Facility Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="storeNumber"
                        floatingLabelText="Water Agency"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.storeNumber }
                        fullWidth={true}
                        hintText="Water Agency"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="accountNumber"
                        floatingLabelText="Account Number"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.accountNumber }
                        fullWidth={true}
                        hintText="Account Number"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="facilityType"
                        floatingLabelText="Facility Type"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.facilityType }
                        fullWidth={true}
                        hintText="Facility Type"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="hazardLevel"
                        floatingLabelText="Hazard Level"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.hazardLevel }
                        fullWidth={true}
                        hintText="Hazard Level"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <DatePicker
                        name="testMonth"
                        floatingLabelText="Test Month"
                        onChange={  this.handleDateInput.bind(this, 'testMonth') }
                        value={ this.state.testMonth }
                        fullWidth={true}
                        hintText="Test Month"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="surveyCycle"
                        floatingLabelText="Survey Cycle"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.surveyCycle }
                        fullWidth={true}
                        hintText="Survey Cycle"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="address1"
                        floatingLabelText="Address One"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.address1 }
                        fullWidth={true}
                        hintText="Address One"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="address2"
                        floatingLabelText="Address two"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.address2 }
                        fullWidth={true}
                        hintText="Address two"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="city"
                        floatingLabelText="City"
                        maxLength="5"
                        type="number"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.city }
                        fullWidth={true}
                        hintText="City"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="state"
                        maxLength="2"
                        floatingLabelText="State"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.state }
                        fullWidth={true}
                        hintText="State"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="zipCode"
                        floatingLabelText="Zip code"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.zipCode }
                        fullWidth={true}
                        hintText="Zip code"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <DatePicker
                        floatingLabelText="Next Survey"
                        onChange={ this.handleDateInput.bind(this, 'nextSurvey') }
                        value={ this.state.nextSurvey }
                        fullWidth={true}
                        hintText="Next Survey"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="propertyIDNumber"
                        name="propertyIDNumber"
                        floatingLabelText="Property Id Number"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.propertyIDNumber }
                        fullWidth={true}
                        hintText="Property Id Number"/>
                </Col>
                <Col xs={12} md={12} sm={12}>
                    <TextField
                        ref="comment"
                        multiLine={true}
                        rows={2}
                        floatingLabelText="Comment"
                        onChange={ this.handleInput }
                        defaultValue={ facility && facility.comment }
                        fullWidth={true}
                        hintText="comment"/>
                </Col>
            </Row>
        );
    }
}

FacilityEditor.propTypes = {
    facility: PropTypes.object,
    getCustomer: PropTypes.func
};
