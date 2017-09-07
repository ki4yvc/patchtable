const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js');
mix.react('resources/assets/js/components/Example.js', 'public/js');
mix.less('resources/assets/less/app.less', 'public/css');
mix.less('resources/assets/less/login.less', 'public/css');
