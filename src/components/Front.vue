<template>
  <!-- FRONT-->
    <div class="front">
      <h1>FRENTE</h1>
      <div class="card">
        <div class="logo">
          <img src="../assets/logo1.png" alt="" />
          <p>bradesco</p>
        </div>
        <div class="chip">
          <img
            src="https://img.icons8.com/fluent/60/000000/sim-card-chip.png"
          />
        </div>
        <div class="number">
          <p>{{ number }}</p>
        </div>
        <div class="valid">
          <p>VALID THRU</p>
          <p>{{ valid }}</p>
        </div>
        <div class="name">
          <p>{{ name.toUpperCase() }}</p>
        </div>
        <div class="logo2">
          <img src="../assets/elo.png" alt="" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    number: String,
    valid: String,
    name: String,
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
/* FRONT */
.front > h1{
  text-align: center;
  padding-bottom: 10px;
}
.card {
  position: relative;
  width: 400px;
  height: 250px;
  background: #cc092f;
  padding: 10px 20px;
  border-radius: 15px;
  transform-style: preserve-3d;
  transition: linear 0.4s;
}
.logo {
  font-size: 25px;
  font-weight: 600;
  padding: 10px 0;
  display: flex;
}
.logo img {
  width: 28px;
  height: 28px;
  margin-right: 5px;
  margin-top: -3px;
}
.chip {
  transform: translateY(10px);
}
.number p {
  font-size: 25px;
  padding-bottom: 10px;
}
.valid p:nth-child(1) {
  font-size: 10px;
}
.valid p:nth-child(2) {
  font-size: 15px;
  padding-bottom: 20px;
}
.name {
  font-size: 16px;
}
.logo2 {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.logo2 img {
  width: 100px;
}
</style>