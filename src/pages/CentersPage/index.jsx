import './style.css';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

export const CentersPage = () => {
    const [centers, setCenter] = useState([]);

    useEffect(() => {
        const fetchCenters = async () => {
            const response = await fetch('http://localhost:4000/api/centers');
            const data = await response.json();
            setCenter(data.data);
        };
        fetchCenters();

    }, [centers]);
    return (
        <div className="container">
            <main>
                <h2 className="custom-header">Pobočky</h2>
                <div>
                    <ul>
                        {centers.map(center =>
                            <li key={center.id}>
                                <p>
                                    <Link to={'/pobocky/' + center.id}> {center.name}</Link>
                                </p>
                                <p>
                                    {center.address}
                                </p>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
