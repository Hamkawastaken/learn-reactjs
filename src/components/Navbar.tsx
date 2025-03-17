import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "row",
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Link to="/" style={{cursor: "pointer", color: "white"}}>Home</Link>
          <Link to="/about" style={{cursor: "pointer", color: "white"}}>About</Link>
          <Link to="/products" style={{cursor: "pointer", color: "white"}}>Products</Link>
          <Link to="/contact" style={{cursor: "pointer", color: "white"}}>Contact</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
