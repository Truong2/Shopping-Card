import React from "react";
import ShopItem from "../ShopItem/ShopItem";
const shopItems = [
    {
        id: 1,
        name: 'Kulangot',
        title: 'Salt',
        price: '$67.00'
    },
    {
        id: 2,
        name: 'Tiktilaok Manok',
        title: 'Sexbomb',
        price: '$78.00'
    },
    {
        id: 3,
        name: 'Very Nice',
        title: 'Salt maalat',
        price: '$79.00'
    },
    {
        id: 4,
        name: 'Quake Overload',
        title: 'Yezyow',
        price: '$80.00'
    },
    {
        id: 5,
        name: 'Kutu',
        title: 'Sexbomb',
        price: '$129.00'
    },
    {
        id: 6,
        name: 'Tuluk',
        title: 'Black Kibal',
        price: '$142.00'
    },
    {
        id: 7,
        name: 'Balakubak',
        title: 'Betsin Maalat',
        price: '$170.00'
    },
    {
        id: 8,
        name: 'Pitaklan',
        title: 'Black Kibal',
        price: '$174.00'
    },
    {
        id: 9,
        name: 'Burnikk',
        title: 'Sexbomb',
        price: '$240.00'
    },
    {
        id: 10,
        name: 'Sipon Malapot',
        title: 'Salt',
        price: '$250.00'
    },
    {
        id: 11,
        name: 'Buldit',
        title: 'Salt Maalat',
        price: '$250.00'
    },
    {
        id: 12,
        name: 'Kibal Batal',
        title: 'Kibal Black',
        price: '$674.00'
    },
]
function ShopList(){
    return(
        <div className="pl-40 bg-[#f6f6f6] grid grid-cols-7 grid-rows-2 gap-y-6">
            {shopItems.map((shopItem,key) => {
               return(
                <div>
                     <ShopItem key={ shopItem.id } name={ shopItem.name } title={ shopItem.title } price={ shopItem.price } />
                </div>
                )
            })}
        </div>
    );
};
export default ShopList;