import convert from "./node_modules/convert/dist/convert.prod.mjs";

var btn = document.getElementsByClassName("Convert-btn");
var tabs = document.getElementsByClassName("tabContent");
var input_selection = document.getElementsByClassName("dropdown1");
var output_selection = document.getElementsByClassName("dropdown2");
var input_num = document.getElementsByClassName("inputNumberField");
var num = [],input_type =[],output_type=[];
var result = document.getElementsByClassName("outputNumberField");
var tab_opened = 0;
for (let index = 0; index < tabs.length; index++) {
    if (tabs[index].style.display != "none") {
        tab_opened = index;
        console.log(tab_opened);
        break;
    }
}
for (let i = 0; i < 5; i++) {
    input_type[i] = input_selection[i].value;
    output_type[i] = output_selection[i].value;

    input_num[i].addEventListener('change', function(event) {
        num[i] = event.target.value;
        console.log('Value: ' + num[i]);
    });
    input_selection[i].addEventListener('change',function(event){
        input_type[i] = event.target.value;
        console.log('input: ' + input_type[i]);
    });
    output_selection[i].addEventListener('change',function(event){
        output_type[i] = event.target.value;
        console.log('output: ' + output_type[i]);
    });
}
for (let j = 0; j < 5; j++) {
    if (j == 1){
        btn[j].addEventListener("click",()=>{
            result[j].value = parseInt(+num[j],+input_type[j]).toString(+output_type[j]);
        });
    }
    else{
        btn[j].addEventListener("click",()=>{
            console.log("value = " + num[j] + " in and out : " + input_type[j] + output_type[j]);
            result[j].value = convert(+num[j],input_type[j]).to(output_type[j]);
        });
    }
}