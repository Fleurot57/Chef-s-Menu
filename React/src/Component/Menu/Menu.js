import "./Menu.css";
// import "./Component/MediaQueries/Media.css";
import { Link } from "react-router-dom";
import { useState } from "react";


function Menu() {
    const [open, setOpen] = useState(false)

    function openClick() {
        setOpen(!open);
    }

    const [emailConnect, setEmailConnect] = useState("");
    const [passwordConnect, setPasswordConnect] = useState("");

    function onChange(e){
        const {id, value} = e.target;
        if (id === "emailConnect") {
            setEmailConnect(value)
        }
        if (id === "passwordConnect") {
            setPasswordConnect(value)
        }
    }

    function submit(e){
        e.preventDefault();
        login();
    }

    function UnSubmit() {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");

        alert("Vous êtes deconnecté");
    }

    async function login(){
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
    
            body: JSON.stringify({
                email: emailConnect,
                password: passwordConnect,
            }),
        }
    
        const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/login`, options);
    
        const data = await response.json();

        console.log("dataaaa : ", data)
        
        const token = data.token;
        const success = data.success;

        if ( success === false ) {
            alert("Veuillez remplir les champs de connection ci-dessous");
        }
        if ( success === true ) {
            alert("vous êtes connecté");
        }

        console.log("token : ", token);

        localStorage.setItem("token", JSON.stringify(token));

        getID();
    }

    // ------------------------------------------------------- //

    async function getID(){

        let token = JSON.parse(localStorage.getItem("token"));

        const optionsID = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        }

        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-books/user", optionsID);
        
        const dataID = await response.json();
        const ID = dataID._id;

        localStorage.setItem("userID", JSON.stringify(ID));
        
        console.log("key user :", ID);

    }

    return (
        <div className="menu-container">
            <div className="menu-trigger" onClick={openClick}>
                <span id="menu-text">M E N U</span>
            </div>
            {
                open && <nav id="navigation">
                <ul>
                    <li>
                        <Link to="/" id="style">ACCUEIL</Link>
                    </li>

                    <li>
                        <Link to="/Inscription" id="style">INSCRIPTION</Link>
                    </li>
                </ul>

                <form id="connect" onSubmit={submit}>
                    <input
                        type="email" 
                        id="emailConnect" 
                        placeholder="Email" 
                        value={emailConnect}
                        onChange={onChange}
                    />

                    <input 
                        type="password"
                        id="passwordConnect"
                        placeholder="Password"
                        value={passwordConnect}
                        onChange={onChange}
                    />

                    <input 
                        type="submit" 
                        value="Connexion"
                        id="submitCo"
                    />
                </form>
                
                <form id="connect" onSubmit={UnSubmit}>
                    <input 
                        type="submit" 
                        value="Deonnexion"
                        id="submitCo"
                    />
                </form>
            </nav>
            }

        </div>
    )
}

export default Menu;