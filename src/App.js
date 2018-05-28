import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

console.log(logo);


function Img(props) {
  return <img src={props.src} className={props.className} alt={props.alt} />;
}

function Movie(props) {
  return (
    <div className="movie-page">
      <Img className="movie-img" src={props.imgSrc} alt={props.title} />
      <h1 className="movie-title">{props.title}</h1>
    </div>
  );
}

const App = React.createElement(Movie, {
  title: "2001: A Space Odyssey",
  imgSrc: "https://i.imgur.com/vaZoNCA.jpg"
});


export default Movie;
