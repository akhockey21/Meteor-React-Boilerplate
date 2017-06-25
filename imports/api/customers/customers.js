import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Customers = new Mongo.Collection('Customers');
export default Customers;

Customers.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Customers.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Customers.schema = new SimpleSchema({
    customerName: {
        type: String,
        label: 'Name of the customer.',
        optional: true
    },
    customerFirstName: {
        type: String,
        label: 'Customer first name.',
        optional: true
    },
    customerLastName: {
        type: String,
        label: 'Last name of the customer',
        optional: true
    },
    customerMiddleName: {
        type: String,
        label: 'Customer middle name',
        optional: true
    },
    title: {
        type: String,
        optional: true
    },
    address1: {
        type: String,
        optional: true
    },
    mainPhone: {
        type: String,
        optional: true
    },
    fax: {
        type: String,
        optional: true
    },
    other: {
        type: String,
        optional: true
    },
    address2: {
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
    status: {
        type: Boolean,
        optional: true
    },
    customerSalutation: {
        type: String,
        optional: true
    },
    email: {
        type: String,
        optional: true
    },
    comment: {
        type: String,
        optional: true
    },
    showInstallForFacilityOnly: {
        type: Boolean,
        defaultValue: false,
        optional: true
    },
});

Customers.attachSchema(Customers.schema);
