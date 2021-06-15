# Strapi Starter Nuxt Blog

Nuxt starter for creating a blog with Strapi.

![screenshot image](/screenshot.png)

This starter allows you to try Strapi with Nuxt with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. So do not hesitate to add new features and report bugs!

This starter uses the [Strapi blog template](https://github.com/strapi/strapi-template-blog)

Check out all of our starters [here](https://strapi.io/starters)


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

Use our `create-strapi-starter` CLI to create your project.

```sh
# Using Yarn
yarn create strapi-starter my-site nuxt-blog

# Or using NPM
npx create-strapi-starter my-site nuxt-blog
```

The CLI will create a monorepo, install dependencies, and run your project automatically.

The Nuxt frontend server will run here => [http://localhost:3000](http://localhost:3000)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Nuxt](https://nuxtjs.org/docs/2.x/deployment/deploying-to-21yunbox)

Don't forget to setup the environment variables on your production app:

For the frontend the following environment variable is required: 
- `API_URL`: URL of your Strapi backend, without trailing slash


Enjoy this starter!