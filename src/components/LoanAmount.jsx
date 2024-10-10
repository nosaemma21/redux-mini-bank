import { useSelector } from "react-redux";

const LoanAmount = () => {
  const loan = useSelector((state) => state.account.loan);

  return (
    <h4 className="mini-balance">Loan: {loan.toLocaleString("en-US")}$</h4>
  );
};

export default LoanAmount;
