import * as yup from 'yup';
const validationSchema = yup.object({
    room_type: yup.string().min(6, 'room type should be of minimum 3 characters length').required('room type is required'),
    lodging: yup.string().min(4, 'lodging should be of minimum 3 characters length').required('lodging is required'),
    hotel_id: yup.number().required('Room Count is required'),
    count: yup.number().required('Room Count is required'),
});

export default validationSchema;