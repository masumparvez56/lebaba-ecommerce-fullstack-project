import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home/Home';
import ShopPage from '../pages/shop/ShopPage';
import CategoryPage from '../pages/category/CategoryPage';
import ErrorPage from '../components/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <ShopPage/>
            },
            {
                path: "/categories/:categoryName",
                element: <CategoryPage/>
            },
        ]
    }
]);

export default router