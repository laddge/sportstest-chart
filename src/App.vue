<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRecordStore } from './stores/recordStore'
const {
    gender,
    result,
    resultScores,
    uecAve,
    uecAveScores,
    jpnAve,
    jpnAveScores
  } = storeToRefs(useRecordStore())
const age = ref(18)
</script>

<template>
  <div class="max-w-[1024px] mx-auto p-6 print:p-8 print:text-xs">
    <div class="flex items-center">
      <div>
        4月1日時点での年齢
        <input type="number" v-model="age" class="border w-20 text-right mx-1 print:hidden" />
        <span class="hidden print:inline-block w-8 text-right">{{ age }}</span>
        歳
      </div>
      <div class="ml-4 flex items-center">
        性別
        <div class="print:hidden ml-2 flex items-center">
          <label class="cursor-pointer flex items-center">
            <input type="radio" value="m" v-model="gender" class="mr-1" />
            男
          </label>
          <label class="cursor-pointer flex items-center ml-2">
            <input type="radio" value="f" v-model="gender" class="mr-1" />
            女
          </label>
        </div>
        <div class="hidden print:flex items-center ml-2">
          (
          <span :class="gender == 'm' ? 'inline-block w-[1.5em] h-[1.5em] text-center border border-black rounded-full' : ''">男</span>
          ・
          <span :class="gender == 'f' ? 'inline-block w-[1.5em] h-[1.5em] text-center border border-black rounded-full' : ''">女</span>
          )
        </div>
      </div>
    </div>
    <div  v-if="!gender" class="text-red-900 bg-red-100 font-bold p-2 rounded-sm mt-2">
      性別を選択してください
    </div>
    <div class="overflow-auto mt-4">
      <table class="border-y border-black w-full">
        <caption class="mb-2">
          表1: 体力テストの結果
        </caption>
        <thead>
          <tr class="border-y border-black">
            <th></th>
            <th></th>
            <th class="p-1">握力<br />(kg)</th>
            <th class="p-1">上体起こし<br />(回)</th>
            <th class="p-1">長座体前屈<br />(cm)</th>
            <th class="p-1">反復横とび<br />(点)</th>
            <th class="p-1">持久走<br />(分:秒)</th>
            <th class="p-1">50m走<br />(秒)</th>
            <th class="p-1">立ち幅とび<br />(cm)</th>
            <th class="p-1">ﾊﾝﾄﾞﾎﾞｰﾙ投げ<br />(m)</th>
            <th class="p-1">総合点<br />(点)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="2" class="text-nowrap p-2">今回の結果</th>
            <th class="text-nowrap p-1">記録</th>
            <td v-for="n in 9" :key="n" class="px-1 text-center">
              <input v-model="result[n - 1]" class="w-full min-w-10 text-center border print:hidden" :disabled="!gender" />
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
              <input v-model="uecAve[n - 1]" class="w-full text-center border print:hidden" :disabled="!gender" />
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
              <input v-model="jpnAve[n - 1]" class="w-full text-center border print:hidden" :disabled="!gender" />
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
  </div>
</template>

<style>
  @page {
    margin: 0;
    size: A4 portrait;
  }
</style>
