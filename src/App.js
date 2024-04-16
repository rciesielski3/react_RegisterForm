import Modal from "react-modal";
import RegisterForm from "./components/Form/RegisterForm";
import "./index.css";

Modal.setAppElement("#root");

const handleSubmitForm = (formData) => {
  console.log("Przetworzone dane formularza:", formData);
};

const App = () => {
  return (
    <div>
      <h1>Formularz zgłoszeniowy na kurs programowania</h1>
      <RegisterForm onSubmit={handleSubmitForm} />
    </div>
  );
};

export default App;
