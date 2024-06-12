import "./OrgCrime.css"

const OrgCrime = (props) => {
    //console.log (props)
    return <section className="orgSection">
        <h3 className="tittle"> Agrupaciones Criminales</h3>
        <img src="/img/logoOrgCrime.png" alt="addLogo" onClick={props.cambiarMostrar}></img>
    </section>
}

export default OrgCrime