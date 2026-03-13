/*
  Check we have the mods listed in the guide
*/

/** @type {import("markdownlint").RuleFunction} */
const GTBP03 = (params, onError) => {
  const modLines = params.frontMatterLines.filter((line) => line.startsWith("mods:"));
  if (modLines.length < 1) { 
    onError({ lineNumber: 1, detail: "No mods field found in frontMatter" });
    return; 
  };
  const modsValue = JSON.parse(modLines[0].substring(modLines[0].indexOf(':') + 2).replaceAll('\'','"'));
  if (!Array.isArray(modsValue) && modsValue.length == 0) { onError({ lineNumber: 1, detail: "mods list should be an array of strings." }) }
}

/** @type {import("markdownlint").Rule} */
module.exports = {
  names: ['GTBP03', 'has-mods'],
  description: 'Guide must have relevant mods listed in the frontmatter',
  tags: ['metadata'],
  parser: 'none',
  function: GTBP03
};