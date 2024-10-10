import { useSelector } from "react-redux";

const MiniBalance = () => {
  const balance = useSelector((state) => state.account.balance);

  return (
    <h4 className="mini-balance">
      Balance: {balance.toLocaleString("en-US")}$
    </h4>
  );
};

export default MiniBalance;
