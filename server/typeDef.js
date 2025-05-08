const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    name: String
    uid: ID!
    age: Int
    booksWritten: Int
    email: String
  }

  type Book {
    bookname: String
    bookid: ID!
    author: User
    pages: Int
    sold: Int
  }

  type Query {
    getAllUsers: [User]
    getAllBooks: [Book]
    getUser(uid: ID!): User
    getBook(bookid: ID!): Book
  }
`;

module.exports = typeDefs;
