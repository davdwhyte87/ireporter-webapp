
import mockAxios from 'axios';
import { signInUser, signUpUser } from '../../src/actions/userActions';


const loggedInUser = {
  name: 'leksyib',
  username: 'andela-test',
  email: 'email@andela.com',
  isadmin: true
};

describe('signinUser()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        user: loggedInUser,
        token: 'secret_string'
      }
    ]
  };

  it('should login user successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await signInUser()(dispatch)
    expect(dispatch.mock.calls[0][0].type).toEqual('LOADING')
    expect(dispatch.mock.calls[1][0].type).toEqual('SIGNIN_USER')
  });
});


describe('signupUser()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    data: [
      {
        user: loggedInUser,
        token: 'secret_string'
      }
    ]
  };

  it('should login user successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await signUpUser()(dispatch);
    expect(dispatch.mock.calls[0][0].type).toEqual('LOADING')
    expect(dispatch.mock.calls[1][0].type).toEqual('SIGNUP_USER')
  });
});