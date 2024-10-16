import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/invite' component={() => {
          window.location.href = "https://discord.com/oauth2/authorize?client_id=1156619696339177525&permissions=40407068437953&integration_type=0&scope=bot+applications.commands";
        }} />
        <Route exact path='/support'  component={() => {
          window.location.href = "https://discord.gg/aware";
        }}/>
        <Route exact path='/docs'  component={() => {
          window.location.href = "https://docs.gravebot.xyz/";
        }}/>
        <Route path='/home'>
          <div className="mainapp">
            <Navbar />
            <Home />
          </div>
        </Route>
        <Route path='/' ><Redirect to='/home' /></Route>
      </Switch>
    </>
  );
}

export default App;
