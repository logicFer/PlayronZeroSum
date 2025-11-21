
import { back } from './back.js';
import { renderGameOne } from './Game/gameOne/gameOne.js';
import { renderGameTwo } from './Game/gameTwo/gameTwo.js';
import { score, State } from './state.js'

const stateGlobal = new State();
const d = document;

function render ( value ) {

    if (value === 0){
        back(d.body)
        return
    }

    if ( value === 1 ) {
        renderGameOne(d)
        return
    }

    if ( value === 2 ) {
        renderGameTwo(d.querySelector('.app'));
        return
    }

}

d.addEventListener('click', (e) => {
    const t = e.target

    if ( t.closest('.back') ) {
        stateGlobal.set(0);
        return
    }
    
    if ( t.closest('.gameOne')){
        stateGlobal.set(1);
        return
    }

    if ( t.closest( '.gameTwo')){
        stateGlobal.set(2);
        return
    }

    if ( t.closest( '.papel')){
        d.body.style.backgroundColor= 'var(--cShadow)';
        score.setUser()
        console.log('hola pwrras')
        return
    }

})


stateGlobal.subscribe( render);

render( stateGlobal.value)
