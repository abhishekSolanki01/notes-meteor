import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if(Meteor.isClient) {
  describe('NoteListItem', function() {
    it('should render title and timestamp',function() {
      const title = 'my tytle';
      const updatedAt = 1531627802376;
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }}/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('15/7/18');
    });

    it('should set default title if no title is provided', function() {
      const title = '';
      const updatedAt = 1531627802376;
      const wrapper = mount(<NoteListItem note={{ title , updatedAt }}/>);

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });

  })
}
