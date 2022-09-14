import "./Card.css"
const Card = () =>{
    const hallo = () =>{
        console.log("ik ben kaartje een");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header>
            <section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ipsum eget efficitur tristique. Nulla facilisi. Maecenas luctus condimentum elementum.
            </section>
        </article>
    ); 
}

export default Card;