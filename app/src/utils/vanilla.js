export const grammaticalTypes = {
  es: {
    adj: "adjetivo",
    adv: "adverbio",
    art: "artículo",
    aux: "verbo auxiliar",
    conj: "conjunción",
    interj: "interjección",
    n: "sustantivo",
    parti: "partícula",
    prep: "preposición",
    pron: "pronombre",
    vb: "verbo",
  },
  en: {
    adj: "adjective",
    adv: "adverb",
    art: "article",
    aux: "auxiliary verb",
    conj: "conjunction",
    interj: "interjection",
    n: "noun",
    parti: "particle",
    prep: "preposition",
    pron: "pronoun",
    vb: "verb",
  },
}

export const noOp = () => {}

export const slug = (str) => {
  let newStr = str
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
  const to = "aaaaaeeeeeiiiiooooouuuunc------"

  newStr = newStr.replace(/^\s+|\s+$/g, "").toLowerCase()

  for (let i = 0, l = from.length; i < l; i += 1) {
    newStr = newStr.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  newStr = newStr
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // coll  apse dashes

  return newStr
}

export const generateGridAreas = (rows, columns) => {
  const areas = []
  for (let i = 0; i < columns; i += 1) {
    const row = []
    for (let j = 0; j < rows; j += 1) {
      row.push(`x${j}-y${i}`)
    }
    areas.push(`'${row.join(" ")}'`)
  }
  return areas.join(" ")
}

export const lookFor = (string, array) => {
  return array.some((e) => e === string)
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const scrollTo = (elementId) => {
  const element = document.getElementById(`${elementId}`)
  if (element !== null) {
    window.scrollTo({
      top: element.offsetTop - 60,
    })
  }
}

export const kanaOrKanji = (char) => {
  const hiragana = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "ざ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
    "ゃ",
    "ゅ",
    "ょ",
    "っ",
  ]
  const katakana = [
    "ア",
    "イ",
    "ウ",
    "エ",
    "オ",
    "カ",
    "キ",
    "ク",
    "ケ",
    "コ",
    "サ",
    "シ",
    "ス",
    "セ",
    "ソ",
    "タ",
    "チ",
    "ツ",
    "テ",
    "ト",
    "ナ",
    "ニ",
    "ヌ",
    "ネ",
    "ノ",
    "ハ",
    "ヒ",
    "フ",
    "ヘ",
    "ホ",
    "マ",
    "ミ",
    "ム",
    "メ",
    "モ",
    "ヤ",
    "ユ",
    "ヨ",
    "ラ",
    "リ",
    "ル",
    "レ",
    "ロ",
    "ワ",
    "ヲ",
    "ン",
    "ガ",
    "ギ",
    "グ",
    "ゲ",
    "ゴ",
    "ザ",
    "ジ",
    "ズ",
    "ゼ",
    "ゾ",
    "ダ",
    "ヂ",
    "ヅ",
    "デ",
    "ド",
    "バ",
    "ビ",
    "ブ",
    "ベ",
    "ボ",
    "パ",
    "ピ",
    "プ",
    "ペ",
    "ポ",
    "ャ",
    "ュ",
    "ョ",
    "ァ",
    "ィ",
    "ゥ",
    "ェ",
    "ォ",
    "ヴ",
  ]
  if (hiragana.some((e) => e === char)) return "hiragana"
  if (katakana.some((e) => e === char)) return "katakana"
  return "kanji"
}

export const isRomaji = (str) => {
  const romaji =
    "a i u e o ka ki ku ke ko sa shi si su se so ta chi ti tsu tu te to na ni nu ne no ha hi fu hu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo nn ga gi gu ge go za ji zi zu ze zo da di du de do ba bi bu be bo pa pi pu pe po kya kyu kyo sha shu sho cha chu cho nya nyu nyo hya hyu hyo mya myu myo rya ryu ryo gya gyu gyo ja ju jo dya dyu dyo bya byu byo pya pyu pyo wi we wo va vi vu ve vo she che tsa tsi tse tso ti tu fa fi fe fo je di du ye vya vyu vyo fyu"
  return romaji.includes(str)
}

export const shuffleArray = (arr) => {
  let currentIndex = arr.length
  let temp
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temp = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temp
  }

  return arr
}
