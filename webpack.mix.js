let mix = require('laravel-mix');

mix
.js('assets/js/vendor.js', 'public/js')
.vue('assets/js/app.js', 'public/js')
.sass('assets/scss/app.scss', 'public/css');