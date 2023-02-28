<template>
    <div class="ag-note_box">
      <div class="ag-note_title">
        Володарі Трафіку
      </div>
      <div class="ag-note_text">
        SC Partners&#160;– нова партнерська мережа з величезним досвідом та експертизою.
        Кожен наш партнер отримує очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід.
        Ми будемо поряд з вами:
        на відстані одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.
      </div>

      <TheUseIcon name="star" />
      <TheUseIcon name="star" />
      <TheUseIcon name="star" />
      <TheUseIcon name="star" />
      <TheUseIcon name="star" />
    </div>
</template>

<style scoped>
.ag-note_box {
  max-width: 900px;
  width: 100%;
  margin: 0 auto 115px;
  padding: 40px 44px 30px;
  background: url('@/assets/images/svg/graph.svg') no-repeat scroll 50% 50% rgba(35, 38, 47, .5);

  text-align: center;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  border-radius: 24px;
}
.ag-note_title {
  display: inline-block;
  line-height: 1.2;
  margin: 0 0 25px;
  padding: 0 61px;

  font-family: Gilroy, sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #FFF;

  position: relative;
}
.ag-note_title::before,
.ag-note_title::after {
  content: "";
  height: 45px;
  width: 36px;

  position: absolute;
  top: 0;
}
.ag-note_title::before {
  background: url('@/assets/images/hands.png') no-repeat scroll 0 0;
  left: 0;
}
.ag-note_title::after {
  background: url('@/assets/images/hands.png') no-repeat scroll 100% 0;
  right: 0;
}
.ag-note_text {
  margin: 0 0 25px;

  color: #777E90;
}

@media only screen and (max-width: 767px) {
 .ag-note_box {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }

  .ag-note_box {
    margin: 25px 0 0;
    padding: 25px;
  }
  .ag-note_title {
    line-height: 1;
    margin: 0 0 35px;
    padding: 0 30px;

    font-size: 25px;
  }
  .ag-note_title::before,
  .ag-note_title::after {
    content: "";
    height: 25px;
    width: 20px;
    background-size: auto 25px;
  }
}
</style>