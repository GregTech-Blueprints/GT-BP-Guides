/*
    Check we have a GTNH version listed on the guide
*/

/** @type {import("markdownlint").RuleFunction} */
const GTBP04 = (params, onError) => {
  const packVersionLines = params.frontMatterLines.filter((line)=> line.startsWith("pack_version:"));
  if(packVersionLines.length<1) {
    onError({lineNumber:1, detail:"No pack_version field found in frontMatter"});
    return;
  };
  const packVersionValue = packVersionLines[0].substring(packVersionLines[0].indexOf(':')+2).replaceAll('"','').replaceAll('\'','');
  if(typeof packVersionValue != 'string') { onError({lineNumber: 1, detail:"pack_version should be a string"})}

  if ( !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(packVersionValue)) { onError({lineNumber:1, detail:"pack_version should be formatted as X.Y.Z"}) }
}

/** @type {import("markdownlint").Rule} */
module.exports = {
  names: ['GTBP04', 'has-pack-version'],
  description: 'Guide must have the relevant version of GTNH listed in the frontmatter',
  tags: ['metadata'],
  parser: 'none',
  function: GTBP04
};