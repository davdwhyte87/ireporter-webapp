import React from 'react';
import { mount } from 'enzyme';
import SingleRecord from '../../src/components/SingleRecord';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

describe('Single record view test', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      success: false,
      records: [],
      record: null
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
       <SingleRecord />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('.records').exists()).toBe(true);
  });

  it('should render without crashing', () => {
    const storeLoading = mockStore({
      recordsReducer: {
        success: false,
        loading: true,
        records: [],
        record: null
      }
    });
    const wrapper = mount(
      <Provider store={storeLoading}>
      <BrowserRouter>
       <SingleRecord />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('.records').exists()).toBe(true);
  });

  it('should match snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
        <SingleRecord />
      </BrowserRouter>
    </Provider>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  })
});