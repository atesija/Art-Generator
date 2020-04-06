import React, { useState } from 'react';
import { getGrammar } from '../utilities/grammar';
import './App.css';

export default () => {
  const [prompt, setPrompt] = useState(getGrammar());

  return (
    <>
      <div className="prompt-container">
        <h1 className="prompt">{prompt}</h1>
      </div>
      <button className="generate" onClick={() => setPrompt(getGrammar())}>
        Generate
      </button>
      <p className="credits">
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
    </>
  );
};
