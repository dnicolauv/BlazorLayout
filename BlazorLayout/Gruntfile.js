/// <binding ProjectOpened='watch-css' />
module.exports = function (grunt) {
    grunt.initConfig({
        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),
        // create a clean task to remove production resource files under wwwroot
        clean: ["wwwroot/css/*"],
        concat: {
            dist: {
                src: ['tailwindcss/css/*.css', 'Shared/*.css', 'Pages/*.css'],
                dest: 'tailwindcss/master/tailwind-master.css',
            }
        },
        // PostCSS - Tailwindcss and Autoprefixer
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('tailwindcss')(),
                    require('autoprefixer') // add vendor prefixes
                ]
            },
            dist: {
                files: [{
                    //expand: true,
                    //src: ['tailwindcss/*.css', 'Shared/*.css', 'Pages/*.css', '!**/node_modules/**'],
                    src: 'tailwindcss/master/tailwind-master.css',
                    dest: 'wwwroot/css/tailwind.css',
                    //ext: '.css'
                }]
                //expand: true,
                //cwd: './',
                //src: ['**/*.css'],
                //dest: 'wwwroot/css/',
                //ext: '.css'
            }
        },
        watch: {
            postcss: {
                //files: '**/*.css',
                files: ['tailwindcss/css/*.css', 'Shared/*.css', 'Pages/*.css'],
                tasks: ['compile-css'],
                options: {
                    interrupt: true
                }
            }
        }
    });
    // Load Grunt Plugins
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.registerTask('compile-css', ['clean', 'concat', 'postcss']);
    grunt.registerTask('watch-css', ['watch:postcss']);
};