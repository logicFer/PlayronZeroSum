
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

export class StateGameOne {
    static intance = null;

    scoreBot = 0;
    scoreUser = 0;
    

    constructor () {
        if ( State.intance) {
            return StateGameOne.intance;
        }
        StateGameOne.intance = this;
    }

    get scoreBot () {
        return this.scoreBot;
    }

    get scoreUser () {
        return this.scoreUser;
    }

    setBot () {
        this.scoreBot += 1;
    }

    setUser () {
        this.scoreUser += 1;
    }

}