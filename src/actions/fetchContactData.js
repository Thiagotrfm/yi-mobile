export const FETCH_CONTACT_DATA = 'FETCH_CONTACT_DATA';

export const FetchContactData = (contact) => {
    return {
        type: FETCH_CONTACT_DATA,
        payload: contact,
      };    
};
