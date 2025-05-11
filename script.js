let cross = document.getElementById("cross");
let circle = document.getElementById("circle");
cross.style.borderBottom = "2px solid #bdb2ff"
const design = (ele,ele2)=>{
    ele.style.borderBottom = "2px solid #bdb2ff";
    ele.style.transform = "scale(3px)";
    ele.style.transform = "scale(0px)";
    ele2.style.borderBottom = "";
}
let arr = [["1","2","3"],["4","5","6"],["7","8","9"]]
let user = "X";
let comp = "O";
let bool = false;
if(bool){
    start();
}
let compX;
let compY;
let count = 0;
const check = ()=>{
    if(count == 2){
        arr[compX][compY] = comp;
        return "found";
    }
}
const r = ()=>{
    compX = Math.floor(Math.random()*3)
    compY = Math.floor(Math.random()*3);
    console.log(compX,compY);
    if(arr[compX][compY] == user || arr[compX][compY] == comp){
        r();
    }
    return
}
const start = ()=>{
    let moveX = prompt("Enter move");
    let moveY = prompt("Enter :");
    arr[moveX][moveY] = user;
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[i][j] === user){
                count++;
            }
            else{
                compX = i;
                compY = j;
            }
        }
        if(check() === "found"){ count = 0; return; }
        else count = 0;
    }   
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[j][i] === user){
                count++;
            }
            else{
                compX = j;
                compY = i;
            }
        }
        if(check() === "found"){ count = 0; return; }
        else count = 0;
    } 
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
        if(i === j){
            if(arr[i][j] === user){
                count++;
            }
            else{
                compX = i;
                compY = j;
            }
        }
    }
    if(check() === "found"){ count = 0; return; }
    else count = 0;
    } 
    if(count == 0){
        r();
        arr[compX][compY] = comp;
        return
    }

}


// let str = "";
// for(let i = 0;i<3;i++){
//     for(let j =0;j<3;j++){
//         str = str + " " + arr[i][j];
//     }
//     str = str + "\n";
// }
// console.log(str);

