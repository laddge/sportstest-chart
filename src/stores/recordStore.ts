import { ref, computed, Ref } from 'vue'
import { defineStore } from 'pinia'

type Array9<T> = [T, T, T, T, T, T, T, T, T]
type Records = Array9<string>

const computeScores = (gender: Ref<'m'|'f'|null>, records: Ref<Records>) => {
  const scores: Records = ['', '', '', '', '', '', '', '', '']
  if (gender.value == null) return scores

  // 握力
  if (/^\d+(\.\d+)?$/.test(records.value[0])) {
    const record = Number(records.value[0])
    if (record >= { m: 56, f: 36 }[gender.value]) {
      scores[0] = '10'
    } else if (record >= { m: 51, f: 33 }[gender.value]) {
      scores[0] = '9'
    } else if (record >= { m: 47, f: 30 }[gender.value]) {
      scores[0] = '8'
    } else if (record >= { m: 43, f: 28 }[gender.value]) {
      scores[0] = '7'
    } else if (record >= { m: 38, f: 25 }[gender.value]) {
      scores[0] = '6'
    } else if (record >= { m: 33, f: 23 }[gender.value]) {
      scores[0] = '5'
    } else if (record >= { m: 28, f: 20 }[gender.value]) {
      scores[0] = '4'
    } else if (record >= { m: 23, f: 17 }[gender.value]) {
      scores[0] = '3'
    } else if (record >= { m: 18, f: 14 }[gender.value]) {
      scores[0] = '2'
    } else {
      scores[0] = '1'
    }
  }

  // 上体起こし
  if (/^\d+(\.\d+)?$/.test(records.value[1])) {
    const record = Number(records.value[1])
    if (record >= { m: 35, f: 29 }[gender.value]) {
      scores[1] = '10'
    } else if (record >= { m: 33, f: 26 }[gender.value]) {
      scores[1] = '9'
    } else if (record >= { m: 30, f: 23 }[gender.value]) {
      scores[1] = '8'
    } else if (record >= { m: 27, f: 20 }[gender.value]) {
      scores[1] = '7'
    } else if (record >= { m: 25, f: 18 }[gender.value]) {
      scores[1] = '6'
    } else if (record >= { m: 22, f: 15 }[gender.value]) {
      scores[1] = '5'
    } else if (record >= { m: 19, f: 13 }[gender.value]) {
      scores[1] = '4'
    } else if (record >= { m: 16, f: 11 }[gender.value]) {
      scores[1] = '3'
    } else if (record >= { m: 13, f: 8 }[gender.value]) {
      scores[1] = '2'
    } else {
      scores[1] = '1'
    }
  }

  // 長座体前屈
  if (/^\d+(\.\d+)?$/.test(records.value[2])) {
    const record = Number(records.value[2])
    if (record >= { m: 64, f: 63 }[gender.value]) {
      scores[2] = '10'
    } else if (record >= { m: 58, f: 58 }[gender.value]) {
      scores[2] = '9'
    } else if (record >= { m: 53, f: 54 }[gender.value]) {
      scores[2] = '8'
    } else if (record >= { m: 49, f: 50 }[gender.value]) {
      scores[2] = '7'
    } else if (record >= { m: 44, f: 45 }[gender.value]) {
      scores[2] = '6'
    } else if (record >= { m: 39, f: 40 }[gender.value]) {
      scores[2] = '5'
    } else if (record >= { m: 33, f: 35 }[gender.value]) {
      scores[2] = '4'
    } else if (record >= { m: 28, f: 30 }[gender.value]) {
      scores[2] = '3'
    } else if (record >= { m: 21, f: 22 }[gender.value]) {
      scores[2] = '2'
    } else {
      scores[2] = '1'
    }
  }

  // 反復横とび
  if (/^\d+(\.\d+)?$/.test(records.value[3])) {
    const record = Number(records.value[3])
    if (record >= { m: 63, f: 53 }[gender.value]) {
      scores[3] = '10'
    } else if (record >= { m: 60, f: 50 }[gender.value]) {
      scores[3] = '9'
    } else if (record >= { m: 56, f: 48 }[gender.value]) {
      scores[3] = '8'
    } else if (record >= { m: 53, f: 45 }[gender.value]) {
      scores[3] = '7'
    } else if (record >= { m: 49, f: 42 }[gender.value]) {
      scores[3] = '6'
    } else if (record >= { m: 45, f: 39 }[gender.value]) {
      scores[3] = '5'
    } else if (record >= { m: 41, f: 36 }[gender.value]) {
      scores[3] = '4'
    } else if (record >= { m: 37, f: 32 }[gender.value]) {
      scores[3] = '3'
    } else if (record >= { m: 30, f: 27 }[gender.value]) {
      scores[3] = '2'
    } else {
      scores[3] = '1'
    }
  }

  // 持久走
  if (/^\d+:\d+$/.test(records.value[4])) {
    const record = Number(records.value[4].split(':')[0]) * 60 + Number(records.value[4].split(':')[1])
    if (record <= { m: 299, f: 229 }[gender.value]) {
      scores[4] = '10'
    } else if (record <= { m: 316, f: 242 }[gender.value]) {
      scores[4] = '9'
    } else if (record <= { m: 333, f: 259 }[gender.value]) {
      scores[4] = '8'
    } else if (record <= { m: 355, f: 277 }[gender.value]) {
      scores[4] = '7'
    } else if (record <= { m: 382, f: 296 }[gender.value]) {
      scores[4] = '6'
    } else if (record <= { m: 410, f: 318 }[gender.value]) {
      scores[4] = '5'
    } else if (record <= { m: 450, f: 342 }[gender.value]) {
      scores[4] = '4'
    } else if (record <= { m: 499, f: 374 }[gender.value]) {
      scores[4] = '3'
    } else if (record <= { m: 560, f: 417 }[gender.value]) {
      scores[4] = '2'
    } else {
      scores[4] = '1'
    }
  }

  // 50m走
  if (/^\d+\.\d+$/.test(records.value[5])) {
    const record = Number(records.value[5])
    if (record <= { m: 6.6, f: 7.7 }[gender.value]) {
      scores[5] = '10'
    } else if (record <= { m: 6.8, f: 8.0 }[gender.value]) {
      scores[5] = '9'
    } else if (record <= { m: 7.0, f: 8.3 }[gender.value]) {
      scores[5] = '8'
    } else if (record <= { m: 7.2, f: 8.6 }[gender.value]) {
      scores[5] = '7'
    } else if (record <= { m: 7.5, f: 8.9 }[gender.value]) {
      scores[5] = '6'
    } else if (record <= { m: 7.9, f: 9.3 }[gender.value]) {
      scores[5] = '5'
    } else if (record <= { m: 8.4, f: 9.8 }[gender.value]) {
      scores[5] = '4'
    } else if (record <= { m: 9.0, f: 10.3 }[gender.value]) {
      scores[5] = '3'
    } else if (record <= { m: 9.7, f: 11.2 }[gender.value]) {
      scores[5] = '2'
    } else {
      scores[5] = '1'
    }
  }

  // 立ち幅とび
  if (/^\d+(\.\d+)?$/.test(records.value[6])) {
    const record = Number(records.value[6])
    if (record >= { m: 265, f: 210 }[gender.value]) {
      scores[6] = '10'
    } else if (record >= { m: 254, f: 200 }[gender.value]) {
      scores[6] = '9'
    } else if (record >= { m: 242, f: 190 }[gender.value]) {
      scores[6] = '8'
    } else if (record >= { m: 230, f: 179 }[gender.value]) {
      scores[6] = '7'
    } else if (record >= { m: 218, f: 168 }[gender.value]) {
      scores[6] = '6'
    } else if (record >= { m: 203, f: 157 }[gender.value]) {
      scores[6] = '5'
    } else if (record >= { m: 188, f: 145 }[gender.value]) {
      scores[6] = '4'
    } else if (record >= { m: 170, f: 132 }[gender.value]) {
      scores[6] = '3'
    } else if (record >= { m: 150, f: 118 }[gender.value]) {
      scores[6] = '2'
    } else {
      scores[6] = '1'
    }
  }

  // ハンドボール投げ
  if (/^\d+(\.\d+)?$/.test(records.value[7])) {
    const record = Number(records.value[7])
    if (record >= { m: 37, f: 23 }[gender.value]) {
      scores[7] = '10'
    } else if (record >= { m: 34, f: 20 }[gender.value]) {
      scores[7] = '9'
    } else if (record >= { m: 31, f: 18 }[gender.value]) {
      scores[7] = '8'
    } else if (record >= { m: 28, f: 16 }[gender.value]) {
      scores[7] = '7'
    } else if (record >= { m: 25, f: 14 }[gender.value]) {
      scores[7] = '6'
    } else if (record >= { m: 22, f: 12 }[gender.value]) {
      scores[7] = '5'
    } else if (record >= { m: 19, f: 11 }[gender.value]) {
      scores[7] = '4'
    } else if (record >= { m: 16, f: 10 }[gender.value]) {
      scores[7] = '3'
    } else if (record >= { m: 13, f: 8 }[gender.value]) {
      scores[7] = '2'
    } else {
      scores[7] = '1'
    }
  }

  // 総合点
  if (/^\d+(\.\d+)?$/.test(records.value[8])) {
    const record = Number(records.value[8])
    if (record >= 65) {
      scores[8] = 'A'
    } else if (record >= 54) {
      scores[8] = 'B'
    } else if (record >= 43) {
      scores[8] = 'C'
    } else if (record >= 31) {
      scores[8] = 'D'
    } else {
      scores[8] = 'E'
    }
  }
  return scores
}

export const useRecordStore = defineStore('record', () => {
  const age = ref<number>(18)
  const gender = ref<'m'|'f'|null>(null)
  const result = ref<Records>(['', '', '', '', '', '', '', '', ''])
  const resultScores = computed(() => computeScores(gender, result))
  const uecAve = ref<Records>(['', '', '', '', '', '', '', '', ''])
  const uecAveScores = computed(() => computeScores(gender, uecAve))
  const jpnAve = ref<Records>(['', '', '', '', '', '', '', '', ''])
  const jpnAveScores = computed(() => computeScores(gender, jpnAve))
  
  return { age, gender, result, resultScores, uecAve, uecAveScores, jpnAve, jpnAveScores }
}, { persist: true })
