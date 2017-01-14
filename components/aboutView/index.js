'use strict';

app.aboutView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('aboutView');

// START_CUSTOM_CODE_aboutView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_aboutView
(function(parent) {
    var aboutViewModel = kendo.observable({});

    parent.set('aboutViewModel', aboutViewModel);
})(app.aboutView);

// START_CUSTOM_CODE_aboutViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_aboutViewModel