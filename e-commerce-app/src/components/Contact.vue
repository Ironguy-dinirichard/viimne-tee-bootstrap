<template>
  <div>
    <b-container>
     
<h1> Kontakt </h1>

<p>Te olete teretulnud võtmaks meiega ühendust igal ajal, igal nädalapäeval. Oleme valmis teid aitama! Võite külastada meie matusebürood omal vabalvalikul lahtioleku aegadel. Soovikorral saate saata meile ka kirja täites all oleva ankeedi. </p>
      
<b-row >
<b-col xl="6">
 <b-form @submit="onSubmit" action="test.php" method="post">
      <b-form-group
        id="input-group-1"
        label="Email: "
        label-for="input-1"
        description="Me ei jaga teie e-maili aadressi kolmandate isikutega"
      >
        <b-form-input
        name="email"
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="viimnetee@viimnetee.ee"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Teie nimi: " label-for="input-2">
        <b-form-input
        name="name"
          id="input-2"
          v-model="form.name"
          required
          placeholder="Nimi"
        ></b-form-input>
      </b-form-group>

<b-form-group label="Teie küsimused ja arvamused " id="fieldset-1">
     <b-form-textarea
     name="text"
    id="textarea"
    v-model="form.text"
    placeholder="Kuidas planeerida matust kui ..."
    rows="8"
    no-resize
  ></b-form-textarea>
</b-form-group>

      <b-button type="submit" variant="primary" class="btn">Submit</b-button>
    
    </b-form>
    

</b-col>
<b-col xl="6">


  
<GmapMap
  :center="{lat:58.382664, lng:24.519331}"
  :zoom="16"
  map-type-id="terrain"
  style="width: 100%; height: 450px"
  
>
  
</GmapMap>


</b-col>
</b-row>


    </b-container>
  </div>
</template>

<script>


export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: '',
          
        },
        
        
    
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
      }

      
    }

   
  
</script>



<style scoped>
h1{
  text-align: center;
  padding-bottom: 55px;
  padding-top: 25px;
}


button{
  margin-top: 10px
}
.map{
  margin-bottom: 25px
}

.btn{
margin-bottom: 10px;
}

</style>
