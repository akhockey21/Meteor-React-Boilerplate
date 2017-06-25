import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Facilities = new Mongo.Collection('Facilities');
export default Facilities;

Facilities.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Facilities.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Facilities.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Facilities.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Facilities.schema = new SimpleSchema({
    facilityName: {
        type: String,
        label: 'Name of the facility.',
        optional: true
    },
    address1: {
        type: String,
        label: 'Mailing Address 1',
        optional: true
    },
    address2: {
        type: String,
        label: 'Mailing Address 2',
        optional: true
    },
    customerID: {
        type: String,
        optional: true
    },
    city: {
        type: String,
        max: 5,
        optional: true
    },
    state: {
        type: String,
        max: 2,
        optional: true
    },
    zipCode: {
        type: String,
        optional: true
    },
    active: {
        type: Boolean,
        optional: true
    },
    accountNumber: {
        type: String,
        optional: true
    },
    storeNumber: {
        type: String,
        optional: true
    },
    waterAgency: {
        type: String,
        optional: true
    },
    facilityType: {
        type: String,
        optional: true
    },
    hazardLevel: {
        type: String,
        optional: true
    },
    testMonth: {
        type: Date,
        optional: true
    },
    surveyCycle: {
        type: String,
        optional: true
    },
    nextSurvey: {
        type: Date,
        optional: true
    },
    propertyIDNumber: {
        type: String,
        optional: true
    },
    comment: {
        type: String,
        optional: true
    },
});

Facilities.attachSchema(Facilities.schema);
