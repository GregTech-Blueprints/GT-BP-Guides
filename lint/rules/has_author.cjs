/*
  Check that we have a author defined in the frontmatter, and that it is a string
*/

/** @type {import("markdownlint").RuleFunction} */
const GTBP02 = (params, onError) => {
  const authorLines = params.frontMatterLines.filter((line)=> line.startsWith("author:"));
  if(authorLines.length<1) {
    onError({lineNumber:1, detail:"No author field found in frontMatter"});
    return;
  };
  const authorValue = JSON.parse(authorLines[0].substring(authorLines[0].indexOf(':')+2));
  if(typeof authorValue != 'string') { onError({lineNumber: 1, detail:"author field should be a string"})}
}

/** @type {import("markdownlint").Rule} */
module.exports = {
  names: ["GTBP02", "has-author"],
  description: "Guide must have a valid author listed",
  tags: ["metadata"],
  parser: "none",
  function: GTBP02
};
