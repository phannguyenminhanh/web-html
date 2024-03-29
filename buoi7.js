//Viet chuong trinh JS xep hang hoc luc cua hoc sinh dua tren diem cac bai kiem tra, diem thi giua, cuoi ky.
var a = prompt('nhap diem kiem tra');
function hocluc(a){
if (a>=9){
    alert('hang A');
}
else if (a>=7 && a<9){
    alert('hang B');
}
else if (a>=5 && a<7){
    alert('hang C');
}
else{
    alert('hang F');
}
}