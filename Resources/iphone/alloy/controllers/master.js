function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openDetail(e) {
        var controller = Alloy.createController("detail", {
            name: e.row.petFullName,
            petType: e.row.petType
        });
        var win = controller.getView();
        Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
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
        backgroundColor: "#fff",
        id: "genericWin",
        title: "Dogs for Adoption"
    });
    $.__views.genericWin && $.addTopLevelView($.__views.genericWin);
    $.__views.__alloyId38 = Ti.UI.createSearchBar({
        id: "__alloyId38"
    });
    $.__views.pettable = Ti.UI.createTableView({
        search: $.__views.__alloyId38,
        id: "pettable",
        filterAttribute: "id"
    });
    $.__views.genericWin.add($.__views.pettable);
    openDetail ? $.__views.pettable.addEventListener("click", openDetail) : __defers["$.__views.pettable!click!openDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var petdataArray = [];
    _.each(dogdata, function(stats, name) {
        if ("--ALL--" === args.dogbreed || args.dogbreed === stats.breed) {
            var controller = Alloy.createController("row", {
                pet_name_from_master: name,
                pet_breed_from_master: stats.breed,
                pet_gender_from_master: stats.gender,
                pet_age_from_master: stats.age,
                pet_type: "dog",
                pet_photo_from_master: stats.photo
            });
            var win = controller.getView();
            petdataArray.push(win);
        }
    });
    _.each(puppydata, function(stats, name) {
        if ("--ALL--" === args.puppybreed || args.puppybreed === stats.breed) {
            var controller = Alloy.createController("row", {
                pet_name_from_master: name,
                pet_breed_from_master: stats.breed,
                pet_gender_from_master: stats.gender,
                pet_age_from_master: stats.age,
                pet_type: "puppy",
                pet_photo_from_master: stats.photo
            });
            var win = controller.getView();
            petdataArray.push(win);
        }
    });
    _.each(catdata, function(stats, name) {
        if ("--ALL--" === args.catbreed || args.catbreed === stats.breed) {
            var controller = Alloy.createController("row", {
                pet_name_from_master: name,
                pet_breed_from_master: stats.breed,
                pet_gender_from_master: stats.gender,
                pet_age_from_master: stats.age,
                pet_type: "cat",
                pet_photo_from_master: stats.photo
            });
            var win = controller.getView();
            petdataArray.push(win);
        }
    });
    _.each(kittendata, function(stats, name) {
        if ("--ALL--" === args.kittenbreed || args.kittenbreed === stats.breed) {
            var controller = Alloy.createController("row", {
                pet_name_from_master: name,
                pet_breed_from_master: stats.breed,
                pet_gender_from_master: stats.gender,
                pet_age_from_master: stats.age,
                pet_type: "kitten",
                pet_photo_from_master: stats.photo
            });
            var win = controller.getView();
            petdataArray.push(win);
        }
    });
    $.pettable.setData(petdataArray);
    __defers["$.__views.pettable!click!openDetail"] && $.__views.pettable.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;