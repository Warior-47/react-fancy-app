
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
        Fancy App
      </h1>
      <img alt = "A nice looking image" src='https://www.wallpapertip.com/wmimgs/18-180233_nice-bird-new-wallpaper-hd-new-wallpaper-hd.jpg'></img>
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
