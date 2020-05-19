<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__info">
        <p class="footer__paragraphy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut
          laborum tempora, corporis neque excepturi.
        </p>
        <div class="footer__contact">
          <div>
            <fa-icon icon="phone-volume" color="#fff" />
            <a href="#" class="footer__phone">Phone: +1-543-123-4567</a>
          </div>

          <div>
            <fa-icon icon="envelope" color="#fff" />
            <a href="#" class="footer__email">example@huddle.com</a>
          </div>
        </div>
      </div>

      <div class="footer__newletter">
        <h3 class="footer__title">Newsletter</h3>
        <p class="footer__description">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We'll never send you spam or pass on your email address.
        </p>

        <form @submit.prevent class="footer__form">
          <input type="text" class="footer__input" />
          <button class="footer__button">Subscribe</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  display: flex;
  width: 100%;
  background-color: hsl(192, 100%, 9%);

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;

    @media screen and (max-width: 998px) {
      flex-direction: column-reverse;
    }
  }

  &__title {
    @media screen and (max-width: 998px) {
      margin-top: 2rem;
    }
  }

  &__paragraphy {
    max-width: 400px;
    margin: 2rem 0;
    color: #fff;

    @media screen and (max-width: 998px) {
      text-align: center;
    }
  }

  &__contact {
    @media screen and (max-width: 998px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__phone,
  &__email {
    margin-left: 1rem;
    color: #fff;
  }

  &__title {
    margin-top: 2rem;
    color: #fff;
  }

  &__description {
    max-width: 380px;
    margin: 0.625rem 0;
    color: #fff;
  }

  &__input {
    margin: 0.625rem 0;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
  }
  &__button {
    font-weight: 600;
    border: none;
    margin-left: 2rem;
    border-radius: 5px;
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
