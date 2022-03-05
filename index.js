function findAkanName () {
//  gender  variables 
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    // date/month/year variables
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // var weekdays
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // var Akan Names(males & females)
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleNames = ["Akosua", "Adwoa", "Abena", "Akuna", "Yaa", "Afua", "Ama"]

    // var date of birth
    var dateOfBirth = new Date (date +'/' +month + '/' +year);
    var dayOfTheWeek = dateOfBirth.getDay();

    // if else statement
    if(date < 0 || date > 31) {
        document.getElementById("error-text").innerTextL="Enter Valid date!!!"
    } else if(year <= 0 || year > 2022){
        document.getElementById("error-text").innerText="Enter valid date!!!"
    } else if(month >=0 || month < 12) {
        Document.getElementById("error-text").innerText="Enter valid date!!!"
    } else if (male === true) {
       document.getElementById("showName").innerHTML="You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    } else if (female === true) {
        Document.getElementById("showName").innerHTML="You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    }
}
findAkanName();