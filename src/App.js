import { useState } from 'react';
import {v4 as uuid} from "uuid"
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import Agrupación from './Components/Agrupaciones/Agrupaciones';
import OrgCrime from './Components/OrgCrime/OrgCrime';
import Footer from './Components/Footer/Footer';
import './reset.css';

function App() {
const [mostrarFormulario, actualizarMostrar] = useState(true)

const [integrantes, setIntegrantes] = useState([
	{
		id: uuid(),
		nombre: "Ismael Zambada García",
		alias: '"El Mayo Zambada"',
		perfil: "Líder principal de la organización",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_KW_BeIPbbl80N9OLNjCQqNi-2fyIu_TOw&s",
		agrupacion: "Cártel de Sinaloa",
		fav: true,
	},
	{
		id: uuid(),
		nombre: "Joaquín Guzmán Loera",
		alias: '"El Chapo"',
		perfil: "Líder de la Organización (Extraditado)",
		foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_%28front%29.jpg/640px-Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_%28front%29.jpg",
		agrupacion: "Cártel de Sinaloa",
		fav: false,
	},
	{
		id: uuid(),
		nombre: "Iván A. Guzmán Salazar",
		alias: '"El Chapito"',
		perfil: 'Líder de fragmentación "Los Chapitos"',
		foto: "https://tecolotito.elsiglodetorreon.com.mx/cdn-cgi/image/format=webp,width=412,quality=85/i/2024/06/1806564.jpeg",
		agrupacion: "Cártel de Sinaloa",
		fav: true,
	},
	{
		id: uuid(),
		nombre: "Rafel Caro Quintero",
		alias: '"Narco de Narcos"',
		perfil: "Fundador de la Organización (Detenido)",
		foto: "https://www.proceso.com.mx/u/fotografias/m/2022/7/15/f608x342-158053_187776_15.jpg",
		agrupacion: "Cártel de Sinaloa",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Nemesio Oseguera Cervantes",
		alias: '"El Mencho"',
		perfil: "Fundador de la Organización",
		foto: "https://insightcrime.org/wp-content/uploads/2017/11/Alias-El-Mencho-Mexico.jpg",
		agrupacion: "Cártel Jalisco Nueva Generación",
		fav: true,
	},
  {
		id: uuid(),
		nombre: "Abigael González Valencia",
		alias: '"El Cuini"',
		perfil: "Fundador de la Organización (Detenido)",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvnll6s0okSXkKDwaXueEEmVux0uDNJ74XQ&s",
		agrupacion: "Cártel Jalisco Nueva Generación",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Abraham Oseguera Cervantes",
		alias: '"Don Rodo"',
		perfil: "Inteligencia para ruteos y supervición de trasiego",
		foto: "https://st1.uvnimg.com/dims4/default/8206a54/2147483647/thumbnail/1024x576/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F82%2F0f%2F8a0759ae49b59992abb81c65a986%2Ffoto-portada.jpg",
		agrupacion: "Cártel Jalisco Nueva Generación",
		fav: true,
	},
  {
		id: uuid(),
		nombre: "Antonio Oseguera Cervantes",
		alias: '"Tony Montana"',
		perfil: "Líder de alto rango en la orgnización",
		foto: "https://www.lavozdemichoacan.com.mx/wp-content/uploads/2022/12/Detienen-al-hermano-de-El-Mencho-Antonio-Oseguera-Cervantes.jpg",
		agrupacion: "Cártel Jalisco Nueva Generación",
		fav: true,
	},
  {
    id: uuid(),
    nombre: "Benjamín Arellano Félix",
    alias: '"Min"',
    perfil: "Fundador de la Organización (Extraditado)",
    foto: "https://zetatijuana.com/wp-content/uploads/2020/12/arellanofelixbenjamin1.jpg",
    agrupacion: "Cártel de Tijuana",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Ramón Arellano Félix",
    alias: '"s/a"',
    perfil: "Fundador de la Organización (Abatido)",
    foto: "https://www.chicagotribune.com/wp-content/uploads/migration/2014/12/14/7BSVLLYQJNHDPLTKKPQNXFKHPE.jpg?w=1024",
    agrupacion: "Cártel de Tijuana",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Enedina Arellano Félix",
    alias: '"La Narcomami"',
    perfil: "Líder de la Organización",
    foto: "https://peru21.pe/resizer/hylIN1ltr0bL5Tb7Zf3BYevsQME=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LZIEM72CKVAPLEZEPL3FMS5EDA.jpeg",
    agrupacion: "Cártel de Tijuana",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Manuel Aguirre Galindo",
    alias: '"EL Caballo"',
    perfil: "Operador financiero",
    foto: "https://iphonegr.reforma.com/libre/online07/imagetransformer2/ImageTransformer.aspx?img=https://img.gruporeforma.com/imagenes/960x640/6/721/5720494.jpg&imagencompleta=1",
    agrupacion: "Cártel de Tijuana",
    fav: true,
  },
  {
		id: uuid(),
		nombre: "Francisco J. Hernández Gómez",
		alias: '"Pancho Cayagua"',
		perfil: "Fundador de Organización (Abatido)",
		foto: "https://noticieros.televisa.com/wp-content/uploads/2017/01/pancho-cayagua.jpg",
		agrupacion: "La Unión Tepito",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Armando Hernández Gómez",
		alias: '"El Ostión"',
		perfil: "Fundador de Organización (Detenido)",
		foto: "https://lasillarota.com/images/2018/05/09/ostion_1.jpg",
		agrupacion: "La Unión Tepito",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Roberto Moyado Esparza",
		alias: '"El Betito"',
		perfil: "Líder de la Organización (Detenido)",
		foto: "https://lasillarota.com/images/2018/01/19/319061grandefvjbvn3q.jpg",
		agrupacion: "La Unión Tepito",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Eduardo Ramírez Tiburcio",
		alias: '"El Chori"',
		perfil: "Líder de la Organización (Detenido)",
		foto: "https://www.eluniversal.com.mx/resizer/K5IQElzV5fI1orSog6NrFtegvug=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/B3OSAPPRXREM7DXOVKOVYHEJ7Q.jpg",
		agrupacion: "La Unión Tepito",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Heriberto Lazcano Lazcano",
		alias: '"El Lazca"',
		perfil: "Fundador de la Organización (Abatido)",
		foto: "https://cdn2.imagenradio.com.mx/media/files/imagen_radio/styles/large/public/images/84770-seccion.jpg",
		agrupacion: "Cártel de los Zetas",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Jesús Enrique Rejón Aguilar",
		alias: '"El Mamito"',
		perfil: "Líder de la Organización (Extraditado)",
		foto: "https://tecolotito.elsiglodetorreon.com.mx/i/2012/09/425653.jpeg",
		agrupacion: "Cártel de los Zetas",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Jaime González Durán",
		alias: '"El Hummer"',
		perfil: "Líder de la Organización (Extraditado)",
		foto: "https://tecolotito.elsiglodetorreon.com.mx/i/2008/11/97330.jpeg",
		agrupacion: "Cártel de los Zetas",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Arturo Guzmán Decena",
		alias: '"Z-1"',
		perfil: "Fundador de la Organización (Abatido)",
		foto: "https://upload.wikimedia.org/wikipedia/en/c/c4/Raul_Hernandez_Barron.PNG",
		agrupacion: "Cártel de los Zetas",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Miguel Ángel Treviño Morales",
		alias: '"Z-40"',
		perfil: "Fundador de la Organización (Detenido)",
		foto: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/f/8a/f8aa61e2-ef35-11e2-ae8f-001a4bcf887a/51e7246624466.image.jpg",
		agrupacion: "Cártel del Noreste",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Oscar Omar Treviño Morales",
		alias: '"Z-42"',
		perfil: "Líder de la Organización (Detenido)",
		foto: "https://img.gruporeforma.com/imagenes/960x640/5/188/4187158.jpg",
		agrupacion: "Cártel del Noreste",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Juan Francisco Treviño",
		alias: '"El Huevo"',
		perfil: "Líder de la Organización (Detenido)",
		foto: "https://s.hdnux.com/photos/01/24/54/41/22202476/4/rawImage.jpg",
		agrupacion: "Cártel del Noreste",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Ana Isabel Treviño",
		alias: '"s/a"',
		perfil: "Jefa de la Organización (Detenida)",
		foto: "https://lasillarota.com/u/fotografias/m/2017/11/28/f850x638-127723_205212_5050.jpg",
		agrupacion: "Cártel del Noreste",
		fav: false,
	},
  {
		id: uuid(),
		nombre: "Juan García Abrego",
		alias: '"s/a"',
		perfil: "Fundador de la Organización (Extraditdo)",
		foto: "https://www.infobae.com/new-resizer/Pw5XGTx1dbwFnT2Vp9QKC_0-9lU=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/04/13110349/ABREGO-FOTO-REUTERS.jpg",
		agrupacion: "Cártel del Golfo",
		fav: false,
	},
  {
  id: uuid(),
  nombre: "Juan Nepomuceno Guerra",
  alias: '"El Padrino de Matamoros"',
  perfil: "Fundador de la Organización (Finado)",
  foto: "https://elnortenodigital.com/wp-content/uploads/2020/11/download-1.jpg",
  agrupacion: "Cártel del Golfo",
  fav: false,
  },
  {
    id: uuid(),
    nombre: "Osiel Cardenas Guillen",
    alias: '"s/a"',
    perfil: "Líder de la Organización (Extraditado)",
    foto: "https://www.infobae.com/new-resizer/h3-_Z10LI34w7DWhvuWAUv58IlM=/arc-anglerfish-arc2-prod-infobae/public/2XTTYRE7JZCLHIMWSNIBFOWZLA.jpg",
    agrupacion: "Cártel del Golfo",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "José Alfredo Cárdenas Martínez",
    alias: '"El Contador"',
    perfil: "Líder de la Organización",
    foto: "https://latarderm.blob.core.windows.net/images/2019/03/05/miregion2019030501.jpg",
    agrupacion: "Cártel del Golfo",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Miguel Ángel Félix Gallardo",
    alias: '"El Jefe de Jefes"',
    perfil: "Fundador de la Organización (Detenido)",
    foto: "https://www.eluniversal.com.mx/resizer/fNhN58g2Tgcw-xytQ2zEXigo9hI=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/LV3EHNXG6FFSVNN7FAGVHL32TE.jpg",
    agrupacion: "Cártel de Guadalajara",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Ernesto Fonseca Carrillo",
    alias: '"Don Neto"',
    perfil: "Líder de la Organización (Detenido)",
    foto: "https://www.infobae.com/new-resizer/J9eeotvyBpQhwa30TBE9uUs5GiU=/1200x1200/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/BLNGKT5NLJFYDB3FQ6BMXHZGCU.jpg",
    agrupacion: "Cártel de Guadalajara",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Rafael Caro Quintero",
    alias: '"Narco de Narcos"',
    perfil: "Fundador de la Organización (Detenido)",
    foto: "https://img.asmedia.epimg.net/resizer/v2/TISRJU5CKJEFLHCXBFKTKUISLY.png?auth=a82d396d27b0dec482cc7ab6f61748547f5e0d78eba66f60567e6dc418e01976&width=1472&height=1104&smart=true",
    agrupacion: "Cártel de Guadalajara",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Juan J. Esparragoza Moreno",
    alias: '"El azul"',
    perfil: "Fundador de la Organización (Finado)",
    foto: "https://insightcrime.org/wp-content/uploads/2010/11/Alias-El-Azul.jpg",
    agrupacion: "Cártel de Guadalajara",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Amado Carrillo Fuentes",
    alias: '"El Señor de los Cielos"',
    perfil: "Fundador de la Organización (Finado)",
    foto: "https://upload.wikimedia.org/wikipedia/commons/f/f4/U3c3kf5atwf81.jpg",
    agrupacion: "Cártel de Juárez",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Vicente Carrillo Fuentes",
    alias: '"Viceroy"',
    perfil: "Líder de la Organización (Detenido)",
    foto: "https://i0.wp.com/elchamuco.com.mx/wp-content/uploads/2021/09/vicente-carrillo-scaled.jpg?fit=2560%2C1755&ssl=1",
    agrupacion: "Cártel de Juárez",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Carlos Arturo Quintana  Quintana",
    alias: '"El 80"',
    perfil: "Jefe de Plaza",
    foto: "https://ntcd.mx/uploads/2018/05/18/nacional-capturan-a--el-80---lider-de-la-linea-e-integrante-del-cartel-de-juarez201818546.jpg",
    agrupacion: "Cártel de Juárez",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Julio César Olivas Torres",
    alias: '"El Sexto"',
    perfil: "Líder de Organización (Detenido)",
    foto: "https://lasillarota.com/u/fotografias/m/2018/8/15/f638x638-150559_208726_5050.jpg",
    agrupacion: "Cártel de Juárez",
    fav: false,
  },
 

  
]);
  
  const [agrupaciones, setAgrupaciones] = useState ([
    {
      id: uuid(),
      titulo: "Cártel de Guadalajara",
      descripcion: "El Cártel de Guadalajara fue la primera organización criminal mexicana dedicada exclusivamente al narcotráfico, formada en 1978 por Miguel Ángel Félix Gallardo, Rafael Caro Quintero y Ernesto Fonseca Carrillo, con el objetivo de transportar opio, marihuana, y posteriormente, cocaína a los Estados Unidos",
      colorPrimario: "#CBA280",
      colorScundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Cártel de Sinaloa",
      descripcion: 'El Cártel de Sinaloa es una de las organizaciones criminales más poderosas y longevas de México, conocido por sus actividades de tráfico de drogas y otros crímenes organizados. Sus inicios se remontan a la década de 1980, cuando un grupo de traficantes de drogas de Sinaloa, liderados por figuras como Joaquín "El Chapo" Guzmán, Héctor Luis Palma Salazar y Ismael "El Mayo" Zambada, comenzaron a consolidar sus operaciones. El cártel se forma a partir de la fragmentación de la Federación de Guadalajara, uno de los primeros grandes cárteles en México. A pesar de la captura de "El Chapo" y la presión constante de las autoridades, el cártel ha demostrado resiliencia y capacidad de adaptación, aunque ha sufrido fragmentaciones internas.',
      colorPrimario: "#CBCC97",
      colorScundario: "#D9F7E9",
    },
    {
  
      id: uuid(),
      titulo: "Cártel Jalisco Nueva Generación",
      descripcion: 'El Cártel Jalisco Nueva Generación (CJNG) es una de las organizaciones criminales más poderosas y violentas de México. Surgió en la década de 2010 y rápidamente se convirtió en una de las principales fuerzas en el tráfico de drogas y otros crímenes organizados. El CJNG se originó como una facción disidente del Cártel de Sinaloa, formada por antiguos miembros y aliados del grupo de los Mata Zetas. Utiliza tecnología avanzada para comunicaciones y operaciones, y emplea estrategias de propaganda a través de redes sociales para intimidar a rivales y autoridades.',
      colorPrimario: "#607156",
      colorScundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Cártel de Tijuana",
      descripcion: 'El Cártel de Tijuana, también conocido como el Cártel de los Arellano Félix, es una de las organizaciones criminales más conocidas de México, famosa por su violencia y control territorial en la frontera con Estados Unidos.  El cártel ha sido históricamente uno de los principales traficantes de cocaína, marihuana, heroína y metanfetaminas hacia los Estados Unidos a través de la frontera de Tijuana-San Diego. Aunque debilitado, el Cártel de Tijuana sigue siendo una presencia en el narcotráfico, operando a menor escala y participando en otros delitos como el secuestro y la extorsión. También ha habido reportes de alianzas fluctuantes con otros grupos criminales.', 
      colorPrimario: "#63274A",
      colorScundario: "#FFEEDF",
    },
    {
      id: uuid(),
      titulo: "Cártel de Juárez",
      descripcion: 'El cártel fue fundado en la década de 1980 por Rafael Aguilar Guajardo y Amado Carrillo Fuentes, conocido como "El Señor de los Cielos" por su uso de aviones para transportar cocaína. Tras la muerte de Amado Carrillo en 1997, el cártel experimentó fragmentación interna. La lucha por el poder dentro de la organización y las guerras con otros cárteles debilitó su control. A pesar de los golpes recibidos, el cártel ha demostrado resiliencia. Vicente Carrillo Fuentes, hermano de Amado, lideró la organización durante años, y a pesar de su captura en 2014, el cártel sigue activo. Mantiene influencia en áreas clave de Chihuahua y continúa participando en el narcotráfico, aunque ha perdido parte de su antiguo poder y territorio a manos de rivales como el Cártel de Sinaloa y el Cártel Jalisco Nueva Generación.',
      colorPrimario: "#6D8885",
      colorScundario: "#FFEEDF",
    },
    {
      id: uuid(),
      titulo: "Cártel del Golfo",
      descripcion: 'El cártel se formó en la década de 1930, originalmente dedicado al contrabando de alcohol durante la Prohibición en los Estados Unidos. Su base de operaciones se encuentra en Matamoros, Tamaulipas. En los años 1970 y 1980, bajo el liderazgo de Juan García Ábrego, el cártel comenzó a involucrarse en el tráfico de drogas, especialmente cocaína y marihuana. La captura de Osiel Cárdenas Guillén provocó una lucha interna por el poder, resultando en la fragmentación del cártel y la formación de Los Zetas, quienes originalmente eran el brazo armado del Cártel del Golfo antes de convertirse en una organización independiente y rival. A pesar de los golpes significativos a su estructura, el Cártel del Golfo sigue siendo una fuerza relevante en el tráfico de drogas, manteniendo influencia en regiones estratégicas y participando en la violencia que caracteriza el crimen organizado en México.',
      colorPrimario: "#576167",
      colorScundario: "#FFF5D9",
    },
    {
  
      id: uuid(),
      titulo: "Cártel de los Zetas",
      descripcion: 'Los Zetas fueron originalmente el brazo armado del Cártel del Golfo. Formados a fines de los 90, estaban compuestos principalmente por ex miembros de las Fuerzas Especiales del Ejército Mexicano, entrenados en tácticas militares avanzadas.  En 1999, Arturo Guzmán Decena, conocido como "Z-1", se convirtió en uno de los líderes fundadores de Los Zetas. El grupo fue creado para proporcionar protección y llevar a cabo asesinatos y secuestros para el Cártel del Golfo. En 2010, Los Zetas se separaron del Cártel del Golfo y se convirtieron en una organización criminal independiente. Esta ruptura provocó una guerra brutal entre ambos grupos por el control de las rutas del narcotráfico. Aunque debilitados por las capturas de líderes y las luchas internas, Los Zetas continúan siendo una presencia significativa en el crimen organizado. Operan principalmente en el noreste de México y han mantenido sus actividades delictivas diversificadas.',
      colorPrimario: "#B19F91",
      colorScundario: "#FDE7E8",
    },
    {
  
      id: uuid(),
      titulo: "Cártel del Noreste",
      descripcion: 'El Cártel del Noreste se formó a principios de la década de 2010 tras la división interna de Los Zetas. Esta división fue provocada por disputas de liderazgo y luchas de poder dentro de Los Zetas, especialmente después de la captura o muerte de varios líderes clave.  El Cártel del Noreste ha mantenido la reputación de Los Zetas en cuanto a su brutalidad. Utiliza tácticas de terror, como ejecuciones públicas y torturas, para mantener el control y enviar mensajes a sus rivales y a las autoridades. Principalmente activo en los estados de Tamaulipas, Nuevo León y Coahuila, el CDN se ha esforzado por mantener el control territorial a través de enfrentamientos violentos con otros cárteles y con las fuerzas de seguridad del gobierno. Continúa siendo una fuerza importante en el crimen organizado en el noreste de México. A pesar de los esfuerzos del gobierno para desmantelar la organización, el CDN ha demostrado resiliencia y capacidad de adaptación.',
      colorPrimario: "#D7E9E5",
      colorScundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "La Unión Tepito",
      descripcion: ' La Unión Tepito surgió a finales de la década de 2000 y principios de 2010 en el barrio de Tepito, uno de los más icónicos y conflictivos de la Ciudad de México, conocido por su gran mercado negro y actividades ilícitas. Fue fundada por Francisco Javier Hernández Gómez, alias "Pancho Cayagua", y Roberto Moyado Esparza, alias "El Betito". Estos líderes aprovecharon la ubicación estratégica de Tepito para desarrollar una red de narcotráfico y otros delitos. La Unión Tepito controla una gran parte del tráfico de drogas en la Ciudad de México, distribuyendo cocaína, marihuana, y metanfetaminas. Su control del mercado minorista de drogas es una de sus principales fuentes de ingresos. La organización es infame por sus prácticas de extorsión, cobrando "derecho de piso" a negocios y comerciantes en varias zonas de la capital. Este es otro de sus métodos principales para obtener dinero.  La organización ha tenido enfrentamientos con otros grupos criminales como la Fuerza Anti-Unión, que surgió como una facción disidente y rival, llevando a una guerra por el control de la ciudad. La Unión Tepito, con su base en uno de los barrios más emblemáticos de la Ciudad de México, sigue siendo una fuerza poderosa y temida en el panorama criminal de la capital, conocida por su violencia extrema y su control sobre diversas actividades ilícitas.',
      colorPrimario: "#6F585D",
      colorScundario: "#F0F8E2",
    },

  ])


const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
}

