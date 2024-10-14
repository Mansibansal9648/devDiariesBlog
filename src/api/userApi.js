import urls from "../utils/urlConstant";
import { getCallParams, getNoAuthCallParams, makeCall } from "../utils/apiUtils";
import strings from "../utils/stringConstant";

//Login Function
export async function login(body, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.POST, body);
    const response = await makeCall(urls.login, callParams, isToast);
    return response;
  } catch (error) {
    throw error;
  }
}
