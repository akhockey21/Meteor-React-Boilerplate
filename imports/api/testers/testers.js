import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Testers = new Mongo.Collection('Testers');
export default Testers;

Testers.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Testers.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Testers.schema = new SimpleSchema({
    certNumber: {
        type: String,
        label: 'Certificate number.',
        optional: true
    },
    testerName: {
        type: String,
        label: 'Tester name.',
        optional: true
    },
    testerFirstName: {
        type: String,
        label: 'Tester first name.',
        optional: true
    },
    testerMiddleName: {
        type: String,
        label: 'Tester middle name',
        optional: true
    },
    testerLastName: {
        type: String,
        label: 'Last name of the tester',
        optional: true
    },
    title: {
        type: String,
        optional: true
    },
    mainPhone: {
        type: String,
        optional: true
    },
    other: {
        type: String,
        optional: true
    },
    fax: {
        type: String,
        optional: true
    },
    email: {
        type: String,
        optional: true
    },
    address1: {
        type: String,
        optional: true
    },
    address2: {
        type: String,
        optional: true
    },
    city: {
        type: String,
        optional: true
    },
    state: {
        type: String,
        max: 2,
        optional: true
    },
    zipCode: {
        type: String,
        optional: true,
        max: 5,
    },
    status: {
        type: Boolean,
        optional: true
    },
    certExp: {
        type: String,
        label: 'Certificate expiration.',
        optional: true
    },
    CCCDL: {
        type: String,
        label: 'CCCDL #.',
        optional: true
    },
    plumbingLicenseNumber: {
        type: String,
        label: 'Plumbing license.',
        optional: true
    },
    tester: {
        type: Boolean,
        optional: true
    },
    Inspector: {
        type: Boolean,
        optional: true
    },
    Installer: {
        type: Boolean,
        optional: true
    },
    Active: {
        type: Boolean,
        optional: true
    },
    comment: {
        type: String,
        optional: true
    },
});

Testers.attachSchema(Testers.schema);
