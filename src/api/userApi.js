//methods
import { getCallParams, getNoAuthCallParams, makeCall } from "../utils/apiUtils";

//constants
import strings from "../utils/stringConstant";
import urls from "../utils/urlConstant";

//Login Function
export async function logIn(body, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.POST, body);
    const response = await makeCall(urls.login, callParams, isToast);
    return response;
   
  } catch (error) {
    throw error;
  }
}

//SignUp Function
export async function signUp(body, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.POST, body);
    const response = await makeCall(urls.signup, callParams, isToast);

    return response;

  } catch (error) {
    throw error;
  }
}

//Forgot password Function 
export async function forgotPassword(body, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.POST, body);
    const response = await makeCall(urls.forgotPassword, callParams, isToast);
    return response;
  } catch (error) {
    throw error;
  }
}
