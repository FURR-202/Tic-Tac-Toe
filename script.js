let cross = document.getElementById("cross");// selecting cross
let circle = document.getElementById("circle");// selecting circle
cross.style.borderBottom = "2px solid #bdb2ff";
let loseBox = document.getElementById("lose");
let winBox = document.getElementById("win");
let drawBox = document.getElementById("draw");

let user = "X";
let comp = "O";
let brr = [[document.getElementById("top-left"),0,0],
[document.getElementById("top-middle"),0,1],
[document.getElementById("top-right"),0,2],
[document.getElementById("middle-left"),1,0],
[document.getElementById("middle-middle"),1,1],
[document.getElementById("middle-right"),1,2],
[document.getElementById("bottom-left"),2,0],
[document.getElementById("bottom-middle"),2,1],
[document.getElementById("bottom-right"),2,2]];

const COMP_WIN = ()=>{
    reStart();
    loseBox.style.display = "flex";
    setTimeout(()=>{
        loseBox.style.display = "none";
    },2000);
}
const USER_WIN = ()=>{
     reStart();
    winBox.style.display = "flex";
    setTimeout(()=>{
        winBox.style.display = "none";
    },2000);
}
const DRAW = ()=>{
    reStart();
    drawBox.style.display = "flex";
    setTimeout(()=>{
        drawBox.style.display = "none";
    },2000);
}


// creating cross
const XMark = (x,y)=>{
    let space = x;
    brr.forEach((e)=>{
        if(e[1] === x && e[2] === y ){
            space = e[0];
        }
    })
    let i  = document.createElement("i");
   i.classList.add("fa-solid", "fa-xmark");
    space.appendChild(i)
}
// creating circle
const circleMark = (x,y)=>{
    let space = x;
    brr.forEach((e)=>{
        if(e[1] === x &&e[2] === y ){
            space = e[0];
        }
    })
    let i  = document.createElement("i");
    i.classList.add("fa-regular", "fa-circle");
    space.appendChild(i);
}

const design = (ele,ele2)=>{
    ele.style.borderBottom = "2px solid #bdb2ff";
    ele.style.transform = "scale(3px)";
    ele.style.transform = "scale(0px)";
    ele2.style.borderBottom = "";
    brr.forEach((e)=>{
    e[0].innerHTML = "";
})
    if(ele.getAttribute("id") === "cross"){
         user = "X";
         comp = "O";
    }
    else{
        user = "O";
        comp = "X";
        
    }
}
cross.addEventListener("click",()=>{
    design(cross,circle);
})
circle.addEventListener("click",()=>{
     design(circle,cross);
})
let arr = [["1","2","3"],["4","5","6"],["7","8","9"]]
let draw = false;
let XWin = false;
let CWin = false;
let space = 9;
const completeCompWin = (Mark)=>{
    console.log("checkWIN");
    let count = 0;
    let X,Y;
    //checking rows 
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[i][j] ===  comp){
                count += 1;
            }
            else{
                X = i;
                Y = j;
            }
        }
        if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
        }
        
        else count = 0
    }
     //checking columns
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[j][i] ===  comp){
                count += 1;
            }
            else{
                X = j;
                Y = i;
            }
        }
        if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
        }
        
        else count = 0
    }
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][i] ===  comp){
            count += 1;
        }
        else{
            X = i;
            Y = i;
        }
    }
    if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
    }
    else count = 0
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][2-i] ===  comp){
            count += 1;
        }
        else{
            X = i;
            Y = 2-i;
        }
    }
    if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
    }
    else count = 0
}
const CheckCompWin = ()=>{
    console.log("checkWIN");
    let count = 0;
    let X,Y;
    //checking rows 
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[i][j] ===  comp){
                count += 1;
            }
            else{
                X = i;
                Y = j;
            }
        }
        if(count === 3){
        return "done"
        }
        else count = 0
    }
     //checking columns
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[j][i] ===  comp){
                count += 1;
            }
            else{
                X = j;
                Y = i;
            }
        }
        if(count === 3){
        return "done"
        } 
        else count = 0
    }
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][i] ===  comp){
            count += 1;
        }
        else{
            X = i;
            Y = i;
        }
    }
    if(count === 3){
        return "done"
    }
    else count = 0
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][2-i] ===  comp){
            count += 1;
        }
        else{
            X = i;
            Y = 2-i;
        }
    }
    if(count === 3){
        return "done"
    }
    else count = 0
}


