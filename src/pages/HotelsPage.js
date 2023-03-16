import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaPen, FaTrash } from "react-icons/fa";

import Service from '../services/hotelsService';

export default function HotelsPage() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        getdata();
    }, []);


    const getdata = async () => {
        let service = new Service();
        let { data } = await service.getData();
        setHotels(data);
    }

    if (hotels.length === 0) {
        return (
            <div>
                <h2>SIn Hoteles</h2>
            </div>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>address</TableCell>
                        <TableCell>city</TableCell>
                        <TableCell>nit</TableCell>
                        <TableCell>room count</TableCell>
                        <TableCell>actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hotels.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.nit}</TableCell>
                            <TableCell>{row.room_count}</TableCell>
                            <TableCell>
                                <FaPen /> <FaTrash />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}