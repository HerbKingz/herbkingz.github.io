const Stat = require('../models/Stat');
exports.getLatest = async (_, res) => {
  const stat = await Stat.findOne().sort({ date: -1 });
  res.json(stat);
};
