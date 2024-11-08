import outreachVidsGif from "../assets/img/outreach-vids.gif"
import outreachVidsImg from "../assets/img/outreachvids.png"
import creameImg from "../assets/img/creame_Image.jpg"
import creameGif from "../assets/img/creame_gif.gif"
import mapacheImg from "../assets/img/mapache_image.jpg"

const projects = [
    {
        gif : outreachVidsGif,
        name: "Outreach-Vids",
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
    {
        gif : mapacheImg,
        name: "Mapache Studio",
        description: "Este proyecto es una demostración de mi habilidad para crear sitios web modernos y funcionales, adaptable a cualquier tipo de negocio. La estructura incluye múltiples secciones con contenido de ejemplo que puede personalizarse para ajustarse a las necesidades específicas de cualquier cliente. El proyecto refleja mi atención al detalle y mi capacidad para diseñar interfaces limpias y navegables, ideales para presentar los servicios y valores de cualquier marca o empresa.",
        photo: mapacheImg,
        tecnologies : ["React", "Redux", "Django"],
        url:"https://mapache-studio.vercel.app/",
        video: "",
        code: ""
    },
]

export default projects;