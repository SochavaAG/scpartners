<template>
    <div :id="`js-popup-form_btn-close__${modifier}`" class="ag-popup-form_btn-close"></div>
</template>

<script setup>
const props = defineProps ({
    modifier: String,
})
</script>

<style scoped>
.ag-popup-form_btn-close {
  height: 40px;
  width: 40px;
  background-color: #353945;

  cursor: pointer;

  vertical-align: middle;

  -webkit-tap-highlight-color: transparent;

  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;

  position: absolute;
  top: 10px;
  right: 10px;
}
.ag-popup-form_btn-close:before {
  content: "";
  height: 2px;
  width: 20px;
  background: #777E90;

  -webkit-transform: translate(10px, 20px) rotate(45deg);
  -moz-transform: translate(10px, 20px) rotate(45deg);
  -ms-transform: translate(10px, 20px) rotate(45deg);
  -o-transform: translate(10px, 20px) rotate(45deg);
  transform: translate(10px, 20px) rotate(45deg);

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  position: absolute;
}
.ag-popup-form_btn-close:hover:before {
  -webkit-transform: translate(10px, 20px) rotate(135deg);
  -moz-transform: translate(10px, 20px) rotate(135deg);
  -ms-transform: translate(10px, 20px) rotate(135deg);
  -o-transform: translate(10px, 20px) rotate(135deg);
  transform: translate(10px, 20px) rotate(135deg);
}
.ag-popup-form_btn-close:after {
  content: "";
  height: 2px;
  width: 20px;
  background: #777E90;

  -webkit-transform: translate(10px, 20px) rotate(-45deg);
  -moz-transform: translate(10px, 20px) rotate(-45deg);
  -ms-transform: translate(10px, 20px) rotate(-45deg);
  -o-transform: translate(10px, 20px) rotate(-45deg);
  transform: translate(10px, 20px) rotate(-45deg);

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  position: absolute;
}
.ag-popup-form_btn-close:hover:after {
  -webkit-transform: translate(10px, 20px) rotate(-135deg);
  -moz-transform: translate(10px, 20px) rotate(-135deg);
  -ms-transform: translate(10px, 20px) rotate(-135deg);
  -o-transform: translate(10px, 20px) rotate(-135deg);
  transform: translate(10px, 20px) rotate(-135deg);
}
</style>