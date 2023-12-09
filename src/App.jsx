import { useState, createContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export const InputContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("moeidejaz");

  // function to handle inputs and submits
  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(input);
    setInput("");
  }
  //values to be passed in context
  const values = {
    input,
    username,
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
