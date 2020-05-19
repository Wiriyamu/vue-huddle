<template>
  <div id="app">
    <Header />
    <Statistics />
    <Grow />
    <Flowing />
    <Users />
    <Comminity />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Statistics from '@/components/Statistics'
import Grow from '@/components/Grow'
import Flowing from '@/components/Flowing'
import Users from '@/components/Users'
import Comminity from '@/components/Comminity'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { Header, Statistics, Grow, Flowing, Users, Comminity, Footer }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;

  @media screen and (max-width: 768px) {
    font-size: 50%;
  }
}

body {
  font-size: 1.6rem;
}
</style>
