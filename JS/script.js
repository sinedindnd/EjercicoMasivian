const division = document.querySelector(".container");
// console.log("test: ", division);
let content = ``;

for(i = 0; i < 36; i++ )
{

  if( i === 0)
  {
    content += `<div class="bet_1 green">
                  <input type="number" id="bet_${i}" min="0" max="10000" maxlength="5">
                  <span>${i}</span>
                </div>`;
  } else if(((i+1)% 2) !== 0)
  {
    content += `<div class="bet_1 black">
                  <input type="number" id="bet_${i}" min="0" max="10000" maxlength="5">
                  <span>${i}</span>
                </div>`;
  } else
  {
    content += `<div class="bet_1 red">
                  <input type="number" id="bet_${i}" min="0" max="10000" maxlength="5">
                  <span>${i}</span>
                </div>`;
  }
  
  
}
division.innerHTML = content;

const btn_close_bets = document.querySelector(".close_bets");
const inputs = document.querySelectorAll("input");
console.log("btn: ", btn_close_bets);
console.log("input: ", inputs);

// class Roulette {
//   public function constructor()
//   {
    
//   }

//   // endpiont one creation of new roulette

//   public function creationRoulette()
//   {

//   }

//   // endpoint two roulette opening
//   public function rouletteOpening(id_roulette)
//   {

//     return true;
//   }

//   public function close_bets(params)
//   {
    
//   }
// }
// console.log("contenido: ", content);
