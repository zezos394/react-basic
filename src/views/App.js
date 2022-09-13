import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import ListToDo from "./TodoApp/ListToDo";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import About from "./About/About";

function App() {
  return (
    // JSX here
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
