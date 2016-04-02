module.exports = function(sequelize, DataTypes) {
  
  var User = sequelize.define('User', {
    email: {type: DataTypes.STRING, unique: true},
    name: {type:DataTypes.STRING, allowNull: false},
    password: DataTypes.STRING,
    role:{type:DataTypes.STRING, allowNull: false}
  }, {
    associate: function(models) {
      //User.hasMany(models.Business)
    }
  })

  
  return User
}