// Array (mảng)

// Khởi tạo mảng
// C1: 
var listSinhVien = ['Truong', 'Phu', 'Sang'];

// C2:
var listNhanVien = new Array('Truong', 'Xuyen', 'Tram');

// Truy xuất phần tử trong mảng
console.log(listSinhVien[2]);

// Cập nhật giá trị
listSinhVien[0] = 'Trương';
console.log(listSinhVien[0]);

// Thêm hoặc xóa các phần tử trong mảng
//Thêm (push) vào vị trí cuối cùng của mảng
listNhanVien.push('23 Tuổi');
console.log(listNhanVien);

// Thêm (unshift) vào vị trí đầu tiên của mảng
listNhanVien.unshift("I'm");
console.log(listNhanVien);

// Xóa (pop) phần tử ở vị trí cuối mảng
listNhanVien.pop();
console.log(listNhanVien);

// Xóa (pop) phần tử ở vị trí đầu mảng
listNhanVien.shift();
console.log(listNhanVien);
console.log(listNhanVien.length);

// Duyệt mảng (vòng lặp for)
// debugger
for (var i = 0; i< listNhanVien.length; i++) {
    console.log(listNhanVien[i]);
}

/**
 * DOM:
 * - DOM thông qua ID (trả về element)
 * - DOM thông qua TAG-NAME (trả về 1 danh sách)
 * - DOM thông qua Class-name (trả về 1 danh sách)
 */

// DOM thông qua ID
// debugger
var tagHelloDOM = document.getElementById('helloDOM');
tagHelloDOM.innerHTML = 'Hello DOM ne';
tagHelloDOM.style.backgroundColor = 'yellow';
tagHelloDOM.style.color = 'gray';
tagHelloDOM.style.margin = '50px auto';

console.log(tagHelloDOM.innerHTML + ' from Sang');

// DOM thông qua tagname
var tagHeading = document.getElementsByTagName('h2');
console.log(tagHeading[1]);

// DOM thông qua class
var classWelcome = document.getElementsByClassName('welcome');
classWelcome[2].style.color = 'blue';

// Xử lý onClick
// C1
// var handleClickChaoTheGioi = function() {
//     alert('Chào thế giới');
// }

// C2
// document.getElementById('btnChaoTheGioi').onclick = function() {
//     alert('Chào thế giới');
// }

// C3
// + callback function: là function mà là tham số của 1 function khác
// + có được thực thi hay không là dựa vào một function khác
document.getElementById('btnChaoTheGioi').addEventListener('click', chao2);

var chao2 = function() {
    alert('Chào thế giới');
}


var tagP = document.getElementById('tagP');

document.getElementById('btnNhanEmDi').onclick = function() {
    tagP.innerHTML = 'Đã thay đổi!!';
};


// Đèn
document.getElementById('btnBatDen').onclick = function() {
    document.getElementById('imgDen').src = '/es5-buoi2/img/pic_bulbon.gif';
}

document.getElementById('btnTatDen').onclick = function() {
    document.getElementById('imgDen').src = '/es5-buoi2/img/pic_bulboff.gif';
}