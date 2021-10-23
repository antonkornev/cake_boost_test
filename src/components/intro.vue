<template>
  <div>
    <modal></modal>
    <div class="col-1 p-0">
      <button type="button" class="btn btn-secondary" @click="showAddForm">Open form</button>
    </div>
  </div>
</template>

<script>
import modal from "@/components/modal";
export default {
  name: "blank",
  components: { modal },
  data() {
    return {

    }
  },
  methods: {
    showAddForm: function () {
      this.$modal.show('add_account')
    },
  }
}
</script>

<style>
body{
  background-color: #1f2938;
}
</style>