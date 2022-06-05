<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link
          :to="{ name: 'Category', params: { id: categoryId } }"
          v-if="categoryId"
        >
          {{ title }}
        </router-link>

        <span v-else>
          {{ title }}
        </span>
      </h2>
      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link
            :to="{ name: 'Forum', params: { id: forum.id } }"
            class="text-xlarge"
            >{{ forum.name }}</router-link
          >
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p class="threads-count">
            <span class="count">
              {{ forum.threads?.length || 0 }}
            </span>
            {{ forum.threads?.length > 1 ? "threads" : "thread" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array,
    },
    title: {
      type: String,
      default: "Foros",
    },
    categoryId: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped></style>
