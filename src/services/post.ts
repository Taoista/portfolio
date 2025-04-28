const posts = [
   {
    id: 1,
    fecha: '27 de Abril 2025',
    url: 'empresas-quedaran-obsoletas-sin-inteligencia-artificial',
    title:'Las empresas que no usen IA quedarán obsoletas: una advertencia urgente',
    img:'https://i.ibb.co/C3Sb8QKP/Curso-esencial-de-Inteligencia-Artificial-Miniatura-de-You-Tube.png',
    descripcion:[
        'La inteligencia artificial (IA) ya no es una opción futurista: es una necesidad estratégica. Empresas líderes y expertos coinciden en que aquellas organizaciones que no integren IA en sus procesos quedarán rezagadas o incluso desaparecerán del mercado en los próximos años.​',
    ],
    body:[
        {
            title:'La IA como factor de supervivencia empresarial',
            text:[
                'Eric Schmidt, ex-CEO de Google, fue contundente al afirmar que las empresas que no adopten la inteligencia artificial no sobrevivirán. Para Schmidt, la IA no es solo una ventaja competitiva, sino una cuestión de supervivencia empresarial.',
                'Mark Minevich, asesor de la ONU, advirtió que para 2025, las empresas que no utilicen IA pasarán inadvertidas en el mercado. Según Minevich, la inversión en IA alcanzará los 151.100 millones de dólares, y las organizaciones deben centrarse en una aplicación ética y centrada en el ser humano. ​'
            ],
        },
        {
            title:'¿Por qué la IA es indispensable?',
            text:[
                'La IA permite automatizar tareas repetitivas, mejorar la toma de decisiones mediante análisis predictivos y ofrecer experiencias personalizadas a los clientes. Además, facilita la optimización de procesos internos y la creación de nuevos modelos de negocio.',
                'Un estudio de McKinsey destaca que la IA generativa podría aportar entre 2,6 y 4,4 billones de dólares anuales a la economía global. Sin embargo, muchas empresas aún están en fases piloto o no han decidido cómo implementarla, lo que las pone en riesgo de quedar obsoletas. '
            ],
        },
        {
            title:'La brecha entre grandes y pequeñas empresas',
            text:[
                'Un informe de UGT revela una creciente brecha digital entre grandes y pequeñas empresas en España. Mientras las grandes han incrementado su inversión en IA, las medianas y pequeñas la han reducido, principalmente por falta de conocimientos especializados y costos.',
            ],
        },
        {
            title:'La urgencia de actuar',
            text:[
                'La integración de la IA no solo es una cuestión tecnológica, sino también cultural y estratégica. Las empresas deben formar a su personal, adaptar sus procesos y adoptar una mentalidad abierta al cambio. Ignorar esta transformación puede significar perder relevancia en un mercado cada vez más competitivo.​',
            ],
        },
       
    ],
    url_conts:[
        {
            text:'expansion.mx',
            url:'https://expansion.mx/opinion/2024/07/02/las-empresas-que-no-utilicen-ia-se-quedaran-atras?utm_source=chatgpt.com'
        },
        {
            text:'ambito.com',
            url:'https://www.ambito.com/negocios/las-empresas-que-no-incorporen-la-inteligencia-artificial-quedaran-rezagadas-n5812350?utm_source=chatgpt.com'
        },
        {
            text:'malagavalley.es',
            url:'https://www.malagavalley.es/las-empresas-que-no-usen-ia-en-2025-pasaran-inadvertidas-en-el-mercado/?utm_source=chatgpt.com'
        },
        {
            text:'revistaalimentaria.es',
            url:'https://revistaalimentaria.es/industria/food-tech/gurus-tecnologicos-des-las-empresas-que-no-utilicen-ia-en-2025-pasaran-inadvertidas-en-el-mercado?utm_source=chatgpt.com'
        },
       
        {
            text:'elpais.com',
            url:'https://elpais.com/economia/2025-02-25/el-uso-de-la-inteligencia-artificial-abre-brecha-entre-las-grandes-y-la-pequenas-empresas.html?utm_source=chatgpt.com'
        },
        {
            text:'elpais.com',
            url:'https://elpais.com/economia/negocios/2025-04-27/liderar-en-un-mundo-plagado-de-algoritmos.html?utm_source=chatgpt.com'
        }

    ]
   }
]


export const getPosts = () =>{
    return posts;
}

export const getPostsId = async (url:string):Promise<any> =>{
    for (const post of posts) {
        if (post.url == url) {
            return post;
        }
    }
} 
