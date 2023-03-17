var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
var opened = false;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click",function(){
        var icon_child = this.firstElementChild;
        if (opened == false){
            icon_child.src = "./assets/icons/down.svg";
            opened = true;
            dropdown[i]
        }else{
            icon_child.src = "./assets/icons/right.svg";
            opened = false;
        }
        var dropdownList = this.nextElementSibling;
        if(dropdownList.style.display == "grid"){
            dropdownList.style.display = "none";
        }else{
            dropdownList.style.display = "grid";
        }
    });
    
}
function openTab(event,content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(content).style.display = "flex";
    
}
function affiche_info(){
    window.api.info();
}
function changePlaceholder(value){
    var dropdowns1 = document.getElementsByClassName("dropdown1");
    var dropdowns2 = document.getElementsByClassName("dropdown2");
    switch (value) {
        case 1:
            var e = dropdowns1[0];
            var k = document.getElementsByName("1")[0];
            k.placeholder = e.value;    
            break;
        case 2:
            var e = dropdowns2[0];
            var k = document.getElementsByName("2")[0];
            k.placeholder = e.value;    
            break;
        case 3:
            var e = dropdowns1[1];
            var k = document.getElementsByName("3")[0];
            k.placeholder = e.value;    
            break;
        case 4:
            var e = dropdowns2[1];
            var k = document.getElementsByName("4")[0];
            k.placeholder = e.value;    
            break;
        case 5:
            var e = dropdowns1[2];
            var k = document.getElementsByName("5")[0];
            k.placeholder = e.value; 
            break;
        case 6:
            var e = dropdowns2[2];
            var k = document.getElementsByName("6")[0];
            k.placeholder = e.value;
            break;
        case 7:
            var e = dropdowns1[3];
            var k = document.getElementsByName("7")[0];
            k.placeholder = e.value;
            break;
        case 8:
            var e = dropdowns2[3];
            var k = document.getElementsByName("8")[0];
            k.placeholder = e.value;  
            break;
        case 9:
            var e = dropdowns1[4];
            var k = document.getElementsByName("9")[0];
            k.placeholder = e.value;  
            break;
        case 10:
            var e = dropdowns2[4];
            var k = document.getElementsByName("10"[0]);
            k.placeholder = e.value;  
            break;
        default:
            console.log("error");
            break;
    }
}
function minimize_window(){
    window.api.mini();
}
function exit_window(){
    window.api.exit(); 
}