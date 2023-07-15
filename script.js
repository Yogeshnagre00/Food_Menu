
// let loaddata = document.getElementById("data-load");


async function getMenu(){
    let api = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

    try{
        let responce = await fetch(api);
        let result = await responce.json();
        console.log(result);
        loadmenu(result);

    }catch(Error){
        console.log(Error);
    }
}

getMenu();

function loadmenu(data){
    const menu = document.getElementsByClassName("menu")[0];
  
    for(let i = 0; i < 3; i++){
      let item = data[i];

      let elements = `
        <div class="menupart">
                        
            <div class="menu-img">
                <img src="${item.imgSrc}" class="img1" alt="api image">
            </div>
            <div class="menu-bottom">
                <div class="menu-text">
                    <p>${item.name}</p>
                    <b>${item.price}$</b>
                </div>
                <div class="menu-addcart">
                    <button class="btn1"><img src="./images/Group 4.png" alt=""></button>
                </div>
            </div>
            
        </div>
      `
      menu.innerHTML += elements;
    }
}
