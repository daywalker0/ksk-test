<template>
  <div class="edit-tables-btn">
    <router-link class="table-btn table-btn-cards" to="/tablecards">
      <img src="@/assets/tablecards.svg" alt="Табличный вид" />
    </router-link>
    <router-link class="table-btn table-btn-vidgets" to="/tablevidgets">
      <img src="@/assets/tablevidgets.svg" alt="Табличный вид" />
    </router-link>
  </div>
</template>

<script></script>

<style lang="scss">
.edit-tables-btn {
  display: flex;
  align-items: center;
}
.table-btn {
  padding: 8px 10px;
  background: #ffffff;
  border: 1px solid #647a8c;
}
.table-btn-cards {
  border-radius: 10px 0 0 10px;
}
.table-btn-vidgets {
  border-radius: 0 10px 10px 0;
}
</style>
