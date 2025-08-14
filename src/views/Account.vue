<template>
    <Header />
    <section class="account">
        <div class="container">
            <form>
                <label for="nome">Digite seu nome:</label>
                <input class="inpName" type="text" id="val" name="nome" v-model="store.nome">
                <input class="btnSubmit" type="submit" value="Enviar">
            </form>
            <div class="welcome hidden">
                <h2>{{ store.welcome }}, <b>{{ store.nome }}</b></h2>
                <p>Você se logou às: {{ store.horas }} do dia {{ store.dia }}</p>
                <button>Deslogar</button>
            </div>
        </div>
    </section>
</template>

<script>
import Header from "../components/Header.vue";
import { useMainStore } from "../stores/mainStore";
import { onMounted } from "vue";

export default {
    components: { Header },
    name: "Account",
    setup(){
        const store = useMainStore();

        onMounted(() => {
            const form = document.querySelector('form');
            form.addEventListener('submit', e => {
                const val = document.getElementById('val').value;
                if(val != null & val != undefined & val.length != 0){
                    store.nome = val;
                    store.dia = new Date().toLocaleDateString();
                    store.horas = new Date().toLocaleTimeString();
                    document.querySelector('form').classList.add("hidden");
                    document.querySelector('.welcome').classList.remove("hidden");
                    let h = store.horas.split(':');
                    if(h[0] > 6 && h[0] < 12){
                        store.welcome = "Bom dia";
                    } else if(h[0] > 12 && h[0] < 18){
                        store.welcome = "Boa tarde";
                    } else {
                        store.welcome = "Boa noite";
                    }
                } else{
                    document.querySelector('.welcome').classList.add("hidden");
                    document.querySelector('form').classList.remove("hidden");
                }
                e.preventDefault();
            });
            
            document.querySelector('button').addEventListener('click', ()=>{
                document.querySelector('.welcome').classList.add("hidden");
                document.querySelector('form').classList.remove("hidden");
            })
        })

        return { store }
    }
}
</script>

<style scoped>
.account {
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
}

.container {
    display: flex;
    justify-content: center;
}

.hidden {display: none;}

b {text-transform: uppercase;}

.welcome {text-align: center;}

.welcome h2{
    font-size: 34px;
}

.welcome p {
    padding: 1rem 0;
}

.welcome button {
    width: 200px;
    height: 32px;
    border-radius: 20px;
    border: 0;
    background-color: rgb(56, 56, 199);
    color: white;
    cursor: pointer;
    transition: .2s;
}

.welcome button:hover {
    background-color: rgb(40, 40, 143);
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 700px;
    background-color: rgb(7, 7, 75);
    padding: 6rem;
    border-radius: 20px;
    box-shadow: 5px 5px 30px rgb(11, 11, 117);
}

form label {
    font-size: 30px;
    color: white;
}

.inpName {
    background-color: transparent;
    border: 0 solid;
    border-bottom: 1px solid;
    outline: 0;
    padding: .5rem 1rem;
    font-size: 18px;
    color: white;
}

.btnSubmit {
    width: 300px;
    height: 32px;
    font-size: 18px;
    border-radius: 20px;
    border: 0;
    cursor: pointer;
    display: flex;
    margin: 1rem auto;
    background-color: rgb(56, 56, 199);
    color: white;
    transition: .2s;
}

.btnSubmit:hover {background-color: rgb(43, 43, 150);}

@media screen and (max-width: 550px){
    form {
        width: 100%;
        padding: 2rem;
        text-align: center;
    }

    .btnSubmit {width: 100%;}
}
</style>