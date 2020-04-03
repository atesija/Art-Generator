import React, { useState } from 'react';
import { getGrammar } from '../utilities/grammar';

export default () => {
  const [prompt, setPrompt] = useState(getGrammar());

  return (
    <>
      <h1>{prompt}</h1>
      <button onClick={() => setPrompt(getGrammar())}>Generate</button>
    </>
  );
};
