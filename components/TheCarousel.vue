<template>
    <div class="ag-reg-info_box">
        <div class="ag-reg-info_title">
            Зможеш обрати<br>
            свій варіант
        </div>

        <div id="slider" class="ag-reg-info_list">
            <div class="slide">
                <TheCarouselItem
                    :title="`CPA`"
                    :text="`$25 і вище`"
                />

                <TheCarouselItem
                    :title="`REVSHARE`"
                    :text="`$25 і вище`"
                />

                <TheCarouselItem
                    :title="`Гібрід`"
                    :text="`Зробимо як скажеш`"
                />
            </div>
        </div>
    </div>
</template>


<style scoped>
.ag-reg-info_box {
  flex: 1 1 50%;
  padding: 65px 30px 115px 50px;
  background-color: #58BD7D;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  position: relative;
}
.ag-reg-info_box::before {
  content: "";
  height: 182px;
  width: 100%;
  background: url('@/assets/images/svg/graph-1.svg') no-repeat scroll 0 0;

  position: absolute;
  top: 0;
  left: 0;
}
.ag-reg-info_box::after {
  content: "";
  height: 161px;
  width: 100%;
  background: url('@/assets/images/svg/lines.svg') no-repeat scroll 0 0;

  position: absolute;
  left: 0;
  bottom: 0;
}
.ag-reg-info_title {
  line-height: 1.6;
  margin: 0 0 65px;

  font-size: 25px;
}
.ag-reg-info_list {
  padding: 0 0 65px;
}

@media only screen and (max-width: 767px) {
  .ag-reg-info_box {
    display: none;
  }
}
</style>