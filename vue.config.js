const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/ksk/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/mixins.sass"`,
      },
      scss: {
        additionalData: `@import "@/styles/mixins.scss";`,
      },
    },
  },
});
