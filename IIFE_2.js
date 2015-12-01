// Calculate Expiry date to expire in seven days

var showMessage;
var today;
var endMessage;

function Expires(today) {

  // declare variables within the funciton for local scope
  var weekFromToday, day, date, month, year, dayNames, monthNames;

  // add 7 days time in milliseconds
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Create arrays to hold the names of days / months
  dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Collect the parts of the date to show on the page
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDay();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  // Create the message
  showMessage = 'Expiry Date would be ';
  showMessage += day + ' ' + date + ' ' + month + ' ' + year;
  return showMessage;
}

// Finish the immediately invoked funciton expression
}());
