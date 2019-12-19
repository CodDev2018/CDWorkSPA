<template>
  <div class="profile">
    <h2>Habilidades</h2>
    <hr />
    <b-alert variant="danger" v-if="errorMessage" show>{{errorMessage}}</b-alert>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <div class="row">
        <div class="col-12 col-sm-6">
          <b-form-group id="input-group-skill" label="Habilidade:" label-for="input-skill">
            <b-form-select id="input-skill" v-model="form.skill" :options="skills"></b-form-select>
          </b-form-group>
        </div>
        <div class="col-12 col-sm-6">
          <b-form-group id="input-group-level" label="Nível:" label-for="input-level">
            <b-form-select id="input-level" v-model="form.level" :options="levels"></b-form-select>
          </b-form-group>
        </div>
        <div class="col-12 text-right">
          <b-button type="submit" variant="primary">{{form.id ? "Alterar" : "Adicionar"}}</b-button>
        </div>
      </div>
    </b-form>
    <h4 class="mt-3">Lista de Habilidades</h4>
    <ul class="list-unstyled" v-if="userSkills">
      <li v-for="skill in userSkills" :key="skill.id">
        <div class="row">
          <div class="col-6">
            <h5>{{skill.name}}</h5>
            <b-badge>{{skill.levelName}}</b-badge>
          </div>

          <div class="col-6 text-right">
            <b-button variant="primary" size="sm" @click="edit(skill)" class="mr-2">Editar</b-button>
            <b-button variant="danger" size="sm" @click="remove(skill)">Excluir</b-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { apiProtected } from "../../services/apiService";
export default {
  data: () => ({
    errorMessage: null,
    form: {
      id: null,
      skill: null,
      level: null
    },
    skills: [],
    levels: [
      { value: 1, text: "Iniciante" },
      { value: 2, text: "Intermediário" },
      { value: 3, text: "Avançado" }
    ]
  }),
  methods: {
    async refreshUser() {
      await this.$parent.$emit("UpdateUser");
    },
    async onSubmit() {
      try {
        if (this.form.id) {
          await this.sendUpdate();
        } else {
          await this.sendStore();
        }
        this.clearForm();
        this.refreshUser();
      } catch (error) {
        console.error(error);
        this.errorMessage = "Erro inesperado ao salvar habilidade";
      }
    },
    async sendStore() {
      await apiProtected.post(`/users/${this.$parent.user.id}/skills`, {
        skillId: this.form.skill,
        level: this.form.level
      });
    },
    async sendUpdate() {
      await apiProtected.patch(
        `/users/${this.$parent.user.id}/skills/${this.form.id}`,
        {
          skillId: this.form.skill,
          level: this.form.level
        }
      );
    },
    clearForm() {
      this.form = {
        id: null,
        skill: null,
        level: null
      };
    },
    edit(skill) {
      this.form = {
        id: skill.id,
        skill: skill.skillId,
        level: skill.level
      };
    },
    async remove(skill) {
      try {
        await apiProtected.delete(
          `/users/${this.$parent.user.id}/skills/${skill.id}`
        );
        this.refreshUser();
      } catch (error) {
        console.error(error)
        this.errorMessage = "Erro ao excluir usuário"
      }
    }
  },
  async mounted() {
    const response = await apiProtected.get("/skills");
    this.skills = response.data.data.map(skill => ({
      value: skill.id,
      text: skill.name
    }));
  },
  computed: {
    userSkills() {
      return this.$parent.user ? this.$parent.user.UserSkills : null;
    }
  }
};
</script>

<style>
</style>