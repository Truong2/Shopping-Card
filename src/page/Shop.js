import React from "react";
import Header from "../components/Header/Header";
import ShopList from "../components/Shop/ShopList/ShopList";
import ShowMoreItems from "../components/Shop/ShowMoreItems/ShowMoreItems";
import Footer from "../components/Footer/Footer";
function Shop() {
    return(
        <div>
            <Header/>
            <ShopList/>
            <ShowMoreItems/>
            <Footer/>
        </div>
    )
}

export default Shop;
