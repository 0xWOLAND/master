import logo from './logo.svg';
import './App.css';
import Intro from "./components/intro"
import Steps from "./components/steps"
import Signup from "./components/signup"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
// TODO: Add SDKs for Firebase products that you want to use
function App() {

  return (
   <div id="app_container">
     <Intro />
     <Steps />
     <Signup />
     <Footer />
   </div>
  );
}

export default App;
