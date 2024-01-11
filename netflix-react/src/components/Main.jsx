import React from "react";
import Container from "react-bootstrap/esm/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

export default function Main() {
  return (
    <Container fluid className="px-4">
      <div class="d-flex justify-content-between">
        <div className="d-flex">
          <h2 class="mb-4">TV Shows</h2>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              variant=""
              className="ms-4 mt-1 genres rounded-0 text-white"
              id="dropdown-basic"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i class="fa fa-th-large icons"></i>
          <i class="fa fa-th icons"></i>
        </div>
      </div>
      <Gallery1/>
      <Gallery2 />
      <Gallery3 />
    </Container>
  );
}
