import { cards } from "./renderOneUI.js";

const options = [
    {
        "id": 1,
        "value": "../../../assets/tijeras.png",
        "comparativo": "tijeras"
    },
    {
        "id": 2,
        "value": "../../../assets/papel.png",
        "comparativo": "papel"
    },
    {
        "id": 3,
        "value": "../../../assets/piedra.png",
        "comparativo": "piedra"
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
        element.innerHTML += cards( it.value, h ,it.comparativo );
    });
    
    return
}

