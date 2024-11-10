import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const CenterDetail = () => {
    const {id} = useParams();
    const [center, setCenter] = useState('')

    useEffect(() => {
        const fetchCenter = async () => {
            const response = await fetch('http://localhost:4000/api/centers/' + Number(id));
            const data = await response.json();
            setCenter(data.data);
        };

        fetchCenter();
    }, [id]);

    const renderOpeningHours = (openHours) => {
        if (!openHours || typeof openHours !== 'object') return <p>No opening hours available.</p>; // Guard against undefined or null openHours

        return Object.entries(openHours).map(([day, hours]) => {
            return (
                <li key={day}>
                    {day}: {hours ? hours : 'Closed'}
                </li>
            );
        });
    };

    return (
        <div className="container">
            <main>
                <h4>{center.name}</h4>
                <p>{center.info}</p>
                <div>
                    <h5>Otevírací hodiny:</h5>
                    <ul>
                        {renderOpeningHours(center.open)}
                    </ul>
                </div>
            </main>
        </div>
    );
};