import React from 'react';

function Form (props){
    const onChangeData = (e) => {
        props.getUserData(e.target.name, e.target.value);
    }

    return(
        <form  className="form-inline">
            <label className="sr-only" htmlFor="name">Name</label>
            <input onChange= {onChangeData} name="name" type="text" className={`${(props.errors.name !='')?'is-invalid':''} form-control mr-sm-3`} id="name" placeholder="Nombre completo" required />
            <label className="sr-only" htmlFor="phone">Teléfono</label>
            <input onChange= {onChangeData} type="text" className={`${(props.errors.phone !='')?'is-invalid':''} form-control mr-sm-3`} id="phone" name="phone" placeholder="Teléfono"/>
            <label className="sr-only" htmlFor="email">Email</label>
            <input onChange= {onChangeData} type="email" className={`${(props.errors.email !='')?'is-invalid':''} form-control mr-sm-3`} id="email" name="email" placeholder="Email" required />
            <label className="sr-only" htmlFor="email2">Repetir Email</label>
            <input onChange= {onChangeData} type="email2" className={`${(props.errors.email2 !='')?'is-invalid':''} form-control mr-sm-3`} id="email2" name="email2" placeholder="Confirmar Email" required />
        </form>
    );
}

export default Form;

