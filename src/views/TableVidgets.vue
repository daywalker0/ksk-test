<template>
  <div class="cardlist">
    <ul class="cardlist__wrap row">
      <li class="card-item" v-for="card in cards" :key="card.id">
        <CardItem
          :id="card.id"
          :number="card.number"
          :type="card.type"
          :creationDate="card.creationDate"
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
