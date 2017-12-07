import axios from 'axios';

export const GET_PROJECT = 'GET_PROJECT';
export const SELECT_PROJECT = 'SELECT_PROJECT';

export function fetchProject(repo) {
    const URL = `https://api.github.com/repos/${repo}`;
    const request = axios.get(URL);

    return {
        type: GET_PROJECT,
        payload: request
    };
}

export function selectProject(project) {
    return {
        type: SELECT_PROJECT,
        payload: project
    }
}