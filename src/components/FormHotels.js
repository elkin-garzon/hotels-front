import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Validate from '../shared/hotel.validate';
import { useFormik } from 'formik';

export default function FormHotels({ onClose, isOpen }) {
    const fullScreen = useMediaQuery(useTheme().breakpoints.down('md'));

    const formik = useFormik({
        initialValues: {},
        validationSchema: Validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Dialog onClose={onClose} open={isOpen} fullScreen={fullScreen} fullWidth={true} maxWidth="md" >
            <DialogTitle>Nuevo Hotel</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit} className="row">
                    <hr />
                    <div className='col-md-6'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="name"
                            name="name"
                            label="Nombre"
                            // value={formik.values.email}
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="address"
                            name="address"
                            label="Direccion"
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </div>

                    <div className='col-md-6'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="city"
                            name="city"
                            label="Ciudad"
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </div>

                    <div className='col-md-6'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="nit"
                            name="nit"
                            label="Nit"
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.nit && Boolean(formik.errors.nit)}
                            helperText={formik.touched.nit && formik.errors.nit}
                        />
                    </div>

                    <div className='col-md-6'>
                        <TextField
                            autoComplete='off'
                            fullWidth
                            id="room_count"
                            name="room_count"
                            label="Número de habitaciones"
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
            <DialogActions>

            </DialogActions>
        </Dialog>
    )
}