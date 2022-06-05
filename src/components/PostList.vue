<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user-info">
        <a class="user-name" href="#"> {{ userById(post.userId).name }}</a>
        <a href="#">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
            alt="avatar"
          />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <p>{{ post.text }}</p>
      </div>

      <AppDate class="post-date text-faded" :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },

    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>

<style scoped>
.post-list {
  margin-top: 20px;
}

.post {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
  padding: 20px 10px;
  padding-bottom: 7px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  margin-bottom: 20px;
}
</style>
