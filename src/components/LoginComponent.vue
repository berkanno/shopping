<template>
    <v-col>
       <v-card border="sm success opacity-100" min-height="300" class="d-flex align-center">
           <v-card-text>
              <v-row class="flex-column" >
                 <v-col class="py-0 font-weight-bold text-body-1 text-teal-darken-1">Kullanıcı Adı</v-col>
                 <v-col>
                    <v-text-field variant="outlined" hide-details color="teal-darken-1"></v-text-field>
                 </v-col>
                 <v-col class="pb-0 font-weight-bold text-teal-darken-1 text-body-1">Şifre</v-col>
                 <v-col>
                    <v-text-field class="theme--light" variant="outlined" hide-details color="teal-darken-1"></v-text-field>
                 </v-col>
                 <v-col class="d-flex justify-center">
<v-btn color="red-darken-1" variant="text" >
GİRİŞ yap
</v-btn> 
                </v-col>
              </v-row>
           </v-card-text>
       </v-card>
    </v-col>
</template>
<script lang="ts" setup>

</script>

<style scoped>
</style>