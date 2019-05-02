import React from 'react';
import { mount } from 'enzyme';
import Signup from '../src/components/Signup';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

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
        <Signup />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('form').exists()).toBe(true);
  });
});