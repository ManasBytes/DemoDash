import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import {
  getFinancialMetrics,
  updateFinancialMetrics,
  getDailyExpenses,
  addDailyExpense,
  getInvestmentTarget,
  createInvestmentTarget,
  updateInvestmentTarget
} from '../controllers/financialController.js';

const router = express.Router();

// Financial Metrics Routes
router.get('/financial-metrics', auth, getFinancialMetrics);
router.put('/financial-metrics', auth, updateFinancialMetrics);

// Daily Expenses Routes
router.get('/daily-expenses', auth, getDailyExpenses);
router.post('/daily-expenses', auth, addDailyExpense);

// Investment Targets Routes
router.get('/investment-targets', auth, getInvestmentTarget);
router.post('/investment-targets', auth, createInvestmentTarget);
router.put('/investment-targets', auth, updateInvestmentTarget);

export default router;
