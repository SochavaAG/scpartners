<template>
    <div class="ag-profit_box">
        <div class="ag-profit_title">
          Тим, хто нагоняє Траф
        </div>
        <div class="ag-profit_list">
          <TheProfitItem
              :text="`Круті акції, призи та прибуткова бонусна програма`"
              :note="`Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!`"
              :name="'icon-1'"
          />
          <TheProfitItem
              :text="`Особлива підтримка для кожного 24/7`"
              :note="`У вас буде свій персональний менеджер`"
              :name="'icon-2'"
          />
          <TheProfitItem
              :text="`Детальна статистика`"
              :note="`Миттєве оновлення, зрозуміла система відображення статистики`"
              :name="'icon-3'"
          />
        </div>
    </div>
</template>

<style scoped>
.ag-profit_title {
  margin: 0 0 70px;

  text-align: center;
  font-family: Gilroy, sans-serif;
  font-size: 32px;
}
.ag-profit_list {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media only screen and (max-width: 767px) {
  .ag-profit_title {
    line-height: 1;
    margin: 0 0 35px;

    font-size: 25px;
  }
  .ag-profit_list {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}
</style>