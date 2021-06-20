// const HubSpotAutoUploadPlugin = require("@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// STEP 1 : Include the Fields JS Plugin
const { FieldsPlugin } = require("@igomoon/hubspot-fields-js");

module.exports = () => ({
//   entry: "./src/index.js",
//   output: {
//     filename: "js/main.js",
//   },
//   module: {
//     rules: [
// 		//...
// 	]
//   },
  plugins: [

    // STEP 2 : Add to the top of  your plugins
    new FieldsPlugin(),

//     new HubSpotAutoUploadPlugin({
//       autoupload,
//       account,
//       src: "src",
//       dest: "generated",
//     }),
//     new CopyWebpackPlugin([
//       { from: "src/images", to: "images" },
//       { from: "src/modules", to: "modules" },
//       { from: "src/templates", to: "templates" },
//     ]),
  ],
});