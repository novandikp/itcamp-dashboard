const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const isProd = process.env.NODE_ENV === "production";
function getBasePath() {
  var basePath = "";

  if (isProd) {
    basePath = "https://fasilkom-fest.com/";
  }

  return basePath;
}

module.exports = withCSS(
  withSass({
    assetPrefix: getBasePath(),
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  })
);
