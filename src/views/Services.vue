<template>
  <Header />
  <section class="services">
    <div class="container">
      <h2>Nossos Serviços</h2>
      <div class="packs">
        <div class="pack-single">
          <i class="fa-solid fa-box"></i>
          <p>Pacotes de viagens personalizados</p>
        </div>
        <div class="pack-single">
          <i class="fa-solid fa-phone-volume"></i>
          <p>Suporte 24h durante a viagem</p>
        </div>
        <div class="pack-single">
          <i class="fa-solid fa-hotel"></i>
          <p>Reservas de hotéis e passeios</p>
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
.services {
  width: 100%;
  height: calc(100vh - 124px);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.services .container {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 80px;
}

.container h2 {
  font-size: 34px;
  color: rgb(0, 0, 92);
}

.packs {
  display: flex;
  gap: 50px;
}

.pack-single {
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dbdbdb;
  padding: 2rem;
  border-radius: 15px;
  gap: 50px;
  color: rgb(0, 0, 92);
  cursor: pointer;
  transition: .2s;
  text-align: center;
}

.pack-single:hover {background-color: #b6b6b6;}

.pack-single i {font-size: 40px;}

.pack-single p {font-size: 21px;}

@media screen and (max-width: 768px){
  .services {
    height: auto; 
    padding: 5rem 0;
  }

  .packs {flex-direction: column;}
}
</style>
