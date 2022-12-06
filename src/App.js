
import './App.css';
function clicker() {
  return window.alert("A really nice view right in there")
}

function App() {
  return (
    <div>
      <title>
        My App
      </title>
      <h1>
        React Fancy App
      </h1>
      <img alt = "A nice looking image" src='https://i.pinimg.com/originals/ff/be/8b/ffbe8b2c96c7b69a5f1cd7c20637fd45.jpg'></img>
      <p>
        This is a brand new app created by combining bunch of react.
      </p>
      <div className= 'App'><button onClick= {clicker}>
        Clicky Button
      </button></div>
      
    </div>
  );
}

export default App;
