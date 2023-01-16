import React from "react"
import { Link } from "react-router-dom"

const MainNav = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/"></Link>
					</li>
					<li>
						<Link to="/products"></Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNav
