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
    first_createdAt: {type: DataTypes.DATE},  

    second_Parent: {type: DataTypes.INTEGER},    
    second_Offspring: {type: DataTypes.INTEGER},        
    second_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},
    second_HuskyImage: {type: DataTypes.STRING},
    second_createdAt: {type: DataTypes.DATE},  

    third_Parent: {type: DataTypes.INTEGER},    
    third_Offspring: {type: DataTypes.INTEGER},        
    third_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},
    third_HuskyImage: {type: DataTypes.STRING},     
    third_createdAt: {type: DataTypes.DATE},

    fourth_Mate: {type: DataTypes.INTEGER},    
    fourth_Offspring: {type: DataTypes.INTEGER},
    fourth_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},    
    fourth_HuskyImage: {type: DataTypes.STRING},        
    fourth_createdAt: {type: DataTypes.DATE},

    fifth_Mate: {type: DataTypes.INTEGER},    
    fifth_Offspring: {type: DataTypes.INTEGER},
    fifth_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},    
    fifth_HuskyImage: {type: DataTypes.STRING},        
    fifth_createdAt: {type: DataTypes.DATE},

    sixth_Mate: {type: DataTypes.INTEGER},    
    sixth_Offspring: {type: DataTypes.INTEGER},
    sixth_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},    
    sixth_HuskyImage: {type: DataTypes.STRING},        
    sixth_createdAt: {type: DataTypes.DATE},

    seventh_Mate: {type: DataTypes.INTEGER},    
    seventh_Offspring: {type: DataTypes.INTEGER},
    seventh_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},    
    seventh_HuskyImage: {type: DataTypes.STRING},        
    seventh_createdAt: {type: DataTypes.DATE},

    eighth_Mate: {type: DataTypes.INTEGER},    
    eighth_Offspring: {type: DataTypes.INTEGER},
    eighth_Genotype: {type: DataTypes.INTEGER, validate: {len: [8, 8]}},    
    eighth_HuskyImage: {type: DataTypes.STRING},        
    eightht_createdAt: {type: DataTypes.DATE},
  });
  return Students;
};
