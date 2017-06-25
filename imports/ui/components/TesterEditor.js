import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';


export default class TesterEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            testerId: this.props.tester ? this.props.tester._id : ''
        }
    }

    getValues() {
        var values = {};
        var booleanValues = ['Active', 'status', 'Installer', 'Inspector', 'tester'];
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
        var tester = this.getValues();
        const {testerId} = this.state;
        Meteor.call('saveTester', testerId, tester, (err, res) => {
            if (!err) {
                _.debounce(
                    Bert.alert({
                        title: 'All Changes Saved',
                        type: 'success',
                        style: 'growl-top-right',
                        icon: 'fa-check'
                    }), 1000);
                if (!testerId)
                    this.setState({testerId: res.insertedId})
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
        const { tester } = this.props;
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
                        ref="certNumber"
                        floatingLabelText="Certificate number"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.testerName }
                        hintText="Certificate Number"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="testerName"
                        floatingLabelText="Tester Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.testerName }
                        hintText="Tester Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="testerFirstName"
                        floatingLabelText="First Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.testerFirstName }
                        hintText="First Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="testerMiddleName"
                        floatingLabelText="Middle Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.testerMiddleName }
                        hintText="Middle Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="testerLastName"
                        floatingLabelText="Last Name"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.testerLastName }
                        hintText="Last Name"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="title"
                        floatingLabelText="Title"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.title }
                        hintText="Title"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="mainPhone"
                        floatingLabelText="phone"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.mainPhone }
                        hintText="Phone"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="other"
                        floatingLabelText="Other"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.other }
                        hintText="Other"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="fax"
                        floatingLabelText="Fax"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.fax }
                        hintText="Fax"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="email"
                        fullWidth={true}
                        name="email"
                        floatingLabelText="Email"
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.email }
                        hintText="email"/>
                </Col>
                <Col xs={12} md={4} sm={6}>
                    <TextField
                        ref="address1"
                        floatingLabelText="Address One"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.address1 }
                        hintText="Address One"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="address2"
                        floatingLabelText="Address two"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.address2 }
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
                        defaultValue={ tester && tester.city }
                        hintText="City"/>
                </Col>
                <Col xs={12} md={3} sm={6}>
                    <TextField
                        ref="state"
                        maxLength="2"
                        fullWidth={true}
                        floatingLabelText="State"
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.state }
                        hintText="State"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="zipCode"
                        floatingLabelText="Zip code"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.zipCode }
                        hintText="Zip code"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="status"
                        floatingLabelText="Status"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.status }
                        hintText="Status"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="certExp"
                        floatingLabelText="certExp"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.certExp }
                        hintText="certExp"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="CCCDL"
                        floatingLabelText="CCCDL"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.CCCDL }
                        hintText="CCCDL"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="plumbingLicenseNumber"
                        floatingLabelText="plumbingLicenseNumber"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.plumbingLicenseNumber }
                        hintText="plumbingLicenseNumber"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="tester"
                        floatingLabelText="tester"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.tester }
                        hintText="tester"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="Inspector"
                        floatingLabelText="Inspector"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.Inspector }
                        hintText="Inspector"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="Installer"
                        floatingLabelText="Installer"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.Installer }
                        hintText="Installer"/>
                </Col>
                <Col xs={12} md={2} sm={6}>
                    <TextField
                        ref="Active"
                        floatingLabelText="Active"
                        fullWidth={true}
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.Active }
                        hintText="Active"/>
                </Col>
                <Col xs={12} md={12} sm={12}>
                    <TextField
                        ref="comment"
                        fullWidth={true}
                        multiLine={true}
                        rows={2}
                        floatingLabelText="Comment"
                        onChange={ this.handleInput }
                        defaultValue={ tester && tester.comment }
                        hintText="comment"/>
                </Col>
            </Row>
        );
    }
}

TesterEditor.propTypes = {
  tester: PropTypes.object,
};
