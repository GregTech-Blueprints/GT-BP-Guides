import { lint } from 'markdownlint/sync'
import { argv } from 'node:process'
import rules from "./rules/index.cjs"
import { globSync } from 'node:fs'


/** @type {import("markdownlint").Options} */
const lintOptions = {
  files: globSync(argv.slice(2)),
  config: {
    default: false,
    GTBP01: true,
    GTBP02: true,
    GTBP03: true,
    GTBP04: true,
    GTBP05: true,
    ignore_front_matter:false
  },
  customRules: rules,
}

const results = lint(lintOptions);
let errors = false;
for (var resultFile in results) {
  if (results.hasOwnProperty(resultFile) && results[resultFile].length > 0) {
    errors = true;
    console.log(`## ${resultFile}\n`);
    console.log("|Line*|Rule Id|Details|");
    console.log("|---|---|---|");
    results[resultFile].map(result => {
      console.log(`|${result.lineNumber}|${result.ruleNames[1]}|${result.errorDetail}|`);
    });
    console.log('\n');
  }
}
if(errors){
  console.log("**line number may be inaccurate if located in the frontmatter (top of the file between the '``---``')*")
}
