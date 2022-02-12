const { build } = require("esbuild");
const { buildOptions } = require("./build_common");

build(buildOptions).then(() => {
  console.log("Done");
  process.exit();
});
