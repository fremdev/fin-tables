<template>
  <div class="main-controls">
    <button v-if="!editMode" type="button" @click="handleEdit">Edit</button>
    <button v-if="editMode" type="button" @click="handleSave">Save</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import api from '@/helpers/api';

export default {
  name: 'main-controls',
  computed: {
    ...mapState({
      editMode: state => state.settings.editMode,
      tablesData: state => state.tablesData.data,
    }),
  },

  methods: {
    ...mapActions({
      setEditMode: 'setEditMode',
    }),
    handleSave() {
      this.setEditMode(false);
      api.saveTablesData(this.tablesData);
    },
    handleEdit() {
      this.setEditMode(true);
    },
  },
};
</script>
