/*jslint es6:true, devel:true, indent:2, predefine=module */


const hasAuthor = require('./has_author.cjs');
const hasMod = require('./has_mods.cjs');
const hasPackVersion = require('./has_pack_version.cjs');
const validImagePaths = require('./valid_image_paths.cjs');
const validTier = require('./valid_tiers.cjs');

module.exports = [
  hasAuthor,
  hasMod,
  hasPackVersion,
  validImagePaths,
  validTier
];