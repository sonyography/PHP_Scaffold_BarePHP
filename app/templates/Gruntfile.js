module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        composer: grunt.file.readJSON('./composer.json'),

        phplint: {
            options: {
                swapPath: '/tmp'
            },
            application: [
                './<%= dirs.src %>/**/*.php',
                './<%= dirs.test %>/**/*.php'
            ]
        },
        phpcs: {
            options: {
                bin: './vendor/bin/phpcs',
                standard: './phpcs.xml.dist'
            },
            application: {
                dir: [
                    './<%= dirs.src %>',
                    './<%= dirs.test %>'
                ]
            }
        },
        phpmd: {
            options: {
                bin: './vendor/bin/phpmd',
                rulesets: './phpmd.xml.dist',
                reportFormat: 'text'
            },
            application: {
                dir: './<%= dirs.src %>'
            }
        },
        phpcpd: {
            options: {
                bin: './vendor/bin/phpcpd',
                quiet: false,
                ignoreExitCode: true
            },
            application: {
                dir: './<%= dirs.src %>'
            }
        },
        phpunit: {
            options: {
                bin: './vendor/bin/phpunit',
                coverage: true
            },
            application: {
                configuration: './phpunit.xml.dist'
            }
        }
    });

    grunt.task.registerTask('build', 'Building', function() {
        grunt.log.writeln('Task ready to be implemented');
    });

    grunt.registerTask('check', ['phplint', 'phpcs', 'phpmd', 'phpcpd']);
    grunt.registerTask('test', ['phpunit']);

    grunt.registerTask('default', ['check', 'test']);
};
