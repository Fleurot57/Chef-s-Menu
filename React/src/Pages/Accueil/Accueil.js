import "./Accueil.css";
import Menu from "../../Component/Menu/Menu";

function Accueil(){

    return(
        <div className="Accueil">
            <Menu />
            <div id="Accueil">
                <span id="accueilTitle">ACCUEIL</span>
                
            </div>
        </div>     
    )
}

export default Accueil;