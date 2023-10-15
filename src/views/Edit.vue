<template>
  <div class="d-flex justify-content-between mt-5 flex-nowrap flex-column">
    <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="
              imageFile !== null
                ? getPhoto(imageFile)
                : Image(cards.locationPicture)
            "
            height="300px"
            width="100%"
            style="object-fit: cover"
          ></v-img>
          <input type="file" @change="handleFileUpload" />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title
            style="
              text-align: center;
              justify-content: center;
              align-items: center;
              font-size: 24px;
              color: #03178c;
            "
            >{{ cards.locationName }}</v-card-title
          >
          <v-textarea
            v-model="cards.locationDescription"
            style="height: 100px; font-size: 16px"
          ></v-textarea>
          <v-spacer></v-spacer>
          <div class="text-center">
            <v-btn
              depressed
              class="mr-2"
              @click="updateData()"
              color="green"
              style="text-align: center; color: #ffffff"
            >
              บันทึก
            </v-btn>

            <v-btn
              depressed
              @click="gotoBack()"
              color="red"
              class="ml-2"
              style="text-align: center; color: #ffffff"
            >
              ยกเลิก
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
      cards: {},
      imageFile: null,
      locationId: null,
    };
  },
  created() {
    this.LocationData();
  },
  //   watch: {
  //     imageFile: function(photo){
  //         this.getPhoto()
  //     }
  //   },

  methods: {
    handleFileUpload(event) {
      this.imageFile = event.target.files[0];
    },
    getPhoto(imageFile) {
      return URL.createObjectURL(imageFile);
    },
    async updateData() {
      try {
        const formData = new FormData();
        formData.append("body", JSON.stringify(this.cards)); // Convert cards to JSON string
        // formData.append("photo", this.imageFile); // Append the image file
        if (this.imageFile) {
          formData.append("photo", this.imageFile);
        } else if (this.cards.locationPicture) {
          const base64Data = `data:image/jpeg;base64,${this.cards.locationPicture}`;
          const byteCharacters = atob(base64Data.split(",")[1]);
          const byteArrays = new Uint8Array(byteCharacters.length);

          for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays[i] = byteCharacters.charCodeAt(i);
          }
          const blob = new Blob([byteArrays], { type: "image/jpeg" });

          const fileName = "photo";
          const file = new File([blob], fileName, { type: "image/jpeg" });

          formData.append("photo", file);
        }

        const response = await this.axios.put(
          `http://localhost:4000/location/${this.$route.params.locationId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          location.href = "/editpage";
        }

        console.log(response.data);
      } catch (error) {
        console.error("Error updating location:", error);
      }
    },

    async LocationData() {
      console.log("locationId", this.locationId);
      try {
        const response = await this.axios.get(
          `http://localhost:4000/location/${this.$route.params.locationId}`
        );
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
    gotoBack() {
      this.$router.go(-1);
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
  color: #03178c;
  margin-top: 15%;
}
</style>
