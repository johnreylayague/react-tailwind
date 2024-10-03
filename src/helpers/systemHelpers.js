import { postData } from '../services/api';
import { DEFAULT_SYSTEM_CODE } from '../utils/constants';

export const systemId = () => {
  return postData('system_id', { SystemCode: DEFAULT_SYSTEM_CODE })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error; // You might want to throw the error to handle it elsewhere.
    });
};


