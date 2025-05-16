import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import AccountSummary from "./pages/AccountSummary"
import Goals from "./pages/Goals"
import Invest from "./pages/Invest"
import Learn from "./pages/Learn"
import Rewards from "./pages/Rewards"
import Support from "./pages/Support"
import Transactions from "./pages/Transactions";
import Expenses from "./pages/Expenses";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/settings" element={<Blank />} />
            <Route path="/account" element={<AccountSummary />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/support" element={<Support />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
