import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			<h1>My home page</h1>
			<p>
				go to <Link to="/products">list of products</Link>
			</p>
		</div>
	)
}

export default Home
