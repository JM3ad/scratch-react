const envFilePlugin = require("esbuild-envfile-plugin");

const buildOptions = {
  bundle: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  entryPoints: ["src/app.tsx"],
  incremental: true,
  minify: true,
  outfile: "public/bundle.js",
  plugins: [envFilePlugin],
};

const devBuildOptions = Object.assign({}, buildOptions);
devBuildOptions.minify = false;

module.exports.buildOptions = buildOptions;
module.exports.devBuildOptions = devBuildOptions;
