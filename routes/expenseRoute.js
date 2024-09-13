const express = require('express');
const { addExpense, deleteExpense, getExpenses, updateExpense } = require('../controllers/expenseController.js');
const authenticate = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, addExpense);
router.delete('/:id', authenticate, deleteExpense);
router.get('/', authenticate, getExpenses);
router.put('/:id', authenticate, updateExpense )

module.exports = router;
