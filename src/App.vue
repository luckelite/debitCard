<template>
  <div id="app">
    <div class="form">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("./assets/fundo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.form {
  margin-bottom: 50px;
}
.cards {
  display: flex;
}
.front {
  margin-right: 20px;
}
</style>
