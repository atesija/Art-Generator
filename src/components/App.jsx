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
    </>
  );
};
