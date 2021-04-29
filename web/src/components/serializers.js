import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {Figure} from './figure';

const Code = ({node}) => {
  if (!node || !node.code) {
    return null;
  }
  const {language, code} = node;
  return (
    <SyntaxHighlighter
      language={language || 'text'}
      style={atomOneDark}
      customStyle={{fontWeight: '600'}}>
      {code}
    </SyntaxHighlighter>
  );
};

const serializers = {
  types: {
    figure: Figure,
    code: Code,
  },
};

export default serializers;
