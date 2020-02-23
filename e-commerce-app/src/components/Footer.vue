<template >
<div class="footer">
  <b-container>
    <b-row class="text-center ">
     <b-col sm="7"> lkm ds</b-col>
     <b-col sm="5"> 
        <strong>OÜ Matusebüroo Viimne Tee</strong>
        <p>Registrikood : 	11463720</p>
        <p>Riia maantee 48, 80019 Pärnu</p>
        <p>Kontor avatud: E-R 9-16, L 9-13</p>
        <br>
        <strong>Lahkunute transport 24H</strong>
      
        <a href="tel:+372555515" class="number"><p><ios-call-icon w="20px" h="20px" /> Telefon +372 Siia tuleb number </p>  </a>
        <a href="mailto: kaurkaitsa@gmail.com" class="number"><p><ios-mail-icon w="20px" h="20px" /> kaurkaitsa@gmail.com </p>  </a>



     </b-col>
     
     </b-row>
    

   


  </b-container>
<p class="vfot">© 2019 OÜ Matusebüroo Viimne Tee. Kõik õigused kaitstud.</p>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer{

  background-color: rgb(209, 224, 187);
  padding-top: 20px;
 
  width: 100%;
}

p{
  margin-bottom: 0%;
}

.vfot{
  background-color: rgb(218, 201, 204);
  color:#2c3e50;
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
}

</style>
