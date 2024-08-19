import React from "react";
import './wishList.css'
import { FiltrosWishList } from "./FiltrosWishList";
import { CardsWishList } from "./CardsWishList";

export const WishList = () => {
    return(
        <main>
            <section id="contentWishList">
            <div id="contentWishListAling">
                <FiltrosWishList/>
                <CardsWishList/>
            </div>
        </section>
    </main>
    )
}