import axios from 'axios';

export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECT_LANGUAGES = 'GET_PROJECT_LANGUAGES';
export const GET_PROJECT_TOPICS = 'GET_PROJECT_TOPICS';

export function getProject(project) {
    const URL = `https://api.github.com/repos/${project.repo}`;
    let instance = axios.create({
        baseURL: URL,
        headers: { 'Accept': 'application/vnd.github.full+json' }
    })
    const request = instance.get(URL);

    return {
        type: GET_PROJECT,
        payload: request
    };
}

export function getProjectLanguages(project) {
    const URL = `https://api.github.com/repos/${project}/languages`;
    let instance = axios.create({
        baseURL: URL,
        headers: { 'Accept': 'application/vnd.github.full+json' }
    })
    const request = instance.get(URL);
    return {
        type: GET_PROJECT_LANGUAGES,
        payload: request
    };
}

export function getProjectTopics(project) {
    const URL = `https://api.github.com/repos/${project}/topics`;
    let instance = axios.create({
        baseURL: URL,
        headers: { 'Accept': 'application/vnd.github.mercy-preview+json' }
    })
    const request = instance.get(URL);
    console.log(request);
    return {
        type: GET_PROJECT_TOPICS,
        payload: request
    };
}
