<template>
  <Header />
  <section class="about">
    <div class="container">
      <div class="left-content">
        <img src="../../public/banner-about.jpg" alt="Banner sobre nós">
      </div>
      <div class="right-content">
        <h2>Sobre nós</h2>
        <p>Somos uma agência dedicada a criar experiências inesquecíveis em suas viagens.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat est nisi illum quisquam ex provident, vero, officia, 
          ab quo quae recusandae in suscipit debitis quod iste accusamus quis ipsa magnam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat est nisi illum quisquam ex provident, vero, officia, 
          ab quo quae recusandae in suscipit debitis quod iste accusamus quis ipsa magnam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat est nisi illum quisquam ex provident, vero, officia, 
          ab quo quae recusandae in suscipit debitis quod iste accusamus quis ipsa magnam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat est nisi illum quisquam ex provident, vero, officia, 
          ab quo quae recusandae in suscipit debitis quod iste accusamus quis ipsa magnam.
        </p>
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
.about {
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 124px);
}

.about .container {
  display: flex;
  align-items: center;
  width: 80%;
  gap: 70px;
}

.left-content img{
  width: 700px;
  height: 500px;
}

.right-content h2 {
  font-size: 46px;
  color: rgb(0, 0, 92);
}

.right-content p {
  font-size: 21px;
}

@media screen and (max-width: 1500px){
  .about {
    height: auto;
    padding: 2rem 0;
  }

  .about .container {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px){
  .left-content img {
    width: 400px;
    height: 400px;
  }

  .right-content h2 {font-size: 32px;}
  .right-content p {font-size: 18px;}
}

@media screen and (max-width: 425px) {
  .left-content img {
    width: 300px;
    height: 300px;
  }
}
</style>
