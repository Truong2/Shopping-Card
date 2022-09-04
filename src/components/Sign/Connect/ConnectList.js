import React from "react";
import ConnectItem from "./ConnectItem";
import facebook from '../../../images/facebook.png'
import google from '../../../images/google.png'
import github from '../../../images/github.png'
const socials = [
    {
        id:1,
        name: 'facebook',
        backgroundColor:'#0078ff',
        color:'#fff',
        img : facebook
    },
    {
        id:2,
        name: 'google',
        backgroundColor:'#fff',
        color:'#000',
        img: google
    },
    {
        id:3,
        name: 'github',
        backgroundColor:'#24292e',
        color:'#fff',
        img:github
    }
]
function ConnectList() {
    return(
        <div className="">
            { socials.map((social) => {
                return(
                    <ConnectItem name = {social.name} 
                        backgroundColor = {social.backgroundColor} 
                        color = {social.color}
                        img = {social.img}
                    />
                )
            })}
        </div>
    )
}
export default ConnectList;