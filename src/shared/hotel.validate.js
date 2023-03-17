import * as yup from 'yup';
const validationSchema = yup.object({
    name: yup.string().min(6, 'Name should be of minimum 8 characters length').required('Name is required'),
    address: yup.string().min(4, 'Address should be of minimum 8 characters length').required('Address is required'),
    city: yup.string().min(3, 'City should be of minimum 8 characters length').required('City is required'),
    nit: yup.string().min(6, 'Nit should be of minimum 8 characters length').required('Nit is required'),
    room_count: yup.number().required('Room Count is required'),
});

export default validationSchema;