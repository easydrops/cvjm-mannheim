
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const htmlInjector = require('bs-html-injector');
const webpackConfig = require('./webpack.config');

const PROXY_TARGET = 'cvjm-mannheim.dev';

const bundler = webpack(webpackConfig);

// recommended: clean your build folder

// setup html injector, only compare differences within outer most div (#page)
// otherwise, it will replace the webpack HMR scripts
browserSync.use(htmlInjector, { restrictions: [ '#main-content' ] });

browserSync.init({
  files: [{
    // scss|js managed by webpack
    // optionally exclude other managed assets: images, fonts, etc
    match: [ '*.!(scss|js)' ],

    // manually sync everything else
    fn: synchronize,
  }],

  proxy: {
    // proxy local WP install
    target: PROXY_TARGET,

    middleware: [

      // converts browsersync into a webpack-dev-server
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
      }),

      // hot update js &amp;&amp; css
      webpackHotMiddleware(bundler),
    ],
  },

  // ..."browserSync-config"
});

function synchronize(event, file) {
  // copy/remove file
  // if you keep assets in your src/sass folder, that might need flattened, depending on your build

  // ...

  // activate html injector
  if (file.endsWith('php')) {htmlInjector();}
}