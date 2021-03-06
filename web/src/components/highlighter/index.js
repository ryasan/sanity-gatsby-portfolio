import React from 'react';
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

import * as styles from './highlighter.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('scss', scss);

const Highlighter = ({node}) => {
  if (!node || !node.code) return null;
  const {language, code} = node;

  return (
    <div className={styles.root}>
      <SyntaxHighlighter
        language={language}
        style={nord}
        customStyle={{width: '100%'}}
        codeTagProps={{className: 'code-block'}}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

Highlighter.defaultProps = {
  node: {
    language: 'javascript',
  },
};

export default Highlighter;
