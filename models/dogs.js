module.exports = function(sequelize, DataTypes) {
  var Dogs = sequelize.define("Dogs", {
    eyeColorOne: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    eyeColorTwo: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    coatColorOne: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    coatColorTwo: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    tailLengthOne: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    tailLengthTwo: {type: DataTypes.STRING,validate: {len: [1, 1]}},    
    tongueOne: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    tongueTwo: {type: DataTypes.STRING,validate: {len: [1, 1]}},    
    sexOne: {type: DataTypes.STRING,validate: {len: [1, 1]}},
    sexTwo: {type: DataTypes.STRING,validate: {len: [1, 1]}},    
    genoType: {type: DataTypes.STRING,validate: {len: [8, 8]}}
    huskyImage: {type: DataTypes.STRING}
  });
  return Dogs;
};