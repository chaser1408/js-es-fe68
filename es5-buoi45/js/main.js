/**
 * KHỞI TẠO DANH SÁCH NHÂN VIÊN TỪ ĐỐI TƯỢNG DANHSACHNHANVIEN
 */
var dsnv = new DanhSachNhanVien();

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
                <button class="btn btn-success">Xem</button>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
                </td>
            </tr>

        `;
        getEle('tableDanhSach').innerHTML = content;
    });
};

// XÓA NHÂN VIÊN
var xoaNhanVien = function (maNV) {
    dsnv.xoaNhanVien(maNV);
    renderDSNV(dsnv.arr);
    setLocalStorage();
}

// LẤY DATA TỪ LOCAL STORAGE NGAY TỪ LÚC LOAD TRANG
getLocalStorage();

getEle('btnDong').addEventListener('click', () => {
    getEle('btnCapNhat').style.display = 'none';
});

getEle('btnThem').addEventListener('click', () => {
    getEle('btnCapNhat').style.display = 'none';
});

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
    getEle('btnDong').click();

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
