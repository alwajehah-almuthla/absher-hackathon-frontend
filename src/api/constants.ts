/**
 * Default test users for development
 * These are seeded in the database via POST /api/seed/all
 */

export const TEST_PARENTS = {
  // محمد عبدالله العتيبي (has 2 children)
  PARENT_1: {
    nationalId: "1001001001",
    name: "محمد عبدالله العتيبي",
    phone: "+966501234567",
    children: [
      { nationalId: "1111111111", name: "أحمد محمد العتيبي" },
      { nationalId: "2222222222", name: "فاطمة محمد العتيبي" },
    ],
  },
  // أحمد سعد المطيري (has 2 children)
  PARENT_2: {
    nationalId: "1002002002",
    name: "أحمد سعد المطيري",
    phone: "+966502345678",
    children: [
      { nationalId: "3333333333", name: "عبدالله أحمد المطيري" },
      { nationalId: "4444444444", name: "نورة أحمد المطيري" },
    ],
  },
  // خالد فهد الدوسري (has 2 children)
  PARENT_3: {
    nationalId: "1003003003",
    name: "خالد فهد الدوسري",
    phone: "+966503456789",
    children: [
      { nationalId: "5555555555", name: "محمد خالد الدوسري" },
      { nationalId: "6666666666", name: "سارة خالد الدوسري" },
    ],
  },
  // عبدالرحمن ماجد الغامدي (has 2 children)
  PARENT_4: {
    nationalId: "1004004004",
    name: "عبدالرحمن ماجد الغامدي",
    phone: "+966504567890",
    children: [
      { nationalId: "7777777777", name: "يوسف عبدالرحمن الغامدي" },
      { nationalId: "8888888888", name: "ريم عبدالرحمن الغامدي" },
    ],
  },
  // فيصل عمر الزهراني (has 2 children)
  PARENT_5: {
    nationalId: "1005005005",
    name: "فيصل عمر الزهراني",
    phone: "+966505678901",
    children: [
      { nationalId: "9999999999", name: "خالد فيصل الزهراني" },
      { nationalId: "0000000000", name: "هند فيصل الزهراني" },
    ],
  },
} as const;

/**
 * Default parent for testing (محمد عبدالله العتيبي)
 * Use this national ID throughout your app for consistent testing
 */
export const DEFAULT_PARENT_NATIONAL_ID = TEST_PARENTS.PARENT_1.nationalId;
