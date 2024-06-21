<template>
  <v-container>
    <div class="d-flex justify-center mb-6 header-font-orlando">BINGO</div>
    <div class="d-flex justify-center header-font decriase-font-bingo">
      cобрал строку/столбец - кричи бинго !!!
    </div>
    <v-data-table :items="items" :headers="headers">
      <template v-slot:item="{ item }">
        <tr class="large-row header-font-small">
          <td
            v-for="(header, index) in headers"
            :key="index"
            class="large-cell"
          >
            <v-card
              @click="handleClick(item[header.value])"
              :color="
                isCardClicked(item[header.value])
                  ? 'purple-accent-3'
                  : 'grey-darken-4'
              "
              variant="tonal"
              class="full-size-card d-flex align-center header-font-small"
            >
              <div class="pl-2 pr-1">
                {{ item[header.value] }}
              </div>
            </v-card>
          </td>
        </tr>
      </template>
      <template #bottom></template>
    </v-data-table>
  </v-container>
</template>
<script>

import Cookies from "js-cookie";
import "../assets/main.css";

const gameKey = import.meta.env.VITE_APP_GAME_KEY;

export default {
  data() {
    return {
      win: 0,
      clickedCards: this.getClickedCardsFromCookies(),
      headers: [
        { text: "Column 1", value: "col1" },
        { text: "Column 2", value: "col2" },
        { text: "Column 3", value: "col3" },
        { text: "Column 4", value: "col4" },
        { text: "Column 5", value: "col5" },
      ],
      items: [
        {
          col1: "Author A1",
          col2: "Author B1",
          col3: "Author C1",
          col4: "Author D1",
          col5: "Author E1",
        },
        {
          col1: "Author A2",
          col2: "Author B2",
          col3: "Author C2",
          col4: "Author D2",
          col5: "Author E2",
        },
        {
          col1: "Author A3",
          col2: "Author B3",
          col3: "Author C3",
          col4: "Author D3",
          col5: "Author E3",
        },
        {
          col1: "Author A4",
          col2: "Author B4",
          col3: "Author C4",
          col4: "Author D4",
          col5: "Author E4",
        },
        {
          col1: "Author A5",
          col2: "Author B5",
          col3: "Author C5",
          col4: "Author D5",
          col5: "Author E5",
        },
      ],
    };
  },
  mounted() {
    this.clickedCards = this.getClickedCardsFromCookies();
  },
  methods: {
    handleClick(item) {
      if (this.isCardClicked(item)) {
        const idx = this.clickedCards.indexOf(item);
        this.clickedCards.splice(idx, 1);
      } else {
        this.clickedCards.push(item);
      }
      this.saveClickedCardsToCookies();
      this.checkKey();
    },
    isCardClicked(item) {
      return this.clickedCards.includes(item);
    },
    saveClickedCardsToCookies() {
      Cookies.set("clickedCards", JSON.stringify(this.clickedCards), {
        expires: 7,
      });
    },
    getClickedCardsFromCookies() {
      const clickedCards = Cookies.get("clickedCards");
      return clickedCards ? JSON.parse(clickedCards) : [];
    },
    checkKey() {
      const sortedUserKey = this.clickedCards
        .map((e) => e.toLocaleLowerCase())
        .sort()
        .toString();

      if (gameKey == sortedUserKey) {
        console.log("Победа");
        this.win = 1;
      } else {
        console.log("Не набрано");
        this.win = 0;
      }

      console.log(this.win);
    },
  },
};
</script>

<style scoped>
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td,
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border-bottom: none;
}

.large-row {
  height: 80px;
}

.large-cell {
  padding: 4px !important;
}

.full-size-card {
  width: 100%;
  height: 100%;
  padding: 0 !important;
  margin: 0 !important;
}

@media (max-width: 359px) {
  .full-size-card {
    /* Например, уменьшим высоту карты на мобильных экранах */
    width: 50px;
  }

  .header-font-small {
    font-size: 10px; /* Пример уменьшения размера шрифта */
  }
}
</style>
