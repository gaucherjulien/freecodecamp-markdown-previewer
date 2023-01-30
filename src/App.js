import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartypants: false,
  xhtml: false
});

const DEFAULT = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {

  // const [text, setText] = useState (DEFAULT);
  const [md, setMd] = useState (marked.parse (DEFAULT));

  function handleChange(event) {
    setMd (marked.parse(event.target.value));
  }

  return (
    <div className="container rounded-3 col-md-12 p-4">
    
    <textarea className="form-control m-4 p-4" id="editor" onChange={handleChange}>{DEFAULT}</textarea>
    
    <div id="preview" className="square border border-2 m-4 p-4" dangerouslySetInnerHTML={{ __html: md }}/>
    
    </div>
  );
}

export default App;
