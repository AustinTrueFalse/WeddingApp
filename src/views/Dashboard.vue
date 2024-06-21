<script>
import Snackbar from "./components/Snackbar.vue";

export default {
  components: {
    Snackbar,
  },
  created() {
    this.loadUserData();
  },
  computed: {
    getUserData() {
      return this.$store.getters.userData;
    },
    getTotalUsersCount() {
      const users = this.getUserData;

      return Object.keys(users).length;
    },
    getCountVisit() {
      const users = this.getUserData.filter((user) => user.data.visit === "1");

      return Object.keys(users).length;
    },

    sortedUserData() {
      const sortedData = this.getUserData.slice().sort((a, b) => {
        const nameA = a.data.name.toUpperCase();
        const nameB = b.data.name.toUpperCase();
        return nameA.localeCompare(nameB);
      });
      return sortedData;
    },
  },
  methods: {
    loadUserData() {
      this.$store.dispatch("loadUserData");
    },
    getVisitColor(visit) {
      if (visit == "1") {
        return "green";
      } else if (visit == "2") {
        return "yellow";
      } else if (visit == "3") {
        return "red";
      } else {
        return "primary";
      }
    },
  },
};
</script>

<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card class="mt-5 ml-5 mr-5 mb-5" rounded="xl" variant="flat">
        <v-card-title>
          Человек заполнило форму - {{ this.getTotalUsersCount }}
        </v-card-title>

        <v-card-title> Точно придут - {{ this.getCountVisit }} </v-card-title>
      </v-card>

      <v-card
        class="mt-5 ml-5 mr-5 mb-5"
        v-for="userData in this.sortedUserData"
        :key="userData.name"
        rounded="xl"
        
      >
        <v-card-title>
          {{ userData.data.name }}
          <v-icon size="60" :color="getVisitColor(userData.data.visit)"
            >mdi-circle-small</v-icon
          >
        </v-card-title>
        <v-list class="pl-15" v-for="userAlco in userData.data.alco">
          <v-icon class="pr-5" size="20">mdi-cup-outline</v-icon>{{ userAlco }}
        </v-list>
        <div class="pa-0" v-if="userData.data.handleChoises.length > 0">
          <v-card-text class="pa-0 pl-5 pt-5"> Особый выбор </v-card-text>
          <v-card-text class="pa-0 pl-5 pt-5 pb-3">
            {{ userData.data.handleChoises }}
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>

  <Snackbar />
</template>

<style>
.yandex-container {
  height: 400px;
}

[class*="copyrights-pane"] {
  display: none !important;
}

[class*="ground-pane"] {
  filter: grayscale(1);
}
</style>
