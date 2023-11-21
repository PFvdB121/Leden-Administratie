const mix = require('laravel-mix');
const path = require('path');

mix.alias({ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue')})
    .js('resources/js/app.js', 'public/js').vue()
    .css('resources/css/app.css', 'public/css').version();