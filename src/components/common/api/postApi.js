import axios from "axios";

export const createNewPost = async (post,accessToken)=>{
    // console.log("asdf", post)
    try {
         const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.post("http://localhost:8080/post/create-post", post, {headers})
        return res;
    } catch (error) {
        return error.response;
    }
}

export const getPost = async (accessToken)=>{
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.get("http://localhost:8080/post/get-post", {headers});
        // console.log(res)
        return res;
    } catch (error) {
        return error.response;
    }
}

export const deletePost = async (postId, accessToken)=>{
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.delete(`http://localhost:8080/post/delete-post?postId=${postId}`, {headers})
        return res;
    } catch (error) {
        return error.response;
    }
}

export const updatePost = async (data, accessToken)=>{
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.put("http://localhost:8080/post/update-post",data , {headers});
        return res;
    } catch (error) {
        return error.response;
    }
}