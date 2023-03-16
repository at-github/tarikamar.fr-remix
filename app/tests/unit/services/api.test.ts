import myFetch from '../../../utils/myFetch'
import {postContact, get} from '../../../utils/api'

jest.mock('../../../utils/myFetch');  // create an auto-mock of the module

beforeEach(() => {
  jest.clearAllMocks();
});

test('postContact call', () => {

  const body = new FormData()
  body.append('key', 'value')
  postContact(body)

  expect(myFetch).toHaveBeenCalledTimes(1)
  expect(myFetch).toHaveBeenCalledWith(
    '/contact-form-7/v1/contact-forms/49/feedback',
    {
      body
      , method: 'POST'
    }
  )
  postContact(body)
})

test('get call', () => {
  const body = new FormData()
  body.append('key', 'value')
  get('route')

  expect(myFetch).toHaveBeenCalledTimes(1)
  expect(myFetch).toHaveBeenCalledWith('route')
})
