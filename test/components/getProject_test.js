import { expect } from '../test_helper';
import { getProject } from '../../src/actions/index';

describe('getProject function', () => {
    const project = {
        repo: 'ldevernay/Office-Tourisme'
    };

    it('fetches something', () => {
        getProject(project).payload
            .then((response) => {
                console.log(response);
                expect(response).to.exist;
            })
            .catch((error) => {
                console.log(error);
            });
    });

    it('fetches the appropriate repo', () => {
        getProject(project).payload
            .then((response) => {
                console.log(response);
                expect(response.data.name).to.equal('Office-tourisme');
            })
            .catch((error) => {
                console.log(error);
            });
    })


});