<template>
  <div class="d-flex justify-content-between mt-5 flex-nowrap flex-column">
    <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="imageUrl"
            height="300px"
            width="100%"
            style="object-fit: cover"
          ></v-img>
          <input type="file" @change="handleFileUpload" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="locationName"
            label="locationName"
            required
            outlined
          ></v-text-field>
          <v-textarea
            v-model="locationDescription"
            style="height: 100px; font-size: 16px"
          ></v-textarea>
          <v-spacer></v-spacer>
          <div class="text-center">
            <v-btn
              depressed
              class="mr-2"
              @click="updateData"
              color="green"
              style="text-align: center; color: #ffffff"
            >
              บันทึก
            </v-btn>

            <v-btn
              depressed
              @click="gotoBack"
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
      locationName: "",
      locationDescription: "",
      imageFile: null,
      locationId: null,
      imageUrl:
        "https://www.computing.psu.ac.th/th/wp-content/uploads/2018/05/Logo-PSU-EH-01.png",
    };
  },
  methods: {
    handleFileUpload(event) {
      this.imageFile = event.target.files[0];
      this.imageUrl = this.getPhoto(this.imageFile);
    },
    getPhoto(imageFile) {
      return URL.createObjectURL(imageFile);
    },
    async updateData() {
      try {
        const formData = new FormData();
        formData.append(
          "body",
          JSON.stringify({
            locationName: this.locationName,
            locationDescription: this.locationDescription,
          })
        );

        formData.append("photo", this.imageFile);

        const response = await this.axios.post(
          "http://localhost:4000/location",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          location.href = "/editpage";
        }

        console.log(response.data);
      } catch (error) {
        console.error("Error updating location:", error);
      }
    },
    gotoBack() {
      this.$router.push("/editpage");
    },
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
