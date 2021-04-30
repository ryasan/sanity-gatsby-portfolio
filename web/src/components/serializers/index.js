import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import * as styles from './serializers.module.css';
import {Figure} from '../figure';

const Code = ({node}) => {
  if (!node || !node.code) {
    return null;
  }
  const {language, code} = node;

  return (
    <div className={styles.root}>
      <SyntaxHighlighter
        language={language || 'text'}
        style={dracula}
        customStyle={{width: '100%'}}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const serializers = {
  types: {
    figure: Figure,
    code: Code,
  },
};

export default serializers;