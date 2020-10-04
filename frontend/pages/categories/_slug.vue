<template>
  <div>
    <client-only>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <h1>{{ category.name }}</h1>
          <Articles :articles="articles || []" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Articles from "../../components/Articles";
import { getMetaTags } from "../../utils/seo";
import { getStrapiMedia } from "../../utils/medias";

export default {
  components: {
    Articles,
  },
  async asyncData({ $strapi, params }) {
    const matchingCategories = await $strapi.find("categories", {
      slug: params.slug,
    });
    return {
      category: matchingCategories[0],
      articles: await $strapi.find("articles", {
        "category.name": params.slug,
      }),
      global: await $strapi.find("global"),
    };
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: `${this.category.name} articles`,
      metaDescription: `All articles about ${this.category.name}`,
    };

    return {
      title: fullSeo.metaTitle,
      titleTemplate: `%s | ${siteName}`,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
