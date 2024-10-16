const videos = [
    {
        id:1,
        title: 'Tutorial solucionar Problemas de CORS con Laravel Lumen y Angular',
        publicacion:'5 de octubre,2024',
        descripcion:'Descripción: En este video, te mostraré cómo solucionar los problemas más comunes relacionados con CORS (Cross-Origin Resource Sharing) al trabajar con Laravel Lumen en el backend y Angular en el frontend. Exploraremos qué es CORS, por qué aparece este error, y te guiaré paso a paso para configurar correctamente las cabeceras y permisos en Lumen. Al finalizar este tutorial, sabrás cómo evitar bloqueos al realizar peticiones HTTP entre dominios diferentes y lograr una integración fluida entre tu API y tu aplicación Angular. ¡No te lo pierdas!',
        url: 'https://www.youtube.com/watch?v=7pRE0jAQ3f8',
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
        url: 'https://youtu.be/bHX8ZY-su_I',
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

