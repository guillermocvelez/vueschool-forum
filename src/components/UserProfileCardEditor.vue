<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img :src="user.avatar" />
      </p>

      <div class="form-group">
        <input
          
          type="text"
          placeholder="username"
          class="form-input text-lead text-bold"
          v-model="activeUser.username"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          placeholder="Full Name"
          class="form-input text-lead"
          v-model="activeUser.name"
        />
      </div>

      <div class="form-group">
        <label for="user_bio"></label>
        <textarea
          v-model="activeUser.bio"
          class="form-input"
          id="user_bio"
          placeholder="Ëscribe algo sobre ti"
        ></textarea>
      </div>

      <div class="stats">
        <span>{{ user.postCount }} posts</span>
        <span>{{ user.threadsCount }} threads</span>
      </div>

      <hr />

      <div class="form-group">
        <label for="user_website" class="form-label">Website</label>
        <input
          v-model="activeUser.website"
          autocomplete="off"
          id="user_website"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input
          v-model="activeUser.email"
          type="text"
          autocomplete="off"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="user_location" class="form-label">Location</label>
        <input
          v-model="activeUser.location"
          type="text"
          autocomplete="off"
          class="form-input"
          id="user_location"
        />
      </div>

      <div class="btn-group space-between">
        <button @click="cancel" class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      activeUser: { ...this.user },
    };
  },

  methods: {
    save() {
      this.$store.dispatch('updateUser', {...this.activeUser});
      this.$router.push({ name: 'Profile'})
    },
    cancel(){
      this.$router.push({ name: 'Profile'})
    }
  },
};
</script>

<style scoped></style>
