function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function focusTextField() {}
    function closeKeyboard(e) {
        e.source.blur();
    }
    function updateLabel(e) {
        $.label_slider.text = String.format("%d", e.value);
    }
    function submit() {
        Titanium.UI.createAlertDialog({
            title: "Combined",
            message: "Breed picked is " + $.sampledogbreedpicker.getSelectedRow(0).title + " Energy Level is " + $.slider.value + " Owned pets before? " + $.petswitch.value
        }).show();
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Hello from Titanium";
        emailDialog.toRecipients = [ "iccha02@gmail.com" ];
        emailDialog.messageBody = "<b>Appcelerator Titanium Rocks!</b>";
        var f = Ti.Filesystem.getFile("cricket.wav");
        emailDialog.addAttachment(f);
        emailDialog.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "survey";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.genericWin = Ti.UI.createWindow({
        layout: "vertical",
        barColor: "lightgray",
        id: "genericWin",
        title: "Volunteer Survey",
        modal: "true",
        exitOnClose: "true"
    });
    focusTextField ? $.__views.genericWin.addEventListener("open", focusTextField) : __defers["$.__views.genericWin!open!focusTextField"] = true;
    var __alloyId40 = [];
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "__alloyId41"
    });
    __alloyId40.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Owned pets? ",
        width: "50%",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        width: "50%",
        left: "50%",
        id: "__alloyId44"
    });
    $.__views.__alloyId41.add($.__views.__alloyId44);
    $.__views.petswitch = Ti.UI.createSwitch({
        top: "5dp",
        bottom: "5dp",
        value: false,
        id: "petswitch"
    });
    $.__views.__alloyId44.add($.__views.petswitch);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        height: "75dp",
        id: "__alloyId45"
    });
    __alloyId40.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Energy level of pet?",
        width: "50%",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        width: "50%",
        left: "50%",
        layout: "vertical",
        id: "__alloyId48"
    });
    $.__views.__alloyId45.add($.__views.__alloyId48);
    $.__views.slider = Ti.UI.createSlider({
        id: "slider",
        min: "0",
        max: "10",
        width: "80%",
        value: "25"
    });
    $.__views.__alloyId48.add($.__views.slider);
    updateLabel ? $.__views.slider.addEventListener("change", updateLabel) : __defers["$.__views.slider!change!updateLabel"] = true;
    $.__views.label_slider = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        id: "label_slider",
        width: "100%",
        top: "10",
        left: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId48.add($.__views.label_slider);
    $.__views.dogbreedrow = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "dogbreedrow"
    });
    __alloyId40.push($.__views.dogbreedrow);
    $.__views.__alloyId49 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        id: "__alloyId49"
    });
    $.__views.dogbreedrow.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "What breeds of dogs did you own previously?",
        width: "80%",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        width: "50%",
        left: "50%",
        id: "__alloyId51"
    });
    $.__views.dogbreedrow.add($.__views.__alloyId51);
    $.__views.sampledogbreedpicker = Ti.UI.createPicker({
        bottom: "2dp",
        visibleItems: 3,
        width: "100%",
        selectionIndicator: true,
        id: "sampledogbreedpicker"
    });
    $.__views.__alloyId51.add($.__views.sampledogbreedpicker);
    var __alloyId52 = [];
    $.__views.__alloyId53 = Ti.UI.createPickerRow({
        title: "--ALL--",
        id: "__alloyId53"
    });
    __alloyId52.push($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createPickerRow({
        title: "Lhasa Apso",
        id: "__alloyId54"
    });
    __alloyId52.push($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createPickerRow({
        title: "Golden Retriever",
        id: "__alloyId55"
    });
    __alloyId52.push($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createPickerRow({
        title: "Labrador",
        id: "__alloyId56"
    });
    __alloyId52.push($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createPickerRow({
        title: "Doberman",
        id: "__alloyId57"
    });
    __alloyId52.push($.__views.__alloyId57);
    $.__views.sampledogbreedpicker.add(__alloyId52);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "__alloyId58"
    });
    __alloyId40.push($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Your Name ",
        width: "50%",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "__alloyId61"
    });
    __alloyId40.push($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Your age ",
        width: "50%",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: "50%",
        left: "50%",
        id: "__alloyId64"
    });
    $.__views.__alloyId61.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTextField({
        hintText: "Prior volunteering experience ?",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    closeKeyboard ? $.__views.__alloyId65.addEventListener("return", closeKeyboard) : __defers["$.__views.__alloyId65!return!closeKeyboard"] = true;
    $.__views.__alloyId66 = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "__alloyId66"
    });
    __alloyId40.push($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createButton({
        width: "80%",
        top: "10dp",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        title: "Submit",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    submit ? $.__views.__alloyId67.addEventListener("click", submit) : __defers["$.__views.__alloyId67!click!submit"] = true;
    $.__views.__alloyId39 = Ti.UI.createTableView({
        data: __alloyId40,
        id: "__alloyId39"
    });
    $.__views.genericWin.add($.__views.__alloyId39);
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "#fff",
        modal: false,
        exitOnClose: true,
        layout: "vertical",
        window: $.__views.genericWin,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.slider.text = $.slider.value;
    __defers["$.__views.genericWin!open!focusTextField"] && $.__views.genericWin.addEventListener("open", focusTextField);
    __defers["$.__views.slider!change!updateLabel"] && $.__views.slider.addEventListener("change", updateLabel);
    __defers["$.__views.__alloyId65!return!closeKeyboard"] && $.__views.__alloyId65.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId67!click!submit"] && $.__views.__alloyId67.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;