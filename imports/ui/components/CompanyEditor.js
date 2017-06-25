import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class CompanyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            companyId: this.props.company ? this.props.company._id : '',
            nextSurvey: null,
            testMonth: null
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
        this.setState(v);
    }

    handleInput(e) {
        e.preventDefault;
        var company = this.getValues();
        company['customerID'] = this.props.getCustomer() ? this.props.getCustomer()._id : null;
        const {companyId} = this.state;
        Meteor.call('saveFacility', companyId, company, (err, res) => {
            if (!err) {
                _.debounce(
                    Bert.alert({
                        title: 'All Changes Saved',
                        type: 'success',
                        style: 'growl-top-right',
                        icon: 'fa-check'
                    }), 1000);
                if (!companyId)
                    this.setState({companyId: res.insertedId})
            return;
            }
            else{
                console.log('error',err)
            }
        });
    }

    componentWillUnmount() {
        _.debounce(
            Bert.alert({
                title: 'All Changes Saved',
                type: 'success',
                style: 'growl-top-right',
                icon: 'fa-check'
            }), 1000);
    }


    render() {
        const { company } = this.props;
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="companyName"
                            floatingLabelText="Facility name"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.companyName }
                            fullWidth={true}
                            hintText="Facility Name"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="storeNumber"
                            floatingLabelText="Water Agency"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.storeNumber }
                            fullWidth={true}
                            hintText="Water Agency"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="accountNumber"
                            floatingLabelText="Account Number"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.accountNumber }
                            fullWidth={true}
                            hintText="Account Number"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="companyType"
                            floatingLabelText="Facility Type"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.companyType }
                            fullWidth={true}
                            hintText="Facility Type"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="hazardLevel"
                            floatingLabelText="Hazard Level"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.hazardLevel }
                            fullWidth={true}
                            hintText="Hazard Level"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <DatePicker
                            name="testMonth"
                            floatingLabelText="Test Month"
                            onChange={  this.handleDateInput.bind(this, 'testMonth') }
                            value={ this.state.testMonth }
                            defaultValue={ company && company.testMonth }
                            fullWidth={true}
                            hintText="Test Month"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="surveyCycle"
                            floatingLabelText="Survey Cycle"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.surveyCycle }
                            fullWidth={true}
                            hintText="Survey Cycle"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="address1"
                            floatingLabelText="Address One"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.address1 }
                            fullWidth={true}
                            hintText="Address One"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="address2"
                            floatingLabelText="Address two"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.address2 }
                            fullWidth={true}
                            hintText="Address two"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="city"
                            floatingLabelText="City"
                            maxLength="5"
                            type="number"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.city }
                            fullWidth={true}
                            hintText="City"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="state"
                            maxLength="2"
                            floatingLabelText="State"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.state }
                            fullWidth={true}
                            hintText="State"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="zipCode"
                            floatingLabelText="Zip code"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.zipCode }
                            fullWidth={true}
                            hintText="Zip code"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} sm={6}>
                        <DatePicker
                            floatingLabelText="Next Survey"
                            onChange={ this.handleDateInput.bind(this, 'nextSurvey') }
                            value={ this.state.nextSurvey }
                            defaultValue={ company && company.nextSurvey }
                            fullWidth={true}
                            hintText="Next Survey"/>
                    </Col>
                    <Col xs={12} md={3} sm={6}>
                        <TextField
                            ref="propertyIDNumber"
                            name="propertyIDNumber"
                            floatingLabelText="Property Id Number"
                            onChange={ this.handleInput }
                            defaultValue={ company && company.propertyIDNumber }
                            fullWidth={true}
                            hintText="Property Id Number"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} sm={12}>
                        <TextField
                            ref="comment"
                            multiLine={true}
                            floatingLabelText="Comment"
                            onChange={ this.handleInput }
                            fullWidth={true}
                            defaultValue={ company && company.comment }
                            hintText="comment"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

CompanyEditor.propTypes = {
    company: PropTypes.object,
    getCustomer: PropTypes.func
};
