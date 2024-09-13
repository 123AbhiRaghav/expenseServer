const Expense = require('../models/expense.js');

exports.addExpense = async (req, res) => {
  try {
    const { description, amount, category,date, paymentMethod, receipt } = req.body;
    
    const userId = req.user.id;
    const newExpense = new Expense({
      description,
      amount,
      category,
      userId,
      paymentMethod,
      receipt,
      date
    });
 
    await newExpense.save();
    res.status(201).json({ msg: 'Expense added successfully', book: newExpense });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
   const {id} = req.params;
   const userId = req.user.id;

   const expense = await Expense.findOneAndDelete({_id:id, userId});
   if(!expense){
    return res.status(404).json({msg:'Expense not found'});
   }
   res.status(200).json({msg:'Expense deleted successfully'});
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getExpenses = async (req, res) => {
  try{
    const userId = req.user.id;
    const expenses = await Expense.find({userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching Expenes' });
  }
};


exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params; // Expense ID from the URL parameter
    const { description, amount, category, paymentMethod, receipt, date } = req.body; // Data to update
    
    const userId = req.user.id; // Ensure this is set correctly by your authentication middleware

    // Find the expense by ID and ensure it belongs to the logged-in user
    const expense = await Expense.findOneAndUpdate(
      { _id: id, userId }, // Find expense by ID and userId
      { description, amount, category, paymentMethod, receipt, date }, // Data to update
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found or you do not have permission to update it' });
    }

    res.status(200).json({ msg: 'Expense updated successfully', expense });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
