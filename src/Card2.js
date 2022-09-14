import "./Card.css"
const Card2 = () =>{
    const hallo = () =>{
        console.log("ik ben kaartje twee");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Tweede kaart</h2>
            </header>
            <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ipsum eget efficitur tristique. Nulla facilisi. Maecenas luctus condimentum elementum.
            </section>
        </article>
    ); 
}

export default Card2;