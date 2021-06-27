/**
 * KHỞI TẠO DANH SÁCH NHÂN VIÊN TỪ ĐỐI TƯỢNG DANHSACHNHANVIEN
 */
var dsnv = new DanhSachNhanVien();

var validator = new Validator();

var getEle = function (id1) {
    return document.getElementById(id1);
};

var queSelec = function (id2) {
    return document.querySelector(id2);
};

var renderDSNV = function (dsnv) {
    var content = '';
    dsnv.forEach(function (nv, index) {
        /**
         *  nv: đại diện cho 1 phần tử trong mảng (obj nhân viên)
         *  index: số chỉ mục của phần tử, bắt đầu bằng 0
         */
        content += `
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaySinh}</td>
                <td>${nv.chucVu}</td>
                <td>
                <button class="btn btn-success" data-toggle="modal" data-target="#myModal" 
                onclick="suaNhanVien('${nv.maNV}')">Xem</button>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
                </td>
            </tr>

        `;
        getEle('tableDanhSach').innerHTML = content;
    });
};

// XÓA NHÂN VIÊN
function xoaNhanVien(maNV) {
    dsnv.xoaNhanVien(maNV);
    renderDSNV(dsnv.arr);
    setLocalStorage();
};

// SỬA NHÂN VIÊN
function suaNhanVien(maNV) {
    getEle('btnThemNV').style.display = 'none';
    getEle('btnCapNhat').style.display = 'block';
    getEle('msnv').disabled = 'true';
    // getEle('msnv').setAttribute(disabled, 'true');

    var nhanVien = dsnv.layThongTinNhanVien(maNV);

    getEle('msnv').value = nhanVien.maNV;
    getEle('name').value = nhanVien.hoTen;
    getEle('email').value = nhanVien.email;
    getEle('password').value = nhanVien.matKhau;
    getEle('datepicker').value = nhanVien.ngaySinh;
    getEle('chucvu').value = nhanVien.chucVu;

    validateInput(maNV, hoTen, email, matKhau);
};

// CẬP NHẬT NHÂN VIÊN
getEle('btnCapNhat').addEventListener('click', function () {
    /**
     * LẤY THÔNG TIN MỚI TỪ Ô INPUT
     */
    var maNV = getEle('msnv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngaySinh = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    if (!validateInput(maNV, hoTen, email, matKhau)) return;

    var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);

    dsnv.capNhatNhanVien(nhanVien);
    getEle('btnDong').click();
    renderDSNV(dsnv.arr);
    setLocalStorage();
});

getEle('searchName').addEventListener('keyup', function () {
    var keyword = getEle('searchName').value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyword);
    renderDSNV(mangTimKiem);
});

// LẤY DATA TỪ LOCAL STORAGE NGAY TỪ LÚC LOAD TRANG
getLocalStorage();

getEle('btnDong').addEventListener('click', () => {
    getEle('btnCapNhat').style.display = 'none';
});

getEle('btnThem').addEventListener('click', () => {
    getEle('btnThemNV').style.display = 'block';
    getEle('btnCapNhat').style.display = 'none';
});

var validateInput = function (maNV, hoTen, email, matKhau) {
    var isValid = true;

    isValid &= validator.kiemTraRong(maNV, 'tbMaNV', 'Mã nhân viên không được để trống!!')
        && validator.kiemTraDoDaiKyTu(maNV, 'tbMaNV', 'Vui lòng nhập từ 4 - 10 ký tự!!', 4, 10);

    isValid &= validator.kiemTraRong(hoTen, 'tbTen', 'Họ tên không được để trống!!')
        && validator.kiemTraChuoi(hoTen, 'tbTen', 'Họ tên không hợp lệ!!');

    isValid &= validator.kiemTraRong(email, 'tbEmail', 'Email không được để trống!!')
        && validator.kiemTraEmail(email, 'tbEmail', 'Email không đúng định dạng!!');

    isValid &= validator.kiemTraRong(matKhau, 'tbMatKhau', 'Mật khẩu không được để trống!!')
        && validator.kiemTraDoDaiKyTu(matKhau, 'tbMatKhau', 'Vui lòng nhập từ 6 - 8 ký tự!!', 6, 8);

    isValid &= validator.kiemTraChucVu('chucvu', 'tbChucVu', 'Bạn chưa chọn chức vụ!!');

    return isValid;
}

getEle('btnThemNV').addEventListener('click', () => {
    /**
     * LẤY THÔNG TIN TỪ NGƯỜI NHẬP
     */
    var maNV = getEle('msnv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngaySinh = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    /**
     * KIỂM TRA DỮ LIỆU NHẬP VÀO
     */


    if (!validateInput(maNV, hoTen, email, matKhau)) return;

    /**
     * KHỞI TẠO ĐỐI TƯỢNG NHÂN VIÊN TỪ LỚP ĐỐI TƯỢNG NHÂN VIÊN
     */
    var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);

    /**
     * THÊM ĐỐI TƯỢNG NHÂN VIÊN VÀO MẢNG
     */
    dsnv.themNhanVien(nhanVien);

    /**
     * RENDER DANH SÁCH NHÂN VIÊN RA GIAO DIỆN
     */
    renderDSNV(dsnv.arr);

    /**
     * ĐÓNG MODEL
     */
    // getEle('btnDong').click();

    /**
     * LƯU DATE XUỐNG LOCAL STORAGE
     */
    setLocalStorage();
});

function getLocalStorage() {
    /**
     * LẤY DATE TỪ LOCAL STORAGE 
     */
    if (localStorage.getItem("DSNV")) {
        dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
        renderDSNV(dsnv.arr);
    }
};

function setLocalStorage() {
    /**
     * LƯU DATE XUỐNG LOCAL STORAGE CỦA BROWSER CHROME, CHUYỂN THÀNH ĐỊNH DẠNG JSON
     * JSON LÀ MỘT ĐỊNH DẠNG DỮ LIỆU, KHÔNG PHẢI LÀ KIỂU DỮ LIỆU
     */
    localStorage.setItem("DSNV", JSON.stringify(dsnv.arr));
};
