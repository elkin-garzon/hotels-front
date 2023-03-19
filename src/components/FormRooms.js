import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useTheme } from '@mui/material/styles';
import Validate from '../shared/rooms.validate';
import { useFormik } from 'formik';

export default function FormRooms({ onClose, dataForm, isOpen, hotels, onSave }) {
    const fullScreen = useMediaQuery(useTheme().breakpoints.down('md'));

    const types = [
        {
            name: 'Estandar',
            lodging: [
                'Sencilla',
                'Doble'
            ]
        },
        {
            name: 'Junior',
            lodging: [
                'Triple',
                'Cuadruple'
            ]
        },
        {
            name: 'Suite',
            lodging: [
                'Sencilla',
                'Doble',
                'Triple'
            ]
        }
    ]

    const formik = useFormik({
        initialValues: dataForm,
        validationSchema: Validate,
        onSubmit: (values) => {
            onSave(values)
            onClose()
        },
    });

    return (
        <Dialog onClose={onClose} open={isOpen} fullScreen={fullScreen} fullWidth={true} maxWidth="md" >
            <DialogTitle>
                {dataForm._status === 'N' ? 'Nueva Habitación' : 'Editar Habitación'}
            </DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit} className="row">
                   
                    <div className='col-md-6 margin-b'>
                        <FormControl fullWidth>
                            <InputLabel id="hotel_id">Hotel</InputLabel>
                            <Select
                                name='hotel_id'
                                labelId="hotel_id"
                                id="hotel_id"
                                value={formik.values.hotel_id}
                                label="hotel_id"
                                onChange={formik.handleChange}
                            >

                                {hotels.map((row) => (
                                    <MenuItem value={row.id} key={row.id}>{row.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='col-md-6 margin-b'>
                        <FormControl fullWidth>
                            <InputLabel id="room_type">Tipo de Habitación</InputLabel>
                            <Select
                                name='room_type'
                                labelId="room_type"
                                id="room_type"
                                value={formik.values.room_type}
                                label="room_type"
                                onChange={formik.handleChange}
                            >
                                {types.map((row, index) => (
                                    <MenuItem value={row.name} key={index}>{row.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    {
                        formik.values.room_type !== '' &&
                        <div className='col-md-6 margin-b'>
                            <FormControl fullWidth>
                                <InputLabel id="lodging">Acomodación</InputLabel>
                                <Select
                                    name='lodging'
                                    labelId="lodging"
                                    id="lodging"
                                    value={formik.values.lodging}
                                    label="lodging"
                                    onChange={formik.handleChange}
                                >
                                    {types.filter((fil) => fil.name === formik.values.room_type)[0].lodging.map((row, index) => (
                                        <MenuItem value={row} key={index}>{row}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    }


                    <div className='col-md-6 margin-b'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            name="count"
                            label="Cantidad de habitaciones"
                            value={formik.values.count}
                            id="count"
                            type='number'
                            onChange={formik.handleChange}
                            error={formik.touched.count && Boolean(formik.errors.count)}
                            helperText={formik.touched.count && formik.errors.count}
                        />
                    </div>

                    <div className='btn-content col-md-12'>
                        <Button color="primary" variant="contained" type="submit" >
                            Guardar
                        </Button>

                        <Button color="primary" variant="contained" type="button" onClick={() => onClose()}>
                            Cancelar
                        </Button>
                    </div>

                </form>
            </DialogContent>
        </Dialog>
    )
}