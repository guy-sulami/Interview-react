import React from 'react'
import InputBox from './InputBox'

const InputForm = (props) => {

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     alert("Sample Button, not functional");
    // }

    return(
    <form className="form-inline">
        <div className="form-group">
            <InputBox customClassName="form-control" type="text" onChange={props.onSearch} value="" placeholder="Campground search..."></InputBox>
            {/* <InputBox customClassName="btn btn-default" type="submit" value="Search" placeholder="" onClick={handleClick}></InputBox> */}
        </div>
    </form>
    );
};

export default InputForm;