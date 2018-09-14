module.exports = function ()
var Store = sequelize.define("Store", {
    item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        tyoe: DataTypes.TEXT,
        allowNull: false,
    }
})