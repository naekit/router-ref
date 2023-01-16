import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

const RootLayout = () => {
	return (
		<>
			<h1>root</h1>
			<MainNav></MainNav>
			<Outlet />
		</>
	)
}

export default RootLayout
