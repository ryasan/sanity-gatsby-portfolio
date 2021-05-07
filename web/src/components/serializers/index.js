import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

import * as styles from './serializers.module.css';
import {Figure} from '../figure';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code = ({node}) => {
  if (!node || !node.code) return null;
  const {language, code} = node;

  return (
    <div className={styles.root}>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        customStyle={{width: '100%'}}
        codeTagProps={{className: 'code-block'}}>
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
