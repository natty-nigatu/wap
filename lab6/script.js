let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3257,
  },
];

function addBook(title, author, libraryID) {
  libraryBooks.push({
    title,
    author,
    libraryID,
  });

  return libraryBooks;
}

function getTitles() {
  let titles = libraryBooks.map((x) => x.title);
  titles.sort();
  return titles;
}

function findBooks(keyword) {
  let books = libraryBooks.filter((x) =>
    x.title.toLowerCase().includes(keyword.toLowerCase())
  );
  books.sort((a, b) => a.author.localeCompare(b.author));

  return books;
}
