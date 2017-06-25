import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Customers from '../../api/customers/customers';
import container from '../../modules/container';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

class CustomerAutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: props.customer ? props.customer.customerName : ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(searchText) {
        this.setState({selectedValue: searchText});
    }

    render() {
        const {setCustomer} = this.props;
        const {customers} = this.props;
        const {selectedValue} = this.state;
        return (
            <AutoComplete
                floatingLabelText="Select Customer"
                filter={AutoComplete.fuzzyFilter}
                searchText={selectedValue}
                maxSearchResults={8}
                openOnFocus={true}
                onUpdateInput={this.handleInput}
                onNewRequest={ setCustomer }
                dataSource={customers}
                dataSourceConfig={{
                    text: 'customerName',
                    value: '_id',
                }}
                fullWidth={true}/>
        )
    }
}

CustomerAutoComplete.propTypes = {
    customers: PropTypes.array,
    setCustomer: PropTypes.func,
    customerId: PropTypes.string
};

export default container((props, onData) => {
    const subscription = Meteor.subscribe('customers.list');
    if(subscription.ready()) {
        const customers = Customers.find().fetch();
        const customer = Customers.findOne(props.customerId)
        onData(null, { customers, customer })
    }
}, CustomerAutoComplete);
