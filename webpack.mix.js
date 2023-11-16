const mix = require('laravel-mix');
const path = require('path');

mix.alias({ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue')})
    .js('resources/js/app.js', 'public/js').vue().version()
    // .sass('resources/sass/app.sass', 'public/css').version();