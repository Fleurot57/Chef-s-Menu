import Menu from "../../Component/Menu/Menu";
import "./Inscription.css";
import Register from "../../Component/Register/Register";


function Inscription() {

  return (
    <div className="Inscription">
      <Menu />
      <div id="Inscription">
        <span id="inscrisTitle">INSCRIPTION</span>
        
        <Register />
      </div>
    </div>
  );
}

export default Inscription;
