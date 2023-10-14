<template>
  <div class="d-flex justify-content-between mt-5 flex-wrap">
    <div class="col-md-4" v-for="(faculty, index) in faculties" :key="index">
      <v-card class="mx-auto my-4" @click="gotoEdit">
        <v-img :src="faculty.image" height="200px"></v-img>
        <v-card-title class="text-center d-flex justify-center align-center" style="font-size: 24px; height: 3rem">{{ faculty.name }} </v-card-title>
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
    faculties: [
      {
        name: "คณะวิทยาศาสตร์",
        image: "https://th.bing.com/th/id/R.4f5793927643209057f6670feebdcea3?rik=Yvuciz4o1HV15g&pid=ImgRaw&r=0",
      },
      {
        name: "คณะวิศวกรรมศาสตร์",
        image: "https://2.bp.blogspot.com/-0c8kZnO5RqA/U_AYsw-sH1I/AAAAAAAAb7s/HONg-5sm4HA/s1600/9.1-790761.jpg",
      },
      {
        name: "คณะวิทยาการจัดการ",
        image: "https://fastly.4sqi.net/img/general/600x600/8452876_jgujmrjArHaZJajHb22roOfmRvBeICmR2hOQyII2Bdw.jpg",
      },
      {
        name: "คณะทันตแพทยศาสตร์",
        image: "https://www.print3dd.com/wp-content/uploads/2017/06/%E0%B8%A1%E0%B8%AD.%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2-%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C_170602_0015-1024x768.jpg",
      },
      {
        name: "คณะพยาบาลศาสตร์",
        image: "https://www.nur.psu.ac.th/nur/images/building1-1.jpg",
      },
      {
        name: "คณะศิลปศาสตร์",
        image: "https://i.ytimg.com/vi/VWoSItuuKq0/maxresdefault.jpg",
      },
    ],
  }),
  methods: {
        gotoEdit() {
        this.$router.push("/edit");
      }, 
  },
};
</script>
