import React, {useState} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Data from './Data';
import PagesNavigation from './PagesNavigation';
import Footer from './Footer';

const App = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return(    
        <>
            <Navbar />
            <div className="container">
                <Header onSearch={handleSearch}/>
                <Data search={search}/>
                <PagesNavigation/>
            </div>
            <Footer/>
         </>       
    );
};

export default App;