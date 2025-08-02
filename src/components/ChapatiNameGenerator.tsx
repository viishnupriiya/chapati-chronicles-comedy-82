const chapatiNames = [
  "Chapatikuttan of Kozhikode",
  "Browntikumar the Great",
  "Flatappa Unni",
  "Rotikrishnan",
  "Tandoormaharaja",
  "Chapati Chandran",
  "Fluffymenon",
  "Crispykumar",
  "Gheegopal",
  "Masalakutty",
  "Burntkumar the Brave",
  "Softukumar",
  "Chapati Vikraman",
  "Roundraja",
  "Wheaties Warrior"
];

const chapatiHoroscopes = [
  "You will be flipped exactly 3.7 times today. Embrace the rotation!",
  "Born half-cooked, just like your life decisions.",
  "Your edges are perfectly burnt - a sign of great character!",
  "Beware of hungry humans between 1-3 PM today.",
  "Your round shape brings harmony to the universe... or not.",
  "You were destined for greatness, but ended up as breakfast.",
  "The stars predict you'll stick to someone's tawa today.",
  "Your golden-brown complexion will attract many admirers.",
  "Caution: May get cold within 5 minutes of birth.",
  "You're 67% flour, 23% water, and 10% pure magic!"
];

const sarcasticComments = [
  "Congratulations! Another round disappointment is born.",
  "Look at this perfectly imperfect circle of carbs.",
  "Born to be eaten, destined to be forgotten.",
  "Your life expectancy: 12 minutes. Make them count!",
  "Proof that even flat things can have big dreams.",
  "Another victim of the great tandoor conspiracy.",
  "You're about as unique as every other chapati ever made.",
  "Welcome to existence! It's overrated.",
  "Born in heat, will die in someone's stomach. The circle of life!",
  "Your parents (wheat farmers) would be so proud... maybe."
];

export const generateChapatiName = (): string => {
  return chapatiNames[Math.floor(Math.random() * chapatiNames.length)];
};

export const generateHoroscope = (): string => {
  return chapatiHoroscopes[Math.floor(Math.random() * chapatiHoroscopes.length)];
};

export const generateSarcasticComment = (): string => {
  return sarcasticComments[Math.floor(Math.random() * sarcasticComments.length)];
};

export const generateCauseOfDeath = (): string => {
  const causes = [
    "Devoured mercilessly by 3AM hunger",
    "Tossed due to shape discrimination",
    "Died of abandonment in the kitchen",
    "Suffocated under a pile of curry",
    "Burned to death in a tragic tawa accident",
    "Eaten alive by ungrateful humans",
    "Died from being too perfect to live",
    "Crumbled under the pressure of existence",
    "Perished from being left out in the cold",
    "Tragic case of mistaken identity with a tortilla"
  ];
  
  return causes[Math.floor(Math.random() * causes.length)];
};