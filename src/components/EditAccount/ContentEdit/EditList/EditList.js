import React from "react";
import EditItem from '../EditItem/EditItem'
import Phone from "../Phone/Phone";
const editItems = [
    {
        id:1,
        title:'Full Name',
        placeholder:'Enter your full name'
    },
    {
        id:2,
        title:'Email Address',
        placeholder:'Enter your email address'
    },
    {
        id:3,
        title:'Address (Will be used for checkout)',
        placeholder:'Enter your address'
    },
    
]
function EditList() {
    return(
        <div className="mt-[260px]">
            { editItems.map((editItem) => {
                return(
                    <div>
                        <EditItem title = {editItem.title} placeholder = {editItem.placeholder}/>
                    </div>
                )
            })}
            <Phone/>
        </div>
    )
}
export default EditList;