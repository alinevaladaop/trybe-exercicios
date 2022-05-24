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
    let button = document.querySelector(".buttons-container");
    let putButton = document.createElement("button");
    let newButtonId = "btn-holiday";
    

    putButton.innerText = Feriados;
    button.id = newButtonId;
    button.appendChild(putButton);
  }

  createButton("Feriados");
 

  // let putClick = document.querySelector (".holiday");
  // putClick.addEventListener ("click", clicar)
  
  // function clicar (){
  //   putClick.style.background = "red"

  // }

  // clicar()