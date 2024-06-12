import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        props.setAgrupacion(e.target.value)
    }

    return <div className="lista-opciones">
    <label>Organizaciones Criminales</label>
    <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden >Seleccionar Organización</option>
        {props.agrupaciones.map((agrupacion, index) => <option key={index} value={agrupacion}>{agrupacion}</option>)}
    </select>
</div>
}

export default ListaOpciones