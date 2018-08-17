import { FETCH_CONTACT_DATA } from '../actions/fetchContactData';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CONTACT_DATA:
      return action.payload;
    default:
      return state;
  }
}
