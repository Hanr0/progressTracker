//a function initialising the progress bar
function progressBar(totalTasks,doneTasks){
  let toDo = totalTasks; // total number of tasks to do, 100%
  let done = doneTasks; // number of tasks already done
  let percentDone =  Math.round(done/toDo*100) + "%"; // percentage to tasks done

  let myBar = document.getElementById("myBar");

  myBar.style.width = percentDone;
  myBar.innerHTML = percentDone;
};