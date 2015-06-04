function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openCriteria() {
        var controller = Alloy.createController("criteria");
        var win = controller.getView();
        Alloy.Globals.navgroup.openWindow(win);
    }
    function openDonate() {
        var controller = Alloy.createController("donation");
        var win = controller.getView();
        Alloy.Globals.navgroup.openWindow(win);
    }
    function openSurvey() {
        var controller = Alloy.createController("survey");
        var win = controller.getView();
        Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
        barColor: "#4360AB",
        backgroundColor: "#69D2E7",
        id: "genericWin",
        title: "Welcome to the SAVE App",
        modal: "true"
    });
    var __alloyId19 = [];
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId20"
    });
    __alloyId19.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: "33%",
        left: "0%",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        image: "/images/save.png",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        width: "33%",
        left: "33%",
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.name = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "17dp",
            fontWeight: "bold"
        },
        id: "name",
        text: "SAVE"
    });
    $.__views.__alloyId23.add($.__views.name);
    $.__views.__alloyId24 = Ti.UI.createView({
        width: "34%",
        left: "66%",
        id: "__alloyId24"
    });
    $.__views.__alloyId20.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        image: "/images/save.png",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId26"
    });
    __alloyId19.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createButton({
        width: "80%",
        top: "5dp",
        bottom: "5dp",
        borderColor: "#4360AB",
        borderRadius: "10",
        borderWidth: "2",
        backgroundColor: "#A7B073",
        color: "white",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        title: "Find your Pet",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    openCriteria ? $.__views.__alloyId27.addEventListener("click", openCriteria) : __defers["$.__views.__alloyId27!click!openCriteria"] = true;
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId28"
    });
    __alloyId19.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createButton({
        width: "80%",
        top: "5dp",
        bottom: "5dp",
        borderColor: "#4360AB",
        borderRadius: "10",
        borderWidth: "2",
        backgroundColor: "#A7B073",
        color: "white",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        title: "Donate",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    openDonate ? $.__views.__alloyId29.addEventListener("click", openDonate) : __defers["$.__views.__alloyId29!click!openDonate"] = true;
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId30"
    });
    __alloyId19.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createButton({
        width: "80%",
        top: "5dp",
        bottom: "5dp",
        borderColor: "#4360AB",
        borderRadius: "10",
        borderWidth: "2",
        backgroundColor: "#A7B073",
        color: "white",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        title: "Volunteer",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    openSurvey ? $.__views.__alloyId31.addEventListener("click", openSurvey) : __defers["$.__views.__alloyId31!click!openSurvey"] = true;
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId32"
    });
    __alloyId19.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "17dp",
            fontWeight: "bold"
        },
        text: "Contact Us",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId34"
    });
    __alloyId19.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "17dp",
            fontWeight: "bold"
        },
        text: "Email: save@gmail.com",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId36"
    });
    __alloyId19.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "17dp",
            fontWeight: "bold"
        },
        text: "Phone number: 1-609-###-###",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId18 = Ti.UI.createTableView({
        data: __alloyId19,
        id: "__alloyId18"
    });
    $.__views.genericWin.add($.__views.__alloyId18);
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.genericWin,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navgroup = $.index;
    $.index.open();
    __defers["$.__views.__alloyId27!click!openCriteria"] && $.__views.__alloyId27.addEventListener("click", openCriteria);
    __defers["$.__views.__alloyId29!click!openDonate"] && $.__views.__alloyId29.addEventListener("click", openDonate);
    __defers["$.__views.__alloyId31!click!openSurvey"] && $.__views.__alloyId31.addEventListener("click", openSurvey);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;