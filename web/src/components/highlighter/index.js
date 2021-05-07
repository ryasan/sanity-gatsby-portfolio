import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism';

import * as styles from './highlighter.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
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
  }
}

export default Highlighter;
