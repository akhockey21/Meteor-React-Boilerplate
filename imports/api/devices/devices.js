import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Devices = new Mongo.Collection('Devices');
export default Devices;

Devices.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Devices.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Devices.schema = new SimpleSchema({
    facilityId: {
        type: String,
        optional: true
    },
    deviceName: {
        type: String,
        label: 'Device Name',
        optional: true
    },
    serialNumber: {
        type: String,
        label: 'Serial Number',
        optional: true
    },
    make: {
        type: String,
        label: 'Make',
        optional: true
    },
    model: {
        type: String,
        optional: true
    },
    size: {
        type: String,
        optional: true
    },
    orientationConfig: {
        type: String,
        // allowedValues: ['Horizontal', 'N & Z Config', 'V-up Inlet', 'V-down Inlet', 'Vertical Down', 'Vertical up'],
        optional: true
    },
    type: {
        type: String,
        optional: true
    },
    deviceLocation: {
        type: String,
        optional: true
    },
    waterServiceType: {
        type: String,
        // allowedValues: ['Other', 'Irrigation', 'Fire', 'Domestic', 'Combo'],
        optional: true
    },
    hazardType: {
        type: String,
        optional: true
    },
    waterAgency: {
        type: String,
        optional: true
    },
    protectionType: {
        type: String,
        // allowedValues: ['Containment', 'Isolation'],
        optional: true
    },
    active: {
        type: Boolean,
        optional: true
    },
    hazardLevel: {
        type: String,
        optional: true
    },
    installDate: {
        type: String,
        optional: true
    },
    testCycle: {
        type: String,
        optional: true
    },
    testMonth: {
        type: String,
        optional: true
    },
    nextTestDue: {
        type: String,
        optional: true
    },
    lastTested: {
        type: String,
        optional: true
    },
});

Devices.attachSchema(Devices.schema);
