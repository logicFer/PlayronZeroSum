import { logicGameOne } from "./logicOne.js";
import { renderGameOneUI } from "./renderOneUI.js";

export function renderGameOne (element) {
    document.body.style.backgroundColor = "var(--cBackgroundGameOne)";
    renderGameOneUI( element.querySelector('.app') );
    logicGameOne( element.querySelector('.botOp') , true );
    logicGameOne( element.querySelector('.userOp') );
    return
}