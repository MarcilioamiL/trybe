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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diaDoMes()  {
    let daylistaitens = document.querySelector('#days')

    for (let index = 0; index < dezDaysList.length; index += 1){
        let day = dezDaysList[index];
        let itensday = document.createElement('li');

        if (day === 24 || day === 31)  {
            itensday.className = 'day friday';
            itensday.innerHTML = day;
            daylistaitens.appendChild(itensday)
        }else if (day === 4 || day === 11 || day === 18){
          itensday.className = 'day friday';
          itensday.innerHTML = day;
          daylistaitens.appendChild(itensday);
        }else if (day === 25){
          itensday.className = 'day holiday';
          itensday.innerHTML = day;
          daylistaitens.appendChild(itensday);
        }else{
          itensday.innerHTML = day;
          itensday.className = 'day';
          daylistaitens.appendChild(itensday)
        }     
    };
};
diaDoMes()

/*-----------------------------//-------------------------*/

/* questões 2 */
function criandoButton (umbotao){
  let butonBom = document.querySelector('.buttons-containe');
  let novoButton = document.createElement('.button');
  let newID = 'btn-holiday'

  novoButton.innerHTML = 

}