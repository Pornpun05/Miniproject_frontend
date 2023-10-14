<template>
  <div class="d-flex justify-content-between mt-5 flex-nowrap flex-column">
    <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-3.jpg"
            height="350px"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title style="font-size: 28px">ลานใต้อาคาร BSc</v-card-title>
          <v-card-title style="font-size: 22px"
            >สิ่งอำนวยความสะดวก</v-card-title
          >
          <v-textarea placeholder="ร้านน้ำชาตาปู,ห้องน้ำ" filled> </v-textarea>
          <router-link to="/update">
            <v-btn
              small
              outlined
              class="mr-2"
              @click="openDialog('edit', item)"
              color="green"
            >
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
          </router-link>
          <v-btn
            small
            outlined
            @click="deleteItem(item)"
            color="red"
            class="ml-2"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="14" md="6">
          <v-img
            src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out.jpg"
            height="350px"
          >
          </v-img>
        </v-col>
        <v-col cols="14" md="6">
          <v-card-title style="font-size: 28px">ลานนกยูง</v-card-title>
          <v-card-title style="font-size: 22px"
            >สิ่งอำนวยความสะดวก</v-card-title
          >
          <v-textarea placeholder="" filled> </v-textarea>
          <router-link to="/update">
          <v-btn
            small
            outlined
            class="mr-2"
            @click="openDialog('edit', item)"
            color="green"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </router-link>
          <v-btn
            small
            outlined
            @click="deleteItem(item)"
            color="red"
            class="ml-2"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="14" md="6">
          <v-img
            src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-4.jpg"
            height="350px"
          >
          </v-img>
        </v-col>
        <v-col cols="14" md="6">
          <v-card-title style="font-size: 28px">ลานชั้น1 อาคารวท.</v-card-title>
          <v-card-title style="font-size: 22px"
            >สิ่งอำนวยความสะดวก</v-card-title
          >
          <v-textarea placeholder="ห้องน้ำ" filled> </v-textarea>
          <router-link to="/update">
          <v-btn
            small
            outlined
            class="mr-2"
            @click="openDialog('edit', item)"
            color="green"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </router-link>
          <v-btn
            small
            outlined
  
            @click="deleteItem(item)"
            color="red"
            class="ml-2"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto col-md-10 mt-5 align-items-start">
      <v-row>
        <v-col cols="14" md="6">
          <v-img
            src="https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-5.jpg"
            height="350px"
          >
          </v-img>
        </v-col>
        <v-col cols="14" md="6">
          <v-card-title style="font-size: 28px"
            >ลานบริเวณข้างอาคาร วท.</v-card-title
          >
          <v-card-title style="font-size: 22px"
            >สิ่งอำนวยความสะดวก</v-card-title
          >
          <v-textarea placeholder=" " filled> </v-textarea>
          <router-link to="/update">
          <v-btn
            small
            outlined
            class="mr-2"
            @click="openDialog('edit', item)"
            color="green"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </router-link>
          <v-btn
            small
            outlined
            @click="deleteItem(item)"
            color="red"
            class="ml-2"
          >
            <v-icon> mdi-delete </v-icon>
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
  methods: {
    gotoadmin() {
      this.$router.push("/AdminPage");
    },
  },
};
</script>
