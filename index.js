function findAkanName () {
//  gender 
    var gender = document.querySelector('input[name="gender"]:checked').value;

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
    var dateOfBirth = new Date (year +'/' +month + '/' +day);
    var dayOfTheWeek = dateOfBirth.getDay();

    // form validation
    if(day < 0 || day > 31) {
        document.getElementById("error-text").innerTextL="Enter Valid date!!!"
    } else if(year <= 0 || year > 2022){
        document.getElementById("error-text").innerText="Enter valid date!!!"
    } else if(month <= 0 || month > 12) {
        document.getElementById("error-text").innerText="Enter valid date!!!"
    } else if (gender == "male") {
       document.getElementById("showName").innerText="You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    } else if (gender == "female") {
        document.getElementById("showName").innerText="You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    }
}