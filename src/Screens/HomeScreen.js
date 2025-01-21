//TODO: Rodney: refactor this to make more reusable components
import { Container, Image, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import routespic from "../Images/routes.png";
import contextpic from "../Images/context.png";
import MapsScreen from "./MapsScreen";

const HomeScreen = (props) => {
  return (
    <Container className="mt-2">
      <h3>Hello Welcome to my refresher. This is what i have learnt sofar</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4 className="m-0">Routing</h4>
          </Accordion.Header>
          <Accordion.Body>
            <RoutingContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4 className="m-0">Http Requests</h4>
          </Accordion.Header>
          <Accordion.Body>
            <HttpRequestsContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4 className="m-0">React Hooks Content</h4>
          </Accordion.Header>
          <Accordion.Body>
            <ReactHooksContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4 className="m-0">Recoil: an alternative to Redux</h4>
          </Accordion.Header>
          <Accordion.Body>
            <RecoilContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4 className="m-0">Formik: Efficient form management</h4>
          </Accordion.Header>
          <Accordion.Body>
            <FormikContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4 className="m-0">
              React Context: an alternative to Redux & recoil
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <ContextContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h4 className="m-0">React Context+Hooks</h4>
          </Accordion.Header>
          <Accordion.Body>
            <StudentsContent />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="m-0">React x Google maps</h4>
          </Accordion.Header>
          <Accordion.Body>
            <MapsContent />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

//Content: Routing content
const RoutingContent = () => (
  <>
    <p>
      See App.js to view some of the routing marvels i have developed. Here is a
      pic to go with it.
    </p>
    <p>
      You wrap the entire app in the browser router component then id all the
      routes required. In the image, CNav will be the nav bar and in there i use
      NavLink insted of Link component (in the nav area) to leverage the active
      class supplied to the link. The Link component also allows you to navigate
      within pages without having to refresh the screen. the famous react way
    </p>
    <p>
      According to the react-router 6, we use the element to display the
      different screens. I use the useNavigate() hook to redirect pages, the
      useParams() hook to read the params supplied in the url (see
      "/card/:user") route for this
    </p>
    <Image src={routespic} style={{ borderRadius: "15px" }} />
  </>
);

//Content: Http requests content
const HttpRequestsContent = () => (
  <p>
    Here, with the help of the axios library was able to make api requests to
    pixaby and in turn returned and displayed some images picked from the api.
    The images are loaded based on the user's query which is the main search
    bar.
    <br />
    Here i displayed what i learnt in terms of form control, inputs, submissions
    and state handling. Click here to get a feel of it
    <br />
    <br />
    <Button variant="warning">
      <Link to="/searcher" style={{ textDecoration: "none", color: "white" }}>
        Try the Searcher
      </Link>
    </Button>
  </p>
);

//Content: React hooks content
const ReactHooksContent = () => (
  <p>
    Here i finally figured out how to manipulate some react hooks to my
    advantage. Case in point; the elusive useEffect hook <br />
    The trick is to understand the different configurations of the useEffect
    hook as they mirror the different lifecycle methods componentDidMount,
    componentDidUpdate, and componentWillMount.
    <br />
    <br />
    <Button variant="success">
      <Link
        to="/fake-profile"
        style={{ textDecoration: "none", color: "white" }}
      >
        Try the Searcher
      </Link>
    </Button>
  </p>
);

//Content: Recoil Content
const RecoilContent = () => (
  <p>
    Here i demonstrate how to perform crud operations with recoil. Why recoil
    you as, well its so much easier than redux. Here, try out my todo
    application.
    <br />
    I have finally created the crud application i always wanted. I have used
    recoil, and formik to create, read, update and delete all in a single
    component. Take a look at my user management application.
    <br />
    <br />
    <br />
    <Button variant="primary" className="mx-3">
      <Link style={{ textDecoration: "none", color: "white" }} to="/todo">
        Todo App
      </Link>
    </Button>
    <Button variant="success" className="mx-3">
      <Link style={{ textDecoration: "none", color: "white" }} to="/users">
        User App
      </Link>
    </Button>
  </p>
);

//Content: Formik content
const FormikContent = () => (
  <p>
    So, today i found an efficient way to work with forms with a library calle
    formik.
    <br />
    It is packed with features including hussle free form validation, auto
    submission etc. I will build a small app using it to display shortly
    <br />
    <br />
    <Button variant="success">
      <Link to="/formik" style={{ textDecoration: "none", color: "white" }}>
        Try the Formik Form
      </Link>
    </Button>
  </p>
);

//Content: Context content
const ContextContent = () => (
  <>
    <p style={{ font: "victor mono italic" }}>
      With the use of context (which i personally currently prefer to redux) i
      can have controlled access to centrallized state and data sharing between
      props without having to use props. Trick is to create some state and then
      pass the state and its setter value as the initioal values of the context
      provider wrapping. From there, you can call both state and state setter
      from child components without prop dirlling. Now aint that neat!!
      <br />
      <br />
      <Button variant="success">
        <Link to="/context" style={{ textDecoration: "none", color: "white" }}>
          Try the Context App
        </Link>
      </Button>
    </p>
    <Image src={contextpic} style={{ borderRadius: "15px" }} />
  </>
);

//Content: Students content
const StudentsContent = () => (
  <>
    <p>
      So i finally found the perfect combo for using the context api with
      reducers. This will enable me completely eliminate state management
      libraries from my app at will. Recoil inclusive. Here is an app to go with
      it. Okay i just ended up practicing formik. Learnt a bunch of very
      interesting things. Check out the app i built that goes with it.
      <br />
      <br />
    </p>
    <Button variant="success" className="btn-md">
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to="/students-app"
      >
        View the student's app
      </Link>
    </Button>
  </>
);

//Content: Maps prelim content with instructions
const MapsContent = () => (
  <>
    <p>
      The following is how i have implemented google maps into this amazing app
    </p>
  </>
)

export default HomeScreen;
