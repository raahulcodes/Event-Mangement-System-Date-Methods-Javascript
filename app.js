
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

// creating the essential date and event start time variables for passing on to class private fields
let eventDate = new Date().toLocaleDateString();
let setEventTime = new Date();
setEventTime.setHours(20,30,0,0);
let eventTime = setEventTime.toLocaleTimeString("en-US");

let event = new Event("Michael Jackson USA Tour", eventDate, eventTime);
console.log(event.display());
