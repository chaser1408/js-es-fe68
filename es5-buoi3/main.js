/**
 * Object: Kiểu đối tượng
 */

var person = {
    // key: value
    // Đối tượng có 2 thành phần là thuộc tính (properties)
    // và phương thức (methods)

    // properties

    name: 'Sang',
    age: 23,
    class: 'FE68',
    country: 'Viet Nam',

    // methods
    greeting: function () {
        return 'Hello!';
    }
}

// Truy xuất thuộc tính, phương của đối tượng
// C1

console.log(person.name);
console.log(person.age);
console.log(person.class);
console.log(person.country);
console.log(person.greeting());

// C2
console.log(person['age']);
var _age = 'age';
console.log(person[_age]);

// Thay đổi giá trị thuộc tính
person.name = 'Phú Sang';
console.log(person.name);
person['name'] = 'Trương Phú Sang'
console.log(person.name);

// Thêm thuộc tính vào object
person.height = 175;
console.log(person);

// Xóa thuộc tính trong object
delete person.age;
delete person['class'];
console.log(person);

var employee = {
    // Thuộc tính
    id: '1234',
    fullName: 'Trương Phú Sang',
    email: 'tpsang.1408@gmail.com',

    // Phương thức
    tinhLuong: function () {

    },

    tinhGioLam: function () {

    },

    // Phương thức (shorthand)
    tinhTongNgayNghi() {
        console.log('shorthand');
    }
}
