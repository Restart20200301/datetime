export const isLeapYear = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

class Datetime {
    constructor(private readonly date: Date) {}
    
    addMilliseconds(milliseconds: number) {
        const date = new Date(this.date.valueOf())
        date.setMilliseconds(milliseconds + date.getMilliseconds())
        return new Datetime(date)
    }

    addSeconds(seconds: number) {
        const date = new Date(this.date.valueOf())
        date.setSeconds(seconds + date.getSeconds())
        return new Datetime(date)
    }

    addMinutes(minutes: number) {
        const date = new Date(this.date.valueOf())
        date.setMinutes(minutes + date.getMinutes())
        return new Datetime(date)
    }

    addHours(hours: number) {
        const date = new Date(this.date.valueOf())
        date.setHours(hours + date.getHours())
        return new Datetime(date)
    }

    addDays(days: number) {
        
    }
}