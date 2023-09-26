<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="20" sm="10" md="8">
            <v-card class="mx-auto mt-10" style="width: 100%" @click="gotohome">
              <v-img
                src="https://readthecloud.co/wp-content/uploads/2022/01/the-importance-of-bookstores-4-750x563.jpg"
                height="250px">
              </v-img>
              <div class="d-flex justify-content-between mt-10 flex-wrap"></div>
              <v-card-text >
                <p style="font-size: 34px; text-align: center">ยินดีต้อนรับ</p>
              </v-card-text>
              <v-card-text>
                <p style="font-size: 20px; text-align: center">ระบบแนะนำสถานที่อ่านหนังสือภายในมหาวิทยาลัยสงขลานครินทร์</p>
              </v-card-text>
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
<style></style>
