<template>
  <section class="flow">
    <div class="flow__container">
      <figure class="flow__img">
        <img
          src="../assets/illustration-flowing-conversation.svg"
          alt="grow together"
        />
      </figure>
      <div class="flow__texts">
        <h1 class="flow__title">Flowing conversations</h1>
        <p class="flow__paragraphy">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.flow {
  width: 100%;
  margin-top: 4rem;

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
      margin-top: 2rem;
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

    @media screen and (max-width: 998px) {
      text-align: center;
    }
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
