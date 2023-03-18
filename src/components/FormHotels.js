import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Validate from '../shared/hotel.validate';
import { Hotel } from '../models/hotels.model';
import { useFormik } from 'formik';

export default function FormHotels({ onClose, dataForm, isOpen, onSabe }) {

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('md'));

    const formik = useFormik({
        initialValues: dataForm,
        validationSchema: Validate,
        onSubmit: (values) => {
            onSabe(values)
            onClose()
        },
    });

    return (
        <Dialog onClose={onClose} open={isOpen} fullScreen={fullScreen} fullWidth={true} maxWidth="md" >
            <DialogTitle>
                {dataForm._status == 'N' ? 'Nuevo Hotel' : 'Editar Hotel'}
            </DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit} className="row">
                    <div className='col-md-6 margin-b'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="name"
                            name="name"
                            label="Nombre"
                            value={formik.values.name}
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </div>

                    <div className='col-md-6 margin-b'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="address"
                            name="address"
                            label="Direccion"
                            value={formik.values.address}
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </div>

                    <div className='col-md-6 margin-b'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="city"
                            name="city"
                            label="Ciudad"
                            value={formik.values.city}
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </div>

                    <div className='col-md-6 margin-b'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="nit"
                            name="nit"
                            label="Nit"
                            value={formik.values.nit}
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.nit && Boolean(formik.errors.nit)}
                            helperText={formik.touched.nit && formik.errors.nit}
                        />
                    </div>

                    <div className='col-md-6 margin-b'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            name="room_count"
                            label="Número de habitaciones"
                            value={formik.values.room_count}
                            id="room_count"
                            type='number'
                            onChange={formik.handleChange}
                            error={formik.touched.room_count && Boolean(formik.errors.room_count)}
                            helperText={formik.touched.room_count && formik.errors.room_count}
                        />
                    </div>

                    <div className='col-md-12'>
                        <Button color="primary" variant="contained" type="submit" >
                            Submit
                        </Button>
                    </div>

                </form>
            </DialogContent>
        </Dialog>
    )
}