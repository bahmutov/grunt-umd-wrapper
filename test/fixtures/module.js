@module MyModule
@export myModule
@import jquery as $
@import jquery-ui

var mod = {};

@html fragment.html as html
@include part1.js
@include part2.js

return mod;
