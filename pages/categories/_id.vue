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
import articlesQuery from "~/apollo/queries/article/articles-categories";
import Articles from "~/components/Articles";

export default {
  components: {
    Articles,
  },
  data() {
    return {
      category: [],
    };
  },
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>
