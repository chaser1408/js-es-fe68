// Lớp đối tượng: constructor function
function SinhVien(_ma, _ten, _email, _matKhau, _ngaySinh, _khoaHoc, _dToan, _dLy, _dHoa) {

    this.ma = _ma;
    this.ten = _ten;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _dToan;
    this.diemLy = _dLy;
    this.diemHoa = _dHoa;

    this.tinhDTB = function () {
        return (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa) / 3);
    }
}



















/**
 * Cách thức hoạt động của toán tử new
 * 4 bước:
 * 1. Tạo ra 1 object rỗng {}
 * 2. Gọi function SinhVien và đồng thời gắn object rỗng được tạo ra bước 1 vào 1 biến this (this = {})
 * 3. Trở object rỗng b1 đến object prototype trong constructor func (SinhVien)
 * 4. Return về obj rỗng được tạo ra ở bước 1
 */

/**
 * 'this' keyword / variables: tồn tại ở trong function, giá trị của biến this chính là
 * object mà function đó thuộc về, giá trị của 'this' không cố định và đc xác định
 * tại thời điểm mà func đó được thực thi
 * - Regular func: this = global object (window)
 * - 'new': operator (constructor func): this => emptyobject được tạo ra từ constructor
 * - event handler: this = element xảy ra event
 */

// var _sinhVien = function(ma, ten, lop){
//     var emptyObject = {};
//     var _this = emptyObject;

//     _this.ma = ma;
//     _this.ten = ten;
//     _this.lop = lop;
//     return emptyObject;
// }