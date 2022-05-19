const platos=[
    {
        id:1,
        descripcion:'Encebollado',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion:'Ceviche',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Tigrillo',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Tostadas',
        idrestaurante:2,
    },

 ]
 const restaurantes=[
     {
        id:1,
        nombre:'La carreta de Tono',
     },
     {
        id:2,
        nombre:'Miguelito Restaurant',
     },
 ]

 function buscarPlatoPorId(id)
 {
     return new Promise((resolve, reject)=>{
        const plato =  platos.find((plato)=> plato.id=== id);
        if (!plato)
        {
            const error= new Error();
            error.message=`El plato con id ${id} no pudo ser encontrado`;
            reject(error);
        }
        resolve(plato);

     })

 }