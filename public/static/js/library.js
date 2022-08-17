$(()=> {
    console.log("hello")
    getBooks()
})

function getBooks() {
    console.log("hii")
    $.get('/books', (data) => {
        console.log("hii123")
        //console.log(data);
    })
}