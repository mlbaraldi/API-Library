import authors from "../models/Author.js"

class authorController {
    
    static listAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })

    }
    static listAuthorsByID = (req, res) => {
        const id = req.params.id
        authors.findById(id, (err, authors) => {
            if(!err) {
                return res.status(200).send(authors)
            }
            res.status(400).send({message: 'Autor não encontado'})
        })
    }

    static createAuthor = (req, res) => {
        let author = new authors(req.body)
        author.save((err) => {
            if(err) {
                return res.status(500).send({message: `${err.message} - falha ao cadastrar`})
            }
            res.status(201).send(author.toJSON())
        })

    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id
        authors.findByIdAndDelete(id, (err) => {
            if(!err) {
                return res.status(200).send({message: "Autor excluído com sucesso"})
            }
            res.status(500).send({message: err.message})
        })
    }
    static changeAuthor = (req, res) => {
        const id = req.params.id
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                return res.status(200).send({message: 'Autor atualizado com sucesso'})
            }
            res.status(500).send({message: `${err.message} - Não foi possível atualizar`})
        })
    }
    
}

export default authorController