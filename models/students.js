module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    student_Id: {type: DataTypes.INTEGER(10).ZEROFILL, primaryKey: true, validate: {notNull: true}},
    student_Email: {type: DataTypes.STRING, validate: {isEmail: true, notNull: true}},
    student_Name: {type: DataTypes.STRING, validate: {notNull: true}},
    student_Hour: {type: DataTypes.INTEGER(1), validate: {notNull: true}}, //min max 1-7
    student_TeacherName: {type: DataTypes.STRING, validate: {notNull: true}},
    initial_Parent: {type: DataTypes.INTEGER},
    first_Mate: {type: DataTypes.INTEGER},    
    first_Offspring: {type: DataTypes.INTEGER},
    first_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},    
    first_HuskyImage: {type: DataTypes.STRING},        
    first_createdAt:     
    second_Parent:  {type: DataTypes.INTEGER},    
    second_Offspring: {type: DataTypes.INTEGER},        
    second_Genotype:        
    second_HuskyImage:    
    second_createdAt:                 
    third_Parent:  {type: DataTypes.INTEGER},    
    third_Offspring: {type: DataTypes.INTEGER},        
    third_Genotype:        
    third_HuskyImage:        
    third_createdAt:         
  });
  return Students;
};