// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Characterdata from "./characterdata"


function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('http://swapi.py4e.com/api/planets/1/')
            .then(response => {
                console.log("response here", response);
                setCharacters(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    
    }, [])

    


    return (

        
        <div className='character'>
            <Characterdata
                id={characters.url}
                name={characters.name}
                population={characters.population}
                image={characters.url}
                climate={characters.climate}
                terrain={characters.terrain}
            />
        
            

            
        </div>
    )
   
};


    export default Characters;