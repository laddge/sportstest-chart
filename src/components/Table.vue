<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRecordStore } from '../stores/recordStore'

const {
    gender,
    result,
    resultScores,
    uecAve,
    uecAveScores,
    jpnAve,
    jpnAveScores,
  } = storeToRefs(useRecordStore())
</script>

<template>
  <div class="overflow-auto mt-4">
    <table class="border-y border-black w-full">
      <caption class="mb-2">
        表1: 体力テストの結果
      </caption>
      <thead>
        <tr class="border-y border-black">
          <th></th>
          <th></th>
          <th class="p-1 min-w-16">握力<br />(kg)</th>
          <th class="p-1 min-w-16">上体起こし<br />(回)</th>
          <th class="p-1 min-w-16">長座体前屈<br />(cm)</th>
          <th class="p-1 min-w-16">反復横とび<br />(点)</th>
          <th class="p-1 min-w-16">持久走<br />(分:秒)</th>
          <th class="p-1 min-w-16">50m走<br />(秒)</th>
          <th class="p-1 min-w-16">立ち幅とび<br />(cm)</th>
          <th class="p-1 min-w-16">ﾊﾝﾄﾞﾎﾞｰﾙ投げ<br />(m)</th>
          <th class="p-1 min-w-16">総合点<br />(点)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowspan="2" class="text-nowrap p-2">今回の結果</th>
          <th class="text-nowrap p-1">記録</th>
          <td v-for="n in 9" :key="n" class="px-1 text-center">
            <input v-model="result[n - 1]" class="input input-bordered input-sm h-6 input-primary w-full text-center border print:hidden" :disabled="!gender" />
            <span class="hidden print:inline">{{ result[n - 1] }}</span>
          </td>
        </tr>
        <tr>
          <th class="text-nowrap p-1">判定</th>
          <td v-for="n in 9" :key="n" class="text-center">{{ resultScores[n - 1] }}</td>
        </tr>
        <tr>
          <th rowspan="2" class="text-nowrap p-2">電通大平均</th>
          <th class="text-nowrap p-1">記録</th>
          <td v-for="n in 9" :key="n" class="px-1 text-center">
            <input v-model="uecAve[n - 1]" class="input input-bordered input-sm h-6 input-primary w-full text-center border print:hidden" :disabled="!gender" />
            <span class="hidden print:inline">{{ uecAve[n - 1] }}</span>
          </td>
        </tr>
        <tr>
          <th class="text-nowrap p-1">判定</th>
          <td v-for="n in 9" :key="n" class="text-center">{{ uecAveScores[n - 1] }}</td>
        </tr>
        <tr>
          <th rowspan="2" class="text-nowrap p-2">全国平均</th>
          <th class="text-nowrap p-1">記録</th>
          <td v-for="n in 9" :key="n" class="px-1 text-center">
            <input v-model="jpnAve[n - 1]" class="input input-bordered input-sm h-6 input-primary w-full text-center border print:hidden" :disabled="!gender" />
            <span class="hidden print:inline">{{ jpnAve[n - 1] }}</span>
          </td>
        </tr>
        <tr>
          <th class="text-nowrap p-1">判定</th>
          <td v-for="n in 9" :key="n" class="text-center">{{ jpnAveScores[n - 1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  @media print {
    th {
      font-weight: normal;
    }
  }
</style>
