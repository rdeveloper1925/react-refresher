import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const SearcherScreen = (props) => {
  return <Searcher />;
};

const Searcher = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listArea, setListArea] = useState(
    <h4 style={{ textAlign: "center" }}>
      Search in the bar to view some results
    </h4>
  );

  const submitHandler = (event) => {
    event.preventDefault();
    setListArea("Loading...");
    axios
      .get(
        `https://pixabay.com/api/?key=24879698-84e429dc23dfea5cbf559c435&q=${searchQuery}&image_type=photo`
      )
      .then((response) => {
        console.log(response.data);
        let images = response.data.hits;
        setListArea(
          images.map((image) => {
            return (
              <Col md="3" xs="6" className="m-3">
                <img
                  alt="Could not be found"
                  src={image.userImageURL}
                  width="100%"
                />
              </Col>
            );
          })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h3 className="text-center text-danger">Image Searcher</h3>
      <Col md="12" xs="12">
        <SearchBar
          query={searchQuery}
          onSubmit={submitHandler}
          onChange={setSearchQuery}
        />
      </Col>
      <Row md="12" xs="12">
        {listArea}
      </Row>
    </Container>
  );
};

const SearchBar = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Row>
        <Col md="11" xs="11">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
              size="lg"
              placeholder="Your Search here"
              aria-describedby="basic-addon1"
              onChange={(e) => props.onChange(e.target.value)}
              value={props.searchQuery}
            />
          </InputGroup>
        </Col>
        <Col md="1" xs="1">
          <Button size="lg" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearcherScreen;
