function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function submit() {
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Hello from Titanium";
        emailDialog.toRecipients = [ "animanis@hotmail.com", "iccha02@gmail.com", "beneh.mathew@gmail.com" ];
        emailDialog.messageBody = "Your interest in " + args.name + " is noted. We will get back to you shortly!";
        var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, stats.photo);
        emailDialog.addAttachment(f);
        emailDialog.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
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
    $.__views.detail = Ti.UI.createWindow({
        layout: "vertical",
        barColor: "lightgray",
        backgroundColor: "#fff",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.displayphoto = Ti.UI.createImageView({
        width: "75%",
        id: "displayphoto"
    });
    $.__views.detail.add($.__views.displayphoto);
    $.__views.displaybreed = Ti.UI.createLabel({
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "displaybreed"
    });
    $.__views.detail.add($.__views.displaybreed);
    $.__views.displaygender = Ti.UI.createLabel({
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "displaygender"
    });
    $.__views.detail.add($.__views.displaygender);
    $.__views.displayage = Ti.UI.createLabel({
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "displayage"
    });
    $.__views.detail.add($.__views.displayage);
    $.__views.displaysize = Ti.UI.createLabel({
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "displaysize"
    });
    $.__views.detail.add($.__views.displaysize);
    $.__views.displayweight = Ti.UI.createLabel({
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "displayweight"
    });
    $.__views.detail.add($.__views.displayweight);
    $.__views.displayabout = Ti.UI.createLabel({
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "displayabout"
    });
    $.__views.detail.add($.__views.displayabout);
    $.__views.__alloyId17 = Ti.UI.createButton({
        width: "80%",
        top: "10dp",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        title: "Ask about this pet",
        id: "__alloyId17"
    });
    $.__views.detail.add($.__views.__alloyId17);
    submit ? $.__views.__alloyId17.addEventListener("click", submit) : __defers["$.__views.__alloyId17!click!submit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var stats;
    "dog" === args.petType && (stats = dogdata[args.name]);
    "cat" === args.petType && (stats = catdata[args.name]);
    "puppy" === args.petType && (stats = puppydata[args.name]);
    "kitten" === args.petType && (stats = kittendata[args.name]);
    true && Alloy.isTablet ? $.detail.title = "PET NAME: " + args.name : true && Alloy.isHandheld && ($.detail.title = args.name);
    $.displaygender.text = "Gender: " + stats.gender;
    $.displaybreed.text = "Breed: " + stats.breed;
    $.displayage.text = "Age: " + stats.age;
    $.displaysize.text = "Size: " + stats.size;
    $.displayabout.text = "Details: " + stats.about;
    $.displayphoto.image = stats.photo;
    __defers["$.__views.__alloyId17!click!submit"] && $.__views.__alloyId17.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;