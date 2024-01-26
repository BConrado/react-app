import "../css/App.css";
const Person = (props: any) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: Doe</h2>
    <h3>Age: 30</h3>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name={'Bruno'} />
    </div>
  );
}

export default App;
