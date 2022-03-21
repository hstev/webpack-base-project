const { Module } = require("webpack")

/*
|--------------------------------------------------------------------------
| Add CSS dependencies
|--------------------------------------------------------------------------
|
| Here is where you add new css files
|
*/
const CSS = [
    'animate.css/animate.min.css',
    'bootstrap/dist/css/bootstrap.min.css'
]

/*
|--------------------------------------------------------------------------
| Add JS dependencies
|--------------------------------------------------------------------------
|
| Here is where you add new js files
|
*/
const JS = [
    'bootstrap/dist/js/bootstrap.bundle.min.js'
]

module.exports = [...CSS, ...JS];