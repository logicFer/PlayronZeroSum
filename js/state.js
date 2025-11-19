
export class State {
    static intance = null;

    value = 0;
    events = [];

    constructor () {
        if ( State.intance) {
            return State.intance;
        }
        State.intance = this;
    }

    get value () {
        return this.value;
    }

    set ( value ) {
        this.value = value;
        this.notify();
    }

    subscribe ( callback ) {
        this.events.push( callback );
    }

    notify () {
        this.events.forEach( callback => callback( this.value ) );
    }
}