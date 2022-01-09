const {
  createEmployee,
  getAllEmployee,
} = require('../controllers/empController');

const router = require('express').Router();

router.route('/add-emp').post(createEmployee);
router.route('/emp/:id').get(getAllEmployee);

module.exports = router;
