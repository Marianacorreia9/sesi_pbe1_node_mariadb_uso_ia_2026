const connection = require('../db')

const listar = (req, res) => {
    connection.query('SELECT * FROM usuario', (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const buscar = (req, res) => {
    const { id } = req.params

    connection.query('SELECT * FROM usuario WHERE id = ?', [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body

    connection.query(
        'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, PASSWORD(?))',
        [nome, email, senha],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado)
        }
    )
}

const alterar = (req, res) => {
    const { id } = req.params
    const { nome, email, senha } = req.body

    connection.query(
        'UPDATE usuario SET nome = ?, email = ?, senha = PASSWORD(?) WHERE id = ?',
        [nome, email, senha, id],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado)
        }
    )
}

const excluir = (req, res) => {
    const { id } = req.params

    connection.query('DELETE FROM usuario WHERE id = ?', [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const login = (req, res) => {
    const { email, senha } = req.body

    connection.query(
        'SELECT id, nome, email FROM usuario WHERE email = ? AND senha = PASSWORD(?)',
        [email, senha],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }

            if (resultado.length === 0) {
                return res.status(401).json({ mensagem: 'Email ou senha incorretos' })
            }

            res.json(resultado[0])
        }
    )
}

module.exports = {
    listar,
    buscar,
    cadastrar,
    alterar,
    excluir,
    login
}