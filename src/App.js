import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){ // this is a component named Person
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
  <div style={{border: '2px solid yellow', margin: '10px', padding: '10px'}}>
    <h1>Name: Shahrukh Khan</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
