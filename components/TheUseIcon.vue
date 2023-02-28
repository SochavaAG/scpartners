<template>
  <svg
      :class="`svg-${name}`"
  >
    <use
     :xlink:href="`#ag-${name}`"></use>
  </svg>
</template>

<script setup>
const props = defineProps ({
    name: String,
})
</script>

<style>
.svg-star {
  height: 13px;
  width: 13px;
  margin: 0 12px;

  fill: #353945;
}
.svg-icon-1,
.svg-icon-2,
.svg-icon-3 {
  height: 35px;
  width: 35px;
  margin: 15px 0 0;

  fill: #353945;
}
.svg-check {
  height: 10px;
  width: 14px;

  stroke: #58BD7D;

  position: absolute;
  top: 19px;
  right: 19px;
}
.svg-clear {
  height: 24px;
  width: 24px;

  cursor: pointer;

  fill: #777E91;

  position: absolute;
  top: 12px;
  right: 12px;
}
.svg-lock {
  height: 25px;
  width: 25px;
  margin: 10px 0 0;

  fill: #FCFCFD;
}
.svg-eye {
  height: 24px;
  width: 24px;

  cursor: pointer;

  fill: #777E91;

  position: absolute;
  top: 12px;
  right: 12px;
}
.svg-check-v2 {
  height: 10px;
  width: 14px;
  margin: 18px 0 0;

  stroke: #FFF;
}
.svg-user {
  height: 24px;
  width: 24px;
  margin: 11px 0 0;

  fill: #FCFCFD;
}
.svg-telegram {
  height: 25px;
  width: 25px;
}
.svg-skype {
  height: 25px;
  width: 25px;
}

@media only screen and (max-width: 767px) {
  .svg-icon-1,
  .svg-icon-2,
  .svg-icon-3 {
    height: 25px;
    width: 25px;
    margin: 10px 0 0;
  }
}
</style>