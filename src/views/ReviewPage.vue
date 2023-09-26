<template>
  <v-container
    class="d-flex justify-content-between mt-5 flex-nowrap flex-column"
  >
    <v-row>
      <v-col cols="12" v-for="card in cards" :key="card.title">
        <v-container>
          <v-card>
            <v-row>
              <v-col cols="12" md="6" pa-5>
                <v-img :src="card.src" height="300px"></v-img>
              </v-col>

              <v-col>
                <v-card-title v-text="card.title"></v-card-title>

                <v-text> สิ่งอำนวยความสะดวก </v-text>

                <v-card height="150">
                  <v-text>{{ card.detail }}</v-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "ลานใต้อาคาร Bsc",
        src: "https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-3.jpg",
        detail: "เซเว่น",
      },
      {
        title: "ลานนกยูง",
        src: "https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out.jpg",
        detail: "ร้านน้ำชาตาปู",
      },
      {
        title: "ลานชั้น1 อาคาร วท.",
        src: "https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-4.jpg",
        detail: "ห้องน้ำ",
      },
      {
        title: "ลานบริเวณข้างอาคาร วท.",
        src: "https://www.sci.psu.ac.th/wp-content/uploads/2022/06/5-places-to-chill-out-5.jpg",
        detail: "ร้านน้ำชาตาปู",
      },
    ],
  }),
};
</script>
