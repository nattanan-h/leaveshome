<template>
  <div>
    <h1>{{ name }}</h1>
    <div class="chart">
      <BarChart :data="barChartData" :options="barChartOptions" :height="150" />
    </div>
    <v-row>
      <v-col cols="6">
        <h2>Highlight</h2>
        <v-window v-model="onboarding1" show-arrows="hover">
          <v-window-item v-for="n in highlight" :key="`card-${n}`">
            <v-card
              elevation="2"
              height="350"
              class="d-flex justify-center ma-2 pa-3"
            >
              <v-img
                src="https://picsum.photos/500"
                max-width="300"
                max-height="350"
              ></v-img>
              <div class="d-flex flex-column">
                <v-card-subtitle>Subtitle</v-card-subtitle>
                <v-card-text>
                  {{ shortcontent.substring(0, 200) + ' ...' }}
                </v-card-text>
                <v-carc-action class="d-flex justify-end mt-15">
                  <v-btn text> more</v-btn>
                </v-carc-action>
              </div>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
      <v-col cols="6">
        <h2>Trends</h2>
        <v-window v-model="onboarding2" show-arrows="hover">
          <v-window-item v-for="n in trends" :key="n">
            <v-card
              elevation="2"
              height="350"
              class="d-flex justify-center ma-2 pa-3"
            >
              <v-img
                src="https://picsum.photos/500"
                max-width="300"
                max-height="350"
              ></v-img>
              <div class="d-flex flex-column">
                <v-card-subtitle>Subtitle</v-card-subtitle>
                <v-card-text>
                  {{ shortcontent.substring(0, 200) + ' ...' }}
                </v-card-text>
                <v-carc-action class="d-flex justify-end mt-15">
                  <v-btn text> more</v-btn>
                </v-carc-action>
              </div>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BarChart from '../components/global/BarChart.vue'
export default {
  components: { BarChart },
  data() {
    return {
      name: 'Homepage',
      highlight: ['blog1', 'blog2', 'blog3', 'blog4', 'blog5'],
      trends: ['new1', 'new2', 'new3'],
      onboarding: 0,
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      shortcontent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris blandit, venenatis ligula at, faucibus orci. Phasellus dolor odio, tempus vel mi et, efficitur tempor dolor. Donec eu lacinia ligula, vel sagittis nisl. Proin convallis ornare mi ac laoreet. Quisque eu nulla ultrices elit pellentesque rhoncus sit amet sed odio. Quisque id dolor tortor. Sed rutrum leo non dignissim tincidunt. Vestibulum et placerat magna. Praesent in tellus arcu.',
      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03',
        ],
        datasets: [
          {
            label: 'Visualizaciones',
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 255, 0, 1)',
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Google analytics data',
          fontSize: 24,
          fontColor: '#6b7280',
        },
        tooltips: {
          backgroundColor: '#17BF62',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    }
  },
}
</script>

<style>
.slide {
  background-color: azure;
}
.slide-content {
  color: black;
}
</style>
