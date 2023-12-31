describe("Book Tests", function () {
  let testBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3257,
    },
  ];

  beforeEach(function () {
    libraryBooks = [
      { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
      { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
      { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
      {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3257,
      },
    ];
  });

  it("Add Book ", function () {
    assert.deepEqual(
      [
        ...testBooks,
        { title: "Test Title", author: "Test Author", libraryID: 9999 },
      ],
      addBook("Test Title", "Test Author", 9999)
    );
  });

  it("Get Titles", function () {
    assert.deepEqual(
      [
        "Mockingjay: The Final Book of The Hunger Games",
        "The Road Ahead",
        "The Road Ahead",
        "Walter Isaacson",
      ],
      getTitles()
    );
  });

  it("Find Books", function () {
    assert.deepEqual(
      [
        {
          title: "Mockingjay: The Final Book of The Hunger Games",
          author: "Suzanne Collins",
          libraryID: 3257,
        },
      ],
      findBooks("final")
    );
  });
});
