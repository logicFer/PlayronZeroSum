
export function back (element) {
    const text = `
    <div class="app">
    
    <header class="t">
        <h1> Proyecto 1 </h1>
    </header>
    
    <main class="cont">
        <article class="gameOne">
            <h2> El reto de las cartas </h2>
            <p> En este modo, jugarás tres rondas de piedra, papel o tijeras utilizando cartas con opciones aleatorias. Tu objetivo es ganar al menos dos de tres enfrentamientos para llevarte la partida. </p>
        </article>
        <article class="gameTwo">
            <h2> Juego 2 </h2>
            <p>Jugyemos a alogo arriesgado </p>
        </article>
    </main>
    
    </div>
    `;
    document.body.style.backgroundColor = "var(--cBackground)";
    if ( text === element.textContent ) return;
    element.innerHTML = text;
    return
}