import initialState from '../../src/store/initialState'
import recordsReducer from '../../src/reducers/recordsReducer'

const initialUserState = initialState
describe('User reducer tests', () => {
  it('should return default state', () => {
    expect(recordsReducer(undefined, {})).toEqual(initialUserState);
  });

  it('should handle records success type', () => {
    const expectedResponse = { data: { success: true, records: [{},{}], loading: false } };
    expect(recordsReducer(expectedResponse, 'RECORDS_SUCCESS'))
      .not.toEqual({ ...initialUserState });
    expect(recordsReducer(expectedResponse, 'RECORDS_SUCCESS'))
      .toEqual(expectedResponse);
  });

  it('should handle records error', () => {
    const expectedResponse = { data: { success: false, errors: [], loading: false } };
    expect(recordsReducer(expectedResponse, 'RECORDS_ERROR'))
      .not.toEqual({ ...initialUserState });
    expect(recordsReducer(expectedResponse, 'RECORDS_ERROR'))
      .toEqual(expectedResponse);
  });

  it('should handle loading type', () => {
    const expectedResponse = { data: { loading: true } };
    expect(recordsReducer(expectedResponse, 'LOADING'))
      .toEqual(expectedResponse);
  });
})