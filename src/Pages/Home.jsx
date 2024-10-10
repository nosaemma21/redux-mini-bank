import Button from "../components/Button";
import Header from "../components/Header";
import Section from "../components/Section";
import Balance from "../components/Balance";
import { useSelector } from "react-redux";
import LoanAmount from "../components/LoanAmount";

const Home = () => {
  const userName = useSelector((state) => state.user.userName);

  return (
    <Section>
      <Header title={`Welcome, ${userName}`} />
      <Balance />
      <LoanAmount />

      <div className="services">
        <Button link type="secondary" name="deposit" to="/deposit" />
        <Button link type="secondary" name="withdraw" to="/withdraw" />
        <Button link type="secondary" name="loan" to="/loan" />
      </div>
    </Section>
  );
};

export default Home;
