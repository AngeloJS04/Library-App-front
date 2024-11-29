import { IvalidationBook } from '@/interface/components/validation.interface';
import { useCreateBooksMutation } from '@/redux/rtk/books';
import { validationSchema } from '@/utils/formValidation';
import { genres } from '@/utils/genres';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const CreateBooks = ({ setShow }: { setShow: Function }) => {
    const [createBook] = useCreateBooksMutation();


    const handleSubmit = (values: IvalidationBook) => {
        createBook(values);
        setShow(false);
    };

    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    author: '',
                    year: '',
                    genre: '',
                    rating: 5,
                    isFavorite: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleBlur }) => (
                    <Form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Titulo del libro</span>
                            </label>
                            <Field
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="input input-bordered"
                            />
                            <ErrorMessage name="title" component="div" className="text-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Autor</span>
                            </label>
                            <Field
                                type="text"
                                name="author"
                                value={values.author}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="input input-bordered"
                            />
                            <ErrorMessage name="author" component="div" className="text-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Año</span>
                            </label>
                            <Field
                                type="text"
                                name="year"
                                value={values.year}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="input input-bordered"
                            />
                            <ErrorMessage name="year" component="div" className="text-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Género</span>
                            </label>
                            <Field
                                as="select"
                                name="genre"
                                value={values.genre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="input input-bordered"
                            >
                                <option value="">Selecciona un género</option>
                                {genres.map((genre, index) => (
                                    <option key={index} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="genre" component="div" className="text-red-500" />
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-lg">Marcar como favorito</span>
                                <Field
                                    type="checkbox"
                                    name="isFavorite"
                                    className="checkbox"
                                />
                            </label>
                        </div>

                        <div className="form-control mb-6">
                            <label className="label justify-center">
                                <span className="label-text text-lg">Rating</span>
                            </label>
                            <div className="rating flex justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name="rating"
                                        className="mask mask-star-2 size-12 bg-orange-400"
                                        value={star}
                                        checked={values.rating === star}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <button className="btn btn-primary btn-block" type="submit">
                                Publicar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateBooks;
