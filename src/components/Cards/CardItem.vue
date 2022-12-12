<template>
  <article>
    <div class="card-item__wrap">
      <div class="card-item__title">
        <span>{{ id }}</span>
        <div class="btn-delete-stroke" @click="isModalVisible = !isModalVisible">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ModalDeleteStroke v-if="isModalVisible" />
      </div>
      <div class="card-item__info">
        <div class="card-item__info_item">
          <span>Номер накладной:</span>
          <p>{{ number }}</p>
        </div>
        <div class="card-item__info_item">
          <span>Тип заказа:</span>
          <p>{{ type }}</p>
        </div>
        <div class="card-item__info_item">
          <span>Дата создания:</span>
          <p>{{ creationDate }}</p>
        </div>
      </div>
    </div>
  </article>
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

<style lang="scss">
.btn-delete-stroke {
  position: absolute;
  display: flex;
  right: 20px;
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

.card-item {
  background: #f6fafb;
  box-shadow: 0px 4px 12px #ebebeb;
  border-radius: 3px;
  width: 290px;
  &__wrap {
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: rgba(237, 232, 245, 0.5);
    min-height: 40px;
    padding: 0 12px;
    span {
      @include font(Roboto, 400, 14px, 16px, #000);
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    padding: 16px;
    &_item {
      display: flex;
      &:nth-child(2) {
        margin: 15px 0;
      }
      span {
        @include font(Roboto, 700, 14px, 16px, #647a8c);
      }
      p {
        margin-left: 50px;
        @include font(Roboto, 400, 14px, 16px, #000);
      }
    }
  }
}
.modal-delete-stroke {
  top: 25px;
  right: 15px;
}
</style>
