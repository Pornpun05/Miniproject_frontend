<template>
    <div class="d-flex justify-content-between mt-5 flex-nowrap flex-column">
      <v-card v-for="card in cards" :key="card._id" class="mx-auto col-md-10 mt-5 align-items-start">
        <v-row>
          <v-col cols="12" md="6">
            <v-img :src="Image(card.locationPicture)" height="300px" width="100%" style="object-fit: cover;"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title class="text-center">{{ card.locationName }}</v-card-title>
            <div class="d-flex justify-content-between mt-2 flex-wrap"></div>
            <v-card-text style="height: 100px; font-size: 16px;">{{ card.locationDescription }}</v-card-text>
          <v-spacer></v-spacer>
            <div class="text-center">
            <router-link to="/edit">
            <v-btn 
              depressed
              @click="gotoadmin" color="#03178C" class="ml-2"
              style="text-align: center; color: #f2ff00;">
              บันทึก
            </v-btn>
            </router-link>
          </div>
          </v-col>
        </v-row>
      </v-card>
  
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    async LocationData() {
      try {
        const response = await this.axios.get("http://localhost:4000/location");
        this.cards = response.data;
        console.log(response);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    },
    Image(locationPicture) {
      return `data:image/jpeg;base64,${locationPicture}`;
    },
    openDialog(action, item) {
      console.log("Edit action for item: ", item);
    },
    deleteItem(item) {
      console.log("Delete action for item: ", item);
    },
  },
  created() {
    this.LocationData();
  },
};
  </script>
  <style>
  .text-center {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #03178C;
    margin-top: 8%;
  }
  </style>
  