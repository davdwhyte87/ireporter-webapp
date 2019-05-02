import React from 'react';
import { mount } from 'enzyme';
import Home from '../src/components/Home';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('Home test', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    },
    authReducer: {
      isLoggedIn: true,
      user: {
        isadmin: true
      }
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('.hero').exists()).toBe(true);
  });
});