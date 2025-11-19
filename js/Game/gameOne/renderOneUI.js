
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
                <h3> 0 </h3>
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
                <h3> 0 </h3>
            </div>
            <div class="userOp">
            </div>
        </div>
    </div>
    `;
}

export function cards ( value , h ) {
    return `
    <div class="cardMarco">
        <div class="card ${ h ? "cardH" : "" }" >
            <p> ${ h ? "" : value } </p>
        </div>
    </div>
    `;
};