import {
	createBrowserRouter,
	RouterProvider,
	// createRoutesFromElements,
	// Route,
} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import RootLayout from "./pages/RootLayout"

// const routeDefs = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<Home />} />
// 		<Route path="/products" element={<Products />} />
// 	</Route>
// )
// const router = createBrowserRouter(routeDefs)

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/products", element: <Products /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
