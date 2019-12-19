<template>
  <div class="home text-center">
    <b-jumbotron header="CDWorks" lead="Os melhores programadores estão aqui!">
      <p>Coloque os seus projetos de desenvolvimento de software na mão de quem sabe o que faz.</p>
      <b-button variant="primary" @click="$router.push('/register')">Mais Informações</b-button>
    </b-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 pb-2">
          <b-card
            border-variant="primary"
            body-text-variant="primary"
            text-variant="black"
            title="Sou Freelancer"
            sub-title="Busque um novo Projeto"
          >
            <b-card-text>Trabalhe em projetos interessantes que você realmente deseja trabalhar.</b-card-text>
            <router-link to="/register" class="card-link text-white btn btn-primary">Cadastrar-se</router-link>
          </b-card>
        </div>
        <div class="col-12 col-sm-6 pb-2">
          <b-card
            border-variant="danger"
            body-text-variant="danger"
            text-variant="black"
            title="Busco Freelancer"
            sub-title="Cadastre o seu novo projeto"
          >
            <b-card-text>Venha para nossa plataforma e entre em contato com os melhores devs.</b-card-text>
            <router-link to="/register" class="card-link text-white btn btn-danger">Cadastrar-se</router-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
