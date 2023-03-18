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

import FormRooms from '../components/FormRooms';

import { roomsService } from '../services/roomsService';
import { HotelsService } from '../services/hotelsService';
import { Room } from '../models/room.model';
import { Alerts } from '../shared/alerts';

const alert = new Alerts();
const service = new roomsService();
const serviceHotels = new HotelsService();

export default function RoomsPage() {

    const [rooms, setRooms] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({})

    useEffect(() => {
        getdata();
        getdataHotels();
    }, []);

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const getdataHotels = async () => {
        let { data } = await serviceHotels.getData();
        setHotels(data);
    }

    const getdata = async () => {
        let { data } = await service.getData();
        setRooms(data);
    }


    const addData = () => {
        setData(new Room().addData());
        setIsOpen(false);
        handleClickOpen();
    }

    const edithData = (obj) => {
        setData(new Room().edithData(obj));
        setIsOpen(false);
        handleClickOpen();
    }

    const onSave = async (data) => {
        let { status } = await service.onSaveData(data);
        if (status) {
            getdata()
        }
    }

    const deleteData = async (data) => {
        alert.delete().then(({ isConfirmed }) => {
            if (isConfirmed) {
                service.deleteData(data).then(({ status }) => {
                    if (status) {
                        getdata()
                    }
                })
            }
        })
    }

    if (rooms.length === 0) {
        return (
            <>
                <h2>SIn Habitaciones disponibles</h2>
                <Button variant="outlined" onClick={() => addData()}>Nueva Habitación <FaPlus /></Button>
                {
                    isOpen &&
                    <FormRooms
                        isOpen={isOpen}
                        dataForm={data}
                        onClose={handleClose}
                        hotels={hotels}
                        onSave={onSave}
                    />
                }
            </>
        )
    }

    return (
        <>
            <Button variant="outlined" onClick={() => addData()}>Nueva Habitación <FaPlus /></Button>
            <br />
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Tipo de Habitación</TableCell>
                            <TableCell>Acomodación</TableCell>
                            <TableCell>Hotel</TableCell>
                            <TableCell>Aciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.count}</TableCell>
                                <TableCell>{row.room_type}</TableCell>
                                <TableCell>{row.lodging}</TableCell>
                                <TableCell>{row.hotel_id}</TableCell>
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
                <FormRooms
                    isOpen={isOpen}
                    dataForm={data}
                    onClose={handleClose}
                    hotels={hotels}
                    onSave={onSave}
                />
            }
        </>
    )
}