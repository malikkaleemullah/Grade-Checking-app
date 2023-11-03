function checkGrade(event) {
    event.preventDefault()
    let score = document.querySelector("#marks").value 
    let scoreInGrade = ""
    if (score >= 90){
        scoreInGrade = "A+"
    }else if(score >= 80){
        scoreInGrade = "A"
    }else if(score >= 70){
        scoreInGrade = "B"
    }else if(score >= 60){
        scoreInGrade = "C"
    }else if(score >= 50){
        scoreInGrade = "D"
    }else{
        scoreInGrade = "F"
    }

    message = `the Grade is ${scoreInGrade}`
    document.querySelector("#result").innerHTML = message
}