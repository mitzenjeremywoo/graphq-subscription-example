import { gql } from 'apollo-server';

export const typeDefs = gql`
  
  type Review {
    id: ID!
    rating: Float!
    content: String!
    product: Product!
  }
  
  type Product {
    id: ID!
    reviews: [Review!]!
  }

  type Library {
    branch: String!
    books: [Book!]
  }


  type Reviews {
    id: String 
    productId: String
    content: String
    rating: Float
  }

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    title: String
    sex: String
  }

  input BlogPostContent {
    title: String
    body: String
    media: [MediaDetails!]
  }
  
  input MediaDetails {
    format: MediaFormat!
    url: String!
  }
  
  enum MediaFormat {
    IMAGE
    VIDEO
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!  
  }

  type BookMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    book: Book
  }

  type Mutation {
    addBook(title: String, author: String): BookMutationResponse
    createBlogPost(content: BlogPostContent!): Book
    updateBlogPost(id: ID!, content: BlogPostContent!): Book
  }

  type Query {
    review(id: ID!): Review!
    books: [Book]
    author: [Author]
    libraries: [Library]
    reviews: [Reviews]
  } 

  type Subscription {
    postCreated: Book
  }
  
  type Custom {
    books: [Book]
  }
`;