import Header from "../components/Header";
import Section from "../components/Section";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../slices/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.userName);

  const handleUpdate = (e) => {
    dispatch(updateName(e.target.value));
  };

  return (
    <Section>
      <Header title={"Sign Up"} />

      <div className="container">
        <input
          className="name"
          type="name"
          placeholder="First Name"
          value={name}
          onChange={handleUpdate}
        />
        <Button link to="./home" type="primary" name="Sign up &rarr;" />
      </div>
    </Section>
  );
}

export default SignUp;
