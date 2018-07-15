import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { validateNewUser } from './users';


if(Meteor.isServer){
  describe('users', function() {

    it('Should allow valid email address', function () {
      const testUser = {
        emails: [
          {
            address: 'test@example.com'
          }
        ]
      };
      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });

    it('Should reject invalid email', function () {
      const testUser = {
        emails: [
          {
            address: 'tcuy.scac'
          }
        ]
      }
      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });


  });

}
