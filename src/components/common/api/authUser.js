import axios from 'axios';

export const createUser = async (form_data) => {
  try {
    const response = await axios.post('http://localhost:8080/api/signup', {
      username: form_data.username,
      name: form_data.name,
      email: form_data.email,
      password: form_data.password,
    });
    // console.log("response", response.data)
    return response;
  } catch (error) {
    // console.log("error:", error);
    return error.response;
  }
};
export const loginUser = async (user_data) => {
  try {
    const response = await axios.post('http://localhost:8080/api/login', {
      username_email: user_data.username_email,

      password: user_data.password,
    });
    // console.log("response", response.data);
    return response;
  } catch (error) {
    // console.log("error:", error);
    return error.response;
  }
};
