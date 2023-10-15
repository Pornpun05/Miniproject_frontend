<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-content-between mt-5 flex-wrap">
        <v-row justify="center">
          <v-col cols="20" sm="10" md="8" >
            <v-card class="custom-card" @click="gotohome">
              <v-img
                src="https://readthecloud.co/wp-content/uploads/2022/01/the-importance-of-bookstores-4-750x563.jpg"
                height="250px">
              </v-img>
              <div class="d-flex justify-content-between mt-8 flex-wrap"></div>
              <v-card-text >
                <div style="font-size: 34px; text-align: center; color: #2004ab;">ยินดีต้อนรับ</div>
              </v-card-text>
              <v-card-text>
                <div style="font-size: 20px; text-align: center ; color: #2004ab;">ระบบแนะนำสถานที่อ่านหนังสือภายในมหาวิทยาลัยสงขลานครินทร์</div>
              </v-card-text>
              <div class="d-flex justify-content-between mt-2 flex-wrap"></div>
              <div style="font-size: 16px; text-align: center ; color: #2004ab;">คลิกเพื่อดู</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    gotohome() {
      this.$router.push("/homePage");
    },
  },
};
</script>
<style>
.custom-card {
  width: 100%; 
  height: 450px; 
}
</style>

