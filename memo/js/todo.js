
const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#goal-form input");
const weekGoal = document.querySelector("#weekGoal");
const MYGOAL_KEY = "mygoal";

function onGoalSubmit(event){
    event.preventDefault();
    goalForm.classList.add(HIDDEN_CLASSNAME);
    const myGoal = goalInput.value;
    localStorage.setItem(MYGOAL_KEY,myGoal);
    paintWeekGoal(myGoal);
}

function paintWeekGoal(myGoal){
    weekGoal.innerText = myGoal;
    weekGoal.classList.remove(HIDDEN_CLASSNAME);
}

const savedMygoal = localStorage.getItem(MYGOAL_KEY);
if(savedMygoal === null){
    goalForm.classList.remove(HIDDEN_CLASSNAME);
    goalForm.addEventListener("submit",onGoalSubmit);
}else{
    paintWeekGoal(savedMygoal);
}