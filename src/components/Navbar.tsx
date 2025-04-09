import { Link } from "react-router";

const Navbar = () => {

    return (
        <>
        <nav style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"114px", marginTop:"20px", color:"white", paddingRight:"12px",  paddingLeft:"12px", paddingTop:"12px", paddingBottom:"12px", borderRadius:"999px", backgroundColor:"#3F7D58"}}>
        <Link to="/" style={{backgroundColor:"#FFCF50", borderRadius:"999px"}}>
                <div style={{cursor:"pointer", color:"black",  fontWeight:"bold",paddingRight:"8px",  paddingLeft:"8px", paddingTop:"4px", paddingBottom:"4px"}}>
                    yourStuff
                </div>
            </Link>
            <div style={{ display:"flex", flexDirection:"row", gap:"24px"}}>
                <Link to="/" style={{cursor:"pointer", color:"white"}}>Home</Link>
                <Link to="/products" style={{cursor:"pointer", color:"white"}}>Products</Link>
                <Link to="/about" style={{cursor:"pointer", color:"white"}}>About</Link>
            </div>
            <div style={{backgroundColor:"white", borderRadius:"999px"}}>
                <Link to="/contact" style={{cursor:"pointer", color:"black", paddingRight:"18px",  paddingLeft:"18px", paddingTop:"16px", paddingBottom:"16px", fontSize:"14px"}}>
                    Contact
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;