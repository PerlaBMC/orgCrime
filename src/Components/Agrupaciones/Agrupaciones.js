import "./Agrupaciones.css";
import hexToRgba from "hex-to-rgba";
import Integrante from "../Integrantes/integrantes";

const Agrupacion = (props) => {
    //Desestructuracion
    const { colorPrimario, colorScundario, titulo, id, descripcion } = props.datos
    const {integrantes, eliminarIntegrante, actualizarColor, like} = props



    return <>
    { integrantes.length > 0 &&
        <section className="agrupacion" style={{backgroundColor: hexToRgba (colorPrimario, 0.6)}}>
            <input 
            className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value, id)}}
            />
        <h3 style={{borderColor: colorPrimario}}>{titulo} </h3>
        <p>{descripcion}</p>
        <div className="integrantes">
        {
            integrantes.map((integrante, index) => <Integrante 
            datos={integrante} key={index} 
            colorPrimario={colorPrimario}
            eliminarIntegrante={eliminarIntegrante}
            like= {like}
            />)
        }

        </div>
     </section>
    }
    </>
}

export default Agrupacion