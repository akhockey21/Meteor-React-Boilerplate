import { Meteor } from 'meteor/meteor';
import Customers from './customers';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

Meteor.methods({
    saveCustomer: function(id, customer) {
        check(id, Match.Optional(String));
        check(customer, Object);
        var isValid = Customers.simpleSchema().namedContext().validate( customer, { modifier: false } );
        if (isValid) {
            return Customers.upsert({ _id: id }, { $set: customer }, { validate: false });
        } else {
            throw new Meteor.Error("Customer data is not valid");
        }
    },
    removeCustomer: function(id) {
        check(id, String);
        return Customers.remove(id);
    }
})

export const removeCustomer = new ValidatedMethod({
  name: 'customers.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Customers.remove(_id);
  },
});