[![Nextjs CI](https://github.com/CapOfCave/next-url-shortener/actions/workflows/ci.yml/badge.svg)](https://github.com/CapOfCave/next-url-shortener/actions/workflows/ci.yml)

A lightweight url shortener made with [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/), [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/) and [Chakra UI](https://chakra-ui.com/)

# Run locally

## Run with Docker

You need docker and docker-compose to run this project in this way. Just execute the following command in the top level directory:

```sh
docker-compose up -d --build
```

This will start all necessary services as [a relative link](other_file.md):
 - The PostgreSQL database (available on [localhost:5432](http://localhost:5432/))
 - Adminer (available on [localhost:8080](http://localhost:8080/))
 - The Next.js app (available on [localhost:3000](http://localhost:3000/))


## Run without Docker

Assuming you have the PostgreSQL database up and running on the port specified in [the .env file](.env), you can start the Next.js app as follows:

```sh
npm run build
npm start
```
or alternatively, enabling live reload and other development features:
```sh
npm run dev
```


