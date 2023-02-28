<template>
    <section id="js-popup-form" class="js-ag-popup_overlay">
        <div id="js-popup-form_reg-wrap" class="ag-popup-form_box-wrap ag-popup-form_box-wrap__reg js-ag-hide">
            <TheBtnClosePopup modifier="reg" />


                <TheCarousel />


            <div id="js-popup-form_reg" class="ag-popup-form_box ag-popup-form_box__reg">
            <div class="ag-popup-form_title ag-popup-form_title__reg">
              <div class="ag-user">
                <TheUseIcon name="user" />
              </div>

              Реєстрація
            </div>

            <form class="ag-popup-form_form" action="#" method="post" enctype="multipart/form-data" novalidate="novalidate">
              <TheInput type="text" name="fields[1]" value="" placeholder="Ваше імʼя" status="success" modifier="" />

              <TheInput type="email" name="fields[2]" value=" " placeholder="Ваш email" status="error" modifier="" errortext="Пароль має містити літери і символи" />

              <TheInput type="password" name="fields[3]" value="" placeholder="Ваш пароль" status="" modifier="" />

              <TheInput type="password" name="fields[4]" value="" placeholder="Повторіть пароль" status="" modifier="" />

              <div class="ag-popup-form-contact_box">
                <div class="ag-popup-form-contact_title">
                  Оберіть спосіб звязку
                </div>

                <div class="ag-popup-form-contact_info">
                  <a href="#" class="ag-popup-form-contact_btn-telegram">
                    <TheUseIcon name="telegram" />
                  </a>
                  <a href="#" class="ag-popup-form-contact_btn-skype">
                    <TheUseIcon name="skype" />
                  </a>

                  <TheInput type="text" name="fields[1]" value="" placeholder="@телеграм_адреса" status="" modifier="contact" />
                </div>
              </div>

              <TheButton type="submit" them="primary" modifier="popup" name="button">
                 Реєстрація
              </TheButton>
            </form>
          </div>
        </div>
    </section>
</template>