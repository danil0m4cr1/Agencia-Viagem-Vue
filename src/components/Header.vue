<template>
  <header>
    <div class="container">
      <h1>Agência de Viagem</h1>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/services">Serviços</a></li>
        </ul>
      </nav>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    background-color: #eee;
    padding: 1rem 0;
  }

  header .container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  header h1 {
    color: rgb(0, 0, 92);
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav ul {
    display: flex;
    gap: 60px;
    justify-content: center;
    list-style: none;
  }

  nav li a{
    color: black;
    text-decoration: none;
    font-size: 21px;
  }

  nav a:hover {
    color: rgb(88, 88, 255);
    transition: .2s;
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    ul {
      padding: 2rem 0;
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }

    h1 {text-align: center;}
  }

</style>
