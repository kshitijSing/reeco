import React from "react";

const SearchBar = ()=>{
return ( 
<>
    <div
      style={{
        width: "90vw",
        paddingLeft: "0px",
        paddingRight: "60px",
      }}
    >
    <div
      style={{
        height: "25px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
    <div
      style={{
        height: "30px",
        width: "200px",
        borderRadius: "10px",
        border: "1px solid gray",
      }} 
     >
    <input
      placeholder="Search.."
      style={{
        border: "none",
        padding: "5px 10px",
        outline: "none",
        backgroundColor: "transparent",
      }}
    />
    </div>
    </div>
    </div>
    </>

    );
    };

export default SearchBar;
