console.log("Hello World!!");

// THIS IS MY COMMENT

/* 
- Biến và kiểu dữ liệu 
- Kiểu nguyên thủy (primitive type): string, number, boolean, undefined, null
- Còn lại là object
- null là kiểu object => bug
- phép gán (=)
- dynamic type
- đặt tên theo kiểu lạc đà camelCase (kiểu lạc đà), nên đặt tên có ý nghĩa
- không bắt đầu bằng số và kí tự đặc biệt, chỉ được đừng dấu gạch dưới
- được dùng khoảng trắng khi đặt tên
- không được đặt trùng với các từ khóa của js, ví dụ như if else function var let const
- hằng số là const, nó sẽ không bao giờ thay đổi, ngay cả gán giá trị khác, và nên đặt tên IN_HOA

* HOISTING:
- Hoistring là cơ chế đẩy một biến được khai báo lên trên cùng scope chứa nó 
=> nó có thể truy cập được biến trước khi nó được khai báo.

- Đối với biến: hoistring chỉ xảy ra với từ khóa var
- Đối với function: hoistring chỉ xảy ra với declare function
*/

// string
var fullName = "Trương Phú Sang";
var nickName = "Levi";

// number
var age = 23;

// boolean
var isMale = true;
if(isMale){
    isMale = "Boy";
} else {
    isMale = "Female";
}

// undefined
var height;

// null 
var weight = null; 

console.log(fullName + " and my nickname is " + nickName + "!! And I'm " + age + " years old!! And I'm a " + isMale + "!!");

// var _a => ok
// var 2a => ăn cứt ăn bầu đuồi
// var a2 => ok
// var ?a => toang
// var a-b => toang nốt

// không có giá trị => toang
const PI = 3.14;

// if else
var isAdult = true;
if(isAdult){
    console.log('You can access this page!');
}
else {
    console.log('FBI Warning!');
}

// if else if else
var trafficLight = 'red';
if(trafficLight == 'green') {
    console.log('Go go go!!');
} else if (trafficLight == 'yellow') {
    console.log('Slow down now!!');
} else if (trafficLight == 'red') {
    console.log('Stop right now!!');
} else {
    console.log('No power!!');
}

//  Ternary operator (toán tử 3 ngôi)
1 === 2 ? console.log("đúng") : console.log("sai");

// Phép so sánh
console.log(3 == '3');
console.log(3 === '3');
console.log(3 != '3');
console.log(3 !== '3');

// switch case
var number = 1;

switch (number) {
    case 1: 
        console.log('Một');
        break;
    case 2: 
        console.log('Hai');
        break;
    case 3: 
        console.log('Ba');
        break;
    case 4: 
        console.log('Bốn');
        break;
    case 5: 
        console.log('Năm');
        break;
    default:
        console.log('Không xác định')
        break;
}

// biểu thức điều kiện (LOGICAL OPERATOR)
var A = true;
var B = false;

console.log(A && B);
console.log(A || B);
console.log(!(!A || B));

const a = 3;
const b = -2;

var result = (a < 0 || b);
console.log(result);

function sayHello(){
    console.log("Hello");
}

//  Expression function

var _sayHello = function(name) {
    console.log("Hello " + name)
}

_sayHello("Sang");

// Hoistring

var demoHoistring = 'hoistring';
console.log(demoHoistring);

// console.log(hoistringConst); => toang
const hoistringConst = 'hoistring';

/**
 * BT1: Tính điểm TB sinh viên và xếp loại SV
 */

var tinhDiemTB = function(dToan, dLy, dHoa) {
    var dtb = (dToan + dLy + dHoa) / 3;
    return dtb;
}

var xepLoai = function() {
    var dtb = tinhDiemTB(8, 8, 8);
    var xepLoai = '';

    if (dtb >= 9 && dtb <= 10) {
        xepLoai = 'Xuất sắc';
    } else if (dtb >= 8 && dtb < 9) {
        xepLoai = 'Giỏi';
    } else if (dtb < 8 && dtb >= 7) {
        xepLoai = 'Khá';
    } else if (dtb < 7 && dtb >= 6) {
        xepLoai = 'Trung Bình Khá';
    } else if (dtb < 6 && dtb >= 5) {
        xepLoai = 'Trung Bình';
    } else {
        xepLoai = 'Ăn cứt ăn bầu đuồi';
    }
    
    console.log('Xếp loại: ' + xepLoai);
}

xepLoai();