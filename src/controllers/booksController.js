import books from "../models/Books.js"

class bookController {

    static listBooks = (req, res) => {
        books.find()
        .populate('author')
        .exec((err, books) => {
            res.status(200).json(books)
        })

    }

    static listBooksByID = (req, res) => {
        const id = req.params.id
        books.findById(id)
        .populate('author')
        .exec((err, books) => {
            if(!err) {
                return res.status(200).send(books)
            }
            res.status(400).send({message: 'Livro não encontado'})
        })
    }

    static createBook = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            if(err) {
                return res.status(500).send({message: `${err.message} - falha ao cadastrar`})
            }
            res.status(201).send(book.toJSON())
        })

    }

    static deleteBook = (req, res) => {
        const id = req.params.id
        books.findByIdAndDelete(id, (err) => {
            if(!err) {
                return res.status(200).send({message: "livro excluído com sucesso"})
            }
            res.status(500).send({message: err.message})
        })
    }
    static changeBook = (req, res) => {
        const id = req.params.id
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                return res.status(200).send({message: 'livro atualizado com sucesso'})
            }
            res.status(500).send({message: `${err.message} - Não foi possível atualizar`})
        })
    }

    static listBooksByRate = (req, res) => {
        const rate = req.query.rate
        books.find({'rate': rate}, {}, (err, books) => {
            if(!err) {
                return res.status(200).send(books)
            }
            res.status(500).send(err.message)
        })
    }
    
}

export default bookController