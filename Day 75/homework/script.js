// 1.Write a JavaScript function to display the current date in the format "MM/DD/YYYY".
// 2.Create a script that shows the current time in the format "HH:MM"
// 3.Write a function that takes a number(1-7) as input and returns the day of the week (e.g., "Monday", "Tuesday") for that number.
// 4.Develop a function that calculates the number of days between two given dates.
// 5.Create a function to format a given date object into a custom format, like "YYYY-MM-DD".
// 6.Write a script that compares two dates and determines which one is earlier or if they are the same.
// 7.Write a function that takes a month (in numeric format, e.g., 1 for January) and a year as input and returns the number of days in that month.
// 8.Create a function that displays how long ago a given date occurred, in a human-readable format (e.g., "3 days ago", "2 months ago").
// 9.Develop a function that takes a birthdate as input and calculates the number of days until the next birthday.
// 10.Develop a function that takes a birthdate as input and calculates the age in years.

// 1
function getCurrentDate() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  console.log(getCurrentDate()); // Example: "08/17/2024"

  ///2
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  console.log(getCurrentTime()); // Example: "14:30"
/////

///3

function getDayOfWeek(dayNumber) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNumber - 1];
  }
  
  console.log(getDayOfWeek(3)); // "Tuesday"
////4

function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    const diffInTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffInTime / oneDay);
  }
  
  console.log(daysBetweenDates('2024-08-01', '2024-08-17')); // 16
///5
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  console.log(formatDate(new Date())); // Example: "2024-08-17"
/////6
function compareDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
  
    if (d1 < d2) return `${date1} is earlier than ${date2}`;
    else if (d1 > d2) return `${date1} is later than ${date2}`;
    else return "Both dates are the same.";
  }
  
  console.log(compareDates('2024-08-01', '2024-08-17')); // Example: "2024-08-01 is earlier than 2024-08-17"
/////7
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  console.log(getDaysInMonth(2, 2024)); // 29 (because 2024 is a leap year)
////8
function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);
  
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  }
  
  console.log(timeAgo('2024-08-01')); // Example: "16 days ago"
/////9
function daysUntilNextBirthday(birthdate) {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  
    if (today > birthday) {
      birthday.setFullYear(today.getFullYear() + 1);
    }
  
    const diffInTime = birthday - today;
    return Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  }
  
  console.log(daysUntilNextBirthday(new Date('1995-12-25'))); // Example: Number of days until December 25th
/////10
function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
  
    return age;
  }
  
  console.log(calculateAge(new Date('1995-12-25'))); // Example: Age in years
  