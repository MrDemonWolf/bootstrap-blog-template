# [Bootstrap Blog Template](https://github.com/MrDemonWolf/bootstrap-blog-template)

## Preview

[![Preview](https://github.com/MrDemonWolf/bootstrap-blog-template/blob/master/preview.png?raw=true)](https://mrdemonwolf.github.io/bootstrap-blog-template/)

**[View Live Preview](https://mrdemonwolf.github.io/agency-bootstrap-coming-soon-template/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/MrDemonWolf/bootstrap-blog-templater/master/LICENSE)
[![Build Status](https://travis-ci.org/MrDemonWolf/bootstrap-blog-template.svg?branch=dev)](https://travis-ci.org/MrDemonWolf/bootstrap-blog-template)
[![dependencies Status](https://david-dm.org/MrDemonWolf/bootstrap-blog-template/status.svg)](https://david-dm.org/MrDemonWolf/bootstrap-blog-template)
[![devDependencies Status](https://david-dm.org/MrDemonWolf/bootstrap-blog-template/dev-status.svg)](https://david-dm.org/MrDemonWolf/bootstrap-blog-template?type=dev)

## Download and Installation

To begin using this template, choose one of the following options to get started:
* Clone the repo: `git clone https://github.com/MrDemonWolf/bootstrap-blog-template.git`
* [Fork, Clone, or Download on GitHub](https://github.com/MrDemonWolf/bootstrap-blog-template)

### Basic Usage

After downloading, simply edit the HTML and CSS files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

### System Preparation
To use this starter project, you'll need the following things installed on your machine.
[Nodejs](https://nodejs.org)
user the installer, Homebrew, etc.

### Local Installation
Clone this repo, or download it into a directory of your voice.
```sh
$ git clone https://github.com/mrdemonwolf/bootstrap-blog-template.git
```
Inside the directory, run `npm install`.
```sh
$ cd bootstrap-blog-template
$ npm install
```

### Start the Development
This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting, etc.
```sh
$ npm start
```

### See More Commands
This will display all available commands.
```sh
$ npm run
```

### What's in DemonWolf Jekyll Boilerplate
* [gulp](https://gulpjs.com)
* [Sass](https://sass-lang.com)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [PostCSS](https://postcss.org)
* [Webpack](https://webpack.github.io)
* [UglifyJS](https://github.com/mishoo/uglifyJS2)
* [imagemin](https://github.com/imagemin/imagemin)
* [Browsersync](https://www.browsersync.io)

### Configuration and Defaults
You can change the configurations by editing `mrdemonwolf.config.js`

#### Port
default: `4000`
options: integer

#### Tasks
Tasks to run when you exec `npm start` or `gulp` commands.

* **Imagemin**
To minify images.
default: `true`
options: boolean (`true` / `false`)

* **sass**
To compile Sass.
default: `true`
options: boolean (`true` / `false`)

* **server**
To compile sources and to keep browsers in sync with file
changes via Browsersync.
default: `true`
options: boolean (`true` / `false`)

#### Paths
Settings related to the paths.

* **dest**
The destination directory for the whole project.
default: `"/"`
options: string

* **assets**
The directory to gather all assets.
default: `"./assets"`
options: string

* **css**
The CSS desination directory for Sass.
default: `"css"`
options: string
example: `"stylesheets"`

* **js**
The JavaScript destination directory for Browserify
default: `"js"`
options: string
example: `"javascripts"`

* **images**
The destination directory of compressed image files for imagemin.
default: `"images"`
options: string
example `"img"`

* **sass**
The directory of Sass files.
default: `"_sass"`
options: string
example: `"src/sass"`

* **jsSrc**
The directory of JavaScript source files to bundle up by Browserify.
default: `"_js"`
options: string
example: `"src/js"`

* **imagesSrc**
The directory of image source files to compress.
default: `"_images"`
options: string
example: `"src/images"`

#### Sass
Sass settings.

* **outputStyle**
Teh output style of Sass.
default: `"compressed"`
options: `"expanded"`, `"nested"`, `"compact"`, `"compressed"`

#### autoprefixer
Autoprefixer settings

* **browsers**
List of browsers, which are supported in your theme.
default: `["> 1%", "last 2 versions", "Firefox ESR"]`
options: array. See [Browserslist docs](https://github.com/ai/browserslist#queries) for available queries.
example: `["> 5%", "last 2 versions", "IE 8"]`

#### JS
JavaScript settings.

* **entry**
File name(s) of JavaScript entry points.
default: `["main.js"]`
options: array
example: `["pluginA.js", "pluginB.js", "main.js"]`

## Custom Builds

You can hire me to create a custom build of any template, or create something from scratch using Bootstrap. For more information,  **[contact me](https://www.mrdemonwolf.me/about)**.

## About

Am a Web Developer & Designer who has a passion for creating unique user experiences. Since 2012 I have been proudly making the internet a better place, one website at a time. I have had the pleasure to work on a variety of exciting projects involving WordPress development, UI design & front-end development.

* https://www.mrdemonwolf.me
* https://twitter.com/mrdemonwolf
* https://github.com/mrdemonwolf

## Copyright and License

Copyright 2018 MrDemonWolf. Code released under the [MIT](https://github.com/MrDemonWolf/bootstrap-blog-template/blob/master/LICENSE.md) license.
