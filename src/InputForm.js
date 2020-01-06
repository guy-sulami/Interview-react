import React from 'react'
import InputBox from './InputBox'

const InputForm = (props) => {
    return(
    <form className="form-inline" action="/" method="GET">
        <div className="form-group">
            <InputBox customClassName="form-control" type="text" value="" placeholder="Campground search..."></InputBox>
            <InputBox customClassName="btn btn-default" type="submit" value="Search" placeholder=""></InputBox>
        </div>
    </form>
    );
};

export default InputForm;