import axios from "axios";


export const searchPostByTitle = async (data, accessToken) => {
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.post("http://localhost:8080/post/get-post-title", data, { headers });
        return res;
    } catch (error) {
        return error.response;

    }
}