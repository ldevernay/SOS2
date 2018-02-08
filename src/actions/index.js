import axios from 'axios';

export const GET_PROJECT = 'GET_PROJECT';

export function getProject(project) {
    const URL = `https://api.github.com/repos/${project.repo}`;
    axios.create({
        baseURL: URL,
        headers: {'Accept': 'application/vnd.github.full+json'}
    })
    const request = axios.get(URL);

    return {
        type: GET_PROJECT,
        payload: request
    };
}
