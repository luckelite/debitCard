<template>
  <div class="main">
    <h1>Gerador de cartões Bradesco</h1>
    <form >
      <span v-if="$v.number.$error">Mínimo 16 dígitos</span>
      <input
        type="text"
        v-mask="'#### #### #### ####'"
        name="number"
        maxlength="19"
        v-model="number"
        @change="$v.number.$touch()"
        placeholder="NÚMERO DO CARTÃO"
        title="máx. 16 dígitos no formato: 0000 0000 0000 0000"
      />
      <span v-if="$v.valid.$error">Mínimo 4 dígitos</span>
      <input
        type="text"
        v-mask="'##/##'"
        v-model="valid"
        @change="$v.valid.$touch()"
        placeholder="VALIDADE"
        title="Formato: 00/00"
        maxlength="5"
      />
      <input
        type="text"
        v-model="name"
        @change="$v.name.$touch()"
        placeholder="NOME DO TITULAR"
        title="máx. 25 caractéres"
        maxlength="25"
      />
      <span v-if="$v.agency.$error">Mínimo 5 dígitos</span>
      <input
        type="text"
        v-mask="'####-#'"
        v-model="agency"
        @change="$v.agency.$touch()"
        placeholder="AGÊNCIA"
        title="máx. 5 dígitos no formato: 0000-0"
        maxlength="6"
      />
      <span v-if="$v.account.$error">Mínimo 8 dígitos. Ex: 0001234-5</span>
      <input
        type="text"
        v-mask="'#######-#'"
        v-model="account"
        @change="$v.account.$touch()"
        placeholder="CONTA"
        title="máx. 8 dígitos no formato: 0000000-0"
        maxlength="9"
      />
      <span v-if="$v.cod.$error">Mínimo 3 dígitos</span>
      <input
        type="text"
        v-mask="'###'"
        v-model="cod"
        @change="$v.cod.$touch()"
        placeholder="CÓDIGO DE SEGURANÇA"
        title="máx. 3 dígitos"
        maxlength="3"
      />
      <button title="VER CARTÃO" type="submit" @click.prevent="show" id="btn">
        VER CARTÃO
      </button>
      <input
        type="button"
        value="LIMPAR"
        title="LIMPAR"
        id="close"
        @click="clear"
      />
    </form>
    <div class="cards" v-if="visible">
      <img src="../assets/close.png" title="FECHAR" @click="hidden" />
      <Front id="front" :number="number" :valid="valid" :name="name" />
      <Back :agency="agency" :account="account" :cod="cod" />
    </div>
  </div>
</template>

<script>
import Front from "./Front.vue";
import Back from "./Back.vue";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      number: "",
      valid: "",
      name: "",
      agency: "",
      account: "",
      cod: "",
      visible: false,
    };
  },
  components: {
    Front,
    Back,
  },
  methods: {
    show() {
      if (this.$v.$invalid) {
        this.visible = true;
      } else {
        this.$v.$touch();
      }
    },
    hidden() {
      this.visible = false;
    },
    clear() {
      this.number = "";
      this.valid = "";
      this.name = "";
      this.agency = "";
      this.account = "";
      this.cod = "";
    },
  },
  validations: {
    number: { required, minLength: minLength(19) },
    valid: { required, minLenght: minLength(5) },
    name: { required, minLenght: minLength(25) },
    agency: { required, minLenght: minLength(6) },
    account: { required, minLenght: minLength(9) },
    cod: { required, minLenght: minLength(3) },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.main h1 {
  margin-bottom: 50px;
  color: #fff;
}
.main form {
  display: flex;
  flex-direction: column;
}
.main form span {
  font-size: 10px;
  color: #fff;
}
.main form p {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}
.main form input {
  margin-bottom: 15px;
  height: 28px;
  width: 300px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  outline: none;
}
#btn {
  margin-top: 10px;
  border: 0;
  border-radius: 30px;
  background: rgb(49, 49, 190);
  color: #fff;
  font-weight: bold;
  height: 36px;
  cursor: pointer;
}
#close {
  margin-top: 10px;
  border: 0;
  border-radius: 30px;
  background: #fff;
  color: red;
  font-weight: bold;
  height: 36px;
  cursor: pointer;
}
.cards {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
}
.cards img {
  position: absolute;
  top: 30px;
  right: 30px;
  filter: invert(1);
  cursor: pointer;
}
.error {
  border: solid 1px red;
}
.success {
  border: solid 1px green;
}
</style>
