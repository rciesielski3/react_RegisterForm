import Modal from "react-modal";
import RegisterForm from "./components/Form/RegisterForm";
import "./index.css";

Modal.setAppElement("#root");

const App = () => {
  return (
    <div>
      <h1>Application form for a programming course</h1>
      <RegisterForm />
    </div>
  );
};

export default App;
