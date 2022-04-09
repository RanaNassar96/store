import React , {  useState  } from 'react';
import search from '../../assets/img/search.svg'

const Form = ({title , handleSubmitSearch}) => {

    const [ searchInput , setSearchInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchInput.trim().length != 0) handleSubmitSearch(searchInput.trim());
        setSearchInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder={title} 
                value={searchInput}
                onChange={ (e) => setSearchInput(e.target.value)} 
            />
            <button type="submit">
                <img src={search} alt="search" className="img-fluid"/>
            </button>
        </form>
    );
};

export default Form;