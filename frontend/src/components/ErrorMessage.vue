<template>
  <div v-if="message" class="error-message">
    {{ message }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'error-message',

  computed: {
    ...mapState({
      message: state => state.messages.error,
    }),
  },
};
</script>

<style scoped>
.error-message {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border-radius: 5px;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
}
</style>
