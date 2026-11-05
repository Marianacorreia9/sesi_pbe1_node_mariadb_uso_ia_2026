const express = require('express')
const router = express.Router()

const usuario = require('./controllers/usuario')
const usoia = require('./controllers/usoia')

router.get('/', (req, res) => {
    res.json('Back-end Usos de IA respondendo')
})

router.get('/usuarios', usuario.listar)
router.get('/usuarios/:id', usuario.buscar)
router.post('/usuarios', usuario.cadastrar)
router.put('/usuarios/:id', usuario.alterar)
router.delete('/usuarios/:id', usuario.excluir)

router.post('/login', usuario.login)

router.get('/usoia', usoia.listar)
router.get('/usoia/:id', usoia.buscar)
router.post('/usoia', usoia.cadastrar)
router.put('/usoia/:id', usoia.alterar)
router.delete('/usoia/:id', usoia.excluir)

router.get('/usoia/resumo/riscos', usoia.resumo)

module.exports = router