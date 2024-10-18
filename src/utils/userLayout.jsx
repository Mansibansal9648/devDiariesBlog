import NavBar from "../common/navBar"
import React from "react"

export default function UserLayout({children}) {
    return (
        <>
        <NavBar/>
        {React.Children.map(children, (child)=> child)}
        </>
    )
}