import { cards } from "./renderOneUI.js";

const options = [
    {
        "id": 1,
        "value": "✌️"
    },
    {
        "id": 2,
        "value": "✋"
    },
    {
        "id": 3,
        "value": "👊"
    }
]



export function logicGameOne ( element , h = false) {
    renderCards( element , h );
    return
}

function assignValues () {

    const cv = [];
    
    for (let i = 0; i <= 2; i++) {
        const v = Math.floor(Math.random() * 3);
        cv.push(options[v]);
    }
    
    console.log(cv);
    return cv;
    
}

function renderCards ( element , h = false ) {
    const cValue = assignValues();

    cValue.forEach( (it) => {
        element.innerHTML += cards( it.value, h );
    });
    
    return
}

