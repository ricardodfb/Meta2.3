const models = require('./models');

models.Persona.findAll()
    .then(r => {
        r.forEach(persona => {
            console.log(persona.dataValues);
        });
        models.sequelize.close();
    });

models.Proyecto.findAll()
    .then(r => {
        r.forEach(proyecto => {
            console.log(proyecto.dataValues);
        });
        models.sequelize.close();
    });