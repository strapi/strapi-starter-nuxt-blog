<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <nuxt-link
          v-for="article in leftArticles"
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="uk-link-reset"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img
                :src="getStrapiMedia(article.image.url)"
                :alt="article.title"
                height="100"
              />
            </div>
            <div class="uk-card-body">
              <p
                v-if="article.category"
                id="category"
                class="uk-text-uppercase"
              >
                {{ article.category.name }}
              </p>
              <p id="title" class="uk-text-large">
                {{ article.title }}
              </p>
              <hr class="uk-divider-small" />
              <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                  <g-image
                    class="avatar"
                    :src="getStrapiMedia(article.author.picture.url)"
                    style="position: static; border-radius: '50%'"
                    :alt="article.title"
                  />
                </div>
                <div class="uk-width-expand">
                  <p class="uk-margin-remove-bottom">
                    {{ article.author.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <nuxt-link
            v-for="article in rightArticles"
            :key="article.id"
            :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            class="uk-link-reset"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <img :src="apiUrl + article.image.url" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <p
                  v-if="article.category"
                  id="category"
                  class="uk-text-uppercase"
                >
                  {{ article.category.name }}
                </p>
                <p id="title" class="uk-text-large">
                  {{ article.title }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    console.log(this.articles);
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    },
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
