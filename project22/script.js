
// Taking all component needed to modify

burger = document.querySelector('.burger');
navbar = document.querySelector('.navIcons');

// as we click on burger waali class ke items me do run this func 
// this function add class & remove it from that box alternatively

// console.log(burger)
// console.log(navbar)


burger.addEventListener('click',()=>{
  navbar.classList.toggle('add-resp');
});

// now selecting all menus
home = document.getElementById("home");
program = document.getElementById("program");
choose = document.getElementById("choose");
price = document.getElementById("price");

const arr = [
  home,
  program,
  choose,
  price
];


// onlclick on each icon hamburger should be remove

arr.forEach((value,index)=>{
  value.addEventListener('click',()=>{
    navbar.classList.toggle('add-resp');
  })
})


// BMI CALCULATOR

height = document.getElementById("height");
weight = document.getElementById("weight");
bmiBtn = document.getElementById("bmiBtn");
bmitext = document.getElementById("bmitext");

bmiBtn.addEventListener('click',()=>{

  if(height.value === "" || weight.value === "")
  {
    alert("Enter something bro ... ")
  }
  else
  {
    const h = Number.parseInt(height.value);
    const w = Number.parseInt(weight.value);

    var bmi = (w/h/h)*10000;

    bmi = bmi.toFixed(2);

    console.log(bmi);

    let bmiCategory  = "";

    if(bmi <= 18.5 ){
      bmiCategory = "Underweight";
    }else if(bmi > 18.5 && bmi <= 24.9){
      bmiCategory = "Normal weight ";
    }else if(bmi >= 25 && bmi <= 29.9){
      bmiCategory = "Overweight ";
    }else{
      bmiCategory = "Obesity ";
    }

    setTimeout(()=>{
      bmitext.innerText = `Your Bmi come to ${bmi} ! And your in ${bmiCategory}`;
    },0)

    height.value = "";
    weight.value = "";
    setTimeout(()=>{
      bmitext.innerText = ``;
    },10000)
    

  }
})