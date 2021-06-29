class Meetup { 
  constructor(year, month) {
    this.year = year
    this.month = month - 1
  }

  static daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]

  static allSchedules = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'last',
    'teenth'
  ]

  static teenthDates = [ 13, 14, 15, 16, 17, 18, 19 ]

  day(weekday, schedule) { 
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase(0)
    switch (schedule) {
      case 'teenth':
        return this.teenth(weekday);
      default:
        return this.findDayForWeek(weekday, schedule);
    }
  }

  findDayForWeek(weekday, schedule) { // ('Monday', second)
    let appearances = 0
    let requiredAppearances = Meetup.allSchedules.indexOf(schedule) + 1;
    let latestMatch;
    let date = 1;
    let testDate;


    while (appearances !== requiredAppearances) {
      testDate = new Date(this.year, this.month, date);
      if (!(this.month === testDate.getMonth())) {
        if (schedule === 'last') return latestMatch;
        return null;
      }
      if (this.weekdayMatches(weekday, testDate.getDay())) {
        latestMatch = testDate;
        appearances += 1;
      }
      date += 1;
    }

    return testDate;

  }

  weekdayMatches(weekday, testDate) {
    if (Meetup.daysOfWeek[testDate] === weekday) return true
    return false;
  }

  teenth(weekday){
    for (let date of Meetup.teenthDates) {
      let testDate = new Date(this.year, this.month, date)
      if (Meetup.daysOfWeek[testDate.getDay()] === weekday) return testDate
    }
  }

}

module.exports = Meetup;
