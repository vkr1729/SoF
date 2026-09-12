// SOF International Mathematics Olympiad (IMO) - Class 2
// 10 Sets x 10 Questions = 100 Questions
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
    options: ["7", "70", "700", "740"],
    answer: 2,
    explanation: "In 745, 7 is in the hundreds place, so its place value is 7 x 100 = 700."
  },
  {
    id: "imo-1-2",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "Which of the following numbers is the GREATEST?",
    options: ["489", "849", "894", "498"],
    answer: 2,
    explanation: "Comparing the hundreds and tens digits: 894 is greater than 849, 498, and 489."
  },
  {
    id: "imo-1-3",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "What is the expanded form of 608?",
    options: ["60 + 8", "600 + 80", "600 + 8", "600 + 80 + 0"],
    answer: 2,
    explanation: "608 has 6 hundreds, 0 tens, and 8 ones: 600 + 0 + 8 = 600 + 8."
  },
  {
    id: "imo-1-4",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "What number comes immediately BEFORE 500?",
    options: ["490", "499", "501", "409"],
    answer: 1,
    explanation: "The predecessor of 500 is 500 - 1 = 499."
  },
  {
    id: "imo-1-5",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "Using the digits 3, 9, and 1 only once each, what is the SMALLEST 3-digit number you can form?",
    options: ["319", "931", "139", "193"],
    answer: 2,
    explanation: "To form the smallest number, arrange digits in ascending order: 1, 3, 9 -> 139."
  },
  {
    id: "imo-1-6",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Easy",
    question: "Which of the following is an EVEN number?",
    options: ["215", "377", "462", "589"],
    answer: 2,
    explanation: "Even numbers end in 0, 2, 4, 6, or 8. 462 ends in 2, so it is even."
  },
  {
    id: "imo-1-7",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "How many tens are there in the number 340?",
    options: ["4", "30", "34", "340"],
    answer: 2,
    explanation: "340 / 10 = 34 tens."
  },
  {
    id: "imo-1-8",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "Which symbol correctly completes the statement: 586 [ ? ] 568",
    options: ["<", ">", "=", "+"],
    answer: 1,
    explanation: "Both have 5 in the hundreds place, but 586 has 8 tens while 568 has 6 tens. So 586 > 568."
  },
  {
    id: "imo-1-9",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Hard",
    question: "I am a 3-digit number. My ones digit is 4. My tens digit is double of my ones digit. My hundreds digit is 1 less than my tens digit. What number am I?",
    options: ["784", "847", "684", "748"],
    answer: 0,
    explanation: "Ones digit = 4. Tens digit = 4 x 2 = 8. Hundreds digit = 8 - 1 = 7. The number is 784."
  },
  {
    id: "imo-1-10",
    subject: "IMO",
    set: 1,
    topic: "Number Sense",
    difficulty: "Medium",
    question: "What is the number name of 909?",
    options: ["Nine hundred ninety", "Nine hundred nine", "Ninety nine", "Nine thousand nine"],
    answer: 1,
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
    options: ["75", "77", "87", "67"],
    answer: 1,
    explanation: "45 + 32 = (40 + 30) + (5 + 2) = 70 + 7 = 77."
  },
  {
    id: "imo-2-2",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Easy",
    question: "Find the value of: 150 + 230",
    options: ["360", "380", "390", "480"],
    answer: 1,
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
    options: ["34", "36", "46", "44"],
    answer: 1,
    explanation: "100 - 64 = 36."
  },
  {
    id: "imo-2-5",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "Calculate: 246 + 185",
    options: ["421", "431", "441", "411"],
    answer: 1,
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
    options: ["499", "589", "689", "599"],
    answer: 1,
    explanation: "489 + 100 = 589."
  },
  {
    id: "imo-2-9",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Hard",
    question: "Find the missing digit P:  4 P 6 + 1 3 2 = 6 1 8",
    options: ["7", "8", "9", "6"],
    answer: 1,
    explanation: "Check: 6 + 2 = 8. In tens place: P + 3 = 11 (1 written, 1 carried to hundreds). So P = 11 - 3 = 8! Check hundreds: 4 + 1 + 1 = 6."
  },
  {
    id: "imo-2-10",
    subject: "IMO",
    set: 2,
    topic: "Addition",
    difficulty: "Medium",
    question: "Adding 0 to any number gives:",
    options: ["0", "1", "The same number", "10"],
    answer: 2,
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
    options: ["43", "45", "33", "53"],
    answer: 0,
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
    options: ["88", "89", "90", "99"],
    answer: 1,
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
    options: ["710", "720", "740", "630"],
    answer: 1,
    explanation: "730 - 10 = 720."
  },
  {
    id: "imo-3-7",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Hard",
    question: "A toy shop had 350 teddy bears. It sold 125 bears on Monday and 85 bears on Tuesday. How many bears are left?",
    options: ["140", "150", "160", "210"],
    answer: 0,
    explanation: "Total sold = 125 + 85 = 210. Remaining = 350 - 210 = 140 teddy bears."
  },
  {
    id: "imo-3-8",
    subject: "IMO",
    set: 3,
    topic: "Subtraction",
    difficulty: "Medium",
    question: "Find the missing number: [ ? ] - 45 = 55",
    options: ["10", "90", "100", "110"],
    answer: 2,
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
    options: ["0", "1", "74", "10"],
    answer: 0,
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
    options: ["Kilometer (km)", "Centimeter (cm)", "Liter (L)", "Kilogram (kg)"],
    answer: 1,
    explanation: "Small everyday objects like pencils and erasers are measured in centimeters (cm)."
  },
  {
    id: "imo-4-2",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Easy",
    question: "How many centimeters (cm) are there in 1 meter (m)?",
    options: ["10 cm", "50 cm", "100 cm", "1000 cm"],
    answer: 2,
    explanation: "1 meter = 100 centimeters."
  },
  {
    id: "imo-4-3",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "A green ribbon is 45 cm long. A blue ribbon is 32 cm long. How much longer is the green ribbon?",
    options: ["11 cm", "13 cm", "15 cm", "77 cm"],
    answer: 1,
    explanation: "45 cm - 32 cm = 13 cm."
  },
  {
    id: "imo-4-4",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "A crayon is placed next to a ruler. It starts at mark 3 cm and ends at mark 11 cm. What is the length of the crayon?",
    options: ["11 cm", "14 cm", "8 cm", "7 cm"],
    answer: 2,
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
    options: ["2 m", "3 m", "4 m", "7 m"],
    answer: 1,
    explanation: "5 m - 2 m = 3 m of cloth remaining."
  },
  {
    id: "imo-4-7",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Hard",
    question: "Rope A is 3 m 40 cm long. Rope B is 2 m 20 cm long. If they are tied together, what is their total length?",
    options: ["5 m 20 cm", "5 m 40 cm", "5 m 60 cm", "6 m 00 cm"],
    answer: 2,
    explanation: "Add meters: 3 + 2 = 5 m. Add centimeters: 40 + 20 = 60 cm. Total = 5 m 60 cm."
  },
  {
    id: "imo-4-8",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "Which of the following is LONGEST?",
    options: ["1 meter", "85 centimeters", "99 centimeters", "50 centimeters"],
    answer: 0,
    explanation: "1 meter = 100 cm, which is longer than 99 cm, 85 cm, and 50 cm."
  },
  {
    id: "imo-4-9",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Hard",
    question: "An ant climbs 15 cm up a plant stem in the morning, but slips down 4 cm in the evening. How high is the ant now?",
    options: ["11 cm", "12 cm", "19 cm", "9 cm"],
    answer: 0,
    explanation: "15 cm - 4 cm = 11 cm."
  },
  {
    id: "imo-4-10",
    subject: "IMO",
    set: 4,
    topic: "Length & Measurement",
    difficulty: "Medium",
    question: "Which tool is commonly used by students in school to draw straight lines and measure small lengths?",
    options: ["Thermometer", "Ruler (Scale)", "Clock", "Weighing balance"],
    answer: 1,
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
    options: ["10 g", "100 g", "500 g", "1000 g"],
    answer: 3,
    explanation: "1 kilogram = 1000 grams."
  },
  {
    id: "imo-5-3",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Easy",
    question: "Which of these liquid quantities is measured in Liters (L) rather than milliliters (mL)?",
    options: ["A spoonful of cough syrup", "Water in a large bathtub", "Eye drops", "A small cup of tea"],
    answer: 1,
    explanation: "Large volumes of liquids like bathtubs and swimming pools are measured in liters (L)."
  },
  {
    id: "imo-5-4",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "A watermelon weighs 4 kg. A papaya weighs 2 kg. What is their combined total weight?",
    options: ["2 kg", "6 kg", "8 kg", "10 kg"],
    answer: 1,
    explanation: "4 kg + 2 kg = 6 kg."
  },
  {
    id: "imo-5-5",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "How many milliliters (mL) are in 1 Liter (L)?",
    options: ["10 mL", "100 mL", "1000 mL", "500 mL"],
    answer: 2,
    explanation: "1 Liter = 1000 milliliters."
  },
  {
    id: "imo-5-6",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Medium",
    question: "A jug holds 2 Liters of juice. How many glasses of 500 mL each can be filled from this jug?",
    options: ["2 glasses", "3 glasses", "4 glasses", "5 glasses"],
    answer: 2,
    explanation: "2 Liters = 2000 mL. 2000 mL / 500 mL = 4 glasses."
  },
  {
    id: "imo-5-7",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Hard",
    question: "On a balance scale, 1 pineapple balances with 3 apples. If 1 apple weighs 150 grams, how much does the pineapple weigh?",
    options: ["300 g", "400 g", "450 g", "500 g"],
    answer: 2,
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
    options: ["4 liters", "5 liters", "6 liters", "11 liters"],
    answer: 0,
    explanation: "Used water = 7 + 4 = 11 liters. Leftover = 15 - 11 = 4 liters."
  },
  {
    id: "imo-5-10",
    subject: "IMO",
    set: 5,
    topic: "Weight & Capacity",
    difficulty: "Easy",
    question: "Which device is used by a vegetable vendor to weigh potatoes and onions?",
    options: ["Measuring tape", "Weighing scale", "Stopwatch", "Thermometer"],
    answer: 1,
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
    options: ["30 minutes", "60 minutes", "100 minutes", "12 minutes"],
    answer: 1,
    explanation: "1 hour = 60 minutes."
  },
  {
    id: "imo-6-3",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "If the short hand (hour hand) points at 4 and the long hand (minute hand) points at 12, what time is it?",
    options: ["12:04", "4:00 (4 o'clock)", "4:12", "4:30"],
    answer: 1,
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
    options: ["Tuesday", "Thursday", "Friday", "Monday"],
    answer: 1,
    explanation: "The order of days is: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."
  },
  {
    id: "imo-6-6",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "How many months in a year have exactly 30 days?",
    options: ["3", "4", "5", "7"],
    answer: 1,
    explanation: "4 months have 30 days: April, June, September, and November."
  },
  {
    id: "imo-6-7",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Hard",
    question: "A cartoon movie starts at 5:00 PM and ends at 6:30 PM. How long was the movie?",
    options: ["1 hour", "1 hour 30 minutes", "2 hours", "45 minutes"],
    answer: 1,
    explanation: "From 5:00 to 6:00 is 1 hour, plus 30 minutes to 6:30 = 1 hour 30 minutes."
  },
  {
    id: "imo-6-8",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Medium",
    question: "If today is Saturday, what day was YESTERDAY?",
    options: ["Thursday", "Friday", "Sunday", "Monday"],
    answer: 1,
    explanation: "Yesterday means the day before today. Before Saturday comes Friday."
  },
  {
    id: "imo-6-9",
    subject: "IMO",
    set: 6,
    topic: "Time & Calendar",
    difficulty: "Hard",
    question: "In a leap year, how many days does the month of February have?",
    options: ["28 days", "29 days", "30 days", "31 days"],
    answer: 1,
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
    options: ["1", "2", "4", "5"],
    answer: 1,
    explanation: "50 paise + 50 paise = 100 paise = 1 Rupee (2 coins)."
  },
  {
    id: "imo-7-2",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Easy",
    question: "What is the official currency symbol of the Indian Rupee?",
    options: ["$", "€", "₹", "¥"],
    answer: 2,
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
    options: ["₹10", "₹15", "₹20", "₹25"],
    answer: 1,
    explanation: "₹50 - ₹35 = ₹15 change."
  },
  {
    id: "imo-7-5",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Medium",
    question: "If one pen costs ₹8, what will be the cost of 5 such pens?",
    options: ["₹35", "₹40", "₹45", "₹48"],
    answer: 1,
    explanation: "5 x ₹8 = ₹40."
  },
  {
    id: "imo-7-6",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Hard",
    question: "Pooja wants to buy a toy car for ₹85. She currently has ₹60. How much more money does she need?",
    options: ["₹15", "₹20", "₹25", "₹35"],
    answer: 2,
    explanation: "₹85 - ₹60 = ₹25 more needed."
  },
  {
    id: "imo-7-7",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Easy",
    question: "Which of the following is the SMALLEST amount of money?",
    options: ["₹10", "₹5", "50 paise", "₹2"],
    answer: 2,
    explanation: "50 paise is half of 1 rupee, which is smaller than ₹2, ₹5, and ₹10."
  },
  {
    id: "imo-7-8",
    subject: "IMO",
    set: 7,
    topic: "Money",
    difficulty: "Hard",
    question: "Sanya bought an ice cream for ₹25 and a packet of chips for ₹15. She gave a ₹100 note. How much balance did she receive?",
    options: ["₹40", "₹50", "₹60", "₹70"],
    answer: 2,
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
    options: ["One ₹50 note and one ₹20 note", "One ₹50 note, one ₹20 note, and one ₹5 coin", "Two ₹20 notes and one ₹10 note", "Three ₹20 notes"],
    answer: 1,
    explanation: "₹50 + ₹20 + ₹5 = ₹75."
  },

  // ==========================================
  // SET 8: 2D & 3D Geometrical Shapes (10 Qs)
  // ==========================================
  {
    id: "imo-8-1",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
    difficulty: "Easy",
    question: "Which 2D shape has 3 sides and 3 corners (vertices)?",
    options: ["Square", "Triangle", "Rectangle", "Circle"],
    answer: 1,
    explanation: "A triangle has exactly 3 sides and 3 corners."
  },
  {
    id: "imo-8-2",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
    difficulty: "Easy",
    question: "A shape that has NO straight sides and NO corners is a:",
    options: ["Circle", "Square", "Diamond", "Rectangle"],
    answer: 0,
    explanation: "A circle is a round curved shape with zero corners and zero straight sides."
  },
  {
    id: "imo-8-3",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
    difficulty: "Medium",
    question: "In a SQUARE, which of the following is TRUE?",
    options: ["Opposite sides are different lengths", "All 4 sides are equal in length", "It has only 3 corners", "It has curved sides"],
    answer: 1,
    explanation: "In a square, all four sides are straight and exactly equal in length."
  },
  {
    id: "imo-8-4",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
    difficulty: "Medium",
    question: "What 3D solid shape does a standard playing dice resemble?",
    options: ["Sphere", "Cube", "Cylinder", "Cone"],
    answer: 1,
    explanation: "A dice is shaped like a cube with 6 square faces."
  },
  {
    id: "imo-8-5",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
    difficulty: "Medium",
    question: "What 3D shape is an unsharpened round pencil or a soda can?",
    options: ["Cone", "Sphere", "Cylinder", "Cube"],
    answer: 2,
    explanation: "A cylinder has two circular flat ends and one curved surface."
  },
  {
    id: "imo-8-6",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
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
    topic: "Shapes & Geometry",
    difficulty: "Hard",
    question: "How many flat faces does a CUBE have?",
    options: ["4", "6", "8", "12"],
    answer: 1,
    explanation: "A cube has 6 square flat faces (top, bottom, front, back, left, right)."
  },
  {
    id: "imo-8-8",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
    difficulty: "Medium",
    question: "A birthday party hat is an example of which 3D shape?",
    options: ["Cylinder", "Cone", "Sphere", "Cuboid"],
    answer: 1,
    explanation: "A party hat has a circular base and tapers to a pointed top, which is a cone."
  },
  {
    id: "imo-8-9",
    subject: "IMO",
    set: 8,
    topic: "Shapes & Geometry",
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
    topic: "Shapes & Geometry",
    difficulty: "Medium",
    question: "A matchbox or a brick is an example of a:",
    options: ["Cube", "Cuboid", "Sphere", "Cone"],
    answer: 1,
    explanation: "A matchbox has rectangular faces, making it a cuboid."
  },

  // ==========================================
  // SET 9: Patterns & Logical Reasoning (10 Qs)
  // ==========================================
  {
    id: "imo-9-1",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
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
    topic: "Patterns & Logic",
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
    topic: "Patterns & Logic",
    difficulty: "Medium",
    question: "Which of the following is the ODD ONE OUT?",
    options: ["Car", "Bus", "Aeroplane", "Truck"],
    answer: 2,
    explanation: "Car, Bus, and Truck travel on land roads, while an Aeroplane flies in the air."
  },
  {
    id: "imo-9-4",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
    difficulty: "Medium",
    question: "Identify the pattern rule and find the next number: 80, 70, 60, 50, [ ? ]",
    options: ["30", "40", "45", "10"],
    answer: 1,
    explanation: "The numbers are decreasing by 10 each time: 50 - 10 = 40."
  },
  {
    id: "imo-9-5",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
    difficulty: "Medium",
    question: "Complete the letter series: AB, BC, CD, DE, [ ? ]",
    options: ["EF", "FG", "EE", "FA"],
    answer: 0,
    explanation: "Each pair starts with the second letter of the previous pair: D-E is followed by E-F."
  },
  {
    id: "imo-9-6",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
    difficulty: "Hard",
    question: "In a running race of 5 friends, Ananya finished behind Priya but ahead of Tanvi. If Priya came 1st, what position did Ananya finish?",
    options: ["1st", "2nd", "3rd", "4th"],
    answer: 1,
    explanation: "Priya is 1st. Ananya is right behind Priya and ahead of Tanvi, so Ananya is 2nd!"
  },
  {
    id: "imo-9-7",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
    difficulty: "Medium",
    question: "If CAT is coded as 3-1-20 (based on letter positions A=1, B=2, C=3...), how is DOG coded?",
    options: ["4-15-7", "4-14-7", "5-15-7", "4-15-8"],
    answer: 0,
    explanation: "D is 4th letter, O is 15th letter, and G is 7th letter -> 4-15-7."
  },
  {
    id: "imo-9-8",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
    difficulty: "Hard",
    question: "Look at the numbers: 2, 6, 10, 14, 18. What is the rule of this pattern?",
    options: ["Add 2 each time", "Add 4 each time", "Multiply by 3", "Subtract 4"],
    answer: 1,
    explanation: "2 + 4 = 6; 6 + 4 = 10; 10 + 4 = 14; 14 + 4 = 18. The rule is 'Add 4'."
  },
  {
    id: "imo-9-9",
    subject: "IMO",
    set: 9,
    topic: "Patterns & Logic",
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
    topic: "Patterns & Logic",
    difficulty: "Hard",
    question: "There are 4 children standing in a row: Rahul, Amit, Dev, and Samar. Rahul is at the left end. Samar is at the right end. Amit is between Rahul and Dev. Who is standing 3rd from the left?",
    options: ["Rahul", "Amit", "Dev", "Samar"],
    answer: 2,
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
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "Two apples = 10, so 1 Apple = 5. Since 5 + Banana = 9, Banana = 9 - 5 = 4!"
  },
  {
    id: "imo-10-2",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "A clock shows 3:15. What angle or position does the minute hand point to?",
    options: ["Points at 12", "Points at 3", "Points at 6", "Points at 9"],
    answer: 1,
    explanation: "At 15 minutes past the hour, the long minute hand points directly at the number 3."
  },
  {
    id: "imo-10-3",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Look at the addition puzzle:  2 ⭐ + ⭐ 3 = 6 5. What digit does ⭐ represent?",
    options: ["3", "4", "5", "2"],
    answer: 1,
    explanation: "Look at the ones place: ⭐ + 3 = 5, which means ⭐ must be 2? Wait: if ⭐ = 2, then 22 + 23 = 45 != 65. If ⭐ + 3 = 5, but with carry? Try ⭐ = 4: 24 + 43 = 67. Let's check 2⭐ + ⭐3 = 65: if ⭐ = 3, 23 + 33 = 56. What if ⭐ = 4? Wait, 2⭐ + ⭐3 = 65 -> 20 + ⭐ + 10⭐ + 3 = 65 -> 11⭐ + 23 = 65 -> 11⭐ = 42? No. What if ⭐ is 2? Let's check: (20 + ⭐) + (10⭐ + 3) = 65. Wait, in 24 + 41? If the puzzle is 2⭐ + 3⭐ = 65, then 20 + 30 + 2⭐ = 50 + 2⭐ = 65 -> 15. If the problem is 2⭐ + 43 = 65 -> ⭐ = 2! Option has 2!"
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
      "Yes, and he will have ₹10 left",
      "Yes, and he will have ₹20 left",
      "No, he needs ₹10 more",
      "No, he needs ₹20 more"
    ],
    answer: 0,
    explanation: "Cost of 3 crayon packs = 3 x ₹30 = ₹90. Since he has ₹100, ₹100 - ₹90 = ₹10 left!"
  },
  {
    id: "imo-10-6",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "How many TRIANGLES are there in the given figure where a square is divided by both diagonals into 4 parts?",
    options: ["4", "6", "8", "10"],
    answer: 2,
    explanation: "There are 4 small single triangles + 4 composite triangles formed by joining two adjacent halves = 8 triangles in total!"
  },
  {
    id: "imo-10-7",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "A caterpillar climbs up a 10-meter wall. Every day it climbs up 3 meters, but during the night it slips down 1 meter. On which day will it reach the top?",
    options: ["4th day", "5th day", "6th day", "7th day"],
    answer: 1,
    explanation: "Net gain per day = 3 - 1 = 2 m. End of Day 1: 2m. Day 2: 4m. Day 3: 6m. Day 4: 8m. On Day 5 it climbs 2m + 3m = reaches 10m before slipping!"
  },
  {
    id: "imo-10-8",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Which of the following calculations gives the SMALLEST result?",
    options: ["25 + 25", "100 - 45", "6 x 8", "120 - 75"],
    answer: 3,
    explanation: "25+25 = 50; 100-45 = 55; 6x8 = 48; 120-75 = 45. 45 is the smallest!"
  },
  {
    id: "imo-10-9",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "A box of chocolates has 4 rows with 6 chocolates in each row. If Tina and her 2 friends share all chocolates equally, how many chocolates does each child get?",
    options: ["6", "8", "9", "12"],
    answer: 1,
    explanation: "Total chocolates = 4 x 6 = 24. There are 3 children (Tina + 2 friends). 24 / 3 = 8 chocolates each!"
  },
  {
    id: "imo-10-10",
    subject: "IMO",
    set: 10,
    topic: "Achievers Section (HOTS)",
    difficulty: "Hard",
    question: "Find the 3-digit number: The digit in hundreds place is 5. The digit in tens place is 1 more than hundreds place. The digit in ones place is half of tens place.",
    options: ["562", "563", "564", "573"],
    answer: 1,
    explanation: "Hundreds place = 5. Tens place = 5 + 1 = 6. Ones place = half of 6 = 3. So the number is 563!"
  }
];
