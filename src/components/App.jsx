import React, { useState } from 'react';
import './App.css';
import {
  getArtPrompt,
  getSketchPrompt,
  getComicPrompt,
} from '../utilities/grammar';
import Doodle from './Doodle';
import { Sketch1, Sketch2, Sketch3 } from '../images/index';

export default () => {
  const [prompt, setPrompt] = useState(getArtPrompt());

  return (
    <>
      <div className="prompt-container">
        <h1 className="prompt">{prompt}</h1>
      </div>
      <div className="generator-buttons">
        <button className="generate" onClick={() => setPrompt(getArtPrompt())}>
          Art
        </button>
        <button
          className="generate"
          onClick={() => setPrompt(getSketchPrompt())}
        >
          Sketch
        </button>
        <button
          className="generate"
          onClick={() => setPrompt(getComicPrompt())}
        >
          Comic
        </button>
      </div>
      <div className="credits">
        <Doodle image1={Sketch1} image2={Sketch2} image3={Sketch3} />
        <p>
          Made by{' '}
          <a href="http://www.anthonytesija.com/" className="credits-link">
            Anthony Tesija
          </a>{' '}
          using{' '}
          <a href="https://tracery.io/" className="credits-link">
            Tracery
          </a>{' '}
          find the code{' '}
          <a
            href="https://github.com/atesija/Art-Generator"
            className="credits-link"
          >
            here
          </a>
          !
        </p>
      </div>
    </>
  );
};
