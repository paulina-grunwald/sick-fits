# Sick Fits Store

This is a project that was part of the [Advanced React and GraphQL](https://advancedreact.com/) created by Wes Bos. The Sick fits web application for online clothing store. It was built using React, GraphQL, Next.js. The application has five main models — Users, Items, Orders, CartItems, and OrderItems — all of which are relational and showcase the power of relational GraphQL Queries. The app also includes many server side bits including JWT authentication, permissions, sending email, uploading images, and charging credit cards.

## Getting Started

In order to get started you need to follow these steps:`

1. Clone Sick Fits project repo: `git clone https://github.com/paulina-grunwald/sick-fits.git`
2. Go to folders frontend and backend and run command `npm install`

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - Framework to build server-rendered applications
- [Prisma](https://www.prisma.io/) - Auto-generated and type-safe database client
- [GraphQl](https://graphql.org/) - A query language for APIs
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [NProgress](https://github.com/rstacruz/nprogress) - slim progress bar library
- [Apollo](https://www.apollographql.com/docs/react/) - quickly builds a UI that fetches data with GraphQL.

## Learnings form this project

1. **Enabling server side rendering of the styles**
   You get the flash of your css when loading from the client after rendering on the server.
   [\_document.js template](https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js). styled-components needs an extra step to make sure the css class names are kept the same on the client side and server side.
   Above code collects all the styles defined using styled-components in the application and return them to be populated as props before the page is rendered. Now inside render function the {this.props.styleTags} injects those collected styles in the head part of the page.
2. GraphQl
   GraphQL is language agnostic.
3. Setting up prisma
   prisma login
   prisna init
   You can deploy custom env file using command `prisma deploy --env-file variables.env`

## Acknowledgments

I would recommand the Wes Bos's to anybody eager to learn about modern web development.
