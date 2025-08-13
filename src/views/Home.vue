<template>
  <Header />
  <section class="home">
    <div class="container">
      <h2>Bem-vindo à nossa agência!</h2>
      <div class="cards">
        <div class="card">
          <img src="/cancun.jpg" alt="Imagem de Cancun">
          <p>Faça uma viagem para <br><b>CANCUN</b><br> com a melhor agência de viagens</p>
        </div>
        <div class="card">
          <img src="/maldivas.jpg" alt="Imagem de Maldivas">
          <p>Faça uma viagem para <br><b>MALDIVAS</b><br> com a melhor agência de viagens</p>
        </div>
        <div class="card">
          <img src="/florida.jpg" alt="Imagem de Florida">
          <p>Faça uma viagem para <br><b>FLORIDA</b><br> com a melhor agência de viagens</p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.home .container h2 {
  text-align: center;
  font-size: 42px;
  color: rgb(0, 0, 92);
}

.cards {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 30px;
}

.card {
  background-color: #f2f2f2;
  padding: 2rem 1rem;
  border: 1px solid #ccc;
  text-align: center;
  width: 450px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgb(179, 179, 179);
}

img {
  width: 250px;
  height: 250px;
  border-radius: 15px;
}

.card p {
  font-size: 20px;
  margin-top: 1rem;
}

.card b {
  font-size: 26px;
  color: rgb(0, 0, 92);
}

@media screen and (max-width: 1200px){
  .home {
    height: auto;
    padding: 2rem;
  }

  .cards {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .card img {
    width: 180px;
    height: 180px;
  }
}

@media screen and (max-width: 500px){
  .card {
    width: 100%;
  }

  .card img {width: 90%;}

  .home .container {
    width: 100%;
  }
}

</style>


