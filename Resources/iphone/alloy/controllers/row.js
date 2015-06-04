function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
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
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        height: "65dp",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.pet_name = Ti.UI.createLabel({
        top: "3dp",
        left: "10dp",
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        id: "pet_name"
    });
    $.__views.row.add($.__views.pet_name);
    $.__views.pet_breed = Ti.UI.createLabel({
        top: "20dp",
        left: "20dp",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "pet_breed"
    });
    $.__views.row.add($.__views.pet_breed);
    $.__views.pet_gender = Ti.UI.createLabel({
        top: "35dp",
        left: "30dp",
        font: {
            fontSize: "9dp",
            fontWeight: "normal"
        },
        id: "pet_gender"
    });
    $.__views.row.add($.__views.pet_gender);
    $.__views.pet_color = Ti.UI.createLabel({
        id: "pet_color"
    });
    $.__views.row.add($.__views.pet_color);
    $.__views.pet_age = Ti.UI.createLabel({
        top: "45dp",
        left: "35dp",
        font: {
            fontSize: "8dp",
            fontWeight: "bold"
        },
        id: "pet_age"
    });
    $.__views.row.add($.__views.pet_age);
    $.__views.pet_photo = Ti.UI.createImageView({
        id: "pet_photo"
    });
    $.__views.row.add($.__views.pet_photo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.petFullName = args.pet_name_from_master;
    $.row.petType = args.pet_type;
    $.pet_name.text = args.pet_name_from_master;
    $.pet_breed.text = args.pet_breed_from_master;
    $.pet_gender.text = args.pet_gender_from_master;
    $.pet_age.text = args.pet_age_from_master;
    $.pet_photo.image = args.pet_photo_from_master;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;