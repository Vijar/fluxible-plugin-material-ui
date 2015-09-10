# Material Ui Plugin for Fluxible

[![npm version](https://badge.fury.io/js/fluxible-plugin-material-ui.svg)](http://badge.fury.io/js/fluxible-plugin-material-ui)
[![Build Status](https://travis-ci.org/Vijar/fluxible-plugin-material-ui.svg?branch=master)](https://travis-ci.org/Vijar/fluxible-plugin-material-ui)
[![Dependency Status](https://david-dm.org/Vijar/fluxible-plugin-material-ui.svg)](https://david-dm.org/Vijar/fluxible-plugin-material-ui)
[![devDependency Status](https://david-dm.org/Vijar/fluxible-plugin-material-ui/dev-status.svg)](https://david-dm.org/Vijar/fluxible-plugin-material-ui#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/Vijar/fluxible-plugin-material-ui/badge.png?branch=master)](https://coveralls.io/r/Vijar/fluxible-plugin-material-ui?branch=master)

Provides [Material UI](https://github.com/callemall/material-ui) theme access to your [Fluxible](https://github.com/yahoo/fluxible) application.

## Usage

```js
var Fluxible = require('fluxible');
var muiPlugin = require('fluxible-plugin-material-ui');
var app = new Fluxible();
app.plug(muiPlugin());
```

Now, in your app component set the child context properly:

```js
// ...
Application = provideContext(Application, {
    muiTheme: React.PropTypes.object
});
module.exports = Application;
```

After that, you can just follow the [Material UI docs](http://material-ui.com) to render your ui components.

### Accessing the ThemeManager

If you want to customize your themes, you will need access to the theme manager.
You will need to set an additional property in the child context in your app component:

```js
// ...
Application = provideContext(Application, {
    ThemeManager: React.PropTypes.object,
    muiTheme: React.PropTypes.object
});
module.exports = Application;
```

Then, in your components:
```js
componentDidMount: function () {
    this.context.ThemeManager.setTheme(..)
}
```

## License

This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/Vijar/fluxible-plugin-material-ui/blob/master/LICENSE.md
