import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Facilities from '../../api/facilities/facilities';
import container from '../../modules/container';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

class FacilityAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: props.facility ? props.facility.facilityName : ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(searchText) {
        this.setState({selectedValue: searchText});
    }

    render() {
        const {setFacility} = this.props;
        const {facilities} = this.props;
        const {selectedValue} = this.state;
        return (
            <AutoComplete
                floatingLabelText="Select Facility"
                filter={AutoComplete.fuzzyFilter}
                searchText={selectedValue}
                maxSearchResults={8}
                openOnFocus={true}
                onUpdateInput={this.handleInput}
                onNewRequest={ setFacility }
                dataSource={facilities}
                dataSourceConfig={{
                    text: 'facilityName',
                    value: '_id',
                }}
                fullWidth={true}/>
        )
    }
}

FacilityAutocomplete.propTypes = {
    facilities: PropTypes.array,
    setFacility: PropTypes.func,
    facilityId: PropTypes.string
};

export default container((props, onData) => {
    const subscription = Meteor.subscribe('facilities.list');
    if(subscription.ready()) {
        const facilities = Facilities.find().fetch();
        const facility = Facilities.findOne(props.facilityId)
        onData(null, { facilities, facility })
    }
}, FacilityAutocomplete);
