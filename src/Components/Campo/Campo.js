import "./Campo.css"

const Campo = (props) => {
    const manejoDeCambios = (e) => {
        props.actualizarValor(e.target.value)
    }

    const {type = "text"} = props

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={manejoDeCambios}
        type={type}
        />
    </div>
}

export default Campo