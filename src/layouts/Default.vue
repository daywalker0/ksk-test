<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <div class="main__container">
        <div class="main__left-block">
          <MainFilter />
        </div>
        <div class="main__right-block">
          <div class="main__right-block_top">
            <Sorting />
            <EditTablesBtn />
          </div>
          <div class="main__right-block_table">
            <router-view />
          </div>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";
import MainFilter from "@/components/Filters/MainFilter.vue";
import Sorting from "@/components/Sorting/Sorting.vue";
import EditTablesBtn from "@/components/common/Buttons/EditTablesBtn.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    MainFilter,
    Sorting,
    EditTablesBtn,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  padding-top: 32px;
  flex-grow: 1;
  background-color: #f8f8f8;
  &__container {
    display: flex;
  }
  &__left-block {
  }
  &__right-block {
    width: 100%;
    margin-left: 17px;
    &_top {
      display: flex;
      margin-bottom: 17px;
    }
  }
}
.sorting {
  width: 100%;
  margin-right: 17px;
}
</style>
