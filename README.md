# Strapi Starter Nuxt Blog

Nuxt starter for creating a blog with Strapi.

This starter allows you to try Strapi with Nuxt with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-blog-using-nuxt-strapi-and-apollo)

![screenshot image](/screenshot.png)

### Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

### Pages

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

### Getting started

**Backend**

See full instructions [here](https://github.com/strapi/strapi-starter-blog)

**Frontend**

```bash
git clone https://github.com/strapi/strapi-starter-nuxt-blog.git
cd strapi-starter-nuxt-blog
```

#### Start the frontend server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

Nuxt server is running here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter
