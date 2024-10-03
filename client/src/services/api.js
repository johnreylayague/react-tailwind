import axios from 'axios';
import { API_URL } from '../utils/constants';
import { getToken } from './storage/indexedDB';
import { clearTokenOnLogout } from './storage/indexedDB';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = API_URL;

const showWarning = (message) => {
    toast.warn(message);
};

// Helper function to add the authorization header
async function addAuthorizationHeader(options) {
    const token = await getToken();

    if (token) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
    }

    return options;
}

export async function postData(endpoint, data = {}) {
    const url = `${BASE_URL}/${endpoint}`;
    let token = await getToken();

    if (data?.endpoint_type === 'public') {
        token = null
    }

    // Input Validation
    if (typeof endpoint !== 'string') {
      throw new Error('Invalid endpoint. It should be a string.');
    }
  
    if (typeof data !== 'object') {
      throw new Error('Invalid data. It should be an object.');
    }
      
    try {
        const options = {
            method: 'POST',
            url,
        };

        if (data instanceof FormData) {
            // For multipart/form-data requests
            data.append('useraccesstoken', token);
            options.data = data;
            // Do not set Content-Type for FormData, let the browser set it
        } else {
            // For regular POST requests
            if (token) {
                data['useraccesstoken'] = token;
            }
            options.data = data;
            options.headers = {
                'Content-Type': 'application/json'
            };
        }

        const response = await axios(options);

        // Check for error status codes and handle them accordingly
        if (response.status >= 400) {
            throw new Error('Request failed with status ' + response.status);
        }
    
        return response.data;

    } catch (error) {

        if (error.response && error.response.status === 401) {
            console.log('Unauthorized: 401');
            // alert('Session is expired. Please login again');
            clearTokenOnLogout();        
            // window.location.replace("/login");
        } else {
            showWarning(error.response.data.message);           
            throw new Error('An error occurred while making the request.');
        }
    }
}

export async function fetchData(endpoint, options = {}) {
    const token = await getToken();
    let url = `${BASE_URL}/${endpoint}`;

    if (token) {
        url += `?useraccesstoken=${token}`;
    }

    // Append other query parameters from options
    for (const [key, value] of Object.entries(options)) {
        url += `&${key}=${value}`;
    }

    try {
        const requestOptions = await addAuthorizationHeader({
            url,
            ...options,
        });

        const response = await axios(requestOptions);

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
      alert(error.response.data.message);
      throw new Error('An error occurred while making the request.');
    }
}

export async function verifyLogin(endpoint, data = {}) {
    const url = `${BASE_URL}/${endpoint}`;
    const token = await getToken();

    // Input Validation
    if (typeof endpoint !== 'string') {
      throw new Error('Invalid endpoint. It should be a string.');
    }
  
    if (typeof data !== 'object') {
      throw new Error('Invalid data. It should be an object.');
    }
  
    try {
        if (token) {
            data['useraccesstoken'] = token;
        }
        
        const options = await addAuthorizationHeader({
            method: 'POST',
            url,
            data,
        });

        const response = await axios(options);

        // Check for error status codes and handle them accordingly
        if (response.status >= 400) {
            throw new Error('Request failed with status ' + response.status);
        }
    
        return response.data;

    } catch (error) {
      console.error('Request error:', error);
      throw new Error('An error occurred while making the request.');
    }
}


