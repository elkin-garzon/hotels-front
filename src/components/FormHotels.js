import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export default function FormHotels({ onClose, isOpen }) {
    return (
        <Dialog onClose={onClose} open={isOpen} >
            <DialogTitle>Nuevo Hotel</DialogTitle>
            <DialogContent>
                <TextField
                    autoComplete='off'
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}