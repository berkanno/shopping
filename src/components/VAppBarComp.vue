<template>
    <v-toolbar class="py-3" color="white" :rounded="false" :elevation="0" style="border-bottom: 1px solid #3ca887;" >
        <v-row justify="center">
            <v-col cols="10">
                <v-row>
                    <v-col cols="auto text-h4 font-weight-thin px-1 text-teal-darken-4 d-flex align-center">
                        Knowloedge
                    </v-col>
                    <v-col cols="auto text-h6 font-weight-bold text-decoration-underline px-0 text-uppercase text-teal-darken-4 d-flex align-center">
                        Shopping
                    </v-col>
                    <v-spacer />
                    <v-col cols="auto d-flex align-center">
                        <v-icon size="35" >mdi-heart-outline</v-icon>
                    </v-col>
                    <v-col cols="auto d-flex align-center">
                        <v-icon size="35" >mdi-cart-outline</v-icon>
                    </v-col>
                    <v-col cols="auto d-flex align-center">
                        <v-card :elevation="0" rounded="xl" border="success sm opacity-100"  width="100%" height="100%">
                           <v-card-text>
                            <v-row align="center">
                                <v-col cols="auto text-body-1 font-weight-100">
                                    John M. C.
                                </v-col>
                                <v-col cols="auto pl-1">
                                    <v-icon color="teal-darken-4" >mdi-account</v-icon>
                                </v-col>
                            </v-row>
                           </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-toolbar>
</template>
<script setup lang="ts"></script>