const videos = [
    {
        id:1,
        title: 'Tutorial solucionar Problemas de CORS con Laravel Lumen y Angular',
        publicacion:'5 de octubre,2024',
        descripcion:'Descripción: En este video, te mostraré cómo solucionar los problemas más comunes relacionados con CORS (Cross-Origin Resource Sharing) al trabajar con Laravel Lumen en el backend y Angular en el frontend. Exploraremos qué es CORS, por qué aparece este error, y te guiaré paso a paso para configurar correctamente las cabeceras y permisos en Lumen. Al finalizar este tutorial, sabrás cómo evitar bloqueos al realizar peticiones HTTP entre dominios diferentes y lograr una integración fluida entre tu API y tu aplicación Angular. ¡No te lo pierdas!',
        url: 'https://www.youtube.com/embed/7pRE0jAQ3f8?si=CNJmEBdk5a-z3w0i',
        img: 'https://i.ibb.co/gSvVz4T/CORS.png',
        type:'tutorial',
        repositorio:'https://github.com/Taoista/tutorual-cors-laravel-lumen-angular',
        temas:[
            '¿Qué es CORS y por qué ocurre?',
            'Configuración de los encabezados CORS en Laravel Lumen.',
            'Solución a problemas comunes de CORS en Angular.',
            'Buenas prácticas para evitar conflictos entre frontend y backend.',
            'No olvides suscribirte y activar la campanita para más tutoriales sobre desarrollo web.',
        ]
    },
    {
        id:2,
        title: 'Tutorial Transbank con Laravel',
        publicacion:'13 de octubre 2024',
        descripcion:'En este tutorial te enseño cómo integrar Transbank Webpay en Laravel de manera fácil y rápida. A lo largo del video, aprenderás a instalar el SDK de Transbank, configurar tu proyecto Laravel, y crear un flujo completo de pago en tu aplicación web. También te mostraré cómo probar tu integración en el entorno de prueba de Transbank antes de pasarla a producción. ¡Sigue el tutorial y habilita pagos en línea con Webpay en tu sitio Laravel!',
        url: 'https://www.youtube.com/embed/bHX8ZY-su_I?si=WxbYWfftzZiuNfIt',
        img: 'https://i.ibb.co/YT7HnN6/tutorial.png',
        type:'tutorial',
        repositorio:'https://github.com/Taoista/tutorial-laravel-transbank',
        temas:[
            'Introducción a Transbank Webpay: Explicación de qué es y por qué es importante para procesar pagos en línea en Chile.',
            'Instalación del SDK de Transbank: Cómo instalar el SDK oficial de Transbank usando Composer en tu proyecto Laravel.',
            'Configuración de Laravel para Transbank: Configurar el archivo .env y los controladores para manejar los pagos.',
            'Creación del flujo de pago: Cómo generar una transacción de pago, redirigir al usuario a Webpay y manejar la respuesta del pago exitoso o fallido.',
            'Testing en el ambiente de integración: Probar tu implementación en el ambiente de integración de Transbank antes de pasar a producción.',
            'Conclusión: Recomendaciones para ir a producción y buenas prácticas de seguridad.'
        ]
    },
    {
        id:3,
        title: 'Título: Del Cliente a la Solución: Ideas en Proyectos Tecnológicos',
        publicacion:'13 de octubre 2024',
        descripcion:'En este video, aprenderás cómo prepararte de manera efectiva para una reunión de definición de requisitos con tu cliente, paso a paso. Desde la investigación previa hasta la documentación, entender las necesidades del cliente y definir claramente los requisitos funcionales y no funcionales. También abordamos temas clave como la creación de un cronograma con hitos, el presupuesto, la comunicación efectiva, la gestión de riesgos, las pruebas y la entrega final del proyecto. ¡Asegúrate de estar listo para llevar tu proyecto al éxito desde el inicio! ',
        url: 'https://www.youtube.com/embed/C-lhtd-ZqDA?si=3Zp8dT5-T_UUx17o',
        img: 'https://i.ibb.co/P96HpPw/Shocking-moments.png',
        type:'otro',
        repositorio:null,
        temas:[
            '1. Preparación Previa',
            '2. Levantamiento de requerimientos',
            '3. Definir los Requisitos del Proyecto',
            '4. Tecnologías y Herramientas',
            '5. Presupuesto',
            '6. Soporte - Mantenimiento'
        ]
    }
];

export const getVideos = () =>{
    return videos;
}

export const getVideoId = async (id:number):Promise<any> =>{
    for (const video of videos) {
        if (video.id == id) {
            return video;
        }
    }
} 

