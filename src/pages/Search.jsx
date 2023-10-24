import Layout from './Layout';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
    return(
        <div>
            <Layout renderNavbar={true}/>
            
            <form>
                <div className='w-full flex justify-center items-center relative top-4'>
                    <input placeholder="Écrivez un nom" name="searchBar" className='outline-none shadow py-2 px-3 appearance-none border rounded' required></input>
                    <button className='text-white bg-blue-950 p-2 rounded  hover:shadow-lg' type='submit'><FiSearch size={24}/></button>
                </div>
            </form>
            
        </div>
    )
}

export default Search;