import { Meteor } from 'meteor/meteor';
import Testers from './testers';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

Meteor.methods({
    saveTester: function(id, tester) {
        check(id, Match.Optional(String));
        check(tester, Object);
        var isValid = Testers.simpleSchema().namedContext().validate( tester, { modifier: false } );
        if (isValid) {
            return Testers.upsert({ _id: id }, { $set: tester }, { validate: false });
        } else {
            throw new Meteor.Error("Tester data is not valid");
        }
    },
    removeTester: function(id) {
        check(id, String);
        return Testers.remove(id);
    }
})

export const removeTester = new ValidatedMethod({
  name: 'testers.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Testers.remove(_id);
  },
});
