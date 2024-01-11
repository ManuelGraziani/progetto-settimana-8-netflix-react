import React, { Component } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default class Gallery3 extends Component {
  state = {
    data: null,
    error: null,
  };
  componentDidMount() {
    const api = "http://www.omdbapi.com/?apikey=d18e5237&s=star%20wars";

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
      });
  }

  render() {
    const { data, error } = this.state;
    console.log(data);
    return (
      <>
        <h4>New Releases</h4>
        {error && <p>Error: {error.message}</p>}
        {data && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
            {data.Search.slice(0, 6).map((item) => (
              <Col className="mb-2 px-1" key={item.imdbID}>
                <img className="img-fluid" src={item.Poster} alt={item.Title} />
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}
