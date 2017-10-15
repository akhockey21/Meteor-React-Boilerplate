import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import _ from 'lodash';


export default class CustomerEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = _.debounce(this.handleInput.bind(this), 2500);
        this.state = {
            customerId: this.props.customer ? this.props.customer._id : ''
        }
    }

    getValues() {
        var values = {};
        var booleanValues = ['showInstallForFacilityOnly', 'status'];
        for (var key in this.refs) {
            values[key] = this.refs[key].getValue();
            if (booleanValues.indexOf(key) > -1) {
                values[key] = this.refs[key].getValue() ? true : false;
            }
        }
        return values;
    }


    handleInput(e) {
        e.preventDefault;
        var customer = this.getValues();
        const {customerId} = this.state;
        Meteor.call('saveCustomer', customerId, customer, (err, res) => {
          if (!err) {
            Bert.alert({
                title: 'All Changes Saved',
                type: 'success',
                style: 'growl-top-right',
                icon: 'fa-check'
            });
            if (!customerId)
              this.setState({customerId: res.insertedId})
          }
      });
    }


    render() {
        const { customer } = this.props;
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
                        ref="customerName"
                        floatingLabelText="Customer name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.customerName }
                        hintText="Customer Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="customerFirstName"
                        floatingLabelText="First Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.customerFirstName }
                        hintText="First Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="customerMiddleName"
                        floatingLabelText="Middle Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.customerMiddleName }
                        hintText="Middle Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="customerLastName"
                        floatingLabelText="Last Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.customerLastName }
                        hintText="Last Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="title"
                        floatingLabelText="Title"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.title }
                        hintText="Title"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="mainPhone"
                        floatingLabelText="Phone"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.mainPhone }
                        hintText="Phone"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="fax"
                        floatingLabelText="Fax"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.fax }
                        hintText="Fax"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="other"
                        floatingLabelText="Other"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.other }
                        hintText="Other"/>
                </Col>
                <Col xs={12} md={4} sm={6}>
                    <TextField
                        ref="address1"
                        floatingLabelText="Address One"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.address1 }
                        hintText="Address One"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="address2"
                        floatingLabelText="Address two"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.address2 }
                        hintText="Address two"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="city"
                        floatingLabelText="City"
                        fullWidth={true}
                        maxLength="5"
                        type="number"
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.city }
                        hintText="City"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="state"
                        maxLength="2"
                        fullWidth={true}
                        floatingLabelText="State"
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.state }
                        hintText="State"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="zipCode"
                        floatingLabelText="Zip code"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.zipCode }
                        hintText="Zip code"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="status"
                        floatingLabelText="Status"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.status }
                        hintText="Status"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="customerSalutation"
                        name="customerSalutation"
                        fullWidth={true}
                        floatingLabelText="Customer Salutation"
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.customerSalutation }
                        hintText="Customer Salutation"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="email"
                        fullWidth={true}
                        name="email"
                        floatingLabelText="Email"
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.email }
                        hintText="email"/>
                </Col>
                <Col xs={12} md={2} sm={3}>
                    <TextField
                        ref="showInstallForFacilityOnly"
                        fullWidth={true}
                        floatingLabelText="Show install for facility only"
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.showInstallForFacilityOnly }/>
                </Col>
                <Col xs={12} md={12} sm={12}>
                    <TextField
                        ref="comment"
                        fullWidth={true}
                        multiLine={true}
                        rows={2}
                        floatingLabelText="Comment"
                        onChange={ this.handleInput }
                        defaultValue={ customer && customer.comment }
                        hintText="comment"/>
                </Col>
            </Row>
        );
    }
}

CustomerEditor.propTypes = {
  customer: PropTypes.object,
};
