import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

const RootLayout = () => {
	return (
		<>
			<MainNav />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
