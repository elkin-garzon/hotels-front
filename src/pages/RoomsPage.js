import { useState, useEffect } from 'react';

export default function RoomsPage() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms([]);
    }, []);

    if (rooms.length === 0) {
        return (
            <div>
                <h2>SIn Habitaciones disponibles</h2>
            </div>
        )
    }

    return (
        <div>RoomsPage</div>
    )
}