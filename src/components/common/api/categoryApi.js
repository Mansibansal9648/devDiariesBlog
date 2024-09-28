import axios from 'axios';

//---------------GET CATEGORIES---------------------

export const getAllCategories = async () => {
  try {
    const response = await axios.get('http://localhost:8080/category/get-all-categories');
    return response;
  } catch (error) {
    return error.response;
  }
};
