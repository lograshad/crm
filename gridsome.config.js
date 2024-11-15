// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CRMinder',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
        optimizeCSS: false
      }
    }
  ],
  chainWebpack: config => {
    config.module
      .rule("postcss-loader")
      .test(/.css$/)
      .use(["tailwindcss", "autoprefixer"])
      .loader("postcss-loader");
  }
}
