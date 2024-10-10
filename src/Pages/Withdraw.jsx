import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Header from "../components/Header";
import MiniBalance from "../components/MiniBalance";
import Section from "../components/Section";
import { useState } from "react";
import { withdraw } from "../slices/accountSlice";
import LoanAmount from "../components/LoanAmount";
import { useNavigate } from "react-router-dom";

function Withdraw() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    dispatch(withdraw(amount));
    setAmount("");
    navigate("/home");
  }

  return (
    <Section>
      <Header title="withdraw" />

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
          onChange={(e) => setAmount(+e.target.value)}
        />

        <Button button type="primary" name="withdraw" onClick={handleClick} />
      </div>
    </Section>
  );
}

export default Withdraw;
