<template>
  <section class="grow">
    <div class="grow__container">
      <div class="grow__texts">
        <h1 class="grow__title">Grow Together</h1>
        <p class="grow__paragraphy">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <figure class="grow__img">
        <img
          src="../assets/illustration-grow-together.svg"
          alt="grow together"
        />
      </figure>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.grow {
  width: 100%;
  margin-top: 4rem;
  background-color: #f6fbff;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;

    @media screen and (max-width: 998px) {
      flex-direction: column-reverse;
    }
  }

  &__texts {
    @media screen and (max-width: 998px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0.625rem;
    }
  }

  &__title {
    font-family: 'Poppins', sans-serif;
  }

  &__paragraphy {
    max-width: 50rem;
    margin-top: 2rem;

    @media screen and (max-width: 998px) {
      text-align: center;
      max-width: 30rem;
    }
  }

  &__img img {
    width: 50rem;
    margin: 0.625rem 0;

    @media screen and (max-width: 998px) {
      width: 25rem;
    }
  }
}
</style>
