import Menu from "../../Component/Menu/Menu";
import "./page_inscription.css";
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
