<template>
  <main class="Housing">
    <section>
      <h1 class="section-heading">موصافات الشقق</h1>
      <p class="section-par">3 غرف, مطبخ , حمام</p>
    </section>
    <v-tabs v-model="tab" centered color="#d29f70">
      <v-tab :href="`#tab-1`">بلوك 1</v-tab>
      <v-tab :href="`#tab-2`">بلوك 2</v-tab>
      <v-tab :href="`#tab-3`">بلوك 3</v-tab>
      <v-tab :href="`#tab-4`">بلوك 4</v-tab>

      <v-tab-item value='tab-1'>
        <v-container class='block'>
          <h3>معلومات عن البلوك رقم 1</h3>
          <div class="card-cont">
            <v-card v-for="i in block1" :key="`1-${i.num}`">
              <img :src="getImgUrl(i.num)">
              <v-card-text>
                <h2>الشقة رقم {{i.num}}</h2>
                <div>
                  المساحة - <span>{{ i.area }} <b>م²</b></span>
                </div>
                <div>
                  سعر المتر - <span>{{ i.meter }} ج</span>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-tab-item>

      <v-tab-item value='tab-2'>
        <v-container class='block'>
          <h3>معلومات عن البلوك رقم 2</h3>
        </v-container>
      </v-tab-item>

      <v-tab-item value='tab-3'>
        <v-container class='block'>
          <h3>معلومات عن البلوك رقم 3</h3>
        </v-container>
      </v-tab-item>

      <v-tab-item value='tab-4'>
        <v-container class='block'>
          <h3>معلومات عن البلوك رقم 4</h3>
        </v-container>
      </v-tab-item>

    </v-tabs>
  </main>
</template>

<script>
import json from '../json/housing.json'
export default {
  data() {
    return {
      block1: json.Block1,
      block2: json.Block2,
      block3: json.Block3,
      block4: json.Block4,
      tab: 0
    }
  },

  methods: {
    getImgUrl(pic) {
      let images = require.context('../assets/img/', false, /\.jpeg$/)
      return images('./' + pic + ".jpeg")
    }
  },
}
</script>

<style lang="scss">
@import '../assets/style/conf';

.Housing {

  section {
    margin: 100px 0;
  }

  .v-tabs {
    max-width: 1000px !important;
    margin: 50px auto;

    .v-tabs-bar {
      margin: auto;
      max-width: 500px;
      background: transparent !important;

      .v-tab {
        margin: 0 auto !important;
        width: 100%;
        font-size: 20px;
        font-weight: 500;
      }
    }

    .v-window-item {
      background: $bg !important;
    }

    .block {
      text-align: center;

      h3 {
        margin: 50px auto;
      }

      .card-cont{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;

        .v-card {

          img {
            max-width: 100%;
          }

          .v-card__text {

            h2 {
              font-size: 2em;
              margin: 30px 0;
              margin-bottom: 60px;
            }

            div {
              font-size: 1.5em;
              margin: 20px 0;

              span {
                color: $prim;
              }
            }
          }
        }
      }
    }
  }
}
</style>