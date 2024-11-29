import { useForm } from '@/hooks/useForm';
import { useCreateBooksMutation } from '@/redux/rtk/books';
import { genres } from '@/utils/genres';
import React from 'react'

const CreateBooks = ({ setShow }: { setShow: Function }) => {
    const { form, onChange, clear } = useForm({
        title: "",
        author: "",
        year: "",
        genre: [],
        rating: 5,
        isFavorite: false,
    });
    const [createBook] = useCreateBooksMutation()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form)
        createBook(form)
        setShow(false)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=''>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Titulo del libro</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={(e) => onChange(e.target.value, "title")}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Autor</span>
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={form.author}
                        onChange={(e) => onChange(e.target.value, "author")}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Año</span>
                    </label>
                    <input
                        type="text"
                        name="year"
                        value={form.year}
                        onChange={(e) => onChange(Number(e.target.value), "year")}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Género</span>
                    </label>
                    <select
                        name="genre"
                        value={form.genre}
                        onChange={(e) => onChange(e.target.value, "genre")}
                        className="input input-bordered"
                    >
                        <option value="">Selecciona un género</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-lg">Marcar como favorito</span>
                        <input
                            type="checkbox"
                            name="isFavorite"
                            checked={form.isFavorite}
                            onChange={(e) => onChange(e.target.checked, "isFavorite")}
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
                                className="mask mask-star-2  size-12 bg-orange-400"
                                checked={form.rating === star}
                                onChange={() => onChange(star, "rating")}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary btn-block' type='submit'>
                        Publicar
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CreateBooks