const registrarIntegrante = (integrante) => {
  //console.log ("nuevo colaborador", integrante)
  // Spread operator
  setIntegrantes([...integrantes, integrante])
}

//Eliminar colaborador
const eliminarIntegrante = (id) => {
  //console.log("Eliminar colaborador", id)
  const nuevosIntegrantes = integrantes.filter((integrante)=>integrante.id !== id)
  setIntegrantes(nuevosIntegrantes)
}

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  //console.log("Actualizar:", color, id)
  const agrupacionActualizada = agrupaciones.map((agrupacion)=>{
    if(agrupacion.id === id){
      agrupacion.colorPrimario = color
    }
    return agrupacion
  })
  setAgrupaciones(agrupacionActualizada)
}

//Crear equipo 
const crearAgrupacion = (nuevaAgrupacion) => {
  //console.log(nuevaAgrupacion)
  setAgrupaciones([...agrupaciones, {...nuevaAgrupacion, id:uuid()}])
}

const like = (id) => {
 const integrantesActualizados = integrantes.map((integrante)=>{
  if (integrante.id === id){
    integrante.fav = !integrante.fav
  }
  return integrante
 })
 
 setIntegrantes(integrantesActualizados)

}


  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario
      agrupaciones={agrupaciones.map((agrupacion)=>agrupacion.titulo)}
      registrarIntegrante={registrarIntegrante}
      crearAgrupacion={crearAgrupacion}
      /> : <div> </div> }
      <OrgCrime cambiarMostrar={cambiarMostrar}
      />
      {
        agrupaciones.map((agrupacion)=> <Agrupación
        datos= {agrupacion}
        key= {agrupacion.titulo}
        integrantes={integrantes.filter(integrante => integrante.agrupacion === agrupacion.titulo)}
        descripcion={agrupacion.descripcion}
        eliminarIntegrante={eliminarIntegrante}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }
    <Footer/>
    </div>
  );
}

export default App;
