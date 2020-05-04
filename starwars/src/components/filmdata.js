import React from "react";

import styled from 'styled-components';

const Paragraph = styled.p`
font-size: 2rem;
color: red;
text-decoration: underline;
`;



const FilmData = (props) => {
  return (
    <div className="films" key={props.id}>
      <Paragraph>Title: {props.films}</Paragraph>
    </div>
  );
};

export default FilmData
