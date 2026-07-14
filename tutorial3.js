const books = [
  { title: "Der Steppenwolf", author: "Hermann Hesse", year: 1927, read: true },
  { title: "Die Morgenlandfahrt", author: "Hermann Hesse", year: 1932, read: true },
  { title: "1984", author: "George Orwell", year: 1949, read: false },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932, read: true },
  { title: "Das Blut der Anderen", author: "Simone de Beauvoir", year: 1945, read: true },
]

const justTitles = books.map( (x) => x.title )
const readBooks = books.filter(b => b.read)
const anzahlGelesen = readBooks.reduce((zaehler, buch) =>  zaehler+1, 0);

console.log(justTitles)
console.log(anzahlGelesen)

const { title, author } = books[0]; 
console.log(title, author)