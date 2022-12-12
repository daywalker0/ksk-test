<template>
  <table>
    <tr>
      <td @click="fetchTest()" class="col-1 cols-title">ID</td>
      <td class="col-2 cols-title">Номер накладной</td>
      <td class="col-3 cols-title">Тип заказа</td>
      <td class="col-4 cols-title">Дата создания</td>
      <td class="col-5 cols-title">&nbsp;</td>
    </tr>
    <TableComponent
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      :number="card.number"
      :type="card.type"
      :creationDate="card.creationDate"
    />
  </table>
</template>

<script>
import TableComponent from "@/components/Tables/TableComponent.vue";

export default {
  components: {
    TableComponent,
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style lang="scss">
.col {
  @include font(Roboto, 400, 14px, 16px, #000);
  text-align: start;
  padding: 12px 16px;
}
.cols-title {
  @include font(Roboto, 700, 14px, 16px, #000);
  background: #e6e6e6;
  margin-left: 3px;
  text-align: center;
  padding: 12px 16px;
}

.col-5 {
  position: relative;
}

table {
  width: 100%;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  margin-bottom: 17px;
}

tr {
  border-bottom: 1px solid #e6e6e6;
}

.btn-delete-stroke {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    .bar {
      background-color: #045da7;
      transition: 0.3s;
    }
  }
}

.bar {
  width: 4px;
  height: 4px;
  @include br(100%);
  transition: 0.3s;
  background-color: #647a8c;
}
</style>
