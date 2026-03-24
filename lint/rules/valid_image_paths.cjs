const fs = require('fs')

/*
  Validate images are referenced from the correct folder
*/
/** @type {import("markdownlint").RuleFunction} */
const GTBP05 = (params,onError)=>{
  params.parsers.micromark.tokens.map(token =>{
    if (token.type === 'content' && /!\[[^\]]*\]\((.*)(?=\"|\))(\".*\")?\)/.test(token.text) ) { 
      // console.log(token.text);
      const imagePath = /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/.exec(token.text)[1];
      if(imagePath.startsWith("/") && !imagePath.startsWith('/img/gtnh/')){onError({lineNumber: token.startLine, detail: 'local images should start in the /img/gtnh/ directory'}) }
      if(imagePath.startsWith('/img/gtnh/') && !fs.existsSync(`./public/${imagePath}`)){ onError({lineNumber: token.startLine, detail: `${imagePath} missing from filesystem`})}
    }
  });
}

/** @type {import("markdownlint").Rule} */
module.exports = {
  names: ['GTBP05', 'vaild-image-path'],
  description: 'References Images must be located correctly in the repository',
  tags: ['images'],
  parser: 'micromark',
  function: GTBP05
};