const ProductsPage = () => {
    return (
       <>
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center",
            backgroundColor: "#FFCF50",
            marginTop:"20px",
            marginBottom: "20px",
            paddingRight: "162px",
            paddingLeft: "162px",
            marginRight: "100px",
            marginLeft: "100px",
            borderRadius: "24px",
            borderBottom: "10px solid black",
            borderRight: "10px solid black",
            color: "black",
          }}
        >
          <h1>Our Products</h1>
        </div>
      </div>
       </>
    )
}

export default ProductsPage;