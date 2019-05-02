import React from 'react';
import { mount } from 'enzyme';
import Alert from '../src/components/Alert';

describe('Home test', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Alert message={['An error occured']} />
    );
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Alert message={['Verry Nice']} success={true} />
    );
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Alert message={['Verry Nice']} success={false} />
    );
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Alert message={"Yeaysys"} success={false} />
    );
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
});