// ./vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jujube/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/style/main.scss";
        `
      }
    }
  }
}