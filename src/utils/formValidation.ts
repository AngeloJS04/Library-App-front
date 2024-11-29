import * as Yup from 'yup';

export  const validationSchema = Yup.object({
    title: Yup.string()
        .required('El título del libro es obligatorio')
        .min(3, 'El título debe tener al menos 3 caracteres'),
    author: Yup.string()
        .required('El autor es obligatorio')
        .min(3, 'El nombre del autor debe tener al menos 3 caracteres'),
    year: Yup.number()
        .required('El año es obligatorio')
        .min(1000, 'El año debe ser mayor o igual a 1000')
        .max(new Date().getFullYear(), 'El año no puede ser mayor al año actual'),
    genre: Yup.string().required('El género es obligatorio'),
    rating: Yup.number().required('La calificación es obligatoria').min(1).max(5),
});