# grunt-vover-install

> Grunt-plugin for using vover

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-vover-install --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vover-install');
```

## The "vover_install" task

### Overview
In your project's Gruntfile, add a section named `vover_install` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  vover_install: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

## Task Options

- `color` (default `true`): Whether output is colorized.
  The equivalent of `bower --config.color=<value>`.

- `cwd` (default `process.cwd()`): The directory from which Bower should run.
  All relative paths in Bower will be calculated according to this.
  The equivalent of ``bower --config.cwd=`pwd` ``.

- `production` (default `false`): Do not install project `devDependencies`.
  The equivalent of `bower install --production`.

- `interactive` (default `true`): Makes Bower interactive, prompting whenever necessary.
  The equivalent of `bower --config.interactive=true`.

- `directory` (default `undefined`): The path in which installed components should be saved.
  If `undefined` (or not specified) this defaults in Bower to `bower_components`.
  The equivalent of `bower --config.directory=<dir>`.


### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. 

```js
grunt.initConfig({
  vover_install: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```
## Release History
_(Nothing yet)_
