/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

module.exports = function MaterialUiPlugin() {
    /**
     * @class MaterialUiPlugin
     */
    return {
        /**
         * @property {String} name Name of the plugin
         */
        name: 'MaterialUiPlugin',
        /**
         * Called to plug FluxContext
         * @method plugContext
         * @returns {Object}
         */
        plugContext: function plugContext() {
            return {
                /**
                 * Adds the material ui ThemeManager and
                 * the current theme to the component context
                 * @param {Object} actionContext
                 */
                plugComponentContext: function plugComponentContext(componentContext) {
                    // use: this.context.ThemeManager.setTheme() or this.context.ThemeManager.setComponentThemes()
                    componentContext.ThemeManager = ThemeManager;

                    // Needed for mui components to work
                    componentContext.muiTheme = ThemeManager.getCurrentTheme()
                }
            };
        }
    };
};
