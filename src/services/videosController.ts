const videos = [
    {
        id:1,
        title: 'Tutorial solucionar Problemas de CORS con Laravel Lumen y Angular',
        publicacion:'5 de Octubre,2024',
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
        ],
        comandos: [

        ]
    },
    {
        id:2,
        title: 'Tutorial Transbank con Laravel',
        publicacion:'13 de Octubre 2024',
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
        ],
        comandos: [
            
        ]
    },
    {
        id:3,
        title: 'Del Cliente a la Solución: Ideas en Proyectos Tecnológicos',
        publicacion:'13 de Octubre 2024',
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
        ],
        comandos: [
            
        ]
    },
    {
        id:4,
        title: 'Tutorial Configurar Git y GitHub paso a paso',
        publicacion:'11 de Noviembre 2024',
        descripcion:'En este video te guío a través del proceso de instalación y configuración de Git en tu computadora, y cómo conectar tu repositorio local con GitHub para gestionar y compartir tus proyectos de manera eficiente. Aprenderás los comandos básicos de Git y cómo utilizar GitHub para hacer control de versiones y colaborar en tus proyectos. ¡Ideal para principiantes y aquellos que buscan mejorar sus habilidades en desarrollo!',
        url: 'https://www.youtube.com/embed/AO-q_CFfFFA?si=fy_9taW65zZIbC1T',
        img: 'https://i.ibb.co/m80Sd7d/c-ONFIGURAR-GIT-GITHUB.png',
        type:'tutorial',
        repositorio:null,
        temas: [
            '1. Configuración en Windows',
            '2. Descargar Git y crear cuenta en GitHub',
            '3. Configurar Git en máquina local',
            '4. Crear repositorio',
            '5. Primer push'
        ],
        comandos: [
            'git config --global user.name "tu nombre"',
            'git config --global user.email "tu correo"',
            'git config --list',
            'ssh-keygen -t, rsa -b 4096 -C "tu correo"',
            'cat ~/.ssh/id_rsa.pub',
            'cat ~/.ssh/id_rsa',
            'ssh -T git@github.com',
            'eval "$(ssh-agent -s)"',
        ]
    },
    {
        id:5,
        title: 'Desplegar Astro en Vercel con GitHub',
        publicacion:'23 de Abril 2025',
        descripcion:'En este video se explica, paso a paso, cómo desplegar una página web creada con Astro utilizando Git, GitHub y la plataforma Vercel. El objetivo es mostrar de forma clara y sencilla el proceso completo de despliegue, desde la creación del proyecto hasta su publicación en línea, utilizando herramientas modernas y gratuitas.',
        url: 'https://www.youtube.com/embed/VyoaF6xwSJc?si=nYkZ3OFreYNBfHts',
        img: 'https://i.ibb.co/bgYkH8tT/Miniatura-Youtube-Producto-Impactante-Fotogr-fico-Rojo-y-Amarillo.png',
        type:'tutorial',
        repositorio:null,
        temas: [
            '1. Crear proyecto de Astro',
            '2. Crear proyecto en GitHub',
            '3. Crear proyecto en Vercel',
            '4. Desplegar vercel',
            // '5. Primer push'
        ],
        comandos: [
            'npm create astro@latest',
            'nombre de tu proyecto web',
            'git remote add orgigin "link del repositorio"',
            'git push origin master',
            // 'cat ~/.ssh/id_rsa.pub',
            // 'cat ~/.ssh/id_rsa',
            // 'ssh -T git@github.com',
            // 'eval "$(ssh-agent -s)"',
        ]
    },
    {
        id:6,
        title: 'Agente de venta con Angular IA',
        publicacion:'02 de Mayo 2025',
        descripcion:'¿Te imaginas tener un vendedor que trabaje 24/7? En este video te enseño cómo crear un asistente de ventas con inteligencia artificial',
        url: 'https://www.youtube.com/embed/_bLvsw-boz8?si=Vr9N7LhEQR1h1RkP',
        img: 'https://i.ibb.co/08wQJQ1/Copia-de-Shocking-moments-Your-Story-Miniatura-de-You-Tube.png',
        type:'tutorial',
        repositorio:null,
        temas: [
            '1. Testeo en entorno de prueba',
            '2. Integración con ChatGPT-3',
            '3. Base de datos Google Sheets',
            '4. Prueba en producción',
        ],
        comandos: [
            // 'npm create astro@latest',
            // 'nombre de tu proyecto web',
            // 'git remote add orgigin "link del repositorio"',
            // 'git push origin master',
            // 'cat ~/.ssh/id_rsa.pub',
            // 'cat ~/.ssh/id_rsa',
            // 'ssh -T git@github.com',
            // 'eval "$(ssh-agent -s)"',
        ]
    },
    {
        id:7,
        title: '01 Laravel - que es laravel',
        publicacion:'03 de Mayo 2025',
        descripcion:'Descubre por qué Laravel es el mejor framework PHP para desarrolladores web. Rápido, potente y con todo lo que necesitas para crear apps modernas.',
        url: 'https://www.youtube.com/embed/-KcLj2onXxM?si=oHDwUL9p2QyOVS5J',
        img: 'https://i.ibb.co/Xk5Gkf4s/1.jpg',
        type:'curso',
        repositorio:null,
        temas: [
            '1. ¿Qué es Laravel?',
            '2. ¿Por qué usar Laravel?',
            '3. ¿Quién usa Laravel?',
            '4. ¿Cómo se puede usar Laravel?',
        ],
        comandos: [
            // 'npm create astro@latest',
            // 'nombre de tu proyecto web',
            // 'git remote add orgigin "link del repositorio"',
            // 'git push origin master',
            // 'cat ~/.ssh/id_rsa.pub',
            // 'cat ~/.ssh/id_rsa',
            // 'ssh -T git@github.com',
            // 'eval "$(ssh-agent -s)"',
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

