import initialState from '../../src/store/initialState'
import usersReducer from '../../src/reducers/usersReducer'

const initialUserState = initialState
describe('User reducer tests', () => {
  it('should return default state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialUserState);
  });

  it('should handle signup success type', () => {
    const expectedResponse = { data: { success: true, token: 'djhjds', loading: false } };
    expect(usersReducer(expectedResponse, 'SIGNUP_USER'))
      .not.toEqual({ ...initialUserState });
    expect(usersReducer(expectedResponse, 'SIGNUP_USER'))
      .toEqual(expectedResponse);
  });
  it('should handle signin success type', () => {
    const expectedResponse = { data: { success: true, token: 'djhjds', loading: false } };
    expect(usersReducer(expectedResponse, 'SIGNIN_USER'))
      .not.toEqual({ ...initialUserState });
    expect(usersReducer(expectedResponse, 'SIGNIN_USER'))
      .toEqual(expectedResponse);
  });
  it('should handle signup error', () => {
    const expectedResponse = { data: { errors: [], loading: false } };
    expect(usersReducer(expectedResponse, 'SIGNUP_ERROR'))
      .not.toEqual({ ...initialUserState });
    expect(usersReducer(expectedResponse, 'SIGNUP_ERROR'))
      .toEqual(expectedResponse);
  });
  it('should handle signin error', () => {
    const expectedResponse = { data: { errors: [], loading: false } };
    expect(usersReducer(expectedResponse, 'SIGNIN_ERROR'))
      .not.toEqual({ ...initialUserState });
    expect(usersReducer(expectedResponse, 'SIGNIN_ERROR'))
      .toEqual(expectedResponse);
  });
  it('should handle loading type', () => {
    const expectedResponse = { data: { loading: true } };
    expect(usersReducer(expectedResponse, 'LOADING'))
      .toEqual(expectedResponse);
  });
})