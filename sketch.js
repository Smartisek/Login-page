let inputName;
let inputPass;
let login;
let table;
let background;

function preload(){
  table = loadTable("logins.csv", "csv", "header");
  background = loadImage("background.png");
}


function setup() {
  createCanvas(1500, 700);
  image(background,-50,-100);
  // background.resize(1500,700);

  let rectangle = color(216, 191, 216);
  rectangle.setAlpha(80);
  fill(rectangle);
  noStroke();
  rect(600,250, 250,220,20);

  fill("white");
  stroke(255,218,185);
  textSize(18);
  text("Login", 695, 280);
  inputName = createInput("");
  inputName.position(639,300);

  text("Password", 680, 350);
  inputPass = createInput("");
  inputPass.position(639,370);

  login = createButton("login");
  login.addClass("button");                         
  login.position(695,420);
  login.mouseClicked(check);
 
}


function check(){
 if(table){
  let numRows = table.getRowCount();

  let name = table.getColumn('username');
  let pass = table.getColumn('password');

  let nameEquals = name.includes(inputName.value()); 
  let passEquals = pass.includes(inputPass.value()); 

  if(nameEquals && passEquals){
    stroke(255,218,185);
      textSize(40);
      text("Welcome", 645,100);
  } else {
      stroke(255,218,185);
      textSize(40);
      text("Invalid entry", 615,100);
  }

  // for(let i = 0; i<numRows; i++){
  //   let userLogin = name[i];
  //   let userPassword = pass[i];
  //  console.log(inputName.value(), userLogin);
  //   if(inputName.value() === userLogin && inputPass.value() === userPassword){
  //     stroke(255,218,185);
  //     textSize(20);
  //     text("Welcome", 700,200);
  //     break;
  //     // print("correct");
  //   }
  //   else if(inputName.value() !== userLogin || inputPass.value() !== userPassword){
  //     stroke(255,218,185);
  //     textSize(40);
  //     text("Invalid entry", 615,100);
  //     // print("wrong");
  //    }
  }
}

