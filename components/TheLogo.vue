<template>
    <a href="/" class="ag-logo_link">
      <img src="../assets/images/svg/logo.svg" alt="SC Partners">
    </a>
</template>

<style scoped>
.ag-logo_link {
  display: table;
  margin: 0 auto -45px;
}

@media only screen and (max-width: 767px) {
  .ag-logo_link {
    display: inline-block;
    margin: 0;
  }
}

@media only screen and (max-width: 639px) {
  .ag-logo_link img {
    height: 30px;
  }
}
</style>