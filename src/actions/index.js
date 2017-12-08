import axios from 'axios';

export const GET_PROJECT = 'GET_PROJECT';
export const SELECT_PROJECT = 'SELECT_PROJECT';

export function getProject(project) {
    const URL = `https://api.github.com/repos/${project.repo}`;
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