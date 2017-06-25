import { Meteor } from 'meteor/meteor';
import Devices from './devices';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

Meteor.methods({
    saveDevice: function(id, device) {
        check(id, Match.Optional(String));
        check(device, Object);
        var isValid = Devices.simpleSchema().namedContext().validate( device, { modifier: false } );
        if (isValid) {
            return Devices.upsert({ _id: id }, { $set: device }, { validate: false });
        } else {
            throw new Meteor.Error("Device data is not valid");
        }
    },
    removeDevice: function(id) {
        check(id, String);
        return Devices.remove(id);
    }
})

export const removeDevice = new ValidatedMethod({
  name: 'devices.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Devices.remove(_id);
  },
});
