import axios from 'axios';

export const createNewPost = async (post, accessToken) => {
  // console.log("asdf", post)
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.post('http://localhost:8080/post/create-post', post, { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getPost = async (accessToken, page, limit) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.get(`http://localhost:8080/post/get-post?page=${page}&limit=${limit}`, { headers });
    // console.log(res)
    return res;
  } catch (error) {
    return error.response;
  }
};

export const deletePost = async (postId, accessToken) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.delete(`http://localhost:8080/post/delete-post?postId=${postId}`, { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const updatePost = async (data, accessToken) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.put('http://localhost:8080/post/update-post', data, { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const labelUsedByUser = async (accessToken) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.get('http://localhost:8080/post/get-all-labels-user', { headers });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getPostByLabel = async (label, accessToken, page, limit) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.post(
      `http://localhost:8080/post/get-post-label?page=${page}&limit=${limit}`,
      { label: label },
      { headers },
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const searchPostByTitle = async (postTitle, accessToken, page, limit) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let res = await axios.post(
      `http://localhost:8080/post/get-post-title?page=${page}&limit=${limit}`,
      { title: postTitle },
      { headers },
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getPostByCategory = async (category, page, limit) => {
  try {
    let res = await axios.post(`http://localhost:8080/post/get-post-category?page=${page}&limit=${limit}`, {
      category: category,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getAllPost = async (page, limit) => {
  try {
    let res = await axios.get(`http://localhost:8080/post/get-all-post?page=${page}&limit=${limit}`);
    return res;
  } catch (error) {
    return error.response;
  }
};
