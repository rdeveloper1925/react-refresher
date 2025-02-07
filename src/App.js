import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Col } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import ContactScreen from "./Screens/ContactScreen";
import CNav from "./Components/Nav";
import { Routes, Route, Outlet, useNavigate, Link } from "react-router-dom";
import CardScreen from "./Screens/CardScreen";
import SearcherScreen from "./Screens/SearcherScreen";
import FakeProfileScreen from "./Screens/FakeProfileScreen";
import TodoScreen from "./Screens/TodoScreen";
import ContextScreen from "./Screens/ContextScreen";
import FormikScreen from "./Screens/FormikScreen";
import StudentsScreen from "./Screens/StudentsScreen";
import UsersScreen from "./Screens/UsersScreen";
import MapsScreen from "./Screens/MapsScreen";
import bgImage from "./Images/background.jpg";

function App() {
  return (
    <Col md="12" xs="12" style={{backgroundImage: {bgImage}}}>
      <CNav />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/about" exact element={<AboutScreen />} />
        <Route path="/contact" exact element={<ContactScreen />} />
        <Route path="/searcher" exact element={<SearcherScreen />} />
        <Route path="/fake-profile" exact element={<FakeProfileScreen />} />
        <Route path="/todo" exact element={<TodoScreen />} />
        <Route path="/card/:user" exact element={<CardScreen />} />
        <Route path="/context" exact element={<ContextScreen />} />
        <Route path="/formik" exact element={<FormikScreen />} />
        <Route path="/students-app" exact element={<StudentsScreen />} />
        <Route path="/users" exact element={<UsersScreen />} />
        <Route path="/maps" exact element={<MapsScreen/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Outlet />
    </Col>
  );
}

const PageNotFound = (props) => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <Container>
      <h1>Oops! sorry Could not find your page.</h1>
      <br />
      <h4>
        Click <Link to="/">here</Link> here to go back. or you will be
        redirected after 3s
      </h4>
    </Container>
  );
};

export default App;
