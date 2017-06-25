import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Company from '../company';

Meteor.publish('company.viewAll', () => Facilities.find());

Meteor.publish('company.view', (_id) => {
    check(_id, String);
    return Facilities.find(_id);
});
