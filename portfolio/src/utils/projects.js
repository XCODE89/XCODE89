import outreachVidsGif from "../assets/img/outreach-vids.gif"
import outreachVidsImg from "../assets/img/outreachvids.png"
import imgProject2 from "../images/banner/proyecto_banner2.gif"
import imgProject3 from "../images/banner/proyecto_banner3.gif"

const projects = [
    {
        gif : outreachVidsGif,
        name: "OUTREACH-VIDS",
        description: "Es una herramienta diseñada para ayudar a las empresas a sobresalir en el competitivo mundo de los negocios. Enfocada en mejorar el alcance en frío, combina la personalización con tecnología de IA avanzada para generar videos personalizados y atractivos. Con OutreachVids, las empresas pueden captar la atención de su audiencia de manera más efectiva, creando conexiones genuinas a través de contenido visual hecho a medida.",
        photo: outreachVidsImg,
        tecnologies : ["TypeScript", "AWS", "OpenAI", "AzureAI", "React", "Microsoft"],
        url: "http://bsa-2024-outreachvids-dev.eu-north-1.elasticbeanstalk.com/sign-in",
        code: ""

    },
    {
        gif : imgProject2,
        name: "nombre2",
        description: "lorem ipsum dolor sit amet, consect",
        photo: imgProject2,
        tecnologies : ["React", "CSS", "JavaScript"]
    },
    {
        gif : imgProject3,
        name: "nombre3",
        description: "lorem ipsum dolor sit amet, consect",
        photo: imgProject3,
        tecnologies : ["React", "CSS", "JavaScript"]

    }
]

export default projects;