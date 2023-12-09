import { useState, createContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export const InputContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false)
  const [username, setUsername] = useState("moeidejaz");

  // function to handle inputs and submits
  function handleInput(e) {
    setInput(e.target.value);
    setError(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(input);
    setInput("");
  }
  //values to be passed in context
  const values = {
    input,
    error,
    setError,
    username,
    setUsername,
    handleInput,
    handleSubmit,
  };
  return (
    <>
      <InputContext.Provider value={values}>
        <Header />
        <Main />
        <Footer />
      </InputContext.Provider>
    </>
  );
}

export default App;
