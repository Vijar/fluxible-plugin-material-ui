/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
/*globals describe,it,beforeEach */
'use strict';

var expect = require('chai').expect;
var muiPlugin = require('../../../lib/material-ui-plugin');
var FluxibleApp = require('fluxible');

describe('muiPlugin', function () {
    it('should plug componentContext with ThemeManager and muiTheme', function () {
        var app = new FluxibleApp();
        app.plug(muiPlugin());
        var context = app.createContext();
        var componentContext = context.getComponentContext();
        expect(componentContext).to.have.keys(['ThemeManager', 'muiTheme']);
    });
});
