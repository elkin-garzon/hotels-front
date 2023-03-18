import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaPen, FaTrash, FaPlus } from "react-icons/fa";

import FormHotels from '../components/FormHotels';
import Service from '../services/hotelsService';
import { Hotel } from '../models/hotels.model';
import { Alerts } from '../shared/alerts';


const alert = new Alerts();

export default function HotelsPage() {

    const [hotels, setHotels] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({})


    useEffect(() => {
        getdata();
    }, []);


    const getdata = async () => {
        let service = new Service();
        let { data } = await service.getData();
        setHotels(data);
    }

    const addData = () => {
        setData(new Hotel().addData());
        setIsOpen(false);
        handleClickOpen();
    }

    const edithData = (obj) => {
        setData(new Hotel().edithData(obj));
        setIsOpen(false);
        handleClickOpen();
    }

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const onSabe = async (data) => {
        let service = new Service();
        let resp = await service.onSaveData(data);
        if (resp.status) {
            getdata()
        }
    }

    const deleteData = async (data) => {
        alert.delete().then(({ isConfirmed }) => {
            if (isConfirmed) {
                let service = new Service();
                service.deleteData(data).then((resp) => {
                    if (resp.status) {
                        getdata()
                    }
                })
            }
        })
    }

    if (hotels.length === 0) {
        return (
            <div>
                <h2>SIn Hoteles</h2>
            </div>
        )
    }

    return (
        <>
            <Button variant="outlined" onClick={() => addData()}>Nuevo hotel <FaPlus /></Button>
            <br />
            <br />
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
                                    <Stack spacing={2} direction="row">
                                        <Button className='btn-edith' onClick={() => edithData(row)}><FaPen /></Button>
                                        <Button className='btn-delete' onClick={() => deleteData(row)}><FaTrash /></Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {
                isOpen &&
                <FormHotels
                    isOpen={isOpen}
                    dataForm={data}
                    onClose={handleClose}
                    onSabe={onSabe}
                />
            }

        </>
    )
}