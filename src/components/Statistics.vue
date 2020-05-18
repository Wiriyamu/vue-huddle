<template>
  <section class="statistics">
    <div class="statistics__container">
      <div class="statistics__card">
        <img
          class="statistics__img"
          src="@/assets/icon-communities.svg"
          alt="communities"
        />
        <h1 class="statistics__title">1.4k+</h1>
        <p class="statistics__paragraphy">Communities Formed</p>
      </div>

      <div class="statistics__card">
        <img
          class="statistics__img"
          src="@/assets/icon-messages.svg"
          alt="communities"
        />
        <h1 class="statistics__title">2.7m+</h1>
        <p class="statistics__paragraphy">Menssages Sent</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.statistics {
  width: 100%;
  margin-top: 2rem;

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;

    @media screen and (max-width: 576px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__card {
    margin-right: 2rem;

    @media screen and (max-width: 576px) {
      margin-bottom: 4rem;
    }
  }

  &__img {
    width: 3rem;
  }

  &__title {
    font-size: 6.4rem;
    text-align: center;
  }

  &__paragraphy {
    color: #a0aec0;
    text-align: center;
  }
}
</style>
