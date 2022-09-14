import "./Card.css"
const Card3 = () =>{
    const hallo = () =>{
        console.log("ik ben kaartje drie");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Derde kaart</h2>
            </header>
            <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ipsum eget efficitur tristique. Nulla facilisi. Maecenas luctus condimentum elementum.
            </section>
        </article>
    ); 
}

export default Card3;