import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Customers from '../customers';

Meteor.publish('customers.list', () => Customers.find());

Meteor.publish('customers.view', (_id) => {
    check(_id, String);
    return Customers.find(_id);
});
