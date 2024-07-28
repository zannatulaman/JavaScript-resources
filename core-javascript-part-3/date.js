const currentDate = new Date();
console.log(currentDate);

const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November",
        "December"
]

const countMonthNames = monthNames[currentDate.getMonth()];
console.log(countMonthNames);

// const specificDate = new Date("2024-10-15");
// console.log(specificDate);

// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());

console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleString())