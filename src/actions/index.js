import axios from "axios/dist/axios";

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=it15l';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}