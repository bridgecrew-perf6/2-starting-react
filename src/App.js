import Hello from "./Hello";

function App() {
  let student = { name: "Nomi", age: 33 };
  return <Hello {...student}></Hello>;
}

export default App;
