<template>
  <div class="col-full">
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea
          v-model="newPostText"
          cols="30"
          rows="10"
          class="form-input"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Agregar respuesta</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPostText: "",
    };
  },

  methods: {
    addPost() {
      const post = {
        text: this.newPostText,        
        threadId: this.id,
        
      };
      this.$emit("save", { post });    
      this.newPostText = "";
    },
  },
};
</script>

<style scoped></style>
