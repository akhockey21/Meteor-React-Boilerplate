import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Devices from '../devices';

Meteor.publish('devices.list', () => Devices.find());

Meteor.publish('devices.view', (_id) => {
    check(_id, String);
    return Devices.find(_id);
});
