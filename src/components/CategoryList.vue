<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumByCategory(category)"
    :title="category.name"
    :categoryId="category.id"
  />
</template>

<script>
import ForumList from "../components/ForumList";

export default {
  components: {
    ForumList,
  },
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },

  methods: {
    getForumByCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style scoped></style>
