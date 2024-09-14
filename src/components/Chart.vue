<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRecordStore } from '../stores/recordStore'
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Legend, LineElement, PointElement, RadialLinearScale } from 'chart.js'

ChartJS.register(Legend, LineElement, PointElement, RadialLinearScale)

const { resultScores, uecAveScores, jpnAveScores } = storeToRefs(useRecordStore())
const chartData = computed(() => {
  return {
    labels: [
      '握力(筋力)',
      ['上体起こし', '(筋力・筋持久力)'],
      ['長座体前屈', '(柔軟性)'],
      ['反復横とび', '(敏捷性)'],
      '持久走(全身持久力)',
      ['50m走', '(スピード)'],
      ['立ち幅とび', '(筋パワー)'],
      ['ﾊﾝﾄﾞﾎﾞｰﾙ投げ', '(巧緻性・筋パワー)'],
    ],
    datasets: [
      {
        label: '今回の結果',
        data: resultScores.value.slice(0, 8).map(n => n ? Number(n) : NaN),
        borderColor: 'black',
        borderWidth: 2,
        pointStyle: 'circle',
        pointBackgroundColor: 'black',
      },
      {
        label: '電通大平均',
        data: uecAveScores.value.slice(0, 8).map(n => n ? Number(n) : NaN),
        borderColor: 'gray',
        borderWidth: 2,
        borderDash: [15, 5],
        pointStyle: 'triangle',
        pointBackgroundColor: 'gray',
      },
      {
        label: '全国平均',
        data: jpnAveScores.value.slice(0, 8).map(n => n ? Number(n) : NaN),
        borderColor: 'darkgray',
        borderWidth: 2,
        borderDash: [5, 5],
        pointStyle: 'rectRot',
        pointBackgroundColor: 'darkgray',
      },
    ],
  }
})
const chartOptions = {
  plugins: {
    legend: {
      labels: {
        font: {
          weight: 'bold',
        },
      },
    },
  },
  scales: {
    r: {
      min: 0,
      max: 10,
      step: 1,
      pointLabels: {
        font: {
          weight: 'bold',
        },
      },
    },
  },
} as const
</script>

<template>
  <div class="overflow-auto mt-8">
    <div class="w-[150mm] mx-auto">
      <Radar :data="chartData" :options="chartOptions" />
      <div class="text-center">図1: レーダーチャート</div>
    </div>
  </div>
</template>
