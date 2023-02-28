<template>
     <div class="ag-reg-info_item">
        <div class="ag-check-v2">
            <TheUseIcon name="check-v2" />
        </div>
        <div class="ag-reg-info_item-descr">
          <div class="ag-reg-info_item-title">
            {{ title }}
          </div>
          <div class="ag-reg-info_item-text">
            {{ text }}
          </div>
        </div>
      </div>
</template>

<script setup>
const props = defineProps ({
    title: String,
    text: String,
})
</script>

<style scoped>
.ag-reg-info_item {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  margin: 0 0 25px;
}
.ag-check-v2 {
  height: 45px;
  width: 45px;
  background: rgba(255, 255, 255, .2);

  text-align: center;

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.ag-reg-info_item-descr {
  padding: 0 0 0 25px;
}
.ag-reg-info_item-title {
  line-height: 1.143;

  font-weight: 700;
}
</style>