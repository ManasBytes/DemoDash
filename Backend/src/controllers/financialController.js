import {FinancialMetrics, DailyExpenses, InvestmentTargets} from '../../Db.js';


async function getFinancialMetrics(req, res) {
  try {
    const metrics = await FinancialMetrics.findOne({ user_id: req.user_id });
    if (!metrics) {
      return res.status(404).json({ error: 'Financial metrics not found' });
    }
    res.json({
      account_balance: metrics.account_balance,
      reward_points: metrics.reward_points,
      expense_score: metrics.expense_score
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function updateFinancialMetrics(req, res) {
  try {
    const { account_balance, reward_points, expense_score } = req.body;
    let metrics = await FinancialMetrics.findOne({ user_id: req.user_id });
    if (!metrics) {
      metrics = new FinancialMetrics({ user_id: req.user_id });
    }
    metrics.account_balance = account_balance || metrics.account_balance;
    metrics.reward_points = reward_points || metrics.reward_points;
    metrics.expense_score = expense_score || metrics.expense_score;
    metrics.updated_at = Date.now();
    await metrics.save();
    res.json({ message: 'Financial metrics updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function getDailyExpenses(req, res) {
  try {
    const { year } = req.query;
    if (!year) {
      return res.status(400).json({ error: 'Year is required' });
    }
    const expenses = await DailyExpenses.find({ user_id: req.user_id, year })
      .select('month amount')
      .sort('month');
    res.json({ expenses });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function addDailyExpense(req, res) {
  try {
    const { amount, month, year } = req.body;
    if (!amount || !month || !year) {
      return res.status(400).json({ error: 'Amount, month, and year are required' });
    }
    const expense = new DailyExpenses({
      user_id: req.user_id,
      amount,
      month,
      year
    });
    await expense.save();
    res.status(201).json({ message: 'Daily expense added' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function getInvestmentTarget(req, res) {
  try {
    const { month, year } = req.query;
    if (!month || !year) {
      return res.status(400).json({ error: 'Month and year are required' });
    }
    const target = await InvestmentTargets.findOne({ user_id: req.user_id, month, year });
    if (!target) {
      return res.status(404).json({ error: 'Investment target not found' });
    }
    const percentage = (target.invested_amount / target.target_amount) * 100;
    res.json({
      title: target.title,
      description: target.description,
      start_date: target.start_date,
      end_date: target.end_date,
      target_amount: target.target_amount,
      invested_amount: target.invested_amount,
      today_investment: target.today_investment,
      percentage: percentage.toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function createInvestmentTarget(req, res) {
  try {
    const { target_amount, month, year } = req.body;
    if (!target_amount || !month || !year) {
      return res.status(400).json({ error: 'Target amount, month, and year are required' });
    }
    const target = new InvestmentTargets({
      user_id: req.user_id,
      target_amount,
      month,
      year
    });
    await target.save();
    res.status(201).json({ message: 'Investment target created' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function updateInvestmentTarget(req, res) {
  try {
    const { invested_amount, today_investment, month, year } = req.body;
    if (!month || !year) {
      return res.status(400).json({ error: 'Month and year are required' });
    }
    let target = await InvestmentTargets.findOne({ user_id: req.user_id, month, year });
    if (!target) {
      return res.status(404).json({ error: 'Investment target not found' });
    }
    target.invested_amount = invested_amount || target.invested_amount;
    target.today_investment = today_investment || target.today_investment;
    await target.save();
    res.json({ message: 'Investment target updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

export {
  getFinancialMetrics,
  updateFinancialMetrics,
  getDailyExpenses,
  addDailyExpense,
  getInvestmentTarget,
  createInvestmentTarget,
  updateInvestmentTarget
};
