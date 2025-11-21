import { score } from "../../state.js";


export function panelInitial ( element ) {
    element.innerHTML = `
    <div class="panelInitial">
        <div class="panelText">
            <h2 class="panelTitle" ></h2>
            <p class="panelP ></p>
        </div>
        <div class="panelButton">
            <button class="startGameOne"></button>
            <button class="helpGameOne"></button>
        </div>
    </div>
    `;
}


export function renderGameOneUI ( element ) {
    element.innerHTML = `
    <button class="back">Volver</button>
    <div class="tabContainer">
        <div class="bot">
            <div class="score">
                <h2> Bot </h2>
                <h3> ${ score.scoreBot } </h3>
            </div>
            <div class="botOp">         
            </div>
        </div>
        <div class="tab">
            <div class="selection">

            </div>
            </div>
        <div class="tab">
        <div class="selection">
        
        </div>
        </div>
        <div class="user">
            <div class="score">
                <h2> Usuaeio </h2>
                <h3> ${ score.scoreUser } </h3>
            </div>
            <div class="userOp">
            </div>
        </div>
    </div>
    `;
}

export function cards ( value , h , d ) {
    return `
    <div class="cardMarco ${ d } ${ h ? "inactive": "" }">
        <div class="card ${ h ? "cardH" : "" }" >
            <img src=" ${ h ? "" : value} " >
        </div>
    </div>
    `;
};