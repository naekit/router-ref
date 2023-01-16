import {
	createBrowserRouter,
	RouterProvider,
	// createRoutesFromElements,
	// Route,
} from "react-router-dom"
import Error from "./pages/Error"
import Home from "./pages/Home"
import ProductDetailPage from "./pages/ProductDetailPage"
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
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "products", element: <Products /> },
			{ path: "products/:id", element: <ProductDetailPage /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
