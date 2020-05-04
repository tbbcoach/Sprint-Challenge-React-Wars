import React from "react";

import styled from 'styled-components';

const Headline2 = styled.h2`

font-size: 3rem;
color: blue;
text-decoration: dashed underline black;
`;

const Headline4 = styled.h4`
font-size: 2.5rem;
`;

const Paragraph1 = styled.p`
font-size: 2rem;
color: white;
border: 2px solid green;
margin: 10% 40%;
`;

const Paragraph2 = styled.p`
font-size: 2.54rem;
color: white;
border: 2px solid purple;
margin: 10% 40%;
`;


const Characterdata = props => {



    return (
        <li className="character-data" key={props.id}>
            <Headline2>Name: {props.name}</Headline2>
            <Headline4>Population: {props.population}</Headline4>
            <img src={props.image} alt="Tatooine" />
            <Paragraph1>Climate: {props.climate}</Paragraph1>
            <Paragraph2>Terrain: {props.terrain}</Paragraph2>
            
        </li>
    );
};

//const FilmData = props => {



  //  return (
  //      <div className="films" key={props.id}>
  //          <p>Title: {props.film}</p>
  //      </div>
  //  );

//};

//const ResidentData = props => {

 //   return (
 //       <div>
 //           <p>Residents: {props.name} </p> 
             
 //       </div>
 //   )
//}





export default Characterdata;