const CheckUserWin  = ()=>{
    let count = 0;
    let X,Y;
    //checking rows 
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[i][j] ===  user){
                count += 1;
            }
            else{
                X = i;
                Y = j;
            }
        }
        if(count === 3){
        return "done"
        }
        else count = 0
    }
     //checking columns
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[j][i] ===  user){
                count += 1;
            }
            else{
                X = j;
                Y = i;
            }
        }
        if(count === 3){
        return "done"
        }
        else count = 0
    }
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][i] ===  user){
            count += 1;
        }
        else{
            X = i;
            Y = i;
        }
    }
    if(count === 3){
        return "done"
    }
    else count = 0
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][2-i] ===  user){
            count += 1;
        }
        else{
            X = i;
            Y = 2-i;
        }
    }
    if(count === 3){
        return "done"
    }
    else count = 0
}
const BlockUserWin = (Mark)=>{
    console.log("Block");
    let count = 0;
    let X,Y;
    //checking rows 
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[i][j] ===  user){
                count += 1;
            }
            else{
                X = i;
                Y = j;
            }
        }
        
        if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
        } 
        else count = 0
    }
     //checking columns
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[j][i] ===  user){
                count += 1;
            }
            else{
                X = j;
                Y = i;
            }
        }
        if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
        }
        else count = 0
    }
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][i] ===  user){
            count += 1;
        }
        else{
            X = i;
            Y = i;
        }
    }
    if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
    }
    else count = 0
    //checking diagonals
    for(let i = 0;i<3;i++){
        if(arr[i][2-i] ===  user){
            count += 1;
        }
        else{
            X = i;
            Y = 2-i;
        }
    }
    if(count === 2 && arr[X][Y] != comp && arr[X][Y] != user){
            arr[X][Y] = comp;
            Mark(X,Y);
            return "done"
    }
    else count = 0

}
const random = (Mark)=>{
    console.log("Random");
    if(arr[1][1] != user && arr[1][1] != comp){
        arr[1][1] = comp;
        Mark(1,1);
        return 
    }
    if(arr[1][0] != user && arr[1][0] != comp){
        arr[1][0] = comp;
        Mark(1,0);
        return 
    }
    if(arr[1][2] != user && arr[1][2] != comp){
        arr[1][2] = comp;
        Mark(1,2);
        return 
    }
    if(arr[0][0] != user && arr[0][0] != comp){
        arr[0][0] = comp;
        Mark(0,0);
        return
    }
    if(arr[0][1] != user && arr[0][1] != comp){
        arr[0][1] = comp;
        Mark(0,1);
        return
    }
    if(arr[0][2] != user && arr[0][2] != comp){
        arr[0][2] = comp;
        Mark(0,2);
        return
    }
    if(arr[2][0] != user && arr[2][0] != comp){
        arr[2][0] = comp;
        Mark(2,0);
        return
    }
    if(arr[2][1] != user && arr[2][1] != comp){
        arr[2][1] = comp;
        Mark(2,1);
        return
    }
    if(arr[2][2] != user && arr[2][2] != comp){
        arr[2][2] = comp;
        Mark(2,2);
        return
    }
}
const start = (move1,move2,func)=>{
    arr[move1][move2] = user;
    space -= 1;
    if(space >= 1){
     setTimeout(() => {
    if(completeCompWin(func) === "done"){
        space -= 1
        if(CheckUserWin() ===  "done"){
            USER_WIN();
            return;
        } 
        if(CheckCompWin() === "done"){
            COMP_WIN();
            return;
        }
    }
    else if(BlockUserWin(func) ===  "done"){
        space -= 1;
    if(CheckUserWin() ===  "done"){
            USER_WIN();
            return;
        }  
    if(CheckCompWin() === "done"){
            COMP_WIN();
            return;
        }
    }
    else{
        space -= 1
        random(func);
    if(CheckUserWin() ===  "done"){
            USER_WIN();
            return;
        } 
    if(CheckCompWin() === "done"){
            COMP_WIN();
            return;
        }
    }
    }, 200);
    }
    else{
        DRAW();
    }  
}
brr.forEach((element)=>{
    element[0].addEventListener("click",()=>{
        if(element[0].querySelector("i")){// if there is any icon then you can't click on that box
            alert("Don't cheat");
        }
        else{
                if(user === "X"){
                    XMark(element[0]);
                    start(element[1],element[2],circleMark);
                } 
                else{
                    circleMark(element[0]);
                    start(element[1],element[2],XMark);
                } 
            }
        
    })
})

//retstart 
const reStart = ()=>{ 
    brr.forEach((e)=>{
    e[0].innerHTML = "";
})
    space = 9;
    arr = [["1","2","3"],["4","5","6"],["7","8","9"]];
}



// let str = "";
// for(let i = 0;i<3;i++){
//     for(let j =0;j<3;j++){
//         str = str + " " + arr[i][j];
//     }
//     str = str + "\n";
// }
// console.log(str);

