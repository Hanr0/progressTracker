//a function initialising the progress bar
function progressBar(totalTasks,doneTasks){
  let toDo = totalTasks; // total number of tasks to do, 100%
  let done = doneTasks; // number of tasks already done
  let percentDone =  Math.round(done/toDo*100) + "%"; // percentage to tasks done

  let myBar = document.getElementById("myBar");

  myBar.style.width = percentDone;
  myBar.innerHTML = percentDone;
};


let totalTasks = parseInt(prompt("how many tasks do you need to do?"));
let tasksDone = 0;

const doneBTN = document.getElementById("doneBTN");
doneBTN.addEventListener("click",function(){
  tasksDone++;
  progressBar(totalTasks,tasksDone);
});

const undoneBTN = document.getElementById("undoneBTN");
undoneBTN.addEventListener("click",function(){
  tasksDone--;
  progressBar(totalTasks,tasksDone);
});