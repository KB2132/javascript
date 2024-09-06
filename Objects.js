
const cafe = {
    name: "whitesheep",
    seatingCapacity: 100, 
    hasSpecialOffers: true, 
    drinks: [
        "Cappuccino",
        "Latte",
        "Filtered Coffee",
        "Tea",
        "Hot Chocolate"
    ]
};

// --------------------------------------------------------


const person = {
   name: "Kieran",
   age: 19,
};
const age = (19)
console.log (person ["name"])


// --------------------------------------------------------

const alarm = {
    weekEndAlarm: "No alarm needed",
    weekDayAlarm: "Wake up at 7am"
};
 if (new Date () .getDay() == 6 || new Date () .getDay() == 0  ) {
    console.log (alarm.weekEndAlarm);
} 
else {
    console.log (alarm.weekDayAlarm);
}

// --------------------------------------------------------

