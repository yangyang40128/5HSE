5HSE
==========


Basic 
---------------

**Current folder structure**

* `css/` - less or static css file for developement
* `js/` - javascript modules for development
* `html/` - static page template for preview
* `public/` - public asset (for production)
	* `asset/`
		* `css/`
		* `js/`
		* `img/`
		* `font/`
* `bower.json` - css/js package config, use `bower install` to download to local dev repo
* `Gruntfile.js` - grunt automation, use `npm install` to download to local dev repo
* `README.md` - this file

*These folders will be created during dev*

* `node_modules/` - local dev folder for grunt, never commit to git
* `bower_components/` - local dev folder for front-end package, never commit to git

Setup
-----

1. install `npm`, `grunt` and `bower` globally
2. `npm install`
3. `bower install`
4. `grunt` or `grunt watch`
5. start dev!
