import { Meteor } from 'meteor/meteor';
import Facilities from './facilities';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

Meteor.methods({
    saveFacility: function(id, facility) {
        check(id, Match.Optional(String));
        check(facility, Object);
        var isValid = Facilities.simpleSchema().namedContext().validate( facility, { modifier: false } );
        if (isValid) {
            return Facilities.upsert({ _id: id }, { $set: facility }, { validate: false });
        } else {
            throw new Meteor.Error("Facility data is not valid");
        }
    },
    removeFacility: function(id) {
        check(id, String);
        return Facilities.remove(id);
    }
});
