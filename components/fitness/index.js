'use strict';

app.fitness = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('fitness');

// START_CUSTOM_CODE_fitness
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_fitness
(function(parent) {
    var fitnessModel = kendo.observable({});

    parent.set('fitnessModel', fitnessModel);
})(app.fitness);

// START_CUSTOM_CODE_fitnessModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_fitnessModel