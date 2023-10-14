<template>
    <div class="d-flex justify-content-between mt-5 flex-nowrap flex-column">
      <v-card class="mx-auto col-md-10 mt-5 align-items-start">
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-3.jpg"
              height="250px"
            >
            </v-img>
            <v-card-title>ลานใต้อาคาร BSc</v-card-title>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title style="font-size: 28px">ลานใต้อาคาร BSc</v-card-title>
            <v-card-title style="font-size: 22px">สิ่งอำนวยความสะดวก</v-card-title>
            <v-textarea
              placeholder="ร้านน้ำชาตาปู,ห้องน้ำ" filled>
            </v-textarea>
            <router-link to="/edit">
            <v-btn small outlined
                @click="gotoadmin" color="purple" class="ml-2">
                    บันทึก
            </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-card>
  
      <v-card class="mx-auto col-md-10 mt-5 align-items-start">
        <v-row>
          <v-col cols="14" md="6">
            <v-img
              src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out.jpg"
              height="250px">
            </v-img>
            <v-card-title>ลานนกยูง</v-card-title>
          </v-col>
          <v-col cols="14" md="6">
            <v-card-title style="font-size: 28px">ลานนกยูง</v-card-title>
            <v-card-title style="font-size: 22px">สิ่งอำนวยความสะดวก</v-card-title>
            <v-textarea
              placeholder="" filled>
            </v-textarea>
            <v-btn small outlined
                @click="gotoadmin" color="purple" class="ml-2">
                    บันทึก
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
  
      <v-card class="mx-auto col-md-10 mt-5 align-items-start">
        <v-row>
          <v-col cols="14" md="6">
            <v-img
              src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-4.jpg"
              height="250px">
            </v-img>
            <v-card-title>ลานชั้น1 อาคาร วท.</v-card-title>
          </v-col>
          <v-col cols="14" md="6">
            <v-card-title style="font-size: 28px">ลานชั้น1 อาคารวท.</v-card-title>
            <v-card-title style="font-size: 22px">สิ่งอำนวยความสะดวก</v-card-title>
            <v-textarea
              placeholder="" filled>
            </v-textarea>
            <v-btn small outlined
                @click="gotoadmin" color="purple" class="ml-2">
                    บันทึก
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="14" md="6">
          <v-img
            src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-5.jpg"
            height="250px">
          </v-img>
          <v-card-title>ลานบริเวณข้างอาคาร วท.</v-card-title>
        </v-col>
        <v-col cols="14" md="6">
          <v-card-title style="font-size: 28px">ลานบริเวณข้างอาคาร วท.</v-card-title>
          <v-card-title style="font-size: 22px">สิ่งอำนวยความสะดวก</v-card-title>
          <v-textarea placeholder=" " filled> </v-textarea>
          <v-btn small outlined
                @click="gotoadmin" color="purple" class="ml-2">
                    บันทึก
            </v-btn>
        </v-col>
      </v-row>
    </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      show1: false,
      show2: false,
      show3: false,
    }),
  };
  </script>
  