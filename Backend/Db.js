import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: { type: String, required: true, unique: true },
  lastname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const FinancialMetricsSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  account_balance: { type: Number, default: 0 },
  reward_points: { type: Number, default: 0 },
  expense_score: { type: Number, default: 0 },
  updated_at: { type: Date, default: Date.now }
});

const DailyExpensesSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  month: { type: String, required: true, enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
  year: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

const InvestmentTargetsSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true }, 
  description: { type: String, required: true }, 
  start_date: { type: Date, required: true }, 
  end_date: { type: Date, required: true }, 
  target_amount: { type: Number, required: true },
  invested_amount: { type: Number, default: 0 },
  today_investment: { type: Number, default: 0 },
  month: { type: String, required: true, enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
  year: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
const FinancialMetrics = mongoose.model('FinancialMetrics', FinancialMetricsSchema);
const DailyExpenses = mongoose.model('DailyExpenses', DailyExpensesSchema);
const InvestmentTargets = mongoose.model('InvestmentTargets', InvestmentTargetsSchema);

export{ User, FinancialMetrics, DailyExpenses, InvestmentTargets };