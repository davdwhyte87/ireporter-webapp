import React from 'react';
import { mount } from 'enzyme';
import Records from '../src/components/Records';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('Records test', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
        <Records />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('.records').exists()).toBe(true);
  });
});