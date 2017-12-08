export default function (state = [], action) {
    switch (action.type) {
        case 'test':
            break;

        default:
            return [
                { repo: 'JGuiraud/SeriousGame-FRMJC' },
                { repo: 'JGuiraud/projet_siteMaraichage' },
                { repo: 'ldevernay/Office-Tourisme' }
            ];
            break;
    }
}