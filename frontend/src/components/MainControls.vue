<template>
  <div class="main-controls">
    <button class="btn margin-right" v-if="!editMode" type="button" @click="handleEdit">Edit</button>
    <button class="btn margin-right" v-if="editMode" type="button" @click="handleSave">Save</button>
    <target-currency />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import api from '@/helpers/api';
import TargetCurrency from '@/components/TargetCurrency';

export default {
  name: 'main-controls',

  components: {
    TargetCurrency,
  },

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

<style scoped>
.main-controls {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}
</style>
