
// creating a class event with private fields
class Event
{
    #event_name;
    #event_date;
    #event_startTime;
    constructor(event_name, event_Date, event_startTime)
    {
        this.#event_name = event_name;
        this.#event_date = event_Date;
        this.#event_startTime = event_startTime;
    }

    // class method to display whole event details
    display()
    {
        return `Event Name: ${this.#event_name} 
        Date: ${this.#event_date}
        Event Start Time: ${this.#event_startTime}`;
    }
}

// creating the essential date and event start time variables for passing on to class private fields and converting the format to localized string format
let eventDate = new Date().toLocaleDateString();
let setEventTime = new Date();
setEventTime.setHours(20,30,0,0);
let eventTime = setEventTime.toLocaleTimeString("en-US");

// creating a day array
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday'];

let event = new Event("Michael Jackson USA Tour", eventDate, eventTime);
console.log(event.display());

// retrieving date information
Event.prototype.date_Info = function()
{
    setEventTime.setFullYear(2026, 11, 12);
    return ` Year: ${setEventTime.getFullYear()}
    Month: ${setEventTime.getMonth()}
    Day: ${days[setEventTime.getDay()]}
    Date: ${setEventTime.getDate()}
    Hours: ${setEventTime.getHours()}
    Minutes: ${setEventTime.getMinutes()}
    Seconds: ${setEventTime.getSeconds()}
    Time: ${setEventTime.getTime()}
    `;
}

console.log(event.date_Info());

// modifying the event's date etc
setEventTime.setFullYear(2027, 1, 3);
setEventTime.setHours(12, 30, 0, 44);

let event_Update = new Event("Michael Jackson USA Tour", setEventTime.toLocaleDateString(), setEventTime.toLocaleTimeString("en-US"));
console.log(event_Update.display());

