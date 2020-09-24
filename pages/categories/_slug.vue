<template>
  <div>
    <client-only>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <h1>{{ category.name }}</h1>
          <Articles :articles="category.articles || []" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Articles from "~/components/Articles";

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
    };
  },
};
</script>
