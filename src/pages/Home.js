import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
	const navigate = useNavigate()

	const navHandler = () => {
		navigate("/products")
	}

	return (
		<div>
			<h1>My home page</h1>
			<p>
				go to <Link to="/products">list of products</Link>
			</p>
			<p>
				<button onClick={navHandler}>Navigate</button>
			</p>
		</div>
	)
}

export default Home
