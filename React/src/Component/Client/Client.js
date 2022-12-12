
import { useState, useEffect } from "react";





function Client() {
    //Creation d'une variable d'état avec la liste des éléments
    const [elements, setElements] = useState([]);


    //Fonction pour récuperer les éléments de la carte

    async function getElements() {

        //Affiche les éléments de la carte
        const options = {
            method: "GET",
            Headers: {
                "Content-Type": "application/json"
            },
        }

        const response = await fetch('http://127.0.0.1:8000/api/orders', options);

        const data = await response.json();
        const elements = data.posts;

        console.log(elements);

        setElements(elements);

    }

    getElements();

    useEffect(() => { getElements() }, [])

    // Fonction pour passer commande

    async function order() {
        const optionsOrder = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'bearer token'
            },

            Body: {
                title: "title",
                content: "content"
            }

        }

        const response = await fetch('http://127.0.0.1:8000/api/orders', optionsOrder);
        const data = await response.json();
        const elements = data.posts;

        setElements(elements);

    }

    order();

    return (

        <div id="client">
            <h1 id="titre">Page de commande</h1>
            <h2>Liste de commande </h2>
            <nav>
                <link to="/Client">Page commande</link>
            </nav>
        </div>
    )
}

export default Client;


