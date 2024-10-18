import NavBar from "./navBar"
import React from "react"

export default function UserLayout({children}) {
    return (
        <>
        <NavBar/>
        {React.Children.map(children, (child)=> child)}
        </>
    )
}