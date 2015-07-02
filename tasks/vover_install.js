/*
 * grunt-vover-install
 * https://github.com/openheimer/grunt-vover-install
 *
 * Copyright (c) 2015 Korniev Zakhar
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var vover = require("vover"),
        chalk = require("chalk");

    grunt.registerTask('vover_install', 'Grunt-plugin for using vover', function(){
        var options = this.options({
            /*  bower configuration options (renderer specific)  */
            color:        true,               /*  bower --config.color=true        */
            cwd:          process.cwd(),      /*  bower --config.cwd=<dir>         */

            /*  bower install command options  */
            production:   false,              /*  bower install --production       */

            /*  bower configuration options (general)  */
            interactive:  true,               /*  bower --config.interactive=true  */
            directory:    undefined           /*  bower --config.directory=<dir>   */
        });

        grunt.verbose.writeflags(options, "Options");

        if (options.color){
            grunt.log.writeln(chalk.green("Install Vover Dependencies"));
        }
        else{
            grunt.log.writeln("Install Vover Dependencies");
        }

        var params = [];

        params.push("--config.cwd=" + options.cwd);

        if(options.color){
            params.push("--config.color=true");
        }

        if(options.production){
            params.push("--production");
        }

        if(options.interactive){
            params.push("--config.interactive=true");
        }

        if(options.directory){
            params.push("--config.directory=" + options.directory);
        }

        var done = this.async();

        vover.init({ cwd: options.cwd });
        vover
            .command("install", params)
            .finally(done);
    });
};
