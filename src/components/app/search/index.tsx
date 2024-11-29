'use client'
import { useDebounce } from '@/hooks/useDebounce'
import { useForm } from '@/hooks/useForm'
import { useEffect, useState } from 'react'

const Search = ({ getData, getByQuery }: { getData: Function, getByQuery: Function }) => {

    const { form, onChange } = useForm({ search: '' });
    const debouncedSearch = useDebounce<string>(form.search, 1000)
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        if (selectedFilter === '') {
            if (!form.search) {
                getData('');
            }
            getData(debouncedSearch);
        } else if (debouncedSearch) {
            console.log('Filtro aplicado:', selectedFilter);
            // Se pasa el filtro y el valor de búsqueda
            getByQuery({ prop: selectedFilter, value: debouncedSearch });
        }
    }, [debouncedSearch, selectedFilter, form.search]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value);
    };
    return (
        <div className='w-2/4 flex items-center'>
            <input type="text"
                onChange={(e) => onChange(e.target.value, 'search')}
                placeholder="Buscar libro" className="input input-bordered w-full " />

            <select className="select border-2 w-full max-w-xs"
                onChange={handleFilterChange}
                value={selectedFilter}>
                <option selected>Buscar por:</option>
                <option value={'year'}>Año</option>
                <option value={'author'}>Author</option>
                <option value={'genre'}>Genero</option>
            </select>
        </div>
    )
}

export default Search