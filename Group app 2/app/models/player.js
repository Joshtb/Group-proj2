var orm = require("../config/orm.js");
var player = {
    selectAll: function (cb) {
        orm.selectAll("players", function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("players", objColVals, condition, function (res) {
            cb(res);
        });
    }
};
module.exports = player;