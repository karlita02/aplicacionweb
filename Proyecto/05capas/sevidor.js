const express = requiere('express');
const cors = requeire('cors');
class server {
    constructor(){
        this.routes = express.routes();
        this.app = express.routes();

        this.port= process.env.PORT;
        this.paths={
            productos:'/api/productos',
            

        }
        this.conectarBD();
        this.middlewares();
        this.routes();
        this.routes.use('/v1/sextoa', this.app);
        this._express = express().use(this.routes)
        express().use(this.routes)
    }
    async conectarBD(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this,app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.productos,requiere('./routes/productos'))
    }
    listen(){
        this._express.listen(this.port,()=>{
            console.log('servidor corriendo en puerto')
        })
    }
}