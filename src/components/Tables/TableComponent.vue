<template>
  <tr>
    <td class="col-1 col">{{ id }}</td>
    <td class="col-2 col">{{ number }}</td>
    <td class="col-3 col">{{ type }}</td>
    <td class="col-4 col">{{ creationDate }}</td>
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
    id: String,
    number: String,
    type: String,
    creationDate: String,
  },
};
</script>

<style></style>
