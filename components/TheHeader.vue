<template>
    <header class="ag-header">
        <div class="ag-format-container ag-format-container__header">
          <div class="ag-header_box">
            <TheLogo />

            <div class="ag-header_info">
                <TheButton type="button" them="dark" modifier="login">
                    Вхід
                </TheButton>

                <TheButton type="button" them="primary" modifier="reg">
                    Реєстрація
                </TheButton>
            </div>
          </div>
        </div>
    </header>
</template>

<script setup>
const props = defineProps ({
    text: String,
    note: String,
})
</script>

<style scoped>
.ag-format-container__header {
  width: 100%;
  padding: 0 25px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.ag-header {
  padding: 24px 0 32px;
  border-bottom: 1px solid #23262F;
}
.ag-header_info {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;

  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media only screen and (max-width: 767px) {
  .ag-format-container__header {
    padding: 0;
  }
  .ag-header_box {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

@media only screen and (max-width: 639px) {
  .ag-header {
    padding: 10px 0;
  }
}
</style>