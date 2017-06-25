import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Facilities from '../facilities';

Meteor.publish('facilities.list', () => Facilities.find());

Meteor.publish('facilities.view', (_id) => {
    check(_id, String);
    return Facilities.find(_id);
});
