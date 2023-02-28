<template>
    <section id="js-popup-form" class="js-ag-popup_overlay">
        <div id="js-popup-form_login-wrap" class="ag-popup-form_box-wrap ag-popup-form_box-wrap__login js-ag-hide">
          <div id="js-popup-form_login" class="ag-popup-form_box ag-popup-form_box__login js-ag-hide">
            <TheBtnClosePopup modifier="login" />

            <div class="ag-popup-form_title ag-popup-form_title__login">
              <div class="ag-lock">
                <TheUseIcon name="lock" />
              </div>

              Вхід
            </div>

            <form class="ag-popup-form_form" action="#" method="post" enctype="multipart/form-data" novalidate="novalidate">
                <TheInput type="email" name="fields[2]" value=" " placeholder="Ваш email" status="" modifier="" />

                <TheInput type="password" name="fields[3]" value="" placeholder="Ваш пароль" status="" modifier="" />

                <TheButton type="submit" them="primary" modifier="popup" name="button">
                    Війти
                </TheButton>
            </form>
          </div>
        </div>
    </section>
</template>