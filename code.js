function addNum() {
    num1 = parseInt(document.formtype.txt1.value);
    num2 = parseInt(document.formtype.txt2.value);
    num3 = num1 + num2;
    document.formtype.txt3.value = num3;
}
function subNum() {
    num1 = parseInt(document.formtype.txt1.value);
    num2 = parseInt(document.formtype.txt2.value);
    num3 = num1 - num2;
    document.formtype.txt3.value = num3;
}
function mulNum() {
    num1 = parseInt(document.formtype.txt1.value);
    num2 = parseInt(document.formtype.txt2.value);
    num3 = num1 * num2;
    document.formtype.txt3.value = num3;
}
function divNum() {
    num1 = parseInt(document.formtype.txt1.value);
    num2 = parseInt(document.formtype.txt2.value);
    num3 = num1 / num2;
    document.formtype.txt3.value = num3;
}