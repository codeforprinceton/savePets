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
    function changepickerDog(e) {
        if (true === e.value) {
            $.dogbreedrow.visible = "true";
            $.dogrow.height = 200;
        } else {
            $.dogbreedrow.visible = "false";
            $.dogrow.height = 60;
        }
    }
    function changepickerCat(e) {
        if (true === e.value) {
            $.catbreedrow.visible = "true";
            $.catrow.height = 200;
        } else {
            $.catbreedrow.visible = "false";
            $.catrow.height = 60;
        }
    }
    function changepickerKitten(e) {
        if (true === e.value) {
            $.kittenbreedrow.visible = "true";
            $.kittenrow.height = 200;
        } else {
            $.kittenbreedrow.visible = "false";
            $.kittenrow.height = 60;
        }
    }
    function changepickerPuppy(e) {
        if (true === e.value) {
            $.puppybreedrow.visible = "true";
            $.puppyrow.height = 200;
        } else {
            $.puppybreedrow.visible = "false";
            $.puppyrow.height = 60;
        }
    }
    function openMaster() {
        var catbreedpickedvalue = $.catbreedpicker.getSelectedRow(0).title;
        var dogbreedpickedvalue = $.dogbreedpicker.getSelectedRow(0).title;
        var puppybreedpickedvalue = $.puppybreedpicker.getSelectedRow(0).title;
        var kittenbreedpickedvalue = $.kittenbreedpicker.getSelectedRow(0).title;
        "false" === $.dogbreedrow.visible && (dogbreedpickedvalue = "");
        "false" === $.catbreedrow.visible && (catbreedpickedvalue = "");
        "false" === $.puppybreedrow.visible && (puppybreedpickedvalue = "");
        "false" === $.kittenbreedrow.visible && (kittenbreedpickedvalue = "");
        var controller = Alloy.createController("master", {
            catbreed: catbreedpickedvalue,
            dogbreed: dogbreedpickedvalue,
            puppybreed: puppybreedpickedvalue,
            kittenbreed: kittenbreedpickedvalue
        });
        var win = controller.getView();
        Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "criteria";
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
        title: "Pet Search",
        modal: "true",
        exitOnClose: "true"
    });
    $.__views.genericWin && $.addTopLevelView($.__views.genericWin);
    focusTextField ? $.__views.genericWin.addEventListener("open", focusTextField) : __defers["$.__views.genericWin!open!focusTextField"] = true;
    var __alloyId1 = [];
    $.__views.dogrow = Ti.UI.createTableViewRow({
        height: "60dp",
        id: "dogrow"
    });
    __alloyId1.push($.__views.dogrow);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.dogrow.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Search Dogs? ",
        width: "80%",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createSwitch({
        top: "5dp",
        bottom: "5dp",
        value: false,
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    changepickerDog ? $.__views.__alloyId4.addEventListener("change", changepickerDog) : __defers["$.__views.__alloyId4!change!changepickerDog"] = true;
    $.__views.dogbreedrow = Ti.UI.createView({
        id: "dogbreedrow",
        width: "50%",
        left: "50%",
        visible: "false"
    });
    $.__views.dogrow.add($.__views.dogbreedrow);
    $.__views.dogbreedpicker = Ti.UI.createPicker({
        bottom: "2dp",
        visibleItems: 3,
        width: "100%",
        selectionIndicator: true,
        id: "dogbreedpicker"
    });
    $.__views.dogbreedrow.add($.__views.dogbreedpicker);
    $.__views.puppyrow = Ti.UI.createTableViewRow({
        height: "60dp",
        id: "puppyrow"
    });
    __alloyId1.push($.__views.puppyrow);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.puppyrow.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Search Puppies?",
        width: "80%",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createSwitch({
        top: "5dp",
        bottom: "5dp",
        value: false,
        width: "80%",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    changepickerPuppy ? $.__views.__alloyId7.addEventListener("change", changepickerPuppy) : __defers["$.__views.__alloyId7!change!changepickerPuppy"] = true;
    $.__views.puppybreedrow = Ti.UI.createView({
        id: "puppybreedrow",
        width: "50%",
        left: "50%",
        visible: "false"
    });
    $.__views.puppyrow.add($.__views.puppybreedrow);
    $.__views.puppybreedpicker = Ti.UI.createPicker({
        bottom: "2dp",
        visibleItems: 3,
        width: "100%",
        selectionIndicator: true,
        id: "puppybreedpicker"
    });
    $.__views.puppybreedrow.add($.__views.puppybreedpicker);
    $.__views.catrow = Ti.UI.createTableViewRow({
        height: "60dp",
        id: "catrow"
    });
    __alloyId1.push($.__views.catrow);
    $.__views.__alloyId8 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        layout: "vertical",
        id: "__alloyId8"
    });
    $.__views.catrow.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Search Cats?",
        width: "80%",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createSwitch({
        top: "5dp",
        bottom: "5dp",
        value: false,
        width: "80%",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    changepickerCat ? $.__views.__alloyId10.addEventListener("change", changepickerCat) : __defers["$.__views.__alloyId10!change!changepickerCat"] = true;
    $.__views.catbreedrow = Ti.UI.createView({
        id: "catbreedrow",
        width: "50%",
        left: "50%",
        visible: "false"
    });
    $.__views.catrow.add($.__views.catbreedrow);
    $.__views.catbreedpicker = Ti.UI.createPicker({
        bottom: "2dp",
        visibleItems: 3,
        width: "100%",
        selectionIndicator: true,
        id: "catbreedpicker"
    });
    $.__views.catbreedrow.add($.__views.catbreedpicker);
    $.__views.kittenrow = Ti.UI.createTableViewRow({
        height: "60dp",
        id: "kittenrow"
    });
    __alloyId1.push($.__views.kittenrow);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: "50%",
        left: "0%",
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.kittenrow.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp",
            fontWeight: "normal"
        },
        text: "Search Kittens?",
        width: "80%",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createSwitch({
        top: "5dp",
        bottom: "5dp",
        value: false,
        width: "80%",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    changepickerKitten ? $.__views.__alloyId13.addEventListener("change", changepickerKitten) : __defers["$.__views.__alloyId13!change!changepickerKitten"] = true;
    $.__views.kittenbreedrow = Ti.UI.createView({
        id: "kittenbreedrow",
        width: "50%",
        left: "50%",
        visible: "false"
    });
    $.__views.kittenrow.add($.__views.kittenbreedrow);
    $.__views.kittenbreedpicker = Ti.UI.createPicker({
        bottom: "2dp",
        visibleItems: 3,
        width: "100%",
        selectionIndicator: true,
        id: "kittenbreedpicker"
    });
    $.__views.kittenbreedrow.add($.__views.kittenbreedpicker);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "__alloyId14"
    });
    __alloyId1.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createButton({
        width: "80%",
        top: "10dp",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        title: "Search",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    openMaster ? $.__views.__alloyId15.addEventListener("click", openMaster) : __defers["$.__views.__alloyId15!click!openMaster"] = true;
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId16"
    });
    __alloyId1.push($.__views.__alloyId16);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        data: __alloyId1,
        id: "__alloyId0"
    });
    $.__views.genericWin.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var DogbreedArray = [];
    var pickerRow = Ti.UI.createPickerRow({
        title: "--ALL--"
    });
    DogbreedArray.push(pickerRow);
    _.each(dogdata, function(stats) {
        var pickerRow = Ti.UI.createPickerRow({
            title: stats.breed
        });
        DogbreedArray.push(pickerRow);
    });
    $.dogbreedpicker.add(DogbreedArray);
    var PuppybreedArray = [];
    var pickerRow = Ti.UI.createPickerRow({
        title: "--ALL--"
    });
    PuppybreedArray.push(pickerRow);
    _.each(puppydata, function(stats) {
        var pickerRow = Ti.UI.createPickerRow({
            title: stats.breed
        });
        PuppybreedArray.push(pickerRow);
    });
    $.puppybreedpicker.add(PuppybreedArray);
    var KittenbreedArray = [];
    var pickerRow = Ti.UI.createPickerRow({
        title: "--ALL--"
    });
    KittenbreedArray.push(pickerRow);
    _.each(kittendata, function(stats) {
        var pickerRow = Ti.UI.createPickerRow({
            title: stats.breed
        });
        KittenbreedArray.push(pickerRow);
    });
    $.kittenbreedpicker.add(KittenbreedArray);
    var CatbreedArray = [];
    var pickerRow = Ti.UI.createPickerRow({
        title: "--ALL--"
    });
    CatbreedArray.push(pickerRow);
    _.each(catdata, function(stats) {
        var pickerRow = Ti.UI.createPickerRow({
            title: stats.breed
        });
        CatbreedArray.push(pickerRow);
    });
    $.catbreedpicker.add(CatbreedArray);
    __defers["$.__views.genericWin!open!focusTextField"] && $.__views.genericWin.addEventListener("open", focusTextField);
    __defers["$.__views.__alloyId4!change!changepickerDog"] && $.__views.__alloyId4.addEventListener("change", changepickerDog);
    __defers["$.__views.__alloyId7!change!changepickerPuppy"] && $.__views.__alloyId7.addEventListener("change", changepickerPuppy);
    __defers["$.__views.__alloyId10!change!changepickerCat"] && $.__views.__alloyId10.addEventListener("change", changepickerCat);
    __defers["$.__views.__alloyId13!change!changepickerKitten"] && $.__views.__alloyId13.addEventListener("change", changepickerKitten);
    __defers["$.__views.__alloyId15!click!openMaster"] && $.__views.__alloyId15.addEventListener("click", openMaster);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;