import React from 'react';

function Form (props){
    const onChangeData = (e) => {
        props.getUserData(e.target.name, e.target.value);
    }

    return(
        <form  className="form-inline">
            <label className="sr-only" htmlFor="name">Name</label>
            <input onChange= {onChangeData} name="name" type="text" className="form-control mr-sm-3" id="name" placeholder="Nombre completo"/>
            <label className="sr-only" htmlFor="phone">Teléfono</label>
            <input onChange= {onChangeData} type="text" className="form-control mr-sm-3" id="phone" name="phone" placeholder="Teléfono"/>
            <label className="sr-only" htmlFor="email">Email</label>
            <input onChange= {onChangeData} type="email" className="form-control mr-sm-3" id="email" name="email" placeholder="Email"/>
        </form>
    );
}

export default Form;

