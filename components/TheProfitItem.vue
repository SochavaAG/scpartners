<template>
    <div class="ag-profit_item">
        <div class="ag-profit_icon">
          <svg
              :class="`svg-${name}`"
          >
            <use
             :xlink:href="`#ag-${name}`"></use>
          </svg>
        </div>
        <div class="ag-profit_item-info">
          <div class="ag-profit_item-text">
            {{ text }}
          </div>
          <div class="ag-profit_item-note">
            {{ note }}
          </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps ({
    text: String,
    note: String,
    name: String,
})
</script>

<style scoped>
.ag-profit_item {
  width: 345px;

  text-align: center;
}
.ag-profit_icon {
  height: 65px;
  width: 65px;
  margin: 0 auto 25px;
  background-color: #FFC737;

  text-align: center;

  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}

.ag-profit_item-text {
  line-height: 1.5;
  margin: 0 0 25px;
  padding: 0 50px;

  font-weight: 500;
  font-size: 16px;
  color: #B1B5C3;
}
.ag-profit_item-note {
  color: #777E90;
}

@media only screen and (max-width: 1200px) {
  .ag-profit_item-text {
    padding: 0;
  }
}

@media only screen and (max-width: 767px) {
  .ag-profit_item {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    width: auto;
    margin: 0 0 25px;

    text-align: left;
  }
  .ag-profit_icon {
    height: 45px;
    width: 45px;
    min-width: 45px;
    margin: 0;
  }

  .ag-profit_item-info {
    padding: 0 0 0 25px;
  }
  .ag-profit_item-text {
    margin: 0 0 5px;
  }
  .ag-profit_item-text br {
    display: none;
  }
}
</style>