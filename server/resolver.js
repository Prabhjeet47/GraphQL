const books = require("./books.js");
const users = require("./users.js");

const resolvers = {
  Book: {
    author: (book) => {
      return users.find((user) => {
        return user.uid === book.authorid;
      });
    },
  },

  Query: {
    getAllUsers: () => users,
    getAllBooks: () => books,
    getUser: (_, {uid}) => {
      return users.find((user) => {
        return user.uid === uid;
      });
    },
    getBook: (_, {bookid}) => {
      return books.find((book) => {
        return book.bookid === bookid;
      });
    },
  },
};

module.exports = resolvers;
