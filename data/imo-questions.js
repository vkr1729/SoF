// SOF International Mathematics Olympiad (IMO) - Class 2
// 20 Sets x 10 Questions = 200 Questions
// Formatted for offline-first web platform and dual-mode testing

window.IMO_QUESTIONS = [
  // ==========================================
  // SET 1: Number Sense & 3-Digit Numbers (10 Qs)
  // ==========================================
  {
    id: "imo-1-1",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "What is the place value of the digit 7 in the number 745?",
    options: ["70", "700", "740", "7"],
    answer: 1,
    explanation: "In 745, 7 is in the hundreds place, so its place value is 7 x 100 = 700."
  },
  {
    id: "imo-1-2",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "Which of the following numbers is the GREATEST?",
    options: ["894", "498", "489", "849"],
    answer: 0,
    explanation: "Comparing the hundreds and tens digits: 894 is greater than 849, 498, and 489."
  },
  {
    id: "imo-1-3",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "What is the expanded form of 608?",
    options: ["600 + 80", "600 + 8", "600 + 80 + 0", "60 + 8"],
    answer: 1,
    explanation: "608 has 6 hundreds, 0 tens, and 8 ones: 600 + 0 + 8 = 600 + 8."
  },
  {
    id: "imo-1-4",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "What number comes immediately BEFORE 500?",
    options: ["409", "490", "499", "501"],
    answer: 2,
    explanation: "The predecessor of 500 is 500 - 1 = 499."
  },
  {
    id: "imo-1-5",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "Using the digits 3, 9, and 1 only once each, what is the SMALLEST 3-digit number you can form?",
    options: ["193", "319", "931", "139"],
    answer: 3,
    explanation: "To form the smallest number, arrange digits in ascending order: 1, 3, 9 -> 139."
  },
  {
    id: "imo-1-6",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "Which of the following is an EVEN number?",
    options: ["462", "589", "215", "377"],
    answer: 0,
    explanation: "Even numbers end in 0, 2, 4, 6, or 8. 462 ends in 2, so it is even."
  },
  {
    id: "imo-1-7",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "How many tens are there in the number 340?",
    options: ["30", "34", "340", "4"],
    answer: 1,
    explanation: "340 / 10 = 34 tens."
  },
  {
    id: "imo-1-8",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "Which symbol correctly completes the statement: 586 [ ? ] 568",
    options: ["+", "<", ">", "="],
    answer: 2,
    explanation: "Both have 5 in the hundreds place, but 586 has 8 tens while 568 has 6 tens. So 586 > 568."
  },
  {
    id: "imo-1-9",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Hard",
    question: "I am a 3-digit number. My ones digit is 4. My tens digit is double of my ones digit. My hundreds digit is 1 less than my tens digit. What number am I?",
    options: ["847", "684", "748", "784"],
    answer: 3,
    explanation: "Ones digit = 4. Tens digit = 4 x 2 = 8. Hundreds digit = 8 - 1 = 7. The number is 784."
  },
  {
    id: "imo-1-10",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "What is the number name of 909?",
    options: ["Nine hundred nine", "Ninety nine", "Nine thousand nine", "Nine hundred ninety"],
    answer: 0,
    explanation: "909 is written as 'Nine hundred nine'."
  },

  // ==========================================
  // SET 2: Computation - Addition (10 Qs)
  // ==========================================
  {
    id: "imo-2-1",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Easy",
    question: "What is the sum of 45 and 32?",
    options: ["67", "75", "77", "87"],
    answer: 2,
    explanation: "45 + 32 = (40 + 30) + (5 + 2) = 70 + 7 = 77."
  },
  {
    id: "imo-2-2",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Easy",
    question: "Find the value of: 150 + 230",
    options: ["390", "480", "360", "380"],
    answer: 3,
    explanation: "150 + 230 = 380."
  },
  {
    id: "imo-2-3",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "Aarav has 58 stickers. His sister gives him 35 more stickers. How many stickers does Aarav have now?",
    options: ["83", "91", "93", "95"],
    answer: 2,
    explanation: "58 + 35 = 58 + 30 + 5 = 88 + 5 = 93 stickers."
  },
  {
    id: "imo-2-4",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "What number should be added to 64 to get 100?",
    options: ["46", "44", "34", "36"],
    answer: 3,
    explanation: "100 - 64 = 36."
  },
  {
    id: "imo-2-5",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "Calculate: 246 + 185",
    options: ["431", "441", "411", "421"],
    answer: 0,
    explanation: "246 + 185: 6+5=11 (1 carry 1), 4+8+1=13 (3 carry 1), 2+1+1=4 -> 431."
  },
  {
    id: "imo-2-6",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Easy",
    question: "Which of the following equals 50?",
    options: ["25 + 15", "30 + 20", "40 + 20", "15 + 25"],
    answer: 1,
    explanation: "30 + 20 = 50."
  },
  {
    id: "imo-2-7",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Hard",
    question: "In a library, there are 142 English books, 215 Math books, and 73 Science books. How many books are there in total?",
    options: ["410", "420", "430", "440"],
    answer: 2,
    explanation: "142 + 215 = 357. 357 + 73 = 430 books in total."
  },
  {
    id: "imo-2-8",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "What is 100 more than 489?",
    options: ["689", "599", "499", "589"],
    answer: 3,
    explanation: "489 + 100 = 589."
  },
  {
    id: "imo-2-9",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Hard",
    question: "Find the missing digit P:  4 P 6 + 1 3 2 = 6 1 8",
    options: ["8", "9", "6", "7"],
    answer: 0,
    explanation: "Check: 6 + 2 = 8. In tens place: P + 3 = 11 (1 written, 1 carried to hundreds). So P = 11 - 3 = 8! Check hundreds: 4 + 1 + 1 = 6."
  },
  {
    id: "imo-2-10",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "Adding 0 to any number gives:",
    options: ["1", "The same number", "10", "0"],
    answer: 1,
    explanation: "Adding 0 to any number leaves the value unchanged (Additive Identity)."
  },

  // ==========================================
  // SET 3: Computation - Subtraction (10 Qs)
  // ==========================================
  {
    id: "imo-3-1",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Easy",
    question: "What is 85 - 42?",
    options: ["45", "33", "53", "43"],
    answer: 3,
    explanation: "85 - 42 = 43."
  },
  {
    id: "imo-3-2",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Medium",
    question: "Subtract 38 from 92:",
    options: ["54", "64", "56", "52"],
    answer: 0,
    explanation: "92 - 38 = 92 - 30 - 8 = 62 - 8 = 54."
  },
  {
    id: "imo-3-3",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Easy",
    question: "There were 50 apples in a fruit basket. Children ate 18 apples. How many apples are left in the basket?",
    options: ["38", "32", "22", "42"],
    answer: 1,
    explanation: "50 - 18 = 32 apples remaining."
  },
  {
    id: "imo-3-4",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Medium",
    question: "What is the difference between the greatest 2-digit number and the smallest 2-digit number?",
    options: ["89", "90", "99", "88"],
    answer: 0,
    explanation: "Greatest 2-digit number = 99. Smallest 2-digit number = 10. Difference = 99 - 10 = 89."
  },
  {
    id: "imo-3-5",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Medium",
    question: "Calculate: 500 - 245",
    options: ["245", "255", "265", "355"],
    answer: 1,
    explanation: "500 - 245 = 255."
  },
  {
    id: "imo-3-6",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Easy",
    question: "What is 10 less than 730?",
    options: ["630", "710", "720", "740"],
    answer: 2,
    explanation: "730 - 10 = 720."
  },
  {
    id: "imo-3-7",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Hard",
    question: "A toy shop had 350 teddy bears. It sold 125 bears on Monday and 85 bears on Tuesday. How many bears are left?",
    options: ["150", "160", "210", "140"],
    answer: 3,
    explanation: "Total sold = 125 + 85 = 210. Remaining = 350 - 210 = 140 teddy bears."
  },
  {
    id: "imo-3-8",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Medium",
    question: "Find the missing number: [ ? ] - 45 = 55",
    options: ["100", "110", "10", "90"],
    answer: 0,
    explanation: "55 + 45 = 100. So 100 - 45 = 55."
  },
  {
    id: "imo-3-9",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Hard",
    question: "Riya scored 82 marks in Math. Kabir scored 19 marks less than Riya. How many marks did Kabir score?",
    options: ["61", "63", "65", "73"],
    answer: 1,
    explanation: "82 - 19 = 63 marks."
  },
  {
    id: "imo-3-10",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Easy",
    question: "Subtracting a number from itself (e.g. 74 - 74) always gives:",
    options: ["74", "10", "0", "1"],
    answer: 2,
    explanation: "Any number subtracted from itself always leaves 0."
  },

  // ==========================================
  // SET 4: Length & Distance Measurement (10 Qs)
  // ==========================================
  {
    id: "imo-4-1",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Easy",
    question: "Which unit would you use to measure the length of a small pencil?",
    options: ["Centimeter (cm)", "Liter (L)", "Kilogram (kg)", "Kilometer (km)"],
    answer: 0,
    explanation: "Small everyday objects like pencils and erasers are measured in centimeters (cm)."
  },
  {
    id: "imo-4-2",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Easy",
    question: "How many centimeters (cm) are there in 1 meter (m)?",
    options: ["50 cm", "100 cm", "1000 cm", "10 cm"],
    answer: 1,
    explanation: "1 meter = 100 centimeters."
  },
  {
    id: "imo-4-3",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "A green ribbon is 45 cm long. A blue ribbon is 32 cm long. How much longer is the green ribbon?",
    options: ["77 cm", "11 cm", "13 cm", "15 cm"],
    answer: 2,
    explanation: "45 cm - 32 cm = 13 cm."
  },
  {
    id: "imo-4-4",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "A crayon is placed next to a ruler. It starts at mark 3 cm and ends at mark 11 cm. What is the length of the crayon?",
    options: ["7 cm", "11 cm", "14 cm", "8 cm"],
    answer: 3,
    explanation: "Length = End mark - Start mark = 11 cm - 3 cm = 8 cm."
  },
  {
    id: "imo-4-5",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Easy",
    question: "Which unit is best suited to measure the distance between two cities (e.g. Delhi to Mumbai)?",
    options: ["Millimeter (mm)", "Centimeter (cm)", "Kilometer (km)", "Gram (g)"],
    answer: 2,
    explanation: "Long road distances between cities are measured in kilometers (km)."
  },
  {
    id: "imo-4-6",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "A tailor has 5 meters of cloth. He uses 2 meters to stitch a shirt. How many meters of cloth are left?",
    options: ["4 m", "7 m", "2 m", "3 m"],
    answer: 3,
    explanation: "5 m - 2 m = 3 m of cloth remaining."
  },
  {
    id: "imo-4-7",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Hard",
    question: "Rope A is 3 m 40 cm long. Rope B is 2 m 20 cm long. If they are tied together, what is their total length?",
    options: ["5 m 60 cm", "6 m 00 cm", "5 m 20 cm", "5 m 40 cm"],
    answer: 0,
    explanation: "Add meters: 3 + 2 = 5 m. Add centimeters: 40 + 20 = 60 cm. Total = 5 m 60 cm."
  },
  {
    id: "imo-4-8",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "Which of the following is LONGEST?",
    options: ["50 centimeters", "1 meter", "85 centimeters", "99 centimeters"],
    answer: 1,
    explanation: "1 meter = 100 cm, which is longer than 99 cm, 85 cm, and 50 cm."
  },
  {
    id: "imo-4-9",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Hard",
    question: "An ant climbs 15 cm up a plant stem in the morning, but slips down 4 cm in the evening. How high is the ant now?",
    options: ["19 cm", "9 cm", "11 cm", "12 cm"],
    answer: 2,
    explanation: "15 cm - 4 cm = 11 cm."
  },
  {
    id: "imo-4-10",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "Which tool is commonly used by students in school to draw straight lines and measure small lengths?",
    options: ["Clock", "Weighing balance", "Thermometer", "Ruler (Scale)"],
    answer: 3,
    explanation: "A ruler (scale) has centimeter markings used to measure and draw lines."
  },

  // ==========================================
  // SET 5: Weight & Capacity (10 Qs)
  // ==========================================
  {
    id: "imo-5-1",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Easy",
    question: "Which unit is used to measure the weight of a heavy bag of rice?",
    options: ["Centimeter (cm)", "Kilogram (kg)", "Liter (L)", "Milliliter (mL)"],
    answer: 1,
    explanation: "Heavy items are weighed in kilograms (kg)."
  },
  {
    id: "imo-5-2",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Easy",
    question: "How many grams (g) are there in 1 kilogram (kg)?",
    options: ["100 g", "500 g", "1000 g", "10 g"],
    answer: 2,
    explanation: "1 kilogram = 1000 grams."
  },
  {
    id: "imo-5-3",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Easy",
    question: "Which of these liquid quantities is measured in Liters (L) rather than milliliters (mL)?",
    options: ["Eye drops", "A small cup of tea", "A spoonful of cough syrup", "Water in a large bathtub"],
    answer: 3,
    explanation: "Large volumes of liquids like bathtubs and swimming pools are measured in liters (L)."
  },
  {
    id: "imo-5-4",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "A watermelon weighs 4 kg. A papaya weighs 2 kg. What is their combined total weight?",
    options: ["6 kg", "8 kg", "10 kg", "2 kg"],
    answer: 0,
    explanation: "4 kg + 2 kg = 6 kg."
  },
  {
    id: "imo-5-5",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "How many milliliters (mL) are in 1 Liter (L)?",
    options: ["100 mL", "1000 mL", "500 mL", "10 mL"],
    answer: 1,
    explanation: "1 Liter = 1000 milliliters."
  },
  {
    id: "imo-5-6",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "A jug holds 2 Liters of juice. How many glasses of 500 mL each can be filled from this jug?",
    options: ["4 glasses", "5 glasses", "2 glasses", "3 glasses"],
    answer: 0,
    explanation: "2 Liters = 2000 mL. 2000 mL / 500 mL = 4 glasses."
  },
  {
    id: "imo-5-7",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Hard",
    question: "On a balance scale, 1 pineapple balances with 3 apples. If 1 apple weighs 150 grams, how much does the pineapple weigh?",
    options: ["400 g", "450 g", "500 g", "300 g"],
    answer: 1,
    explanation: "Weight of pineapple = 3 x 150 g = 450 grams."
  },
  {
    id: "imo-5-8",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "Which is HEAVIER: 1 kg of cotton or 1 kg of iron nails?",
    options: ["1 kg of cotton", "1 kg of iron nails", "Both weigh exactly the same", "Cannot be determined"],
    answer: 2,
    explanation: "Both weigh exactly 1 kg, so their weight is equal!"
  },
  {
    id: "imo-5-9",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Hard",
    question: "A bucket contains 15 liters of water. Dad uses 7 liters for washing the car and Mom uses 4 liters for watering plants. How much water is left in the bucket?",
    options: ["5 liters", "6 liters", "11 liters", "4 liters"],
    answer: 3,
    explanation: "Used water = 7 + 4 = 11 liters. Leftover = 15 - 11 = 4 liters."
  },
  {
    id: "imo-5-10",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Easy",
    question: "Which device is used by a vegetable vendor to weigh potatoes and onions?",
    options: ["Weighing scale", "Stopwatch", "Thermometer", "Measuring tape"],
    answer: 0,
    explanation: "A weighing scale or balance measures the mass/weight of items."
  },

  // ==========================================
  // SET 6: Time & Calendar (10 Qs)
  // ==========================================
  {
    id: "imo-6-1",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Easy",
    question: "How many hours are there in ONE full day (day and night)?",
    options: ["12 hours", "20 hours", "24 hours", "60 hours"],
    answer: 2,
    explanation: "One complete day has 24 hours."
  },
  {
    id: "imo-6-2",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Easy",
    question: "How many minutes are there in ONE hour?",
    options: ["100 minutes", "12 minutes", "30 minutes", "60 minutes"],
    answer: 3,
    explanation: "1 hour = 60 minutes."
  },
  {
    id: "imo-6-3",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "If the short hand (hour hand) points at 4 and the long hand (minute hand) points at 12, what time is it?",
    options: ["4:00 (4 o'clock)", "4:12", "4:30", "12:04"],
    answer: 0,
    explanation: "When the minute hand is at 12, the hour hand shows the exact hour: 4:00."
  },
  {
    id: "imo-6-4",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "When the minute hand points to 6, it shows:",
    options: ["Quarter past", "Half past", "Quarter to", "O'clock"],
    answer: 1,
    explanation: "Pointing to 6 means 30 minutes have passed, which is 'Half past'."
  },
  {
    id: "imo-6-5",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Easy",
    question: "Which day comes immediately AFTER Wednesday?",
    options: ["Monday", "Tuesday", "Thursday", "Friday"],
    answer: 2,
    explanation: "The order of days is: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."
  },
  {
    id: "imo-6-6",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "How many months in a year have exactly 30 days?",
    options: ["5", "7", "3", "4"],
    answer: 3,
    explanation: "4 months have 30 days: April, June, September, and November."
  },
  {
    id: "imo-6-7",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Hard",
    question: "A cartoon movie starts at 5:00 PM and ends at 6:30 PM. How long was the movie?",
    options: ["45 minutes", "1 hour", "1 hour 30 minutes", "2 hours"],
    answer: 2,
    explanation: "From 5:00 to 6:00 is 1 hour, plus 30 minutes to 6:30 = 1 hour 30 minutes."
  },
  {
    id: "imo-6-8",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "If today is Saturday, what day was YESTERDAY?",
    options: ["Sunday", "Monday", "Thursday", "Friday"],
    answer: 3,
    explanation: "Yesterday means the day before today. Before Saturday comes Friday."
  },
  {
    id: "imo-6-9",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Hard",
    question: "In a leap year, how many days does the month of February have?",
    options: ["29 days", "30 days", "31 days", "28 days"],
    answer: 0,
    explanation: "In a normal year February has 28 days, but in a leap year it has 29 days."
  },
  {
    id: "imo-6-10",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "How many days are there in 3 weeks?",
    options: ["14 days", "21 days", "24 days", "28 days"],
    answer: 1,
    explanation: "1 week = 7 days. 3 weeks = 3 x 7 = 21 days."
  },

  // ==========================================
  // SET 7: Money & Transactions (10 Qs)
  // ==========================================
  {
    id: "imo-7-1",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Easy",
    question: "How many 50-paise coins make 1 Rupee (₹1)?",
    options: ["4", "5", "1", "2"],
    answer: 3,
    explanation: "50 paise + 50 paise = 100 paise = 1 Rupee (2 coins)."
  },
  {
    id: "imo-7-2",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Easy",
    question: "What is the official currency symbol of the Indian Rupee?",
    options: ["₹", "¥", "$", "€"],
    answer: 0,
    explanation: "₹ is the official symbol for the Indian Rupee."
  },
  {
    id: "imo-7-3",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Medium",
    question: "Rohan has three ₹10 notes and two ₹5 coins in his piggy bank. How much money does he have in total?",
    options: ["₹35", "₹40", "₹45", "₹50"],
    answer: 1,
    explanation: "Three ₹10 notes = ₹30. Two ₹5 coins = ₹10. Total = ₹30 + ₹10 = ₹40."
  },
  {
    id: "imo-7-4",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Medium",
    question: "A notebook costs ₹35. You give a ₹50 note to the shopkeeper. How much change will you get back?",
    options: ["₹25", "₹10", "₹15", "₹20"],
    answer: 2,
    explanation: "₹50 - ₹35 = ₹15 change."
  },
  {
    id: "imo-7-5",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Medium",
    question: "If one pen costs ₹8, what will be the cost of 5 such pens?",
    options: ["₹45", "₹48", "₹35", "₹40"],
    answer: 3,
    explanation: "5 x ₹8 = ₹40."
  },
  {
    id: "imo-7-6",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Hard",
    question: "Pooja wants to buy a toy car for ₹85. She currently has ₹60. How much more money does she need?",
    options: ["₹25", "₹35", "₹15", "₹20"],
    answer: 0,
    explanation: "₹85 - ₹60 = ₹25 more needed."
  },
  {
    id: "imo-7-7",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Easy",
    question: "Which of the following is the SMALLEST amount of money?",
    options: ["₹5", "50 paise", "₹2", "₹10"],
    answer: 1,
    explanation: "50 paise is half of 1 rupee, which is smaller than ₹2, ₹5, and ₹10."
  },
  {
    id: "imo-7-8",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Hard",
    question: "Sanya bought an ice cream for ₹25 and a packet of chips for ₹15. She gave a ₹100 note. How much balance did she receive?",
    options: ["₹60", "₹70", "₹40", "₹50"],
    answer: 0,
    explanation: "Total spent = ₹25 + ₹15 = ₹40. Balance returned = ₹100 - ₹40 = ₹60."
  },
  {
    id: "imo-7-9",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Medium",
    question: "How many ₹20 notes make ₹100?",
    options: ["4", "5", "6", "10"],
    answer: 1,
    explanation: "20 x 5 = 100 (Five ₹20 notes)."
  },
  {
    id: "imo-7-10",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Medium",
    question: "Which combination of notes makes exactly ₹75?",
    options: ["Three ₹20 notes", "One ₹50 note and one ₹20 note", "One ₹50 note, one ₹20 note, and one ₹5 coin", "Two ₹20 notes and one ₹10 note"],
    answer: 2,
    explanation: "₹50 + ₹20 + ₹5 = ₹75."
  },

  // ==========================================
  // SET 8: 2D & 3D Geometrical Shapes (10 Qs)
  // ==========================================
  {
    id: "imo-8-1",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Easy",
    question: "Which 2D shape has 3 sides and 3 corners (vertices)?",
    options: ["Triangle", "Rectangle", "Circle", "Square"],
    answer: 0,
    explanation: "A triangle has exactly 3 sides and 3 corners."
  },
  {
    id: "imo-8-2",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Easy",
    question: "A shape that has NO straight sides and NO corners is a:",
    options: ["Rectangle", "Circle", "Square", "Diamond"],
    answer: 1,
    explanation: "A circle is a round curved shape with zero corners and zero straight sides."
  },
  {
    id: "imo-8-3",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Medium",
    question: "In a SQUARE, which of the following is TRUE?",
    options: ["It has curved sides", "Opposite sides are different lengths", "All 4 sides are equal in length", "It has only 3 corners"],
    answer: 2,
    explanation: "In a square, all four sides are straight and exactly equal in length."
  },
  {
    id: "imo-8-4",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Medium",
    question: "What 3D solid shape does a standard playing dice resemble?",
    options: ["Cylinder", "Cone", "Sphere", "Cube"],
    answer: 3,
    explanation: "A dice is shaped like a cube with 6 square faces."
  },
  {
    id: "imo-8-5",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Medium",
    question: "What 3D shape is an unsharpened round pencil or a soda can?",
    options: ["Cylinder", "Cube", "Cone", "Sphere"],
    answer: 0,
    explanation: "A cylinder has two circular flat ends and one curved surface."
  },
  {
    id: "imo-8-6",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Easy",
    question: "What 3D shape does a basketball resemble?",
    options: ["Cube", "Sphere", "Cone", "Cuboid"],
    answer: 1,
    explanation: "A basketball is completely round in three dimensions, which is a sphere."
  },
  {
    id: "imo-8-7",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Hard",
    question: "How many flat faces does a CUBE have?",
    options: ["12", "4", "6", "8"],
    answer: 2,
    explanation: "A cube has 6 square flat faces (top, bottom, front, back, left, right)."
  },
  {
    id: "imo-8-8",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Medium",
    question: "A birthday party hat is an example of which 3D shape?",
    options: ["Sphere", "Cuboid", "Cylinder", "Cone"],
    answer: 3,
    explanation: "A party hat has a circular base and tapers to a pointed top, which is a cone."
  },
  {
    id: "imo-8-9",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Hard",
    question: "How many corners (vertices) does a standard RECTANGLE have?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "A rectangle has 4 corners where its sides meet at right angles."
  },
  {
    id: "imo-8-10",
    subject: "IMO",
    set: 8,
    topic: "Geometrical Shapes & Solids",
    difficulty: "Medium",
    question: "A matchbox or a brick is an example of a:",
    options: ["Sphere", "Cone", "Cube", "Cuboid"],
    answer: 3,
    explanation: "A matchbox has rectangular faces, making it a cuboid."
  },

  // ==========================================
  // SET 9: Patterns (10 Qs)
  // ==========================================
  {
    id: "imo-9-1",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Easy",
    question: "Complete the repeating pattern:  🔺, 🔵, 🔺, 🔵, 🔺, [ ? ]",
    options: ["🔺", "🔵", "⭐", "⬛"],
    answer: 1,
    explanation: "The pattern alternates between Triangle and Circle. After triangle comes Circle (🔵)."
  },
  {
    id: "imo-9-2",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Easy",
    question: "Find the missing number in the sequence: 5, 10, 15, 20, [ ? ], 30",
    options: ["22", "24", "25", "28"],
    answer: 2,
    explanation: "Counting by 5s: 20 + 5 = 25."
  },
  {
    id: "imo-9-3",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Medium",
    question: "Which of the following is the ODD ONE OUT?",
    options: ["Truck", "Car", "Bus", "Aeroplane"],
    answer: 3,
    explanation: "Car, Bus, and Truck travel on land roads, while an Aeroplane flies in the air."
  },
  {
    id: "imo-9-4",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Medium",
    question: "Identify the pattern rule and find the next number: 80, 70, 60, 50, [ ? ]",
    options: ["40", "45", "10", "30"],
    answer: 0,
    explanation: "The numbers are decreasing by 10 each time: 50 - 10 = 40."
  },
  {
    id: "imo-9-5",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Medium",
    question: "Complete the letter series: AB, BC, CD, DE, [ ? ]",
    options: ["FA", "EF", "FG", "EE"],
    answer: 1,
    explanation: "Each pair starts with the second letter of the previous pair: D-E is followed by E-F."
  },
  {
    id: "imo-9-6",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Hard",
    question: "In a running race of 5 friends, Ananya finished behind Priya but ahead of Tanvi. If Priya came 1st, what position did Ananya finish?",
    options: ["4th", "1st", "2nd", "3rd"],
    answer: 2,
    explanation: "Priya is 1st. Ananya is right behind Priya and ahead of Tanvi, so Ananya is 2nd!"
  },
  {
    id: "imo-9-7",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Medium",
    question: "If CAT is coded as 3-1-20 (based on letter positions A=1, B=2, C=3...), how is DOG coded?",
    options: ["4-14-7", "5-15-7", "4-15-8", "4-15-7"],
    answer: 3,
    explanation: "D is 4th letter, O is 15th letter, and G is 7th letter -> 4-15-7."
  },
  {
    id: "imo-9-8",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Hard",
    question: "Look at the numbers: 2, 6, 10, 14, 18. What is the rule of this pattern?",
    options: ["Add 4 each time", "Multiply by 3", "Subtract 4", "Add 2 each time"],
    answer: 0,
    explanation: "2 + 4 = 6; 6 + 4 = 10; 10 + 4 = 14; 14 + 4 = 18. The rule is 'Add 4'."
  },
  {
    id: "imo-9-9",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Medium",
    question: "Which figure completes the relationship?  Circle is to Ball as Square is to [ ? ]",
    options: ["Cylinder", "Cube", "Cone", "Circle"],
    answer: 1,
    explanation: "A ball is the 3D form of a circle (sphere), just as a cube is the 3D form of a square."
  },
  {
    id: "imo-9-10",
    subject: "IMO",
    set: 9,
    topic: "Patterns",
    difficulty: "Hard",
    question: "There are 4 children standing in a row: Rahul, Amit, Dev, and Samar. Rahul is at the left end. Samar is at the right end. Amit is between Rahul and Dev. Who is standing 3rd from the left?",
    options: ["Dev", "Samar", "Rahul", "Amit"],
    answer: 0,
    explanation: "From left to right: 1st Rahul, 2nd Amit, 3rd Dev, 4th Samar. So Dev is 3rd from the left!"
  },

  // ==========================================
  // SET 10: Achievers Section (HOTS) (10 Qs)
  // ==========================================
  {
    id: "imo-10-1",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "If 1 Apple + 1 Apple = 10, and 1 Apple + 1 Banana = 9, what is the value of 1 Banana?",
    options: ["6", "3", "4", "5"],
    answer: 2,
    explanation: "Two apples = 10, so 1 Apple = 5. Since 5 + Banana = 9, Banana = 9 - 5 = 4!"
  },
  {
    id: "imo-10-2",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "A clock shows 3:15. Where does the minute hand point, and how many minutes past the hour is it?",
    options: ["Points at 6, 30 minutes past", "Points at 9, 45 minutes past", "Points at 12, 60 minutes past", "Points at 3, 15 minutes past"],
    answer: 3,
    explanation: "Each number on a clock is 5 minutes. The minute hand on 3 means 3 x 5 = 15 minutes past the hour."
  },
  {
    id: "imo-10-3",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Look at the addition puzzle:  4 ⭐ + ⭐ 2 = 7 5. What digit does ⭐ represent?",
    options: ["3", "2", "5", "4"],
    answer: 0,
    explanation: "Check the ones place first: ⭐ + 2 ends in 5, so ⭐ must be 3 (because 3 + 2 = 5). Now check the tens place: 4 + 3 = 7. Verify: 43 + 32 = 75. So ⭐ = 3!"
  },
  {
    id: "imo-10-4",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Solve the balance scale puzzle: 2 Toy Cars balance with 6 Marbles. How many Marbles will balance with 3 Toy Cars?",
    options: ["8 marbles", "9 marbles", "10 marbles", "12 marbles"],
    answer: 1,
    explanation: "2 cars = 6 marbles, so 1 car = 3 marbles. Therefore, 3 cars = 3 x 3 = 9 marbles!"
  },
  {
    id: "imo-10-5",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Varun has ₹100. He wants to buy 3 packs of crayons costing ₹30 each. Does he have enough money?",
    options: [
      "No, he needs ₹10 more",
      "No, he needs ₹20 more",
      "Yes, and he will have ₹10 left",
      "Yes, and he will have ₹20 left"
    ],
    answer: 2,
    explanation: "Cost of 3 crayon packs = 3 x ₹30 = ₹90. Since he has ₹100, ₹100 - ₹90 = ₹10 left!"
  },
  {
    id: "imo-10-6",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "How many TRIANGLES are there in the given figure where a square is divided by both diagonals into 4 parts?",
    options: ["10", "4", "6", "8"],
    answer: 3,
    explanation: "There are 4 small single triangles + 4 composite triangles formed by joining two adjacent halves = 8 triangles in total!"
  },
  {
    id: "imo-10-7",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "A caterpillar climbs up a 10-meter wall. Every day it climbs up 3 meters, but during the night it slips down 1 meter. On which day will it reach the top?",
    options: ["5th day", "6th day", "7th day", "4th day"],
    answer: 0,
    explanation: "Net gain per day = 3 - 1 = 2 m. End of Day 1: 2m. Day 2: 4m. Day 3: 6m. Day 4: 8m. On Day 5 it climbs from 8m up 3m and reaches the 10m top before night, so it never slips back!"
  },
  {
    id: "imo-10-8",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Which of the following calculations gives the SMALLEST result?",
    options: ["6 x 8", "120 - 75", "25 + 25", "100 - 45"],
    answer: 1,
    explanation: "25+25 = 50; 100-45 = 55; 6x8 = 48; 120-75 = 45. 45 is the smallest!"
  },
  {
    id: "imo-10-9",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "A box of chocolates has 4 rows with 6 chocolates in each row. If Tina and her 2 friends share all chocolates equally, how many chocolates does each child get?",
    options: ["12", "6", "8", "9"],
    answer: 2,
    explanation: "Total chocolates = 4 x 6 = 24. There are 3 children (Tina + 2 friends). 24 / 3 = 8 chocolates each!"
  },
  {
    id: "imo-10-10",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Find the 3-digit number: The digit in hundreds place is 5. The digit in tens place is 1 more than hundreds place. The digit in ones place is half of tens place.",
    options: ["564", "573", "562", "563"],
    answer: 3,
    explanation: "Hundreds place = 5. Tens place = 5 + 1 = 6. Ones place = half of 6 = 3. So the number is 563!"
  },

  // ==========================================
  // SET 11: Number Sense (10 Questions)
  // ==========================================
  {
      "id": "imo-11-1",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Medium",
      "question": "Which of the following represents the expanded form of 684?",
      "options": [
          "600 + 80 + 4",
          "60 + 80 + 4",
          "600 + 8 + 4",
          "6 + 8 + 4"
      ],
      "answer": 0,
      "explanation": "684 has 6 hundreds (600), 8 tens (80), and 4 ones (4). So, 684 = 600 + 80 + 4."
  },
  {
      "id": "imo-11-2",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Medium",
      "question": "What is the difference between the place value and face value of digit 5 in 758?",
      "options": [
          "58",
          "45",
          "50",
          "5"
      ],
      "answer": 1,
      "explanation": "In 758, the digit 5 is in the tens place, so its place value is 50. The face value is 5. Difference = 50 - 5 = 45."
  },
  {
      "id": "imo-11-3",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Medium",
      "question": "Which of the following numbers is an EVEN number?",
      "options": [
          "347",
          "591",
          "468",
          "825"
      ],
      "answer": 2,
      "explanation": "Even numbers end in 0, 2, 4, 6, or 8. The number 468 ends in 8, making it an even number."
  },
  {
      "id": "imo-11-4",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Medium",
      "question": "Which of the following is the predecessor (the number just before) of 500?",
      "options": [
          "501",
          "490",
          "409",
          "499"
      ],
      "answer": 3,
      "explanation": "The predecessor of a number is obtained by subtracting 1: 500 - 1 = 499."
  },
  {
      "id": "imo-11-5",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Medium",
      "question": "What is the smallest 3-digit number that can be formed using the digits 7, 0, and 4 without repeating any digit?",
      "options": [
          "407",
          "047",
          "470",
          "704"
      ],
      "answer": 0,
      "explanation": "A 3-digit number cannot begin with 0. The smallest non-zero digit is 4, followed by 0 and 7. Thus, the smallest number is 407."
  },
  {
      "id": "imo-11-6",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Medium",
      "question": "How many tens are there in the number 360?",
      "options": [
          "6",
          "36",
          "3",
          "360"
      ],
      "answer": 1,
      "explanation": "360 divided by 10 is 36. Therefore, there are exactly 36 tens in 360."
  },
  {
      "id": "imo-11-7",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Hard",
      "question": "Which symbol makes the given statement TRUE?\n4 Hundreds + 7 Tens [ ? ] 470",
      "options": [
          ">",
          "<",
          "=",
          "+"
      ],
      "answer": 2,
      "explanation": "4 Hundreds = 400. 7 Tens = 70. 400 + 70 = 470. Therefore, 470 = 470."
  },
  {
      "id": "imo-11-8",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Hard",
      "question": "Arrange the numbers in ASCENDING order (smallest to greatest):\n345, 543, 354, 435",
      "options": [
          "543, 435, 354, 345",
          "354, 345, 435, 543",
          "345, 435, 354, 543",
          "345, 354, 435, 543"
      ],
      "answer": 3,
      "explanation": "Comparing the values: 345 < 354 < 435 < 543. Hence the correct ascending order is 345, 354, 435, 543."
  },
  {
      "id": "imo-11-9",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Hard",
      "question": "I am a 3-digit number. My hundreds digit is 6. My ones digit is 3 more than my hundreds digit, and my tens digit is 0. Who am I?",
      "options": [
          "609",
          "690",
          "906",
          "639"
      ],
      "answer": 0,
      "explanation": "Hundreds digit = 6, Tens digit = 0, Ones digit = 6 + 3 = 9. Putting the digits together gives 609."
  },
  {
      "id": "imo-11-10",
      "subject": "IMO",
      "set": 11,
      "topic": "Number Sense",
      "difficulty": "Hard",
      "question": "How many numbers between 101 and 120 have the digit 5 in their ones place?",
      "options": [
          "1",
          "2",
          "3",
          "4"
      ],
      "answer": 1,
      "explanation": "The numbers between 101 and 120 ending in 5 are 105 and 115. That is exactly 2 numbers."
  },

  // ==========================================
  // SET 12: Addition (10 Questions)
  // ==========================================
  {
      "id": "imo-12-1",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Medium",
      "question": "What is the sum of 348 and 227?",
      "options": [
          "565",
          "574",
          "575",
          "675"
      ],
      "answer": 2,
      "explanation": "Adding ones: 8 + 7 = 15 (5, carry 1). Adding tens: 4 + 2 + 1 = 7. Adding hundreds: 3 + 2 = 5. Result = 575."
  },
  {
      "id": "imo-12-2",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Medium",
      "question": "Riya has 45 red beads and 38 blue beads. How many beads does she have in all?",
      "options": [
          "73",
          "81",
          "82",
          "83"
      ],
      "answer": 3,
      "explanation": "Total beads = 45 + 38 = 83 beads."
  },
  {
      "id": "imo-12-3",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Medium",
      "question": "Find the missing number in the box: 56 + [ ? ] = 92",
      "options": [
          "36",
          "38",
          "46",
          "48"
      ],
      "answer": 0,
      "explanation": "To find the missing addend: 92 - 56 = 36."
  },
  {
      "id": "imo-12-4",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Medium",
      "question": "A library has 142 English storybooks, 125 Hindi storybooks, and 30 Math puzzle books. What is the total number of books?",
      "options": [
          "287",
          "297",
          "267",
          "307"
      ],
      "answer": 1,
      "explanation": "142 + 125 + 30 = 297 books in total."
  },
  {
      "id": "imo-12-5",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Medium",
      "question": "What is 100 more than 489?",
      "options": [
          "389",
          "499",
          "589",
          "599"
      ],
      "answer": 2,
      "explanation": "100 more than 489 means 489 + 100 = 589."
  },
  {
      "id": "imo-12-6",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Hard",
      "question": "If 35 + 45 = 20 + [ ? ], what is the value in the box?",
      "options": [
          "50",
          "70",
          "80",
          "60"
      ],
      "answer": 3,
      "explanation": "Left side: 35 + 45 = 80. For the right side to equal 80: 80 - 20 = 60."
  },
  {
      "id": "imo-12-7",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Hard",
      "question": "A fruit seller sold 65 apples in the morning and 78 apples in the evening. How many apples were sold altogether?",
      "options": [
          "143",
          "133",
          "153",
          "142"
      ],
      "answer": 0,
      "explanation": "Total apples sold = 65 + 78 = 143."
  },
  {
      "id": "imo-12-8",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Hard",
      "question": "Find the sum of the place values of 4 and 6 in the number 462.",
      "options": [
          "46",
          "460",
          "406",
          "462"
      ],
      "answer": 1,
      "explanation": "In 462, place value of 4 is 400 and place value of 6 is 60. Sum = 400 + 60 = 460."
  },
  {
      "id": "imo-12-9",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Hard",
      "question": "Add the greatest 2-digit number and the smallest 3-digit number.",
      "options": [
          "109",
          "189",
          "199",
          "200"
      ],
      "answer": 2,
      "explanation": "Greatest 2-digit number is 99. Smallest 3-digit number is 100. Sum = 99 + 100 = 199."
  },
  {
      "id": "imo-12-10",
      "subject": "IMO",
      "set": 12,
      "topic": "Addition",
      "difficulty": "Hard",
      "question": "Arjun scored 54 points in Game 1 and 68 points in Game 2. Rohan scored 130 points in total. Who scored more points and by how much?",
      "options": [
          "Arjun scored 8 more points",
          "Both scored the same points",
          "Arjun scored 12 more points",
          "Rohan scored 8 more points"
      ],
      "answer": 3,
      "explanation": "Arjun's total score = 54 + 68 = 122. Rohan's score = 130. Rohan scored more: 130 - 122 = 8 more points."
  },

  // ==========================================
  // SET 13: Subtraction (10 Questions)
  // ==========================================
  {
      "id": "imo-13-1",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Medium",
      "question": "What is 75 - 28?",
      "options": [
          "47",
          "57",
          "43",
          "53"
      ],
      "answer": 0,
      "explanation": "Regrouping 75: 15 - 8 = 7, and 6 - 2 = 4. So 75 - 28 = 47."
  },
  {
      "id": "imo-13-2",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Medium",
      "question": "A baker baked 85 cupcakes. He sold 59 cupcakes. How many cupcakes are left?",
      "options": [
          "36",
          "26",
          "24",
          "34"
      ],
      "answer": 1,
      "explanation": "Cupcakes left = 85 - 59 = 26 cupcakes."
  },
  {
      "id": "imo-13-3",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Medium",
      "question": "What is 500 minus 145?",
      "options": [
          "345",
          "365",
          "355",
          "455"
      ],
      "answer": 2,
      "explanation": "500 - 145 = 355."
  },
  {
      "id": "imo-13-4",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Medium",
      "question": "There are 92 students in Grade 2. If 48 of them are girls, how many boys are there?",
      "options": [
          "54",
          "42",
          "46",
          "44"
      ],
      "answer": 3,
      "explanation": "Number of boys = Total students - Girls = 92 - 48 = 44 boys."
  },
  {
      "id": "imo-13-5",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Medium",
      "question": "Find the value of P if: 80 - P = 33",
      "options": [
          "47",
          "57",
          "37",
          "53"
      ],
      "answer": 0,
      "explanation": "To find P: P = 80 - 33 = 47."
  },
  {
      "id": "imo-13-6",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Hard",
      "question": "How much is 640 greater than 390?",
      "options": [
          "350",
          "250",
          "260",
          "340"
      ],
      "answer": 1,
      "explanation": "Difference = 640 - 390 = 250."
  },
  {
      "id": "imo-13-7",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Hard",
      "question": "A train had 150 passengers. At the first station, 35 passengers got off and 20 new passengers boarded. How many passengers are on the train now?",
      "options": [
          "125",
          "145",
          "135",
          "115"
      ],
      "answer": 2,
      "explanation": "After 35 got off: 150 - 35 = 115. After 20 boarded: 115 + 20 = 135 passengers."
  },
  {
      "id": "imo-13-8",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Hard",
      "question": "Which of the following expressions gives a result equal to 50?",
      "options": [
          "100 - 40",
          "85 - 25",
          "90 - 30",
          "75 - 25"
      ],
      "answer": 3,
      "explanation": "75 - 25 = 50. (Other options: 100 - 40 = 60, 85 - 25 = 60, 90 - 30 = 60)."
  },
  {
      "id": "imo-13-9",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Hard",
      "question": "Sam had ₹95. He bought a notebook for ₹38 and an eraser for ₹12. How much money does he have left?",
      "options": [
          "₹45",
          "₹55",
          "₹35",
          "₹50"
      ],
      "answer": 0,
      "explanation": "Total spent = ₹38 + ₹12 = ₹50. Money left = ₹95 - ₹50 = ₹45."
  },
  {
      "id": "imo-13-10",
      "subject": "IMO",
      "set": 13,
      "topic": "Subtraction",
      "difficulty": "Hard",
      "question": "Subtract the smallest 2-digit number from the greatest 3-digit number.",
      "options": [
          "990",
          "989",
          "980",
          "909"
      ],
      "answer": 1,
      "explanation": "Greatest 3-digit number = 999. Smallest 2-digit number = 10. Difference = 999 - 10 = 989."
  },

  // ==========================================
  // SET 14: Length, Weight & Capacity (10 Questions)
  // ==========================================
  {
      "id": "imo-14-1",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Medium",
      "question": "Which of the following units is most suitable to measure the length of a pencil?",
      "options": [
          "Kilometer (km)",
          "Meter (m)",
          "Centimeter (cm)",
          "Kilogram (kg)"
      ],
      "answer": 2,
      "explanation": "Small objects like pencils and erasers are measured in centimeters (cm)."
  },
  {
      "id": "imo-14-2",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Medium",
      "question": "How many grams (g) make up 1 kilogram (kg)?",
      "options": [
          "10 g",
          "100 g",
          "500 g",
          "1000 g"
      ],
      "answer": 3,
      "explanation": "1 kilogram equals exactly 1000 grams."
  },
  {
      "id": "imo-14-3",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Medium",
      "question": "A jug holds 2 liters of water. How many 500 ml glasses of water are needed to fill the jug?",
      "options": [
          "4 glasses",
          "2 glasses",
          "3 glasses",
          "5 glasses"
      ],
      "answer": 0,
      "explanation": "1 liter = 1000 ml, so 2 liters = 2000 ml. Each glass is 500 ml. 2000 ÷ 500 = 4 glasses."
  },
  {
      "id": "imo-14-4",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Medium",
      "question": "A rope is 15 meters long. Kabir cuts off a 7-meter piece. What is the length of the remaining rope?",
      "options": [
          "7 meters",
          "8 meters",
          "9 meters",
          "22 meters"
      ],
      "answer": 1,
      "explanation": "Remaining length = 15 m - 7 m = 8 meters."
  },
  {
      "id": "imo-14-5",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Medium",
      "question": "On a pan balance, 1 watermelon balances 4 mangoes. If each mango weighs 200 grams, what is the weight of the watermelon?",
      "options": [
          "600 grams",
          "700 grams",
          "800 grams",
          "1000 grams"
      ],
      "answer": 2,
      "explanation": "Weight of watermelon = 4 × 200 g = 800 grams."
  },
  {
      "id": "imo-14-6",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Hard",
      "question": "Which of the following containers has the LARGEST capacity?",
      "options": [
          "Teaspoon",
          "Coffee mug",
          "Water glass",
          "Water bucket"
      ],
      "answer": 3,
      "explanation": "A water bucket can hold 10 to 20 liters of water, far more than a mug, glass, or spoon."
  },
  {
      "id": "imo-14-7",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Hard",
      "question": "How many centimeters are there in 3 meters?",
      "options": [
          "300 cm",
          "30 cm",
          "3000 cm",
          "3 cm"
      ],
      "answer": 0,
      "explanation": "1 meter = 100 cm. Therefore, 3 meters = 3 × 100 cm = 300 cm."
  },
  {
      "id": "imo-14-8",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Hard",
      "question": "Bag A weighs 14 kg. Bag B is 6 kg heavier than Bag A. What is the total weight of both bags together?",
      "options": [
          "20 kg",
          "34 kg",
          "28 kg",
          "32 kg"
      ],
      "answer": 1,
      "explanation": "Weight of Bag A = 14 kg. Weight of Bag B = 14 + 6 = 20 kg. Total weight = 14 + 20 = 34 kg."
  },
  {
      "id": "imo-14-9",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Hard",
      "question": "A bottle contains 750 ml of juice. Tina drinks 250 ml of juice. How much juice is left in the bottle?",
      "options": [
          "400 ml",
          "600 ml",
          "500 ml",
          "450 ml"
      ],
      "answer": 2,
      "explanation": "Juice left = 750 ml - 250 ml = 500 ml."
  },
  {
      "id": "imo-14-10",
      "subject": "IMO",
      "set": 14,
      "topic": "Length, Weight & Capacity",
      "difficulty": "Hard",
      "question": "An eraser is 4 paperclips long. A pencil is 3 times as long as the eraser. How many paperclips long is the pencil?",
      "options": [
          "7 paperclips",
          "10 paperclips",
          "16 paperclips",
          "12 paperclips"
      ],
      "answer": 3,
      "explanation": "Length of pencil = 3 × 4 paperclips = 12 paperclips."
  },

  // ==========================================
  // SET 15: Time & Calendar (10 Questions)
  // ==========================================
  {
      "id": "imo-15-1",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Medium",
      "question": "How many minutes are there in 1 hour?",
      "options": [
          "60 minutes",
          "100 minutes",
          "24 minutes",
          "30 minutes"
      ],
      "answer": 0,
      "explanation": "There are exactly 60 minutes in one hour."
  },
  {
      "id": "imo-15-2",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Medium",
      "question": "If the hour hand is pointing at 4 and the minute hand is pointing at 6, what time does the clock show?",
      "options": [
          "4:00",
          "4:30 (Half past 4)",
          "6:20",
          "4:15"
      ],
      "answer": 1,
      "explanation": "When the minute hand points to 6, it indicates 30 minutes (half past). The hour hand is past 4, so the time is 4:30."
  },
  {
      "id": "imo-15-3",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Medium",
      "question": "Which of the following months has exactly 30 days?",
      "options": [
          "January",
          "March",
          "April",
          "July"
      ],
      "answer": 2,
      "explanation": "April, June, September, and November have 30 days. January, March, and July have 31 days."
  },
  {
      "id": "imo-15-4",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Medium",
      "question": "If yesterday was Tuesday, what day will tomorrow be?",
      "options": [
          "Wednesday",
          "Monday",
          "Friday",
          "Thursday"
      ],
      "answer": 3,
      "explanation": "If yesterday was Tuesday, today is Wednesday. Tomorrow will be Thursday."
  },
  {
      "id": "imo-15-5",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Medium",
      "question": "How many days are there in a non-leap year?",
      "options": [
          "365 days",
          "366 days",
          "360 days",
          "364 days"
      ],
      "answer": 0,
      "explanation": "A regular (non-leap) calendar year has 365 days. A leap year has 366 days."
  },
  {
      "id": "imo-15-6",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Hard",
      "question": "School starts at 8:00 AM. Aryan reaches school 15 minutes early. At what time does Aryan reach school?",
      "options": [
          "8:15 AM",
          "7:45 AM",
          "8:45 AM",
          "7:15 AM"
      ],
      "answer": 1,
      "explanation": "15 minutes before 8:00 AM is 7:45 AM."
  },
  {
      "id": "imo-15-7",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Hard",
      "question": "How many hours are there in 3 complete days?",
      "options": [
          "36 hours",
          "48 hours",
          "72 hours",
          "96 hours"
      ],
      "answer": 2,
      "explanation": "1 day has 24 hours. In 3 days: 3 × 24 = 72 hours."
  },
  {
      "id": "imo-15-8",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Hard",
      "question": "In a leap year, how many days are there in the month of February?",
      "options": [
          "28 days",
          "30 days",
          "31 days",
          "29 days"
      ],
      "answer": 3,
      "explanation": "In a leap year, February has an extra day, totaling 29 days."
  },
  {
      "id": "imo-15-9",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Hard",
      "question": "A cartoon movie started at 5:15 PM and lasted for 45 minutes. At what time did the movie finish?",
      "options": [
          "6:00 PM",
          "5:50 PM",
          "6:15 PM",
          "5:45 PM"
      ],
      "answer": 0,
      "explanation": "5:15 PM + 45 minutes: 15 + 45 = 60 minutes = 1 whole hour. So it ended at 6:00 PM."
  },
  {
      "id": "imo-15-10",
      "subject": "IMO",
      "set": 15,
      "topic": "Time & Calendar",
      "difficulty": "Hard",
      "question": "If 4th August is a Sunday, what day of the week will 11th August be?",
      "options": [
          "Saturday",
          "Sunday",
          "Monday",
          "Friday"
      ],
      "answer": 1,
      "explanation": "A week has 7 days: 4 + 7 = 11. Therefore, 11th August will also be a Sunday."
  },

  // ==========================================
  // SET 16: Money (10 Questions)
  // ==========================================
  {
      "id": "imo-16-1",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Medium",
      "question": "How many 50-paise coins make ₹1?",
      "options": [
          "4 coins",
          "1 coin",
          "2 coins",
          "5 coins"
      ],
      "answer": 2,
      "explanation": "₹1 = 100 paise. Two 50-paise coins equal 100 paise (50 + 50 = 100)."
  },
  {
      "id": "imo-16-2",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Medium",
      "question": "A pencil costs ₹8 and a notebook costs ₹25. What is the total cost of 1 pencil and 1 notebook?",
      "options": [
          "₹31",
          "₹32",
          "₹34",
          "₹33"
      ],
      "answer": 3,
      "explanation": "Total cost = ₹8 + ₹25 = ₹33."
  },
  {
      "id": "imo-16-3",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Medium",
      "question": "Aarav gave a ₹50 note to the shopkeeper to buy an ice-cream worth ₹35. How much change should he receive back?",
      "options": [
          "₹15",
          "₹20",
          "₹25",
          "₹10"
      ],
      "answer": 0,
      "explanation": "Change = ₹50 - ₹35 = ₹15."
  },
  {
      "id": "imo-16-4",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Medium",
      "question": "How many ₹5 coins are needed to make an amount of ₹35?",
      "options": [
          "5 coins",
          "7 coins",
          "6 coins",
          "8 coins"
      ],
      "answer": 1,
      "explanation": "35 ÷ 5 = 7. So seven ₹5 coins make ₹35."
  },
  {
      "id": "imo-16-5",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Medium",
      "question": "Which combination of notes makes exactly ₹70?",
      "options": [
          "₹50 + ₹10",
          "₹20 + ₹20 + ₹20",
          "₹50 + ₹20",
          "₹50 + ₹10 + ₹5"
      ],
      "answer": 2,
      "explanation": "₹50 + ₹20 = ₹70."
  },
  {
      "id": "imo-16-6",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Hard",
      "question": "Meera has three ₹10 notes, two ₹5 coins, and four ₹2 coins. How much total money does she have?",
      "options": [
          "₹42",
          "₹46",
          "₹44",
          "₹48"
      ],
      "answer": 3,
      "explanation": "3 × ₹10 = ₹30. 2 × ₹5 = ₹10. 4 × ₹2 = ₹8. Total = 30 + 10 + 8 = ₹48."
  },
  {
      "id": "imo-16-7",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Hard",
      "question": "A toy car costs ₹65 and a ball costs ₹28. If Dev has ₹100, how much money is left with him after buying both?",
      "options": [
          "₹7",
          "₹8",
          "₹9",
          "₹12"
      ],
      "answer": 0,
      "explanation": "Total spent = ₹65 + ₹28 = ₹93. Money left = ₹100 - ₹93 = ₹7."
  },
  {
      "id": "imo-16-8",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Hard",
      "question": "Cost of 1 chocolate is ₹15. What is the cost of 4 such chocolates?",
      "options": [
          "₹45",
          "₹60",
          "₹55",
          "₹65"
      ],
      "answer": 1,
      "explanation": "Cost of 4 chocolates = 4 × ₹15 = ₹60."
  },
  {
      "id": "imo-16-9",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Hard",
      "question": "Rohan wants to buy a book costing ₹120. He currently has one ₹50 note and two ₹20 notes. How much more money does he need?",
      "options": [
          "₹20",
          "₹40",
          "₹30",
          "₹10"
      ],
      "answer": 2,
      "explanation": "Rohan has = ₹50 + (2 × ₹20) = ₹50 + ₹40 = ₹90. Money needed = ₹120 - ₹90 = ₹30."
  },
  {
      "id": "imo-16-10",
      "subject": "IMO",
      "set": 16,
      "topic": "Money",
      "difficulty": "Hard",
      "question": "How many 50-paise coins make ₹5?",
      "options": [
          "5 coins",
          "8 coins",
          "15 coins",
          "10 coins"
      ],
      "answer": 3,
      "explanation": "₹1 = two 50-paise coins. So ₹5 = 5 × 2 = ten 50-paise coins."
  },

  // ==========================================
  // SET 17: Geometrical Shapes (10 Questions)
  // ==========================================
  {
      "id": "imo-17-1",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Medium",
      "question": "How many corners (vertices) does a standard cube have?",
      "options": [
          "8 corners",
          "6 corners",
          "12 corners",
          "4 corners"
      ],
      "answer": 0,
      "explanation": "A cube has 6 faces, 12 edges, and 8 vertices (corners)."
  },
  {
      "id": "imo-17-2",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Medium",
      "question": "Which 3D solid shape looks like an unsharpened pencil battery or a soda tin can?",
      "options": [
          "Cone",
          "Cylinder",
          "Cube",
          "Sphere"
      ],
      "answer": 1,
      "explanation": "A cylinder has two identical flat circular faces and one curved surface, like a tin can."
  },
  {
      "id": "imo-17-3",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Medium",
      "question": "Which of the following objects can ONLY roll and CANNOT slide?",
      "options": [
          "Matchbox",
          "Book",
          "Football",
          "Dice"
      ],
      "answer": 2,
      "explanation": "A football is spherical with only a continuous curved surface and no flat faces, so it can only roll."
  },
  {
      "id": "imo-17-4",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Medium",
      "question": "How many straight sides and corners does a triangle have?",
      "options": [
          "4 sides and 4 corners",
          "2 sides and 3 corners",
          "3 sides and 2 corners",
          "3 sides and 3 corners"
      ],
      "answer": 3,
      "explanation": "A triangle is a 2D closed figure with exactly 3 straight sides and 3 corners."
  },
  {
      "id": "imo-17-5",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Medium",
      "question": "Which 2D shape has 4 sides where all 4 sides are of equal length?",
      "options": [
          "Square",
          "Rectangle",
          "Oval",
          "Triangle"
      ],
      "answer": 0,
      "explanation": "A square has 4 straight sides of equal length and 4 right-angle corners."
  },
  {
      "id": "imo-17-6",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Hard",
      "question": "How many flat circular faces does a cone (like a party birthday hat) have?",
      "options": [
          "2 flat faces",
          "1 flat face",
          "0 flat faces",
          "3 flat faces"
      ],
      "answer": 1,
      "explanation": "A cone has 1 flat circular face at its base, 1 curved surface, and 1 vertex (apex)."
  },
  {
      "id": "imo-17-7",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Hard",
      "question": "Which solid shape has 6 rectangular faces and 12 straight edges, like a brick or shoebox?",
      "options": [
          "Cylinder",
          "Sphere",
          "Cuboid",
          "Cone"
      ],
      "answer": 2,
      "explanation": "A cuboid has 6 faces (usually rectangles), 12 edges, and 8 vertices, like a shoebox or book."
  },
  {
      "id": "imo-17-8",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Hard",
      "question": "A shape has NO straight sides and NO corners. Which shape is it?",
      "options": [
          "Square",
          "Triangle",
          "Hexagon",
          "Circle"
      ],
      "answer": 3,
      "explanation": "A circle is bounded by a continuous curved line and has no corners or straight edges."
  },
  {
      "id": "imo-17-9",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Hard",
      "question": "Which of the following objects can BOTH roll and slide?",
      "options": [
          "A round coin",
          "A glass marble",
          "A rectangular eraser",
          "A building block"
      ],
      "answer": 0,
      "explanation": "A coin has flat faces (which can slide) and a circular edge (which can roll)."
  },
  {
      "id": "imo-17-10",
      "subject": "IMO",
      "set": 17,
      "topic": "Geometrical Shapes & Solids",
      "difficulty": "Hard",
      "question": "How many edges does a cylinder have?",
      "options": [
          "0 edges",
          "2 curved edges",
          "4 straight edges",
          "1 edge"
      ],
      "answer": 1,
      "explanation": "A cylinder has 2 curved edges where the flat circular faces meet the curved surface."
  },

  // ==========================================
  // SET 18: Patterns (10 Questions)
  // ==========================================
  {
      "id": "imo-18-1",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Medium",
      "question": "Find the missing number in the sequence:\n12, 16, 20, 24, [ ? ], 32",
      "options": [
          "26",
          "27",
          "28",
          "30"
      ],
      "answer": 2,
      "explanation": "The pattern adds 4 each time (+4 rule): 24 + 4 = 28."
  },
  {
      "id": "imo-18-2",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Medium",
      "question": "What comes next in the letter sequence?\nA, C, E, G, [ ? ]",
      "options": [
          "H",
          "J",
          "K",
          "I"
      ],
      "answer": 3,
      "explanation": "The pattern skips one letter each step (A -> skip B -> C -> skip D -> E -> skip F -> G -> skip H -> I)."
  },
  {
      "id": "imo-18-3",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Medium",
      "question": "Identify the next number in this backward countdown:\n85, 80, 75, 70, [ ? ]",
      "options": [
          "65",
          "60",
          "68",
          "64"
      ],
      "answer": 0,
      "explanation": "The rule is subtracting 5 each time (-5 rule): 70 - 5 = 65."
  },
  {
      "id": "imo-18-4",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Medium",
      "question": "Look at the pattern: 2, 4, 8, 16, [ ? ]. What is the next number?",
      "options": [
          "24",
          "32",
          "20",
          "30"
      ],
      "answer": 1,
      "explanation": "Each number doubles (multiplies by 2): 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32."
  },
  {
      "id": "imo-18-5",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Medium",
      "question": "Find the missing term:\n10A, 20B, 30C, 40D, [ ? ]",
      "options": [
          "50D",
          "45E",
          "50E",
          "60F"
      ],
      "answer": 2,
      "explanation": "Numbers increase by 10 (10, 20, 30, 40, 50) and letters follow the alphabet (A, B, C, D, E), so the next term is 50E."
  },
  {
      "id": "imo-18-6",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Hard",
      "question": "Find the missing number in the growing pattern:\n5, 7, 10, 14, 19, [ ? ]",
      "options": [
          "23",
          "24",
          "26",
          "25"
      ],
      "answer": 3,
      "explanation": "Differences increase by 1: +2 (5->7), +3 (7->10), +4 (10->14), +5 (14->19). Next is +6: 19 + 6 = 25."
  },
  {
      "id": "imo-18-7",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Hard",
      "question": "Which number completes the pattern?\n101, 104, 107, [ ? ], 113",
      "options": [
          "110",
          "109",
          "111",
          "112"
      ],
      "answer": 0,
      "explanation": "The pattern adds 3 each time (+3 rule): 107 + 3 = 110 (and 110 + 3 = 113)."
  },
  {
      "id": "imo-18-8",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Hard",
      "question": "Observe the repeating pattern of shapes:\nCircle, Square, Triangle, Circle, Square, Triangle, Circle, [ ? ]\nWhich shape comes next?",
      "options": [
          "Circle",
          "Square",
          "Triangle",
          "Star"
      ],
      "answer": 1,
      "explanation": "The repeating core sequence is (Circle, Square, Triangle). After Circle comes Square."
  },
  {
      "id": "imo-18-9",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Hard",
      "question": "Find the missing number in the pattern:\n3, 6, 9, 12, 15, [ ? ]",
      "options": [
          "16",
          "17",
          "18",
          "21"
      ],
      "answer": 2,
      "explanation": "Skip counting by 3 (table of 3): 3, 6, 9, 12, 15, 18."
  },
  {
      "id": "imo-18-10",
      "subject": "IMO",
      "set": 18,
      "topic": "Patterns",
      "difficulty": "Hard",
      "question": "What is the 10th number in the sequence: 4, 8, 12, 16, ...?",
      "options": [
          "36",
          "44",
          "48",
          "40"
      ],
      "answer": 3,
      "explanation": "This is skip-counting by 4 (multiplication table of 4). The 10th number is 10 × 4 = 40."
  },

  // ==========================================
  // SET 19: Pictographs & Data (10 Questions)
  // ==========================================
  {
      "id": "imo-19-1",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Medium",
      "question": "In a pictograph, each 🍎 icon represents 3 apples.\nHow many apples are represented by 5 🍎 icons?",
      "options": [
          "15 apples",
          "8 apples",
          "12 apples",
          "18 apples"
      ],
      "answer": 0,
      "explanation": "Each icon = 3 apples. So 5 icons represent 5 × 3 = 15 apples."
  },
  {
      "id": "imo-19-2",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Medium",
      "question": "In a school survey, each ⭐ represents 5 students.\nIf 4 ⭐ icons are shown for football and 2 ⭐ icons for cricket, how many more students like football than cricket?",
      "options": [
          "5 students",
          "10 students",
          "15 students",
          "20 students"
      ],
      "answer": 1,
      "explanation": "Football = 4 × 5 = 20 students. Cricket = 2 × 5 = 10 students. Difference = 20 - 10 = 10 students."
  },
  {
      "id": "imo-19-3",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Medium",
      "question": "In a chart, 1 🚗 symbol stands for 4 cars.\nIf a parking lot has 24 cars, how many 🚗 symbols should be drawn?",
      "options": [
          "4 symbols",
          "5 symbols",
          "6 symbols",
          "8 symbols"
      ],
      "answer": 2,
      "explanation": "24 cars divided by 4 cars per symbol = 24 ÷ 4 = 6 symbols."
  },
  {
      "id": "imo-19-4",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Medium",
      "question": "The pictograph shows favorite ice-cream flavors where 🍦 = 2 children:\n• Vanilla: 🍦🍦🍦\n• Chocolate: 🍦🍦🍦🍦🍦\nHow many children like Vanilla?",
      "options": [
          "3 children",
          "4 children",
          "8 children",
          "6 children"
      ],
      "answer": 3,
      "explanation": "Vanilla has 3 icons. Since each icon represents 2 children, 3 × 2 = 6 children."
  },
  {
      "id": "imo-19-5",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Medium",
      "question": "In a toy store pictograph, each 🧸 represents 10 teddy bears.\nIf there are 4 🧸 on the shelf, how many teddy bears are there in total?",
      "options": [
          "40 teddy bears",
          "14 teddy bears",
          "30 teddy bears",
          "50 teddy bears"
      ],
      "answer": 0,
      "explanation": "Total teddy bears = 4 × 10 = 40 teddy bears."
  },
  {
      "id": "imo-19-6",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Hard",
      "question": "Four children collected stamps (each ✉️ = 5 stamps):\n• Amit: ✉️✉️\n• Bina: ✉️✉️✉️\n• Charu: ✉️\n• David: ✉️✉️✉️✉️\nWho collected exactly 15 stamps?",
      "options": [
          "Amit",
          "Bina",
          "David",
          "Charu"
      ],
      "answer": 1,
      "explanation": "15 stamps ÷ 5 stamps per symbol = 3 symbols. Bina has 3 ✉️ symbols, representing 3 × 5 = 15 stamps."
  },
  {
      "id": "imo-19-7",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Hard",
      "question": "Referring to the stamps pictograph above (each ✉️ = 5 stamps), how many stamps did all four children collect in total?",
      "options": [
          "45 stamps",
          "40 stamps",
          "50 stamps",
          "55 stamps"
      ],
      "answer": 2,
      "explanation": "Total symbols = 2 (Amit) + 3 (Bina) + 1 (Charu) + 4 (David) = 10 symbols. Total stamps = 10 × 5 = 50 stamps."
  },
  {
      "id": "imo-19-8",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Hard",
      "question": "A table shows birds seen in a park: Sparrows = 18, Pigeons = 12, Parrots = 9.\nHow many birds were seen in all?",
      "options": [
          "36",
          "38",
          "37",
          "39"
      ],
      "answer": 3,
      "explanation": "Total birds = 18 + 12 + 9 = 39 birds."
  },
  {
      "id": "imo-19-9",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Hard",
      "question": "In a library graph, 1 📖 = 10 books. Non-fiction has 3 📖 and Fiction has 7 📖.\nHow many fewer Non-fiction books are there than Fiction books?",
      "options": [
          "40 books",
          "30 books",
          "50 books",
          "20 books"
      ],
      "answer": 0,
      "explanation": "Fiction = 7 × 10 = 70. Non-fiction = 3 × 10 = 30. Difference = 70 - 30 = 40 books."
  },
  {
      "id": "imo-19-10",
      "subject": "IMO",
      "set": 19,
      "topic": "Pictographs & Data",
      "difficulty": "Hard",
      "question": "A farmer harvested pumpkins: Monday = 25, Tuesday = 30, Wednesday = 35.\nIf each 🎃 drawn on a pictograph represents 5 pumpkins, how many 🎃 symbols should be drawn for Wednesday?",
      "options": [
          "6 symbols",
          "7 symbols",
          "5 symbols",
          "8 symbols"
      ],
      "answer": 1,
      "explanation": "Wednesday = 35 pumpkins. 35 ÷ 5 = 7 symbols."
  },

  // ==========================================
  // SET 20: Achievers Section (HOTS) (10 Questions)
  // ==========================================
  {
      "id": "imo-20-1",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "Find the value of 🔷 and ⭐ in the addition puzzle:\n   🔷 4\n + 2 ⭐\n -------\n   7 9\nWhat are the values of 🔷 and ⭐ respectively?",
      "options": [
          "🔷 = 4, ⭐ = 5",
          "🔷 = 5, ⭐ = 4",
          "🔷 = 5, ⭐ = 5",
          "🔷 = 4, ⭐ = 4"
      ],
      "answer": 2,
      "explanation": "Adding ones column: 4 + ⭐ = 9, so ⭐ = 9 - 4 = 5. Adding tens column: 🔷 + 2 = 7, so 🔷 = 7 - 2 = 5. Therefore, 🔷 = 5 and ⭐ = 5."
  },
  {
      "id": "imo-20-2",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "I am a 3-digit number.\n• My hundreds digit is the largest single-digit number.\n• My tens digit is 5 less than my hundreds digit.\n• My ones digit is twice my tens digit.\nWhich number am I?",
      "options": [
          "948",
          "950",
          "848",
          "944"
      ],
      "answer": 0,
      "explanation": "Hundreds digit = 9. Tens digit = 9 - 5 = 4. Ones digit = 4 × 2 = 8. Combining digits gives the 3-digit number 948."
  },
  {
      "id": "imo-20-3",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "Anand has ₹100. He buys:\n• 1 notebook for ₹35\n• 2 pencils at ₹5 each\n• 1 storybook for ₹40\nHow much money does Anand have left?",
      "options": [
          "₹20",
          "₹15",
          "₹25",
          "₹10"
      ],
      "answer": 1,
      "explanation": "Cost of 2 pencils = 2 × 5 = ₹10. Total spent = ₹35 + ₹10 + ₹40 = ₹85. Money left = ₹100 - ₹85 = ₹15."
  },
  {
      "id": "imo-20-4",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "In a balance scale:\n• 1 Melon balances 3 Oranges\n• 1 Orange balances 2 Lemons\nHow many Lemons are needed to balance 2 Melons?",
      "options": [
          "6 Lemons",
          "10 Lemons",
          "12 Lemons",
          "8 Lemons"
      ],
      "answer": 2,
      "explanation": "1 Melon = 3 Oranges. Since 1 Orange = 2 Lemons, 1 Melon = 3 × 2 = 6 Lemons. Therefore, 2 Melons = 2 × 6 = 12 Lemons."
  },
  {
      "id": "imo-20-5",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "Rohan stands in a single line of children. He is 7th from the front and 9th from the back. How many children are there in the line in total?",
      "options": [
          "16 children",
          "14 children",
          "17 children",
          "15 children"
      ],
      "answer": 3,
      "explanation": "Total children = (Position from front + Position from back) - 1 (since Rohan is counted twice) = 7 + 9 - 1 = 15 children."
  },
  {
      "id": "imo-20-6",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "If 🌸 + 🌸 + 🌸 = 27 and 🌸 + 🍀 = 15, what is the value of 🍀 × 2?",
      "options": [
          "12",
          "16",
          "14",
          "18"
      ],
      "answer": 0,
      "explanation": "Three 🌸 = 27, so 🌸 = 27 ÷ 3 = 9. Then 9 + 🍀 = 15, so 🍀 = 15 - 9 = 6. Finally, 🍀 × 2 = 6 × 2 = 12."
  },
  {
      "id": "imo-20-7",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "A clock shows 3:30. How many minutes must pass before the clock shows 4:15?",
      "options": [
          "40 minutes",
          "45 minutes",
          "50 minutes",
          "35 minutes"
      ],
      "answer": 1,
      "explanation": "From 3:30 to 4:00 is 30 minutes. From 4:00 to 4:15 is 15 minutes. Total minutes = 30 + 15 = 45 minutes."
  },
  {
      "id": "imo-20-8",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "Which of the following statements is INCORRECT?",
      "options": [
          "A cylinder has 2 flat circular faces and 1 curved face",
          "A cube has 12 edges and 8 vertices",
          "A sphere has 1 flat surface and 4 straight edges",
          "A cone has 1 vertex and 1 flat face"
      ],
      "answer": 2,
      "explanation": "A sphere has only 1 continuous curved surface with zero flat surfaces and zero edges. Thus, statement C is incorrect."
  },
  {
      "id": "imo-20-9",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "Maya has 5 boxes with 6 crayons in each box. She gives 8 crayons to her friend. How many crayons does Maya have now?",
      "options": [
          "24 crayons",
          "26 crayons",
          "20 crayons",
          "22 crayons"
      ],
      "answer": 3,
      "explanation": "Total crayons in 5 boxes = 5 × 6 = 30 crayons. After giving 8 away: 30 - 8 = 22 crayons remaining."
  },
  {
      "id": "imo-20-10",
      "subject": "IMO",
      "set": 20,
      "topic": "Achievers Section (HOTS)",
      "difficulty": "Hard",
      "question": "What is the sum of the place values of all the digits in the number 784?",
      "options": [
          "784",
          "19",
          "700",
          "780"
      ],
      "answer": 0,
      "explanation": "The sum of the place values of all digits in any number always equals the number itself: 700 + 80 + 4 = 784."
  }
];
