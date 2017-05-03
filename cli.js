#!/usr/bin/env node

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var server_port = 3000;

console.log(argv)

var pre_file_extend = argv[1]
var post_file_extend = argv[2]

require('.')(current_path, pre_file_extend, post_file_extend)