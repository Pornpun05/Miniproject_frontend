<template>
  <div class="d-flex justify-content-between mt-5 flex-nowrap flex-column">
    <v-btn depressed class="ml-auto"  @click="goAdd"  color="warning" x-large style="text-align: center; color: #ffffff; margin-right: 100px;">
    เพิ่ม
   </v-btn>
    <v-card v-for="card in cards" :key="card._id" class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="Image(card.locationPicture)" height="300px" width="100%" style="object-fit: cover;"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title style="
              text-align: center;
              justify-content: center;
              align-items: center;
              font-size: 24px;
              color: #03178c;
            ">{{ card.locationName }}</v-card-title>
          <v-card-title style="height: 100px; font-size: 16px;">{{ card.locationDescription }}</v-card-title>
          <v-spacer></v-spacer>
          <div class="text-center">
            <router-link :to="'/edit/' + card.locationId">
              <v-btn
                depressed
                class="mr-2"
                @click="openDialog('edit', card)"
                color="green"
                style="text-align: center; color: #ffffff;"
              >
              แก้ไข
                <!-- <v-icon>mdi-pencil</v-icon> -->
              </v-btn>
            </router-link>
            <v-btn
              depressed
              @click="deleteItem(card)"
              color="red"
              class="ml-2"
              style="text-align: center; color: #ffffff;"
            >
             ลบ
              <!-- <v-icon>mdi-delete</v-icon> -->
            </v-btn>
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
    goAdd () {
      this.$router.push("/update");
    },
    async deleteItem(card) {
      try {
        const response = await this.axios.delete(
          `http://localhost:4000/location/${card.locationId}`
        );
        this.LocationData();
        console.log(response);
      } catch (error) {
        console.error("Error deleting location:", error);
      }
    },
    Image(locationPicture) {
      return `data:image/jpeg;base64,${locationPicture}`;
    },
    openDialog(action, item) {
      console.log("Edit action for item: ", item);
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
  margin-top: 15%;
}
</style>
