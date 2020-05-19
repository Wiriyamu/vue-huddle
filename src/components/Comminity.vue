<template>
  <section class="community">
    <div class="community__container">
      <h1 class="community__title">Ready To Build Community?</h1>
      <button @click.prevent class="community__started">
        Get Started For Free
      </button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.community {
  width: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;
  }

  &__title {
    margin-top: 4rem;
    font-family: 'Poppins', sans-serif;
    color: hsl(192, 100%, 9%);

    @media screen and (max-width: 768px) {
      max-width: 200px;
      text-align: center;
    }
  }

  &__started {
    font-weight: 600;
    border: none;
    margin: 4rem;
    border-radius: 3rem;
    padding: 1rem 3rem;
    color: #fff;
    background-color: hsl(322, 100%, 66%);
    cursor: pointer;

    &:hover {
      border: 1px solid hsl(322, 100%, 66%);
      color: hsl(322, 100%, 66%);
      background-color: transparent;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
