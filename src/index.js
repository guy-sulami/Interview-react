import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Jumbotron from './Jumbotron';
import Data from './Data';
import Pagination from './Pagination';
import Footer from './Footer';

const App = () => {
    return(    
        <>
            <Header />
            <div className="container">
                <Jumbotron/>
                <Data/>
                <Pagination/>
            </div>
            <Footer/>
         </>       
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));