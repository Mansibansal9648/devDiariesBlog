import axios from "axios";

export const usedLabel = async (accessToken) => {
    try {
        const headers = {
            "Authorization": `Bearer ${accessToken}`
        }
        let res = await axios.get("http://localhost:8080/post/get-all-labels-user", { headers });
        return res;
    }
    catch (error) {
        return error.response
    }
}

export const getPostByLabel = async (data, accessToken) => {
    try {
        const headers = {
            "Authorization": `Bearer ${accessToken}`
        }
        let res = await axios.post("http://localhost:8080/post/get-post-label", data, { headers })
        return res;
    } catch (error) {
        return error.response
    }
}