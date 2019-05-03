import React from 'react';
import { mount } from 'enzyme';
import Signin from '../../src/components/Signin';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';


describe('Signin test', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    },
    usersReducer: {
      errors: [],
      loading: false,
      success: false
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('.input').exists()).toBe(true);
    expect(wrapper.find('.btn-primary').exists()).toBe(true);
  });
  it('should match snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    </Provider>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  })
});