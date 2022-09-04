import React from "react";
import InputItem  from "./InputItem";
const inputItems = [
    {
        id: 1,
        title:'Full name',
        placeholder:'Ta Quang Huy'
    },
    {
        id: 2,
        title:'Email',
        placeholder:'test@example.com'
    },
    {
        id: 3,
        title:'Password',
        placeholder:'Your Password'
    },
    
]
export function InputList() {
    return(
            <div>
                <div className="mt-24 ml-[32px]">
                    { inputItems.map((inputItem) => {
                        return(
                            <div>
                                <InputItem  title = {inputItem.title} placeholder = {inputItem.placeholder}  />
                            </div>
                        )
                    })}
                </div>
            </div>
        
    )
}
export default InputList;