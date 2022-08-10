const { request, response } = require("express");



const usuariosGet = (req=request , res= response )=>{

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });


}
const usuariosPost = (req=request , res= response )=>{


    const {nombre,edad} = req.body;

    res.json({
        msg:'POST API - controlador',
        nombre,
        edad
    })


}
const usuariosPut = (req=request , res= response )=>{

    const {id} = req.params

    res.json({
        msg:'PUT API - controlador',
        id
    })


}
const usuariosPatch = (req=request , res= response )=>{

    res.json({
        msg:'PATCH API - controlador'
    })


}
const usuariosDelete = (req=request , res= response )=>{

    res.json({
        msg:'DELETE API - controlador'
    })


}


module.exports=
{
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}