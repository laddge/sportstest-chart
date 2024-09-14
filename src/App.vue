<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRecordStore } from './stores/recordStore'
import Table from './components/Table.vue'
import Chart from './components/Chart.vue'

const { gender } = storeToRefs(useRecordStore())
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
      <div class="ml-auto print:hidden">
        <button onclick="window.print()" class="border px-2">印刷</button>
      </div>
    </div>
    <div  v-if="!gender" class="text-red-900 bg-red-100 font-bold p-2 rounded-sm mt-2">
      性別を選択してください
    </div>
    <Table />
    <Chart />
  </div>
</template>

<style>
  @page {
    margin: 0;
    size: A4 portrait;
  }
</style>
