const models = require('./models');

async function demoAsociacionMuchosAMuchos() {
  let persona = await models.Persona.findOne({
    where: {
      rfc: "FEBR030330"
    }
  });

  let proyectos = await models.Proyecto.findAll();

  console.log(
    "Datos de la persona:",
    persona.id,
    persona.nombre,
    persona.rfc,
    persona.cantidadDonada
  );

  // Asociar todos los proyectos a la persona
  for (let i = 0; i < proyectos.length; i++) {
    let proyecto = proyectos[i];
    await persona.addProyectos(proyecto, { through: { cantidadDonada: 30000 } });
  }

  // Desplegar los datos de los proyectos asociados a la persona
  let proyectosAsociados = await persona.getProyectos();
  console.log("Proyectos asociados a la persona con RFC:", persona.rfc);
  proyectosAsociados.forEach((proyecto) => {
    console.log(proyecto.nombre, proyecto.idProyecto, proyecto.descripcion);
  });

  // Al hacer la asociación de persona con proyecto, se puede acceder
  // al dato de la persona a través del proyecto
  let proyectoReforestar = await models.Proyecto.findOne({ where: { nombre: "Reforestación Amazonas" } });
  let personasReforestar = await proyectoReforestar.getPersonas();
  console.log("Personas de POO en el proyecto:");
  personasReforestar.forEach((e) => {
    console.log(e.nombre, e.rfc);
  });

  models.sequelize.close();
}

demoAsociacionMuchosAMuchos();