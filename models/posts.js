module.exports = function (sequelize, DataTypes) {
    const Posts = sequelize.define("posts", {
        req_loc: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "error retrieving IP"
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true
    });
    return Posts;
};