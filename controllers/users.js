import { response, request } from 'express'; // esto es solo un truco para que vscode reconozca el tipado de res y poder ver sus metodos. en TS no es necesario.


const usersGet = (req, res = response) => {

    const {q, nombre = "No name", apikey, page=1, limit=2} = req.query;

    res.json({
        msg : "get API - controller",
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usersPost = (req = request, res = response) => {

    const {nombre, edad} = req.body;


    res.status(201).json({
        msg : "post API - controller",
        nombre,
        edad
    })
}

const usersPut = (req = request, res = response) => {

    const {id} = req.params;

    res.json({
        msg : "put API - controller",
        id
    })
}

const usersDelete = (req = request, res = response) => {

    res.json({
        msg : "Delete API - controller"
    })
}


export {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}