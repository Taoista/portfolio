const videos = [
    {
        id:1,
        title: 'Tutorial solucionar Problemas de CORS con Laravel Lumen y Angular',
        url: 'https://www.youtube.com/watch?v=7pRE0jAQ3f8',
        img: 'https://i.ibb.co/gSvVz4T/CORS.png',
        type:'tutorial'
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

