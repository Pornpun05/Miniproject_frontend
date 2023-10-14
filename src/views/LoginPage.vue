<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="mx-auto mt-15" style="width: 100%; height: 350px;">
              <v-card-title style="font-size: 32px; color: #03178C;" class="text-center" >
                เข้าสู่ระบบ
              </v-card-title>
              <v-card-text class="mx-auto mt-5">
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="20"
                    :rules="nameRules"
                    label="ชื่อผู้ใช้งาน"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="รหัสผ่าน"
                    required
                    outlined
                    type="password"
                  ></v-text-field>
                  <v-row justify="center" class="mx-auto mt-2">
                    <v-col cols="12" sm="8" md="6" class="text-center">
                      <v-btn
                        :disabled="!valid"
                        color="#03178C"
                        @click="gotoadmin"
                        style="text-align: center; color: #f2ff00;"
                      >
                        เข้าสู่ระบบ
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
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
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "กรุณากรอกชื่อผู้ใช้",
      (v) =>
        (v && v.length <= 20) || "กรุณากรอกชื่อผู้ใช้งานห้ามเกิน 20 ตัวอักษร",
    ],
    password: "",
    passwordRules: [(v) => !!v || "กรุณากรอกรหัสผ่าน"],
  }),
  methods: {
    gotoadmin() {
      if (this.$refs.loginForm.validate(true)) {
        localStorage.setItem("username", this.name);
        this.$router.push("/AdminPage");
      }
    },
    Register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
