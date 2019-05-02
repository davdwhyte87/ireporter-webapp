import React from 'react';
import { mount, shallow } from 'enzyme';
import CreateRecord from '../src/components/CreateRecord';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';


describe('Create record test', () => {
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
        <CreateRecord />
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('.create-record').exists()).toBe(true);
    expect(wrapper.find('.container-center').exists()).toBe(true);
  });
  it('should return component', () => {
    const wrapper = mount(
      <Provider store={store}>
      <BrowserRouter>
        <CreateRecord />
      </BrowserRouter>
    </Provider>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  })
});