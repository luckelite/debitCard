<template>
  <div class="back">
    <h1>VERSO</h1>
    <div class="card">
      <div class="msg">
        <p>
          Emitido pelo Banco Bradesco SA, em caso de perda ou roubo, comunique
          imediatamente
        </p>
      </div>
      <div class="barcode"></div>
      <div class="container-data">
        <div class="title">
          <p>AGÊNCIA</p>
          <p>CONTA</p>
          <p>COD</p>
        </div>
        <div class="data">
          <p>{{agency}}</p>
          <p>{{account}}</p>
          <p>{{cod}}</p>
        </div>
      </div>
      <div class="contact">
        <p id="p1">AUTHORIZED SIGNATURE</p>
        <p><span> Fone Fácil Bradesco</span> 4002-0022 / 0800 570-0022</p>
        <p><span>Acesso do Exterior</span> +55 11 4002-0022</p>
        <p>
          <span>SAC:</span> 0800 704-8383 (Débito) / 0800 727-9988 (Crédito)
        </p>
        <p><span>Deficiência Auditiva ou de Fala:</span> 0800 722-0099</p>
        <p><span>Ouvidoria:</span> 0800 727-9933</p>
        <p><span>Banco Bradesco</span></p>
      </div>
      <div class="logos">
        <img id="b24horas" src="../assets/24horas.png" alt="" />
        <img id="pulse" src="../assets/pulse.jpg" alt="" />
            <div class="exterior">
                <p>NO EXTERIOR</p>
                <img id="dinners" src="../assets/dinnersclub.png" alt="" />
                <img id="discover" src="../assets/discover.png" alt="" />
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    agency: String,
    account: String,
    cod: String
  }
};
</script>

<style scoped>
* {
  color: #fff;
}
.back > h1{
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
}
.msg p {
  font-size: 7px;
  margin: -4px 0 4px 0;
}
.barcode {
  width: 400px;
  height: 50px;
  background: #000;
  transform: translateX(-20px);
  margin-bottom: 5px;
}
.container-data .title {
  width: 80%;
  display: flex;
  justify-content: space-around;
  font-size: 9px;
}
.container-data .data {
  width: 85%;
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-right-radius: 15px;
}
.container-data .data p {
  color: #000;
  font-style: italic;
}
.contact {
  font-size: 9px;
  line-height: 10px;
}
#p1 {
  padding: 10px 0px 15px 0;
  font-size: 10px;
}
.contact span {
  font-weight: bold;
}
.logos {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transform: translateY(-50px);
}
.logos img {
  width: 60px;
  margin-left: 10px;
}
.exterior p{
    font-size: 9px;
    transform: translateY(16px);
    padding-left: 46px;
}
#b24horas {
  width: 90px;
  height: 20px;
}
#pulse {
  width: 80px;
}
#dinners {
  transform: translateY(8px);
}
</style>