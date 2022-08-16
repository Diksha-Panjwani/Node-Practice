$(()=> {
    console.log("hello")
    getBooks()
})

function getBooks() {
    console.log("hii")
    $.get('https://localhost:300/books', (data) => {
        console.log("hii")
        //console.log(data);
    })
}