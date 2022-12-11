<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <div class="main__container">
        <div class="main__left-block">
          <Filter />
        </div>
        <div class="main__right-block">
          <div class="main__right-block_top">
            <Sorting />
            <EditTablesBtn />
          </div>
        </div>
      </div>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";
import Filter from "@/components/Filters/Filter.vue";
import Sorting from "@/components/Sorting/Sorting.vue";
import EditTablesBtn from "@/components/Buttons/EditTablesBtn.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    Filter,
    Sorting,
    EditTablesBtn,
  },
};
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex-grow: 1;
}
</style>
