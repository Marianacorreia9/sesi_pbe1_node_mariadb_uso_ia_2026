const connection = require('../db')

const listar = (req, res) => {
    connection.query('SELECT * FROM usoia', (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const buscar = (req, res) => {
    const { id } = req.params

    connection.query('SELECT * FROM usoia WHERE id = ?', [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const cadastrar = (req, res) => {
    const { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body

    connection.query(
        'INSERT INTO usoia (usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana],
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
    const { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body

    connection.query(
        'UPDATE usoia SET usuarioId = ?, sistema = ?, tipo = ?, finalidade = ?, tecnologia = ?, nivelRisco = ?, revisaoHumana = ? WHERE id = ?',
        [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana, id],
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

    connection.query('DELETE FROM usoia WHERE id = ?', [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const resumo = (req, res) => {
    connection.query(
        `SELECT 'Alto' AS nivelRisco, COUNT(*) AS total FROM usoia WHERE nivelRisco = 'Alto'
        UNION ALL
        SELECT 'Medio' AS nivelRisco, COUNT(*) AS total FROM usoia WHERE nivelRisco = 'Medio'
        UNION ALL
        SELECT 'Baixo' AS nivelRisco, COUNT(*) AS total FROM usoia WHERE nivelRisco = 'Baixo'`,
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado)
        }
    )
}

module.exports = {
    listar,
    buscar,
    cadastrar,
    alterar,
    excluir,
    resumo
}