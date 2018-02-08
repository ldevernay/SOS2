export default function (state = [], action) {
    switch (action.type) {
        case 'test':
            break;

        default:
            return [
                {   
                    name: "Serious game SVE",
                    repo: 'JGuiraud/SeriousGame-FRMJC', 
                    demo:'http://instinctive-road.surge.sh/' 
                },
                { 
                    name: "Appli maraîcher",
                    repo: 'JGuiraud/projet_siteMaraichage' },
                { 
                    name: "Carte interactive + photothèque",
                    repo: 'ldevernay/Office-Tourisme' 
                }
            ];
            break;
    }
}