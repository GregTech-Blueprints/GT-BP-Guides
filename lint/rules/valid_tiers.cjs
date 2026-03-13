/*
  Check that we have a Voltage tier defined and it is one we are expecting
*/

/** @type {import("markdownlint").RuleFunction} */
const GTBP01 = (params, onError) => {
  const validTiers = ['Stone Age', 'Steam Age', 'LV', 'MV', 'HV', 'EV', 'IV', 'LuV', 'ZPM', 'UV', 'UHV', 'UEV', 'UIV', 'UMV', 'UXV'];
  const tierLines = params.frontMatterLines.filter((line) => line.startsWith("tiers:"));
  if (tierLines.length < 1) { 
    onError({ lineNumber: 1, detail: "No tiers field found in frontMatter" });
    return;
  };

  const tiersValue = JSON.parse(tierLines[0].substring(tierLines[0].indexOf(':') + 2).replaceAll('\'','"'));
  if (!Array.isArray(tiersValue) && tiersValue.length == 0) { onError({ lineNumber: 1, detail: "tier list should be an array of strings." }) }
  tiersValue.map(tier => { if (validTiers.indexOf(tier) == -1 ) { onError({lineNumber: 1, detail: `${tier} is not a valid tier`}) }} )
}

/** @type {import("markdownlint").Rule} */
module.exports = {
  names: ['GTBP01', 'valid-tier'],
  description: 'Guide must contain a valid list of relevant tiers',
  tags: ['metadata'],
  parser: 'none',
  function: GTBP01
};