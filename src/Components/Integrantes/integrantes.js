import "./integrantes.css"
import {AiFillCloseCircle} from "react-icons/ai"
import { GiHalfDead, GiDeadHead } from "react-icons/gi";
import { FaBookDead } from "react-icons/fa";

const Integrante = (props) => {
    const {nombre, alias, perfil, foto, id, fav} = props.datos
    const {colorPrimario, eliminarIntegrante, like} = props
    return (
			<div className="integrante">
				<AiFillCloseCircle
					className="eliminar"
					onClick={() => eliminarIntegrante(id)}
				/>
				<div className="encabezado" style={{ backgroundColor: colorPrimario }}>
					<img src={foto} alt={nombre} />
				</div>
				<div className="info">
					<h4>{nombre}</h4>
                    <h4>{alias}</h4>
					<h5>{perfil}</h5>
					{fav ? (
						<GiHalfDead  onClick={() => like(id)} />
					) : (
						<GiDeadHead color="red" onClick={() => like(id)} />
					)}
				</div>
			</div>
		);
}

export default Integrante