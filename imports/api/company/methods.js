import { Meteor } from 'meteor/meteor';
import Company from './company';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

Meteor.methods({
    saveCompany: function(id, company) {
        check(id, Match.Optional(String));
        check(company, Object);
        var isValid = Company.simpleSchema().namedContext().validate( company, { modifier: false } );
        if (isValid) {
            return Company.upsert({ _id: id }, { $set: company }, { validate: false });
        } else {
            throw new Meteor.Error("Company data is not valid");
        }
    }
});
