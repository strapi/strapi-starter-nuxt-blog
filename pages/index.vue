<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog</h1>
        <Articles :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
import Articles from "~/components/Articles";

export default {
  components: {
    Articles,
  },
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.find("articles"),
    };
  },
};
</script>
