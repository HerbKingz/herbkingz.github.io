const Clinic = require('../models/Clinic');
exports.getAll = async (_, res) => {
  const clinics = await Clinic.find();
  res.json(clinics);
};
