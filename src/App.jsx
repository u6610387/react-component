import "./App.css";
import Greetings from "/Users/him/Desktop/webdev/Week7/react-component/src/component/Greetings.jsx";
import User from "/Users/him/Desktop/webdev/Week7/react-component/src/component/User.jsx";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Greetings />
        <User name="Kitirat Pisithaporn" />
      </div>
    </div>
  );
}

export default App;