<template>
  <v-container class="mt-5">
    <v-row justify="space-between">
      <v-col cols="12" md="6" v-for="card in cards" :key="card.title">
        <v-card class="d-flex flex-column" style="height: 100%; ">
          <v-img :src="Image(card.locationPicture)" height="300px" width="100%" style="object-fit: cover;"></v-img>
          <v-card-title class="text-center">{{ card.locationName}}</v-card-title>
          <v-card-text style="height: 100px; font-size: 16px;"> {{ card.locationDescription }}</v-card-text>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" v-for="card in cards" :key="card.title">
      </v-col>
    </v-row>
  </v-container>
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
    },Image(locationPicture) {
      return `data:image/jpeg;base64,${locationPicture}`;
    },
  },
  created() {
    this.LocationData();
  },
};
</script>
<style>
.text-center{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color:#03178C;
}
</style>