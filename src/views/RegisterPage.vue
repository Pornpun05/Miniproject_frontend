<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" >
            <v-card class="mx-auto mt-5" style="width: 100%">
              <v-card-title style="font-size: 32px; color: #03178C;" class="text-center"  >
                สมัครสมาชิก
              </v-card-title>
              <v-card-text>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="20"
                    :rules="nameRules"
                    label="ชื่อ"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="lastname"
                    :counter="20"
                    :rules="lastnameRules"
                    label="นามสกุล"
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

                  <v-row justify="center">
                    <v-col cols="12" class="text-center">
                      <v-btn
                        :disabled="!valid"
                        color="#03178C"
                        @click="gotologin"
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
      (v) => !!v || "กรุณากรอกชื่อ",
      (v) =>
        (v && v.length <= 20) || "กรุณากรอกชื่อผู้ใช้งานห้ามเกิน 20 ตัวอักษร",
    ],

    lastname: "",
    lastnameRules: [
      (v) => !!v || "กรุณากรอกนามสกุล",
      (v) =>
        (v && v.length <= 20) || "กรุณากรอกชื่อผู้ใช้งานห้ามเกิน 20 ตัวอักษร",
    ],

    password: "",
    passwordRules: [(v) => !!v || "กรุณากรอกรหัสผ่าน"],
  }),
  methods: {
    Register() {
      if (this.$refs.registerForm.validate(true)) {
        localStorage.setItem("username", this.name);
        this.$router.push("/");
      }
    },

    gotologin() {
      this.$router.push("/login");
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
