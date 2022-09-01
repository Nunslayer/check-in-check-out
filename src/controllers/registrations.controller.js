const { Registrations } = require('../models/Registrations.model');

const getAllRegisters = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();
    res.status(200).json({
      status: 'success',
      data: { registrations },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegisterById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registrations.findOne({ where: { id } });
    if (!registration)
      return res.status(404).json({
        status: 'not found',
        message: `Not found register with Id ${id}`,
      });
    res.status(200).json({
      status: 'success',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const createNewRegister = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newRegister = await Registrations.create({
      entranceTime,
    });
    res.status(201).json({
      status: 'success',
      data: { newRegister },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegisterById = async (req, res) => {
  try {
    const { id } = req.params;
    const { exitTime } = req.body;
    const registration = await Registrations.findOne({
      where: {
        id,
      },
    });
    if (!registration)
      return res.status(404).json({
        status: 'not found',
        message: `Not found register with Id ${id}`,
      });
    if (registration.status !== 'working')
      return res.status(404).json({
        status: 'error',
        message: `status of register with Id ${id} is ${registration.status}`,
      });
    await registration.update({
      exitTime,
      status: 'out',
    });
    res.status(200).json({
      status: 'success',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegisterById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registrations.findOne({
      where: {
        id,
      },
    });
    if (!registration)
      return res.status(404).json({
        status: 'not found',
        message: `Not found register with Id ${id}`,
      });
    await registration.update({
      status: 'cancelled',
    });
    res.status(200).json({
      status: 'success',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegisters,
  getRegisterById,
  createNewRegister,
  updateRegisterById,
  deleteRegisterById,
};
