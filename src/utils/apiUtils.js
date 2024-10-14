//Dependencies
import { toast } from 'react-toastify';
import store from '../redux/store';

//constants
import strings from './stringConstant';

export function getNoAuthCallParams(methodType, body) {
  const params = {
    method: methodType,
    headers: strings.applicationJSON,
  };
  switch (methodType) {
    case strings.GET:
      return params;
    case strings.POST:
      return { ...params, body: JSON.stringify(body) };
    default:
      return false;
  }
}

export function getHeaderObject(accessToken, contentType) {
  try {
    if (accessToken) {
      return {
        ...contentType,
        authorization: `Bearer ${accessToken}`,
      };
    }
    return null;
  } catch (error) {
    throw error;
  }
}

// getNoAuthCallParams private api call
export const getCallParams =(methodType, body) => {
  // const store = JSON.parse(localStorage.getItem('store'));
  const accessToken = store.getState().user.accessToken;
  const params = {
    method: methodType,
    headers:  getHeaderObject(accessToken, strings.applicationJSON),
  };

  switch (methodType) {
    case strings.GET:
      return params;
    case strings.POST:
      return { ...params, body: JSON.stringify(body) };
    case strings.PUT:
      return { ...params, body: JSON.stringify(body) };

    default:
      return false;
  }
};

export async function makeCall(callName, callParams, isToast) {
  try {
    let call = await fetch(callName, callParams);
    let timeout = getTimeoutPromise();

    const response = await Promise.race([timeout, call]).catch((err) => {
      throw err;
    });

    const json = await response.json();
    if (json.responseCode === 401) {
      localStorage.clear();
      window.location.href = '/home';
    }
    if (json.success === false) {
      toast.error(json.errMessage);
      return null;
    } else if (isToast && (json.success === true || json.responseCode === 200)) {
      toast.info(json.resMessage);
    }

    return json;
  } catch (error) {
    
    toast.error(error.message);
    return null;
  }
}

export function getTimeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: true, message: 'Timeout Error', success: false }), 5000);
  });
}
