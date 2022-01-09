const Employee = require('../models/empModel');

exports.createEmployee = async (req, res) => {
  const { name, email, department, joiningDate } = req.body;
  try {
    const employee = await Employee.create({
      name,
      email,
      department,
      joiningDate,
    });
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employees = await Employee.findById(id);
    res.status(200).json({
      success: true,
      data: employees,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
