import { createBrowserRouter } from "react-router-dom";
import ListingPage from "../modules/tasks/pages/ListingPage";
import DetailsPage from "../modules/tasks/pages/DetailsPage";
import CreationPage from "../modules/tasks/pages/CreationPage";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <ListingPage/>
            },
            {
                path: 'create',
                element: <CreationPage/>
            },
            {
                path: 'details/:id',
                element: <DetailsPage/>
            }
        ]
    }
   
])