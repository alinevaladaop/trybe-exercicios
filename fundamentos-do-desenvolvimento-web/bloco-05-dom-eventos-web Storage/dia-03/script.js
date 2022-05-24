function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  
  function dezDaysList(){
    
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.getElementById("days")

    for (let i = 0; i < dezDaysList.length; i+= 1){
      const daysDezembro = dezDaysList[i];
      const date = document.createElement ("li");
      date.innerText = daysDezembro
      date.classList.add("day")
      if (daysDezembro === 24 || daysDezembro === 25 || daysDezembro === 31){
        date.classList.add("holiday")
      }

      if (daysDezembro === 4 || daysDezembro === 11 || daysDezembro === 18 || daysDezembro === 25){
        date.classList.add("friday")
      }
     

      days.appendChild(date)

    }

  }

  dezDaysList()

  function createButton(Feriados){
    let buttonsContainers = document.querySelector(".buttons-container");
    
    let button = document.createElement("button");
    button.innerText = Feriados;
    button.id = "btn-holiday";

    buttonsContainers.appendChild(button);
  }

  createButton("Feriados");
 

  let holidayButton = document.querySelector ("#btn-holiday");
  holidayButton.addEventListener ("click", clicar)
  
  function clicar (){
    let holidayElements = document.getElementsByClassName("holiday")
    for (let element of holidayElements){

      if (element.style.backgroundColor === "red"){
        element.style.backgroundColor = "rgb(238,238,238)"
      }else{
        element.style.backgroundColor = "red"
      }
    }

  }

  