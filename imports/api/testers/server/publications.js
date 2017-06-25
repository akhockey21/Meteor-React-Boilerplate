import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Testers from '../testers';

Meteor.publish('testers.list', () => Testers.find());

Meteor.publish('testers.view', (_id) => {
    check(_id, String);
    return Testers.find(_id);
});
