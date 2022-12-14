import { useState } from "react";
import "./page_inscription.css";
import Menu from "../../Component/Menu/Menu";

/**
 * Creation du composant Register qui va permettre à l'utilisateur de s'inscrire sur le réseau social
 * @returns Un formulaire d'inscription
 */
function Inscription() {
  
  //Création des variables d'état à vide qui regroupent tous les inputs du formulaire, ainsi que la fonction de mise à jour des variables d'état 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Fonction qui va mettre à jour les variables
   * @param {*} e 
   */
  function handleChange(e){
    const {id, value} = e.target;
    if (id === "firstName"){
      setFirstName(value);
    }
    if (id === "lastName"){
      setLastName(value);
    }
    if (id === "email"){
      setEmail(value);
    }
    if (id === "password"){
      setPassword(value);
    }
  }

  /**
   * Fonction qui va valider le formulaire d'inscription. 
   * @param {*} e 
   */
  function handleSubmit(e){
    e.preventDefault();
    console.log(lastName, firstName, email, password);
    addUser();//Au click sur le bouton submit appel de la fonction addUser
  }

  /**
   * Création d'une fonction async qui va permettre de créer un utilisateur
   */
  async function addUser(){
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      }),
    }

    const response = await fetch(`http://127.0.0.1:8000/api/inscription`, options);

    const data = await response.json();
    const message = data.message;

    if ( message === 'Firstname, lastname, email and password are required.') {
      alert("Champs manquant");
    }
    if ( message !== 'Firstname, lastname, email and password are required.') {
      alert("Un nouveau clasheur a integré l'équipe");
    }

    console.log("creation de compte : ", data);
  }

  return (
    <div className="Inscription">
      <Menu />
      
      <div id="Inscription">
      <span id="inscrisTitle">INSCRIPTION</span>
        <div className="form" id="register">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="lastName" 
                    onChange={handleChange} 
                    value={lastName}
                    placeholder="Nom"
                    required
                />

                <input 
                    type="text" 
                    id="firstName" 
                    onChange={handleChange} 
                    value={firstName}
                    placeholder="Prénom"
                    required
                />
                
                <input 
                    type="email" 
                    id="email" 
                    onChange={handleChange} 
                    value={email}
                    placeholder="Email"
                    required
                />
                
                <input 
                    type="password" 
                    id="password"  
                    onChange={handleChange} 
                    value={password}
                    placeholder="Mot de passe"
                    required 
                />
                        
            </form>
            
            <button id="submitUser" onClick={handleSubmit}
              type="submit">VALIDER</button>

        </div>
      </div>
    </div>
  )
}

export default Inscription;