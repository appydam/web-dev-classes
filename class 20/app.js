var c_b = document.getElementById('clear');
c_b.addEventListener('click', function(){
    document.getElementById('iii').value = ""

})


function display(v){
    const input = document.getElementById('iii');
    new_value = input.value = input.value + v;
    input.append(new_val);
}

function deleteLastDigit(){
    let x = "";
    let result = document.getElementById('iii');
    x = result.value;
    var newstr = x.slice(0,x.length - 1);
    document.getElementById('iii').value = newstr;
}

function calculate(){
    let num = document.getElementById('iii').value;
    let ans = eval(num);
    document.getElementById('iii').value = ans;
}