import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Company = new Mongo.Collection('Company');
export default Company;

Company.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Company.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Company.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Company.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Company.schema = new SimpleSchema({
    companyName: {
        type: String,
        label: 'Name of the company.',
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
    companyType: {
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

Company.attachSchema(Company.schema);
