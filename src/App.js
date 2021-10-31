import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import Details from './pages/Details/Details';
import PrivateRoute from './route/PrivateRoute';
import Travels from './pages/Travels/Travels';
import MyOrder from './pages/MyOrder/MyOrder';
import ManageOrder from './pages/ManageOrder/ManageOrder';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <PrivateRoute path='/contact'>
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path='/myorder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/travels'>
            <Travels></Travels>
          </PrivateRoute>
          <PrivateRoute exact path='/manageorder'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute path='/order/:id'>
            <Details></Details>
          </PrivateRoute>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
