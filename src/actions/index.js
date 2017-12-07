import axios from 'axios';

export const GET_PROJECT = 'GET_Project';

export function fetchProject(repo) {
    const URL = `https://api.github.com/repos/${repo}`;
    const request = axios.get(URL);

    return {
        type: GET_PROJECT,
        payload: request
    };
}