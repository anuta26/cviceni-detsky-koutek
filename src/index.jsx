import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Link, Outlet} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './global.css';
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {ErrorPage} from "./pages/ErrorPage/index.jsx";
import {CenterDetail} from "./components/CenterDetail";
import {CentersPage} from "./pages/CentersPage/index.jsx";

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>Dětsky koutek</h1>
            </header>
            <main>
                <nav>
                    <Link to={'/'}>HomePage</Link>
                    <span> | </span>
                    <Link to={'/pobocky'}>Centers</Link>
                    <span> | </span>
                    <Link to={'/about'}>About</Link>
                    <span> | </span>
                    <Link to={'/contact'}>Contact</Link>
                </nav>
                <Outlet />
            </main>
            <footer>
                <p>Czechitas, Digitální akademie: Web</p>
            </footer>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/pobocky',
                element: <CentersPage />,
                children: [
                    {
                        path: '/pobocky/:id',
                        element: <CenterDetail />
                    }
                ]
            }
        ]
    }
]);

createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);
