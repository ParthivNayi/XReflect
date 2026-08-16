
let name="Parthiv";
console.log(name)
function greet(){
    console.log("Welcome to XReflect" + name + "!")
}
greet();
let currentGoal="Finish XReflect software on computer"
console.log("Parthiv wants to" + currentGoal)
document.getElementById("title").textContent = "Welcome to XReflect!"

function updateTime(){

let now = new Date();
let time = now.toLocaleTimeString([], {
hour: "numeric",
minute: "2-digit"
});
let date = now.toLocaleDateString([], { 
    weekday: "long",
    month: "long" ,
     day: "numeric"
});
console.log(time);
document.getElementById("date").textContent = "Today is " + date + " , " + time + "."
}
updateTime();
setInterval(updateTime, 1000);
function goodMorningAfternoonEvening() {

    let now = new Date();
    let hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    }
    else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    document.getElementById("greeting").textContent =
        greeting + ", " + name + "!";
}
goodMorningAfternoonEvening();
setInterval(goodMorningAfternoonEvening, 1000);
function updateWeather() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.4993&longitude=-74.399&daily=precipitation_probability_max&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m,precipitation,rain,snowfall&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temperature = data.current.temperature_2m;
            let humidity = data.current.relative_humidity_2m;
            let feels_like = data.current.apparent_temperature;
            let rainChanceToday = data.daily.precipitation_probability_max[0];
            let snowfall = data.current.snowfall;
            document.getElementById("weather").textContent = 
            "Temperature: " + temperature + " Fahrenheit. \n "
            + "Humidity: " + humidity + "%. \n"
            + "Feels like temperature: " + feels_like + " Fahrenheit. \n "
            + "Precipitation Chance: " + rainChanceToday + " %. \n "
            + "Snowfall: " + snowfall + " inches. \n"


            if (rainChanceToday > 0 ) {
                console.log("Rain:" + rainChanceToday); 
            }
        });
}
updateWeather();
setInterval(updateWeather, 60000); 
function updateNews() {
    fetch("https://gnews.io/api/v4/search?apikey=49892be100d23dfcc111c4f94b60b954&q=economic&lang=en&max=5&from=2026-08-10T00:00:00Z&to=2029-07-10T23:59:59Z&in=title,description,content")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let headline1 = data.articles[0].title
        let headline2 = data.articles[1].title
        let headline3 = data.articles[2].title
        document.getElementById("news").textContent = headline1 + " . \n\n " + headline2 + " . \n\n " + headline3 + ". \n\n"
    })
}
updateNews()
setInterval(updateNews, 600000);

function updateQuote(){
    let morningQuotes = [
    "Start before you feel completely ready.",
    "A good day begins with one good decision.",
    "You don't need momentum before you start. Starting creates momentum.",
    "Give today something worth remembering.",
    "The first hour doesn't decide the day, but it can point it somewhere.",
    "Do the important thing before the easy thing finds you.",
    "Today's progress doesn't need yesterday's permission.",
    "Wake up curious. There is always something left to learn.",
    "Small improvements become surprisingly large when repeated.",
    "You have an entire unused day in front of you.",
    "Don't wait for motivation to arrive before you begin.",
    "Make the morning simple: begin, then improve.",
    "Yesterday already had its turn. Today is yours.",
    "The hardest part of momentum is creating the first bit of it.",
    "Choose what deserves your attention before everything else chooses for you.",
    "Twenty-four hours is a lot of possibility disguised as an ordinary day.",
    "Build something today that didn't exist yesterday.",
    "You don't have to finish everything today. Just move something forward.",
    "Learn one thing today that yesterday's version of you didn't know.",
    "A fresh start doesn't require a new year. This morning will do.",
    "Get moving. You can figure out the details on the way."
    
];

let afternoonQuotes = [
    "You've already started. Now keep the momentum alive.",
    "A slow afternoon can still produce meaningful progress.",
    "Don't confuse being tired with being finished.",
    "Half the day is gone. Half the opportunity isn't.",
    "Progress made quietly still counts.",
    "When something gets difficult, get curious before getting frustrated.",
    "You don't need to solve everything at once. Find the next step.",
    "A problem is often just something you haven't understood yet.",
    "If the first approach fails, you've eliminated one approach.",
    "Take what you've learned this morning and build on it.",
    "Consistency looks ordinary until you see what it produces.",
    "You can restart a day without waiting for tomorrow.",
    "The middle is where most things worth finishing become difficult.",
    "Don't measure the day only by what remains unfinished.",
    "When your plan stops working, change the plan before abandoning the goal.",
    "One focused hour can rescue an unfocused afternoon.",
    "Questions are evidence that you're still learning.",
    "Make something slightly better than it was an hour ago.",
    "Keep enough patience to debug the problem before blaming the computer.",
    "You are allowed to learn something the slow way.",
    "Finish the next thing, not every thing."
];

let eveningQuotes = [
    "A day doesn't need to be perfect to have been worthwhile.",
    "Notice what you accomplished before counting what remains.",
    "Tomorrow works better when tonight isn't spent worrying about it.",
    "Some problems deserve tomorrow's brain.",
    "Rest is part of continuing, not the opposite of it.",
    "You know more tonight than you did this morning.",
    "Leave something unfinished if finishing it would cost tomorrow.",
    "A mistake understood is more useful than a success you learned nothing from.",
    "Good days are built from progress, mistakes, breaks, and trying again.",
    "You don't need to win every hour for the day to count.",
    "Save some ambition for tomorrow.",
    "The work will still exist tomorrow. So will your ability to handle it.",
    "Before ending the day, remember at least one thing that went right.",
    "Improvement is easier to see across weeks than across hours.",
    "What felt impossible this morning may already feel ordinary.",
    "Not every unfinished task is a failure. Sometimes it's simply tomorrow's task.",
    "Let today's lessons stay. Let today's frustration go.",
    "A productive day still deserves an ending.",
    "You've done enough analyzing today. Some answers arrive after rest.",
    "Tomorrow gets another attempt, with everything you learned today.",
    "Close the day knowing you moved forward somewhere."


];
let now = new Date();
let daysPassed = Math.floor(now.getTime() / 86400000);
let quoteNumber = daysPassed%21;
    let hour = now.getHours();


        if (hour >= 5 && hour < 12) {
        console.log(morningQuotes);
        document.getElementById("quote").textContent = morningQuotes[quoteNumber]
    }
    else if (hour >= 12 && hour < 17) {
        console.log(afternoonQuotes);
        document.getElementById("quote").textContent = afternoonQuotes[quoteNumber]
    }
    else {
        console.log(eveningQuotes);
        document.getElementById("quote").textContent = eveningQuotes[quoteNumber]
    }

    }
;
updateQuote();
goodMorningAfternoonEvening();