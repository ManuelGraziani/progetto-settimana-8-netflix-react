import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navColor fw-bold" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link className="active" href="#">TV Shows</Nav.Link>
            <Nav.Link href="#2">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My list</Nav.Link>
          </Nav>
          <div className="d-flex">
          <i class="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i class="fa fa-bell icons"></i>
          <i class="fa fa-user icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
