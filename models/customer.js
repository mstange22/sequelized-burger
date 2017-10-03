module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { notEmpty: true}
        },
        burgers_eaten: {
          type: DataTypes.INTEGER,
          defaultValue: 0 
        }
      }, {

        timestamps: false
    });

    return Customer;
}