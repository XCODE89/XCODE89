import outreachVidsGif from "../assets/img/outreach-vids.gif"
import outreachVidsImg from "../assets/img/outreachvids.png"
import creameImg from "../assets/img/creame_Image.jpg"
import creameGif from "../assets/img/creame_gif.gif"

const projects = [
    {
        gif : outreachVidsGif,
        name: "OUTREACH-VIDS",
        description: "Es una herramienta diseñada para ayudar a las empresas a sobresalir en el competitivo mundo de los negocios. Enfocada en mejorar el alcance en frío, combina la personalización con tecnología de IA avanzada para generar videos personalizados y atractivos. Con OutreachVids, las empresas pueden captar la atención de su audiencia de manera más efectiva, creando conexiones genuinas a través de contenido visual hecho a medida.",
        photo: outreachVidsImg,
        tecnologies : ["TypeScript", "AWS", "OpenAI", "AzureAI", "React"],
        url: "http://bsa-2024-outreachvids-dev.eu-north-1.elasticbeanstalk.com/sign-in",
        video: "",
        code: ""

    },
    {
        gif : creameGif,
        name: "CreameApp",
        description: "Este proyecto es una plataforma que gestiona las actividades del personal, registrando el tiempo empleado en cada tarea y evaluando el rendimiento. Utiliza geolocalización para seguimiento en tiempo real y administra archivos, como facturas procesadas automáticamente con OCR, optimizando la eficiencia operativa.",
        photo: creameImg,
        tecnologies : ["React", "Redux", "Tesseract", "Google API"],
        url:"https://app.creame.com.co/",
        video: "../assets/videos/sample.mp4",
        code: ""
    },
    // {
    //     gif : imgProject3,
    //     name: "nombre3",
    //     description: "lorem ipsum dolor sit amet, consect",
    //     photo: imgProject3,
    //     tecnologies : ["React", "CSS", "JavaScript"]

    // }
]

export default projects;