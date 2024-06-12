import { useState } from "react"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaDeOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import "./Formulario.css"



const Formulario = (props) => {
const [nombre, setNombre] = useState("");
const [alias, setAlias] = useState("");
const [perfil, setPerfil] = useState("");
const [foto, setFoto] = useState("");
const [agrupacion, setAgrupacion] = useState("");

const [titulo, setTitulo] = useState("");
const [color, setColor] = useState("");
const [descripcion, setDescripcion]= useState("");

const {registrarIntegrante, crearAgrupacion} = props

const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("manejar envio")
    let datosAEnviar = {
        nombre,
        alias,
        perfil,
        foto,
        agrupacion
    }
    registrarIntegrante(datosAEnviar)
}

const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearAgrupacion({titulo, colorPrimario:color})
  }

    return <section className="Formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para adcionar perfiles a cada organización.</h2>
            <Campo
            titulo = "Nombre"
            placeholder = "Ingrese nombre completo"
            required
            valor = {nombre}
            actualizarValor = {setNombre}
            />
            <Campo 
            titulo = "Alias"
            placeholder = "Ingresar alias"
            required 
            valor = {alias}
            actualizarValor = {setAlias}
            />
            <Campo
            titulo = "Perfil"
            placeholder= "Ingresar perfil o puesto debtro de la agrupación"
            required
            valor = {perfil}
            actualizarValor= {setPerfil}
            />
            <Campo
            titulo = "Foto"
            placeholder = "Ingresar URL(enlace) de foto"
            required
            valor = {foto}
            actualizarValor = {setFoto}
            />
            <ListaOpciones        
            valor= {agrupacion} 
            setAgrupacion={setAgrupacion}
            agrupaciones={props.agrupaciones}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para agregar organización.</h2>
      <Campo 
        titulo="Titulo" 
        placeholder="Ingresar titulo" 
        required 
        valor={titulo}
        actualizarValor={setTitulo}/>
      <Campo
      titulo="Descripción"
      placeholder="Ingresa una breve reseña que describa las actividades y antecedentes de la organización criminal"
      valor={descripcion}
      actualizarValor={setDescripcion}/>
      <Campo 
        titulo="Color" 
        placeholder="Ingresar el color en Hex"
        required 
        valor={color}
        actualizarValor={setColor}
        type="color"
         />
        <Boton>Registrar organización</Boton>    
         </form>
    </section>
}

export default Formulario