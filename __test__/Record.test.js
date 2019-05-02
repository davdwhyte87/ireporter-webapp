import React from 'react';
import { mount } from 'enzyme';
import Record from '../src/components/Record';

describe('Record test', () => {
  it('should render without crashing', () => {
    const record = {
      title: "Heeolan Manne!",
      status: "rejected",
      createdBy: 2,
      image: "djdjdkdk.png"
    }
    const user = {
      id: 3,
      isAdmin: false,

    }
    const wrapper = mount(
      <Record record={record} user={user}/>
    );
    expect(wrapper.find('.record-actions').exists()).toBe(true);
  });
});