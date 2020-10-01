# Strapi Starter Nuxt Blog

Nuxt starter for creating a blog with Strapi.

![screenshot image](/screenshot.png)

This starter allows you to try Strapi with Nuxt with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. So do not hesitate to add new features and report bugs!

## Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

Pages:

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

## Getting started

The easiest way to try this starter is to run it locally on your computer.

First, you'll need to create your own copy of this starter. You can do so by clicking [the "Use this template" button](https://github.com/strapi/strapi-starter-nuxt-blog/generate) on GitHub, and filling the [form](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

### Backend

Follow the instructions [on this repository](https://github.com/strapi/strapi-starter-blog)

### Frontend

Clone your repository:

```bash
git clone <your-github-repo-url>
cd strapi-starter-nuxt-blog
```

Start the frontend server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```


If you want to change the default environment variables, create a `.env` file like this:

```sh
cp .env.example .env
```

The Nuxt server will run here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter!
