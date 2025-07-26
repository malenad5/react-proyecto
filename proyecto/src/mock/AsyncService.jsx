const products = [
    {
        id:'01',
        name:'Tour Por New York',
        description:'Circuito por la estatua de libertad, el puente de Brookying y por Broadway',
        price:126000,
        stock:15,
        category:'Circuitos',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lights_of_Rockefeller_Center_during_sunset.jpg/1200px-Lights_of_Rockefeller_Center_during_sunset.jpg'
    },
    {
        id:'02',
        name:'Asistencia Gold',
        description:'Viajá seguro',
        price:80000,
        stock:19,
        category:'Asistencia',
        img:'https://europ-assistance.lat/assets/images/asistenciaalviajero-argentina.jpg'
    },
    {
        id:'03',
        name:'Tour Nocturno Por Francia',
        description:'Visita la ciudad del amor',
        price:170000,
        stock:9,
        category:'Circuitos',
        img:'https://d2kzh91pcly9gn.cloudfront.net/paris-torre-eiffel-image.webp'
    },
    {
        id:'04',
        name:'Visita del Louvre y Crucero',
        description:'Louvre y crucero por el Rio Sena con Acceso Prioritario',
        price:120800,
        stock:59,
        category:'Circuito',
        img:'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1645846296/rg73rgkb4xsiigqzd3ab.jpg'
    },
    {
        id:'05',
        name:'Río de Janeiro y Búzios',
        description:'Vista de las hermosas playas y vistas de Brasil',
        price:130500,
        stock:13,
        category:'Paquetes',
        img:'https://fotografias.larazon.es/clipping/cmsimages01/2024/06/06/473254A3-CC18-474C-8A48-80D5BB820A85/skyline-rio-janeiro_98.jpg?crop=2325,1308,x544,y0&width=1900&height=1069&optimize=low&format=webply'
    },
    {
        id:'06',
        name:'Bariloche ¡Con Circuito Chico!',
        description:'Disfruta de las vistas y el chocolate caliente',
        price:100500,
        stock:10,
        category:'Paquetes',
        img:'https://upload.wikimedia.org/wikipedia/commons/6/68/Basecat.JPG'
    },
    {
        id:'07',
        name:'Bella Roma',
        description:'Ciudad de roma y alredores',
        price:240600,
        stock:29,
        category:'Paquetes',
        img:'https://www.italia.it/content/dam/tdh/es/interests/lazio/roma/roma-in-48-ore/media/20220127150143-colosseo-roma-lazio-shutterstock-756032350.jpg'
    },
    {
        id:'08',
        name:'Asistencia Platinum',
        description:'Viaja seguro',
        price:70500,
        stock:33,
        category:'Asistencia',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSm-pB1jpsvxaGrNGlnD5rYV0nwmUsd8hG3YycKTMS7SKH02sb8np484WKRiugBayc68&usqp=CAU'
    },
    {
        id:'09',
        name:'Asistencia infinity',
        description:'Viaja seguro',
        price:60800,
        stock:10,
        category:'Asistencia',
        img:'https://tvazteca.brightspotcdn.com/dims4/default/0c6bdbc/2147483647/strip/true/crop/1920x1080+0+0/resize/928x522!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F5a%2Fb4%2F51c492ce4d46b40c89c4cc89a68d%2Fviajes-en-2025-detalles-a-tener-en-cuenta-destinos-tendencias.jpg'
    },
    

    ]



export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
        if(error){
            reject('Hubo un error, intente mas tarde')
        }else{
            resolve(products)
        }
        },2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            
            let oneProduct = products.find((prod)=> prod.id === id)
            
            resolve(oneProduct)
        },2000)
    })
}   
