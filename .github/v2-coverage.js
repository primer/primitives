const { default: colors } = require("../dist/js/colors");
const { default: colorsV2 } = require("../dist/js/colors_v2");
const flatten = require("flat");

const variablesV1 = Object.keys(flatten(colors.light));
const variablesV2 = Object.keys(flatten(colorsV2.light));

// V1 - V2
const diff = variablesV1.filter(v => variablesV2.indexOf(v) === -1);

console.log(
  "The following v1 variables do not have a corresponding v2 variable:"
);

for (const variable of diff) {
  console.log(variable);
}

const coverage =
  ((variablesV1.length - diff.length) / variablesV1.length) * 100;

console.log(
  `v2 coverage: ${variablesV1.length - diff.length}/${
    variablesV1.length
  } (${coverage.toFixed(2)}%)`
);
