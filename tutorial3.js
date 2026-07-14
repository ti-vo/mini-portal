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


class Buch {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = false;
  }

  markAsRead() {
    this.read = true;
  }

  description() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}

class Bibliothek {
  constructor() {
    this.buecher = [];
  }

  buchHinzufuegen(buch) {
    this.buecher.push(buch);
  }

  ungeleseneBuecher() {
    return this.buecher.filter((buch) => !buch.read);
  }

  anzahlBuecher() {
    return this.buecher.length;
  }
}


const meineBibliothek = new Bibliothek();

const buch1 = new Buch("Brave New World", "Aldous Huxley", 1932);
const buch2 = new Buch("Das Blut der Anderen", "Simone de Beauvoir", 1945);
const buch3 = new Buch("1984", "George Orwell", 1949);

buch1.markAsRead(); 
buch2.markAsRead(); 

meineBibliothek.buchHinzufuegen(buch1);
meineBibliothek.buchHinzufuegen(buch2);
meineBibliothek.buchHinzufuegen(buch3);

console.log("Anzahl Bücher:", meineBibliothek.anzahlBuecher());
console.log("Ungelesene Bücher:", meineBibliothek.ungeleseneBuecher());