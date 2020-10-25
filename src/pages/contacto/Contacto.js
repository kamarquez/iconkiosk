import React, {useState} from "react";
import './Contacto.css';

function Contacto(){
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        mensaje:''
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        if(datos.nombre.length < 3) {
            alert('Completar Nombre')
        }else if ( !validEmailRegex.test(datos.email)){
            alert('Email inválido')
        }else if(datos.mensaje.length < 3){
            alert('Por favor completar el campo Mensaje')
        }else {
            console.log('enviando datos...' + datos.nombre + ' ' + datos.email + ' ' + datos.mensaje)
            alert('Su mensaje ha sido enviado correctamente')
        }
    }


    return <div className="container">
        <div className="row mt-5 contacto">
            <div className="col-sm-6 col-md-6">
                <div className="contact-bg">
                    <h4>Envianos un mensaje</h4>
                    <p>Te responderemos a la brevedad</p>
                    <form onSubmit={enviarDatos}>
                        <label htmlFor="nombre">Nombre</label>
                        <input id="nombre" type="text" name="nombre" className="form-control" onChange={handleInputChange} />
                        <br/>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" className="form-control" onChange={handleInputChange}  />
                        <br/>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="5" className="form-control" onChange={handleInputChange}></textarea>
                        <button className="mt-2 btn btn-primary" type="submit">Enviar</button>
                    </form>

                </div>
            </div>
            <div className="col-sm-6 col-md-6">
                <div className="contact-bg">
                    <h4>Contacto</h4>
                    <div className="datos-contacto">
                        <span><i className="fa fa-phone" aria-hidden="true"></i> (54 11) 4123 4567 </span>
                        <br/>
                        <span><i className="fa fa-envelope" aria-hidden="true"></i> info@iconkiosk.com </span>
                        <br/>
                        <span><i className="fa fa-map-marker"></i> Darwin 1154, CABA, Argentina </span>
                    </div>
                </div>
                <div className="p-2 white-bg mt-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5612833947425!2d-58.442447248788675!3d-34.589965864182595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f4ad41feab%3A0xee9130089830930!2sDarwin%201154%2C%20C1414%20CABA%2C%20Argentina!5e0!3m2!1ses!2sin!4v1603518443736!5m2!1ses!2sin"
                        width="100%" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
}

export default Contacto;