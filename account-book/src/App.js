import "./App.css";
import Dropdown from "./components/Dropdown";
import Main from "./components/Main";

function App() {
  const options = [
    { label: "식료품", value: "grocery" },
    { label: "교통비", value: "transport" },
    { label: "기타", value: "etc" },
  ];
  return (
    <div className="App">
      <Main />
      <Dropdown options={options} />
    </div>
  );
}

export default App;
