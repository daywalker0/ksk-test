<template>
  <tr>
    <td class="col-1 col">{{ userId }}</td>
    <td class="col-2 col">{{ id }}</td>
    <td class="col-3 col">{{ title }}</td>
    <td class="col-4 col">{{ completed }}</td>
    <td class="col-5 col">
      <div class="btn-delete-stroke" @click="isModalVisible = !isModalVisible">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <ModalDeleteStroke v-if="isModalVisible" />
    </td>
  </tr>
</template>

<script>
import ModalDeleteStroke from "@/components/common/Modals/ModalDeleteStroke.vue";

export default {
  components: {
    ModalDeleteStroke,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    userId: Number,
    id: Number,
    title: String,
    completed: String,
  },
};
</script>

<style></style>
