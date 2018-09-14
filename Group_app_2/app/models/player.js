var orm = require("../config/orm.js");
var player = {
    selectAll: function (cb) {
        orm.selectAll("players", function (res) {
            cb(res);
        });
    },
    selectOne: function (val, cb) {
        orm.selectOne(val, function (res) {
            cb(res)
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("players", cols, vals, function (res) {
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