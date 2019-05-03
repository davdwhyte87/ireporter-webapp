import React from 'react';
import { mount } from 'enzyme';
import RecordView from '../../src/components/RecordView';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


describe('Record view test', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    }
  });
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
      <Provider store={store}>
      <BrowserRouter>
       <RecordView record={record} user={user}/>
      </BrowserRouter>
    </Provider>
    );
    expect(wrapper.find('.record-actions').exists()).toBe(true);
  });
});