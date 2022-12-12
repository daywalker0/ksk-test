<template>
  <div class="cardlist">
    <ul class="cardlist__wrap row">
      <li class="card-item" v-for="card in cards" :key="card.id">
        <CardItem
          :userId="card.userId"
          :id="card.id"
          :title="card.title"
          :completed="card.completed"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import CardItem from "@/components/Cards/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style lang="scss">
.cardlist {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>
