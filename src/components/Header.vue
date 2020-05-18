<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__nav">
        <figure class="header__logo">
          <img src="@/assets/logo.svg" alt="huddle logo" />
        </figure>
        <button @click.prevent class="header__try">Try it Free</button>
      </nav>

      <div class="header__content">
        <h1 class="header__title">Build the Community Your fans will Love</h1>
        <p class="header__paragraphy">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button @click.prevent class="header__started">
          Get Started For Free
        </button>
        <figure class="header__img">
          <img src="@/assets/screen-mockups.svg" alt="mockups screen" />
        </figure>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header {
  width: 100%;

  &__container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
  }

  &__logo img {
    width: 15rem;

    @media screen and (max-width: 768px) {
      width: 12rem;
    }
  }

  &__try {
    border: 1px solid hsl(322, 100%, 66%);
    border-radius: 3rem;
    padding: 0.625rem 3rem;
    color: hsl(322, 100%, 66%);
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: hsl(322, 100%, 66%);
      transition: 0.3s ease-in-out;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    margin-top: 2rem;
    font-family: 'Poppins', sans-serif;
    color: hsl(192, 100%, 9%);
  }

  &__paragraphy {
    max-width: 50rem;
    margin-top: 2rem;
    line-height: 2.5rem;
    color: hsl(192, 100%, 9%);
  }

  &__started {
    font-weight: 600;
    border: none;
    margin: 2rem;
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

  &__img img {
    width: 80rem;

    @media screen and (max-width: 768px) {
      width: 60rem;
    }

    @media screen and (max-width: 576px) {
      width: 30rem;
    }
  }
}
</style>
