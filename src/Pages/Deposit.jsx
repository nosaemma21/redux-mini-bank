import Header from "../components/Header";
import Section from "../components/Section";
import { useState } from "react";
import MiniBalance from "../components/MiniBalance";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { deposit } from "../slices/accountSlice";
import LoanAmount from "../components/LoanAmount";
import { useNavigate } from "react-router-dom";

const Deposit = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    dispatch(deposit(amount));
    setAmount("");
    navigate("/home");
  }

  return (
    <Section>
      <Header title="Deposit" />

      <div className="withdrawal-services">
        <div>
          <MiniBalance />
          <LoanAmount />
        </div>

        <input
          type="number"
          value={amount}
          className="name"
          placeholder="set amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <Button button type="primary" name="deposit" onClick={handleClick} />
      </div>
    </Section>
  );
};

export default Deposit;
