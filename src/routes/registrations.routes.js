const { Router } = require('express');
const {
  getAllRegisters,
  getRegisterById,
  createNewRegister,
  updateRegisterById,
  deleteRegisterById,
} = require('../controllers/registrations.controller');

const registrationsRouter = Router();

//Obtener todos los registros
registrationsRouter.get('/', getAllRegisters);

//Obtener un solo registro dado un id
registrationsRouter.get('/:id', getRegisterById);

//Crear un nuevo registro ( marcar la hora de entrada )
registrationsRouter.post('/', createNewRegister);

//Actualizar un registro ( marcar su hora de salida )
registrationsRouter.patch('/:id', updateRegisterById);

//Cancelar un registro
registrationsRouter.delete('/:id', deleteRegisterById);

module.exports = { registrationsRouter };
