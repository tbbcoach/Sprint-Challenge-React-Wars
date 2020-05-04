// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Characterdata from "./characterdata"
//import FilmData from "./characterdata"


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
        axios.get('http://swapi.p4e.com/api/planets/1/')
            .then((response => {
                setCharacters(response.data.films)
                
            }))
            
            
                .catch(err => {
                    console.log(err);
                });
        axios.get('http://swapi.py4e.com/api/planets/1/')
            .then((response => {
                response.data.residents.map(arrItem => {
                    return setCharacters(arrItem)
                })
            }))        
                    
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
        
            <div>
                <div className='films'>
                    <p></p>
                </div>
            </div>
            <div>
                <div className='residents'>
                    <p></p>
                </div>
            </div>

            
         </div>
        
        );

    }

              



        export default Characters;