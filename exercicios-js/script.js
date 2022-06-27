// EXERCÍCIO 1
/*
let nota
for (let i = 0; i < 15; i++) {
    nota = (Math.random()*100).toFixed(2)
    if (nota >= 90)
        console.log(nota + ' A')
    else if (nota >= 80)
        console.log(nota + ' B')
    else if (nota >= 70) 
        console.log(nota + ' C')
    else if (nota >= 60)
        console.log(nota + ' D')
    else 
        console.log(nota + ' F')
}
*/

// EXERCÍCIO 
function Book (title, author) {
    this.title = title
    this.author = author
}

function Category (category, books) {
    this.category = category
    this.books = [...books]
}

const booksByCategory = [
    new Category(
        "Riqueza",
        [
            new Book(
            "Os segredos da mente milionária",
            "T. Harv Eker"
            ),
            new Book(
                "O homem mais rico da Babilônia",
                "George S. Clason"
            ),
            new Book(
                "Pai rico, pai pobre",
                "Robert T. Kiyosaki e Sharon L. Lechter"
            )
        ]
    ),
    new Category(
        "Inteligência Emocional",
        [    
            new Book(
                "Você é Insubstituível",
                "Augusto Cury"
            ),
            new Book(
                "Ansiedade - Como enfrentar o mal do século",
                "Augusto Cury"
            ),
            new Book(
                "Os 7 hábitos das pessoas altamente eficazes",
                "Stephen R. Covey"
            )
        ]
    )
]

// ### Contar o número de categorias e o número de livros em cada categoria
const totalCategories = booksByCategory.length
console.log(`Total de Categorias: ${totalCategories}`)

booksByCategory.forEach(category => {
    console.log(`Categoria: ${category.category}\nNúmero de livros: ${category.books.length}`)
})

// ### Contar o número de autores
let Authors = []

// somando o número de autores

for(let category of booksByCategory) {
    category.books.forEach(book => { Authors.push(book.author) })
}
/*booksByCategory.forEach(category => {
    category.books.forEach(book => { Authors.push(book.author) })
})
*/
// excluindo os autores repetidos
Authors = Authors.filter((author, i) => Authors.indexOf(author) === i)

console.log(Authors.length)

// ### Mostrar os livros de um autor

// Esta função imprime os títulos dos livros de um autor
function authorBooks (books, author) {
    let authorBooks = []
    for(let book of books)
        if(book.author === author)
            authorBooks.push(book.title)
    
    console.log(`Livros de ${author}:\n${authorBooks.join(",\n")}`)
}

allBooks = []
booksByCategory.forEach(category => {
    allBooks.push(...category.books)
})

authorBooks(allBooks, "Augusto Cury")
authorBooks(allBooks, "George S. Clason")
