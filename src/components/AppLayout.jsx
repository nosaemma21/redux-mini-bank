import { Outlet } from "react-router-dom";
import Logo from "./Logo";

const AppLayout = () => {
  return (
    <main className="app">
      <h3 className="header">REDUX MINI BANK</h3>

      <div className="functions">
        <Logo />
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
