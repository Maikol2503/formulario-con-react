import '../css/tabla.css';
import propTypes from 'prop-types';
export default function Tabla({dat}){
     

    return(
            <div className="tablaContainer">
                <table className='tabla'>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Signo</th>
                        <th>Lenguage favorito</th>
                    </tr>
                    {dat.map(dato =>{ return (
                        <tr>
                            <td>{dato.nombre}</td>
                            <td>{dato.apellido}</td>
                            <td>{dato.telefono}</td>
                            <td>{dato.email}</td>
                            <td>{dato.signo}</td>
                            <td>
                                <ol>
                                     <li>{dato.react}</li>
                                     <li>{dato.angular}</li>
                                     <li>{dato.svelte}</li>
                                     <li>{dato.vue}</li>
                                </ol>
                            </td>
                        </tr>
                    )})}
                    
                </table>
            </div>
    )
}

    Tabla.propTypes = {
   
    nombre: propTypes.string
    }



