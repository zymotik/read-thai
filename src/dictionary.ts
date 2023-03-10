/*
  Special thanks to [@Hiswe](https://github.com/Hiswe) for the Thai dictionary you
  see here. It is sourced from his app [Thailpha](https://github.com/Hiswe/thailpha).
*/

export type DictionaryEntry = {
  id: string;
  letter: string;
  thai: string;
  meaning?: string;
  obsolete?: boolean;
  rare?: boolean;
  rtgs: string;
  pronunciation?:
    | {
        initial: string;
        final: string;
      }
    | string;
  initialConsonant?: {
    low?: string;
    mid?: string;
    high?: string;
  };
  class?: LetterClass;
  similar: string[];
  isConsonant?: boolean;
  hasSimilar: boolean;
  hasVariant: boolean;
  variant: string[];
  longMeaning?: string;
  longId: string;
  isToneMark?: boolean;
  isVowel?: boolean;
  isGlide?: boolean;
  isShort?: boolean;
  isLong?: boolean;
  isDiphtong?: boolean;
  isNumber?: boolean;
  isMiscellanous?: boolean;
  ipa?: string;
};

export enum LetterClass {
  High = "high",
  Middle = "mid",
  Low = "low",
}

const dictionary: DictionaryEntry[] = [
  {
    letter: "ก",
    thai: "ก ไก่",
    rtgs: "ko kai",
    meaning: "chicken",
    pronunciation: {
      initial: "k",
      final: "k",
    },
    class: LetterClass.Middle,
    similar: ["c-22", "c-12", "c-13", "c-32", "c-14", "c-15", "m-2"],
    id: "c-1",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "kai: chicken",
    longId: "c-ko-kai",
  },
  {
    letter: "ข",
    thai: "ข ไข่",
    rtgs: "kho khai",
    meaning: "egg",
    pronunciation: {
      initial: "kh",
      final: "k",
    },
    class: LetterClass.High,
    similar: ["c-3", "c-10", "c-11", "c-6"],
    id: "c-2",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "khai: egg",
    longId: "c-kho-khai",
  },
  {
    letter: "ฃ",
    thai: "ฃ ขวด",
    rtgs: "kho khuat",
    meaning: "bottle",
    pronunciation: {
      initial: "kh",
      final: "k",
    },
    class: LetterClass.High,
    obsolete: true,
    similar: ["c-2", "c-10", "c-11", "c-6"],
    id: "c-3",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "khuat: bottle",
    longId: "c-kho-khuat",
  },
  {
    letter: "ค",
    thai: "ค ควาย",
    rtgs: "kho khwai",
    meaning: "water buffalo",
    pronunciation: {
      initial: "kh",
      final: "k",
    },
    class: LetterClass.Low,
    similar: ["c-20", "c-38", "c-5", "c-21"],
    id: "c-4",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "khwai: water buffalo",
    longId: "c-kho-khwai",
  },
  {
    letter: "ฅ",
    thai: "ฅ คน",
    rtgs: "kho khon",
    meaning: "person",
    pronunciation: {
      initial: "kh",
      final: "k",
    },
    class: LetterClass.Low,
    obsolete: true,
    similar: ["c-21", "c-4", "c-20", "c-38"],
    id: "c-5",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "khon: person",
    longId: "c-kho-khon",
  },
  {
    letter: "ฆ",
    thai: "ฆ ระฆัง",
    rtgs: "kho ra-khang",
    meaning: "bell",
    pronunciation: {
      initial: "kh",
      final: "k",
    },
    class: LetterClass.Low,
    similar: ["c-3", "c-11", "c-10", "c-2"],
    id: "c-6",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ra-khang: bell",
    longId: "c-kho-ra-khang",
  },
  {
    letter: "ง",
    thai: "ง งู",
    rtgs: "ngo ngu",
    meaning: "snake",
    pronunciation: {
      initial: "ng",
      final: "ng",
    },
    class: LetterClass.Low,
    id: "c-7",
    isConsonant: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "ngu: snake",
    longId: "c-ngo-ngu",
  },
  {
    letter: "จ",
    thai: "จ จาน",
    rtgs: "jo jan",
    meaning: "plate",
    pronunciation: {
      initial: "ch",
      final: "t",
    },
    class: LetterClass.Middle,
    similar: ["c-43", "c-9", "c-44"],
    id: "c-8",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "jan: plate",
    longId: "c-jo-jan",
  },
  {
    letter: "ฉ",
    thai: "ฉ ฉิ่ง",
    rtgs: "cho ching",
    meaning: "cymbals",
    pronunciation: {
      initial: "ch",
      final: "—",
    },
    class: LetterClass.High,
    similar: ["c-43", "c-8", "c-44"],
    id: "c-9",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ching: cymbals",
    longId: "c-cho-ching",
  },
  {
    letter: "ช",
    thai: "ช ช้าง",
    rtgs: "cho chang",
    meaning: "elephant",
    pronunciation: {
      initial: "ch",
      final: "t",
    },
    class: LetterClass.Low,
    similar: ["c-11", "c-2", "c-3", "c-6"],
    id: "c-10",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "chang: elephant",
    longId: "c-cho-chang",
  },
  {
    letter: "ซ",
    thai: "ซ โซ่",
    rtgs: "so so",
    meaning: "chain",
    pronunciation: {
      initial: "s",
      final: "t",
    },
    class: LetterClass.Low,
    similar: ["c-10", "c-2", "c-3", "c-6"],
    id: "c-11",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "so: chain",
    longId: "c-so-so",
  },
  {
    letter: "ฌ",
    thai: "ฌ เฌอ",
    rtgs: "cho choe",
    meaning: "tree",
    pronunciation: {
      initial: "ch",
      final: "—",
    },
    class: LetterClass.Low,
    similar: ["c-13", "c-22", "c-15", "c-14", "c-32", "c-1"],
    id: "c-12",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "choe: tree",
    longId: "c-cho-choe",
  },
  {
    letter: "ญ",
    thai: "ญ หญิง",
    rtgs: "yo ying",
    meaning: "woman",
    pronunciation: {
      initial: "y",
      final: "n",
    },
    class: LetterClass.Low,
    similar: ["c-12", "c-22", "c-15", "c-14", "c-32", "c-1"],
    id: "c-13",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ying: woman",
    longId: "c-yo-ying",
  },
  {
    letter: "ฎ",
    thai: "ฎ ชฎา",
    rtgs: "do cha-da",
    meaning: "headdress",
    pronunciation: {
      initial: "d",
      final: "t",
    },
    class: LetterClass.Middle,
    similar: ["c-15", "c-32", "c-22", "c-1", "c-13", "c-12"],
    id: "c-14",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "cha-da: headdress",
    longId: "c-do-cha-da",
  },
  {
    letter: "ฏ",
    thai: "ฏ ปฏัก",
    rtgs: "to pa-tak",
    meaning: "goad, javelin",
    pronunciation: {
      initial: "t",
      final: "t",
    },
    class: LetterClass.Middle,
    similar: ["c-14", "c-32", "c-22", "c-1", "c-13", "c-12"],
    id: "c-15",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "pa-tak: goad, javelin",
    longId: "c-to-pa-tak",
  },
  {
    letter: "ฐ",
    thai: "ฐ ฐาน",
    rtgs: "tho than",
    meaning: "pedestal",
    pronunciation: {
      initial: "th",
      final: "t",
    },
    class: LetterClass.High,
    similar: ["c-35", "c-24"],
    id: "c-16",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "than: pedestal",
    longId: "c-tho-than",
  },
  {
    letter: "ฑ",
    thai: "ฑ มณโฑ",
    rtgs: "tho montho",
    meaning: "Montho",
    pronunciation: {
      initial: "th",
      final: "t",
    },
    class: LetterClass.Low,
    id: "c-17",
    isConsonant: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "montho: Montho",
    longId: "c-tho-montho",
  },
  {
    letter: "ฒ",
    thai: "ฒ ผู้เฒ่า",
    rtgs: "tho phu-thao",
    meaning: "elder",
    pronunciation: {
      initial: "th",
      final: "t",
    },
    class: LetterClass.Low,
    similar: ["c-21", "c-5", "c-20", "c-38"],
    id: "c-18",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "phu-thao: elder",
    longId: "c-tho-phu-thao",
  },
  {
    letter: "ณ",
    thai: "ณ เณร",
    rtgs: "no nen",
    meaning: "samanera",
    pronunciation: {
      initial: "n",
      final: "n",
    },
    class: LetterClass.Low,
    similar: ["c-12", "c-13", "c-22", "c-15", "c-14", "c-32", "c-1"],
    id: "c-19",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "nen: samanera",
    longId: "c-no-nen",
  },
  {
    letter: "ด",
    thai: "ด เด็ก",
    rtgs: "do dek",
    meaning: "child",
    pronunciation: {
      initial: "d",
      final: "t",
    },
    class: LetterClass.Middle,
    similar: ["c-4", "c-38", "c-5", "c-21"],
    id: "c-20",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "dek: child",
    longId: "c-do-dek",
  },
  {
    letter: "ต",
    thai: "ต เต่า",
    rtgs: "to tao",
    meaning: "turtle",
    pronunciation: {
      initial: "t",
      final: "t",
    },
    class: LetterClass.Middle,
    similar: ["c-5", "c-4", "c-38", "c-20"],
    id: "c-21",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "tao: turtle",
    longId: "c-to-tao",
  },
  {
    letter: "ถ",
    thai: "ถ ถุง",
    rtgs: "tho thung",
    meaning: "sack",
    pronunciation: {
      initial: "th",
      final: "t",
    },
    class: LetterClass.High,
    similar: ["c-32", "c-1", "m-2", "c-14", "c-15", "c-12", "c-13"],
    id: "c-22",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "thung: sack",
    longId: "c-tho-thung",
  },
  {
    letter: "ท",
    thai: "ท ทหาร",
    rtgs: "tho thahan",
    meaning: "soldier",
    pronunciation: {
      initial: "th",
      final: "t",
    },
    class: LetterClass.Low,
    similar: ["c-41"],
    id: "c-23",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "thahan: soldier",
    longId: "c-tho-thahan",
  },
  {
    letter: "ธ",
    thai: "ธ ธง",
    rtgs: "tho thong",
    meaning: "flag",
    pronunciation: {
      initial: "th",
      final: "t",
    },
    class: LetterClass.Low,
    similar: ["c-35", "c-16"],
    id: "c-24",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "thong: flag",
    longId: "c-tho-thong",
  },
  {
    letter: "น",
    thai: "น หนู",
    rtgs: "no nu",
    meaning: "mouse",
    pronunciation: {
      initial: "n",
      final: "n",
    },
    class: LetterClass.Low,
    similar: ["c-33", "c-9", "c-26", "c-27"],
    id: "c-25",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "nu: mouse",
    longId: "c-no-nu",
  },
  {
    letter: "บ",
    thai: "บ ใบไม้",
    rtgs: "bo baimai",
    meaning: "leaf",
    pronunciation: {
      initial: "b",
      final: "p",
    },
    class: LetterClass.Middle,
    similar: ["c-27", "c-39", "c-25", "c-33"],
    id: "c-26",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "baimai: leaf",
    longId: "c-bo-baimai",
  },
  {
    letter: "ป",
    thai: "ป ปลา",
    rtgs: "po pla",
    meaning: "fish",
    pronunciation: {
      initial: "p",
      final: "p",
    },
    class: LetterClass.Middle,
    similar: ["c-26", "c-25", "c-33"],
    id: "c-27",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "pla: fish",
    longId: "c-po-pla",
  },
  {
    letter: "ผ",
    thai: "ผ ผึ้ง",
    rtgs: "pho phueng",
    meaning: "bee",
    pronunciation: {
      initial: "ph",
      final: "—",
    },
    class: LetterClass.High,
    similar: ["c-29", "c-30", "c-31", "c-42"],
    id: "c-28",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "phueng: bee",
    longId: "c-pho-phueng",
  },
  {
    letter: "ฝ",
    thai: "ฝ ฝา",
    rtgs: "fo fa",
    meaning: "lid",
    pronunciation: {
      initial: "f",
      final: "—",
    },
    class: LetterClass.High,
    similar: ["c-28", "c-30", "c-31", "c-42"],
    id: "c-29",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "fa: lid",
    longId: "c-fo-fa",
  },
  {
    letter: "พ",
    thai: "พ พาน",
    rtgs: "pho phan",
    meaning: "phan",
    pronunciation: {
      initial: "ph",
      final: "p",
    },
    class: LetterClass.Low,
    similar: ["c-28", "c-29", "c-31", "c-42"],
    id: "c-30",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "phan: phan",
    longId: "c-pho-phan",
  },
  {
    letter: "ฟ",
    thai: "ฟ ฟัน",
    rtgs: "fo fan",
    meaning: "teeth",
    pronunciation: {
      initial: "f",
      final: "p",
    },
    class: LetterClass.Low,
    similar: ["c-28", "c-30", "c-31", "c-42"],
    id: "c-31",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "fan: teeth",
    longId: "c-fo-fan",
  },
  {
    letter: "ภ",
    thai: "ภ สำเภา",
    rtgs: "pho sam-phao",
    meaning: "sailboat",
    pronunciation: {
      initial: "ph",
      final: "p",
    },
    class: LetterClass.Low,
    similar: ["c-22", "c-1", "c-14", "c-15", "c-12", "c-13"],
    id: "c-32",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "sam-phao: sailboat",
    longId: "c-pho-sam-phao",
  },
  {
    letter: "ม",
    thai: "ม ม้า",
    rtgs: "mo ma",
    meaning: "horse",
    pronunciation: {
      initial: "m",
      final: "m",
    },
    class: LetterClass.Low,
    similar: ["c-25", "c-6", "c-27", "c-39"],
    id: "c-33",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ma: horse",
    longId: "c-mo-ma",
  },
  {
    letter: "ย",
    thai: "ย ยักษ์",
    rtgs: "yo yak",
    meaning: "giant",
    pronunciation: {
      initial: "y",
      final: "y",
    },
    class: LetterClass.Low,
    id: "c-34",
    isConsonant: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "yak: giant",
    longId: "c-yo-yak",
  },
  {
    letter: "ร",
    thai: "ร เรือ",
    rtgs: "ro ruea",
    meaning: "boat",
    pronunciation: {
      initial: "r",
      final: "n",
    },
    class: LetterClass.Low,
    similar: ["c-16", "c-24", "vs-1"],
    id: "c-35",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ruea: boat",
    longId: "c-ro-ruea",
  },
  {
    letter: "ล",
    thai: "ล ลิง",
    rtgs: "lo ling",
    meaning: "monkey",
    pronunciation: {
      initial: "l",
      final: "n",
    },
    class: LetterClass.Low,
    similar: ["c-40"],
    id: "c-36",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ling: monkey",
    longId: "c-lo-ling",
  },
  {
    letter: "ว",
    thai: "ว แหวน",
    rtgs: "wo waen",
    meaning: "ring",
    pronunciation: {
      initial: "w",
      final: "w",
    },
    class: LetterClass.Low,
    similar: ["ds-3"],
    id: "c-37",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "waen: ring",
    longId: "c-wo-waen",
  },
  {
    letter: "ศ",
    thai: "ศ ศาลา",
    rtgs: "so sala",
    meaning: "pavilion Sala",
    pronunciation: {
      initial: "s",
      final: "t",
    },
    class: LetterClass.High,
    similar: ["c-4", "c-5", "c-20", "c-21"],
    id: "c-38",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "sala: pavilion Sala",
    longId: "c-so-sala",
  },
  {
    letter: "ษ",
    thai: "ษ ฤๅษี",
    rtgs: "so rue-si",
    meaning: "hermit",
    pronunciation: {
      initial: "s",
      final: "t",
    },
    class: LetterClass.High,
    similar: ["c-26", "c-27", "c-25", "c-33"],
    id: "c-39",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "rue-si: hermit",
    longId: "c-so-rue-si",
  },
  {
    letter: "ส",
    thai: "ส เสือ",
    rtgs: "so suea",
    meaning: "tiger",
    pronunciation: {
      initial: "s",
      final: "t",
    },
    class: LetterClass.High,
    similar: ["c-36"],
    id: "c-40",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "suea: tiger",
    longId: "c-so-suea",
  },
  {
    letter: "ห",
    thai: "ห หีบ",
    rtgs: "ho hip",
    meaning: "box",
    pronunciation: {
      initial: "h",
      final: "—",
    },
    class: LetterClass.High,
    similar: ["c-23"],
    id: "c-41",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "hip: box",
    longId: "c-ho-hip",
  },
  {
    letter: "ฬ",
    thai: "ฬ จุฬา",
    rtgs: "lo chu-la",
    meaning: "kite",
    pronunciation: {
      initial: "l",
      final: "n",
    },
    class: LetterClass.Low,
    similar: ["c-31", "c-30", "c-29", "c-28"],
    id: "c-42",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "chu-la: kite",
    longId: "c-lo-chu-la",
  },
  {
    letter: "อ",
    thai: "อ อ่าง",
    rtgs: "o ang",
    meaning: "basin",
    pronunciation: {
      initial: "*",
      final: "—",
    },
    class: LetterClass.Middle,
    similar: ["c-44", "c-8", "c-9"],
    id: "c-43",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "ang: basin",
    longId: "c-o-ang",
  },
  {
    letter: "ฮ",
    thai: "ฮ นกฮูก",
    rtgs: "ho nok-huk",
    meaning: "owl",
    pronunciation: {
      initial: "h",
      final: "—",
    },
    class: LetterClass.Low,
    similar: ["c-43", "c-8", "c-9"],
    id: "c-44",
    isConsonant: true,
    hasSimilar: true,
    hasVariant: false,
    variant: [],
    longMeaning: "nok-huk: owl",
    longId: "c-ho-nok-huk",
  },
  {
    letter: "่",
    thai: "ไม้ เอก",
    rtgs: "mai ek",
    initialConsonant: {
      low: "falling",
      mid: "low",
      high: "low",
    },
    id: "tm-1",
    isToneMark: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longId: "tm-mai-ek",
  },
  {
    letter: " ้",
    thai: "ไม้ โท",
    rtgs: "mai tho",
    initialConsonant: {
      low: "high",
      mid: "falling",
      high: "falling",
    },
    id: "tm-2",
    isToneMark: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longId: "tm-mai-tho",
  },
  {
    letter: "๊",
    thai: "ไม้ ตรี",
    rtgs: "mai tri",
    initialConsonant: {
      mid: "high",
    },
    id: "tm-3",
    isToneMark: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longId: "tm-mai-tri",
  },
  {
    letter: "๋",
    thai: "ไม้ จัตวา",
    rtgs: "mai chattawa",
    initialConsonant: {
      mid: "rising",
    },
    id: "tm-4",
    isToneMark: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longId: "tm-mai-chattawa",
  },
  {
    letter: "อั-",
    variant: ["-รร-", "-ะ"],
    thai: "สระ อะ",
    rtgs: "Sara a",
    ipa: "a",
    pronunciation: "a",
    similar: ["tm-2", "ds-3", "vs-6", "c-35"],
    id: "vs-1",
    isVowel: true,
    hasSimilar: true,
    hasVariant: true,
    isShort: true,
    longId: "vs-sara-a",
  },
  {
    letter: "แอ็-",
    variant: ["แ--", "แ-ะ"],
    thai: "สระ แอะ",
    rtgs: "Sara ae",
    ipa: "ɛ",
    pronunciation: "ae (a in at)",
    similar: ["vl-2", "gl-8", "vl-4", "vs-4", "vl-5", "vs-5", "gl-3", "gl-10"],
    id: "vs-2",
    isVowel: true,
    hasSimilar: true,
    hasVariant: true,
    isShort: true,
    longId: "vs-sara-ae",
  },
  {
    letter: "อ็อ-",
    variant: ["เ-าะ"],
    thai: "สระ เอาะ",
    rtgs: "Sara aw",
    ipa: "ɔ",
    pronunciation: "o (o in not)",
    similar: ["c-43", "vl-1", "vs-1"],
    id: "vs-3",
    isVowel: true,
    hasSimilar: true,
    hasVariant: true,
    isShort: true,
    longId: "vs-sara-aw",
  },
  {
    letter: "เอ็◌",
    variant: ["เ--", "เ◌ะ"],
    thai: "สระ เอะ",
    rtgs: "Sara e",
    ipa: "e",
    pronunciation: "e (e in neck)",
    similar: [
      "vl-4",
      "vl-2",
      "gs-5",
      "gl-3",
      "gl-9",
      "gl-10",
      "ds-2",
      "dl-1",
      "dl-2",
      "gl-5",
    ],
    id: "vs-4",
    isVowel: true,
    hasSimilar: true,
    hasVariant: true,
    isShort: true,
    longId: "vs-sara-e",
  },
  {
    letter: "เอิ-",
    variant: ["เ-อะ"],
    thai: "สระ เออะ",
    rtgs: "Sara er",
    ipa: "ɤ",
    pronunciation: "er (e in the)",
    similar: ["vl-5", "vl-4", "vs-7"],
    id: "vs-5",
    isVowel: true,
    hasSimilar: true,
    hasVariant: true,
    isShort: true,
    longId: "vs-sara-er",
  },
  {
    letter: "โ◌ะ",
    variant: [],
    thai: "สระ โอะ",
    rtgs: "Sara o",
    ipa: "o",
    pronunciation: "o (oa in boat)",
    similar: ["gs-1", "vs-1"],
    id: "vs-6",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "vs-sara-o",
  },
  {
    letter: "อิ-",
    variant: [],
    thai: "สระ อิ",
    rtgs: "Sara i",
    ipa: "i",
    pronunciation: "i",
    similar: ["vl-7", "vl-8", "vs-8", "gs-7", "vs-5"],
    id: "vs-7",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "vs-sara-i",
  },
  {
    letter: "อึ-",
    variant: [],
    thai: "สระ อึ",
    rtgs: "Sara ue",
    ipa: "ɯ",
    pronunciation: "ue (french u)",
    similar: ["vl-8", "vl-7", "vs-7"],
    id: "vs-8",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "vs-sara-ue",
  },
  {
    letter: "อุ-",
    variant: [],
    thai: "สระ อุ",
    rtgs: "Sara u",
    ipa: "u",
    pronunciation: "u (oo in look)",
    similar: ["vl-9", "gs-3"],
    id: "vs-9",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "vs-sara-u",
  },
  {
    letter: "า",
    variant: [],
    thai: "สระ อา",
    rtgs: "Sara aa",
    ipa: "a",
    pronunciation: "aa (a in father)",
    similar: ["m-1", "c-37", "gs-5", "gl-7", "gl-6"],
    id: "vl-1",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-aa",
  },
  {
    letter: "แ◌",
    variant: [],
    thai: "สระ แอ",
    rtgs: "Sara aae",
    ipa: "ɛ",
    pronunciation: "aae (a in ham)",
    similar: ["vs-2", "gl-8"],
    id: "vl-2",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-aae",
  },
  {
    letter: "อ",
    variant: [],
    thai: "สระ ออ",
    rtgs: "Sara aaw",
    ipa: "ɔ",
    pronunciation: "aaw (aw in saw)",
    similar: ["c-43", "vs-3", "dl-2", "ds-2"],
    id: "vl-3",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-aaw",
  },
  {
    letter: "เ◌",
    variant: [],
    thai: "สระ เอ",
    rtgs: "Sara aeh",
    ipa: "e",
    pronunciation: "aeh (a in lame)",
    similar: [
      "vs-4",
      "vs-5",
      "gs-5",
      "gl-3",
      "gl-9",
      "dl-2",
      "dl-1",
      "gl-10",
      "ds-1",
      "ds-2",
      "gl-11",
    ],
    id: "vl-4",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-aeh",
  },
  {
    letter: "เอิ-",
    variant: ["เ-อ"],
    thai: "สระ เออ",
    rtgs: "Sara eer",
    ipa: "ɤ",
    pronunciation: "eer (u in burn)",
    similar: ["vs-5", "vl-4", "vs-7"],
    id: "vl-5",
    isVowel: true,
    hasSimilar: true,
    hasVariant: true,
    isLong: true,
    longId: "vl-sara-eer",
  },
  {
    letter: "โ--",
    variant: [],
    thai: "สระ โอ",
    rtgs: "Sara o",
    ipa: "o",
    pronunciation: "o (oa in go)",
    similar: ["vs-6", "gl-4", "gs-1"],
    id: "vl-6",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-o",
  },
  {
    letter: "อี-",
    variant: [],
    thai: "สระ อี",
    rtgs: "Sara ee",
    ipa: "i",
    pronunciation: "ee (ee in see)",
    similar: ["vs-7", "vl-8", "vs-8", "dl-1", "ds-1", "gl-11"],
    id: "vl-7",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-ee",
  },
  {
    letter: "อื-",
    variant: [],
    thai: "สระ อือ",
    rtgs: "Sara euu",
    ipa: "ɯ",
    pronunciation: "euu (french long u)",
    similar: ["vl-7", "vs-7", "vs-8", "gl-5"],
    id: "vl-8",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-euu",
  },
  {
    letter: "อู-",
    variant: [],
    thai: "สระ อูุ",
    rtgs: "Sara uu",
    ipa: "u",
    pronunciation: "uu (oo in too)",
    similar: ["vs-9", "c-13"],
    id: "vl-9",
    isVowel: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "vl-sara-uu",
  },
  {
    letter: "เอียะ",
    variant: [],
    thai: "สระเอียะ",
    rtgs: "Sara ia",
    ipa: "ia",
    pronunciation: "ia (ea in ear with glottal stop)",
    similar: ["vl-4", "vl-7", "c-34", "vs-1"],
    id: "ds-1",
    isDiphtong: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "ds-sara-ia",
  },
  {
    letter: "เอือะ",
    variant: [],
    thai: "สระเอือะ",
    rtgs: "Sara uea",
    ipa: "ɯa",
    pronunciation: "ɯa (ure in pure)",
    similar: ["vl-4", "vl-8", "c-43", "vs-1"],
    id: "ds-2",
    isDiphtong: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "ds-sara-uea",
  },
  {
    letter: "อัว",
    variant: [],
    thai: "สระอัวะ",
    rtgs: "Sara ua",
    ipa: "ua",
    pronunciation: "ua (ewe in sewer)",
    similar: ["vs-1", "c-37"],
    id: "ds-3",
    isDiphtong: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "ds-sara-ua",
  },
  {
    letter: "เอีย",
    variant: [],
    thai: "เอีย",
    rtgs: "iia",
    ipa: "ia",
    pronunciation: "iia (ea in ear)",
    similar: ["vl-4", "vl-7", "c-34"],
    id: "dl-1",
    isDiphtong: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "dl-iia",
  },
  {
    letter: "เอือ",
    variant: [],
    thai: "สระเอือ",
    rtgs: "Sara euua",
    ipa: "ɯa",
    pronunciation: "ɯa (ure in pure)",
    similar: ["vl-4", "vl-8", "c-43"],
    id: "dl-2",
    isDiphtong: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "dl-sara-euua",
  },
  {
    letter: "อัวะ",
    variant: [],
    thai: "สระอัว",
    rtgs: "Sara uua",
    rare: true,
    ipa: "ua",
    pronunciation: "ua (ewe in newer)",
    id: "dl-3",
    isDiphtong: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    isLong: true,
    longId: "dl-sara-uua",
  },
  {
    letter: "ไ-",
    variant: ["ใ-", "อัย", "ไ-ย"],
    thai: "สระ ไอ",
    rtgs: "Sara ai",
    ipa: "aj",
    pronunciation: "ai (i in hi)",
    similar: ["vl-6"],
    id: "gs-1",
    isGlide: true,
    hasSimilar: true,
    hasVariant: true,
    isShort: true,
    longId: "gs-sara-ai",
  },
  {
    letter: "อ็อย",
    variant: [],
    thai: "อ็อย",
    rtgs: "oi",
    ipa: "ɔj",
    pronunciation: "oi",
    similar: ["vs-3", "c-43", "c-34"],
    id: "gs-2",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "gs-oi",
  },
  {
    letter: "อุย",
    variant: [],
    thai: "อุย",
    rtgs: "ui",
    ipa: "uj",
    pronunciation: "ui",
    similar: ["vs-9", "c-34"],
    id: "gs-3",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "gs-ui",
  },
  {
    letter: "-วย",
    variant: [],
    thai: "วย",
    rtgs: "uay",
    ipa: "uaj",
    pronunciation: "uay (uoy in buoy)",
    similar: ["c-37", "c-34"],
    id: "gs-4",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "gs-uay",
  },
  {
    letter: "เ-า",
    variant: [],
    thai: "วย",
    rtgs: "ao",
    ipa: "aw",
    pronunciation: "ao (ow in cow)",
    similar: ["vl-4", "c-34"],
    id: "gs-5",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "gs-ao",
  },
  {
    letter: "อ็ว",
    variant: [],
    thai: "อ็ว",
    rtgs: "eo",
    ipa: "ew",
    pronunciation: "eo",
    similar: ["c-37"],
    id: "gs-6",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "gs-eo",
  },
  {
    letter: "อิว",
    variant: [],
    thai: "อิว",
    rtgs: "iu",
    ipa: "iw",
    pronunciation: "iu (ew in new)",
    similar: ["vs-7", "c-37"],
    id: "gs-7",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isShort: true,
    longId: "gs-iu",
  },
  {
    letter: "ไ-",
    variant: ["-าย"],
    thai: "สระ ไอ",
    rtgs: "aai",
    ipa: "aj",
    pronunciation: "aai (ye in bye)",
    similar: ["vl-6"],
    id: "gl-1",
    isGlide: true,
    hasSimilar: true,
    hasVariant: true,
    isLong: true,
    longId: "gl-aai",
  },
  {
    letter: "-อย",
    variant: [],
    thai: "-อย",
    rtgs: "aawy",
    ipa: "ɔj",
    pronunciation: "oi (oy in boy)",
    similar: ["c-43", "c-34"],
    id: "gl-2",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-aawy",
  },
  {
    letter: "เ-ย",
    variant: [],
    thai: "เอย",
    rtgs: "eeuy",
    ipa: "ɤj",
    pronunciation: "eeuy (u in burn + y in boy)",
    similar: ["vl-4", "c-34"],
    id: "gl-3",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-eeuy",
  },
  {
    letter: "โ-ย",
    variant: [],
    thai: "โอย",
    rtgs: "ooy",
    ipa: "oj",
    pronunciation: "ooy",
    similar: ["vl-6", "c-34"],
    id: "gl-4",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-ooy",
  },
  {
    letter: "เอือย",
    variant: [],
    thai: "เอือย",
    rtgs: "euuay",
    ipa: "ɯaj",
    pronunciation: "euuay",
    similar: ["vl-4", "vl-8", "c-43", "c-34"],
    id: "gl-5",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-euuay",
  },
  {
    letter: "-วาย",
    variant: [],
    thai: "วาย",
    rtgs: "uaay",
    ipa: "uaj",
    pronunciation: "uaay (uoy in buoy)",
    similar: ["c-37", "vl-1", "c-34"],
    id: "gl-6",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-uaay",
  },
  {
    letter: "-าว",
    variant: [],
    thai: "อาว",
    rtgs: "aao",
    ipa: "aw",
    pronunciation: "aw (ow in now)",
    similar: ["vl-1", "c-37"],
    id: "gl-7",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-aao",
  },
  {
    letter: "แ-ว",
    variant: [],
    thai: "แอว",
    rtgs: "aaeo",
    ipa: "ɛw",
    pronunciation: "aw (a in ham + ow in low)",
    similar: ["vl-2", "c-37"],
    id: "gl-8",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-aaeo",
  },
  {
    letter: "เ-ว",
    variant: [],
    thai: "แอว",
    rtgs: "aeo",
    ipa: "ɛw",
    pronunciation: "aeo (ai + ow in rainbow)",
    similar: ["vl-4", "c-37"],
    id: "gl-9",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-aeo",
  },
  {
    letter: "เ-อว",
    variant: [],
    thai: "เออว",
    rare: true,
    rtgs: "uaaw",
    ipa: "ɔw",
    pronunciation: "uaaw",
    similar: ["vl-4", "c-43", "c-37"],
    id: "gl-10",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-uaaw",
  },
  {
    letter: "เอียว",
    variant: [],
    thai: "เอียว",
    rtgs: "iaao",
    ipa: "iaw",
    pronunciation: "iaao (io in trio)",
    similar: ["vl-4", "vl-7", "c-34", "c-37"],
    id: "gl-11",
    isGlide: true,
    hasSimilar: true,
    hasVariant: false,
    isLong: true,
    longId: "gl-iaao",
  },
  {
    letter: "อำ",
    variant: [],
    thai: "สระ อำ",
    rtgs: "am",
    ipa: "am",
    pronunciation: "am (um in sum)",
    similar: ["vl-1"],
    id: "m-1",
    isMiscellanous: true,
    hasSimilar: true,
    hasVariant: false,
    longId: "m-am",
  },
  {
    letter: "ฤ",
    variant: [],
    thai: "ฤ",
    rtgs: "reu",
    ipa: "rɯ",
    pronunciation: "reu (rew in grew)",
    similar: ["c-22", "c-1"],
    id: "m-2",
    isMiscellanous: true,
    hasSimilar: true,
    hasVariant: false,
    longId: "m-reu",
  },
  {
    letter: "๐",
    thai: "ศูนย์",
    rtgs: "sun",
    meaning: "0",
    pronunciation: "0",
    id: "n-1",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-sun",
  },
  {
    letter: "๑",
    thai: "หนึ่ง",
    rtgs: "nueng",
    meaning: "1",
    pronunciation: "1",
    id: "n-2",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-nueng",
  },
  {
    letter: "๒",
    thai: "สอง",
    rtgs: "song",
    meaning: "2",
    pronunciation: "2",
    id: "n-3",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-song",
  },
  {
    letter: "๓",
    thai: "สาม",
    rtgs: "sam",
    meaning: "3",
    pronunciation: "3",
    id: "n-4",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-sam",
  },
  {
    letter: "๔",
    thai: "สี่",
    rtgs: "si",
    meaning: "4",
    pronunciation: "4",
    id: "n-5",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-si",
  },
  {
    letter: "๕",
    thai: "ห้า",
    rtgs: "ha",
    meaning: "5",
    pronunciation: "5",
    id: "n-6",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-ha",
  },
  {
    letter: "๖",
    thai: "หก",
    rtgs: "hok",
    meaning: "6",
    pronunciation: "6",
    id: "n-7",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-hok",
  },
  {
    letter: "๗",
    thai: "เจ็ด",
    rtgs: "jet",
    meaning: "7",
    pronunciation: "7",
    id: "n-8",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-jet",
  },
  {
    letter: "๘",
    thai: "แปด",
    rtgs: "paet",
    meaning: "8",
    pronunciation: "8",
    id: "n-9",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-paet",
  },
  {
    letter: "๙",
    thai: "เก้า",
    rtgs: "kao",
    meaning: "9",
    pronunciation: "9",
    id: "n-10",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-kao",
  },
  {
    letter: "๑๐",
    thai: "สิบ",
    rtgs: "sip",
    meaning: "10",
    pronunciation: "10",
    id: "n-11",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-sip",
  },
  {
    letter: "๑๑",
    thai: "สิบเอ็ด",
    rtgs: "sip et",
    meaning: "11",
    pronunciation: "11",
    id: "n-12",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "et: 11",
    longId: "n-sip-et",
  },
  {
    letter: "๒๐",
    thai: "ยี่สิบ",
    rtgs: "yi sip",
    meaning: "20",
    pronunciation: "20",
    id: "n-13",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "sip: 20",
    longId: "n-yi-sip",
  },
  {
    letter: "๑๐๐",
    thai: "ร้อย",
    rtgs: "roi",
    meaning: "100",
    pronunciation: "100",
    id: "n-14",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-roi",
  },
  {
    letter: "๑๐๐๐",
    thai: "พัน",
    rtgs: "phan",
    meaning: "1 000",
    pronunciation: "1 000",
    id: "n-15",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-phan",
  },
  {
    letter: "๑๐๐๐๐",
    thai: "หมื่น",
    rtgs: "muen",
    meaning: "10 000",
    pronunciation: "10 000",
    id: "n-16",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-muen",
  },
  {
    letter: "๑๐๐๐๐๐",
    thai: "แสน",
    rtgs: "saen",
    meaning: "100 000",
    pronunciation: "100 000",
    id: "n-17",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-saen",
  },
  {
    letter: "๑๐๐๐๐๐๐",
    thai: "ล้าน",
    rtgs: "lan",
    meaning: "1 000 000",
    pronunciation: "1 000 000",
    id: "n-18",
    isNumber: true,
    hasSimilar: false,
    similar: [],
    hasVariant: false,
    variant: [],
    longMeaning: "",
    longId: "n-lan",
  },
];

export default dictionary;
