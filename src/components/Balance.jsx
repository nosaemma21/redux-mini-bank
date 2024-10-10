import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.account.balance);

  return <h2 className="balance">{balance.toLocaleString("en-US")} $</h2>;
};

export default Balance;
