import React, { Component } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


componentDidMount() {
    const urlApi="http://www.omdbapi.com/?apikey=d18e5237&s=harry%20potter"; 
    fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

}
export default class Gallery extends Component {
  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          <Col className="mb-2 px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
        </Row>
      </>
    );
  }
}
