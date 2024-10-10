import Header from "../components/Header";
import Section from "../components/Section";
import Button from "../components/Button";
import MiniBalance from "../components/MiniBalance";
import { useState } from "react";
import LoanAmount from "../components/LoanAmount";
import { useDispatch, useSelector } from "react-redux";
import { loan, payLoan } from "../slices/accountSlice";
import { useNavigate } from "react-router-dom";

const Loan = () => {
  const dispatch = useDispatch();
  const loans = useSelector((state) => state.account.loan);
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");

  function handleClick() {
    dispatch(payLoan());
  }

  function takeLoan() {
    dispatch(loan(amount));
    setAmount("");
    navigate("/home");
  }

  return (
    <Section>
      <Header title="loan" />

      <div className="loan-services">
        <div>
          <MiniBalance />
          <LoanAmount />
        </div>
        <div className="take-loan-container">
          {loans === 0 && (
            <>
              <input
                placeholder="set amount"
                type="number"
                value={amount}
                className="name"
                onChange={(e) => setAmount(+e.target.value)}
              />
              <Button
                button
                type="primary"
                name="take loan"
                onClick={takeLoan}
              />
            </>
          )}
        </div>

        <Button button type="secondary" name="pay loan" onClick={handleClick} />
      </div>
    </Section>
  );
};

export default Loan;
