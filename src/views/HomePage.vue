<template>
  <div class="d-flex justify-content-between mt-10 flex-wrap">
    <v-card class="mx-auto mt-5 col-md-4" @click="gotoReview">
      <v-img
        src="https://th.bing.com/th/id/R.4f5793927643209057f6670feebdcea3?rik=Yvuciz4o1HV15g&pid=ImgRaw&r=0"
        height="200px"
      ></v-img>
      <v-card-title>คณะวิทยาศาสตร์</v-card-title>
    </v-card>

    <v-card class="mx-auto mt-5 col-md-4" @click="gotoReview">
      <v-img
        src="https://2.bp.blogspot.com/-0c8kZnO5RqA/U_AYsw-sH1I/AAAAAAAAb7s/HONg-5sm4HA/s1600/9.1-790761.jpg"
        height="200px"
      ></v-img>
      <v-card-title>คณะวิศวกรรมศาสตร์</v-card-title>
    </v-card>

    <v-card class="mx-auto mt-5 col-md-4" @click="gotoReview">
      <v-img
        src="https://fastly.4sqi.net/img/general/600x600/8452876_jgujmrjArHaZJajHb22roOfmRvBeICmR2hOQyII2Bdw.jpg"
        height="200px"
      ></v-img>
      <v-card-title>คณะวิทยาการจัดการ</v-card-title>
    </v-card>

    <div class="d-flex justify-content-between mt-6 flex-wrap">
      <v-card class="mx-auto mt-5 col-md-4" @click="gotoReview">
        <v-img
          src="https://www.print3dd.com/wp-content/uploads/2017/06/%E0%B8%A1%E0%B8%AD.%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2-%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C_170602_0015-1024x768.jpg"
          height="200px"
        ></v-img>
        <v-card-title>คณะทันตแพทยศาสตร์</v-card-title>
      </v-card>

      <v-card class="mx-auto mt-5 col-md-4" @click="gotoReview">
        <v-img
          src="https://www.nur.psu.ac.th/nur/images/building1-1.jpg"
          height="200px"
        ></v-img>
        <v-card-title>คณะพยาบาลศาสตร์</v-card-title>
      </v-card>

      <v-card class="mx-auto mt-5 col-md-4" @click="gotoReview">
        <v-img
          src="https://news.gimyong.com/static/uploads/pictures/201908/1688857277-60128.jpg"
          height="200px"
        ></v-img>
        <v-card-title>คณะทรัพยากรธรรมชาติ</v-card-title>
      </v-card>
    </div>
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
    gotoReview() {
      this.$router.push("/review");
    },
  },
};
</script>
