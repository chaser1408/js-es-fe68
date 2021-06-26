var querySelec = function (id1) {
    return document.querySelector(id1);
};

var querySelecAll = function (id2) {
    return document.querySelectorAll(id2);
};

var getEle = function (id3) {
    return document.getElementById(id3);
};

var creatEle = function (id4) {
    return document.createElement(id4);
}

var danhSachSinhVien = [];

var renderDSDV = function () {
    // CLEAR TBODY TRƯỚC TIÊN
    getEle('tbodySinhVien').innerHTML = "";

    for (var i = 0; i < danhSachSinhVien.length; i++) {
        // Tạo dòng
        var tagTr = creatEle('tr');

        // Tạo cột
        var tagTdMaSV = creatEle('td');
        var tagTdTenSV = creatEle('td');
        var tagTdEmail = creatEle('td');
        var tagTdNgaySinh = creatEle('td');
        var tagTdKhoaHoc = creatEle('td');
        var tagTdDiemTB = creatEle('td');

        // Gắn nội dung cho cột
        var sv = danhSachSinhVien[i];
        tagTdMaSV.innerHTML = sv.ma;
        tagTdTenSV.innerHTML = sv.ten;
        tagTdEmail.innerHTML = sv.email;
        tagTdNgaySinh.innerHTML = sv.ngaySinh;
        tagTdKhoaHoc.innerHTML = sv.khoaHoc;
        tagTdDiemTB.innerHTML = sv.tinhDTB();

        // GẮN LẦN LƯỢT CÁC CỘT VÀO DÒNG
        tagTr.appendChild(tagTdMaSV);
        tagTr.appendChild(tagTdTenSV);
        tagTr.appendChild(tagTdEmail);
        tagTr.appendChild(tagTdNgaySinh);
        tagTr.appendChild(tagTdKhoaHoc);
        tagTr.appendChild(tagTdDiemTB);

        // GÁN CÁC DÒNG VÀO TBODY BÊN HTML
        getEle('tbodySinhVien').appendChild(tagTr);

        getEle('formQLSV').reset();
    }
};

var themSinhVien = function () {
    // LẤY THÔNG TIN NHẬP
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var email = getEle('txtEmail').value;
    var matKhau = getEle('txtPass').value;
    var ngaySinh = getEle('txtNgaySinh').value;
    var khoaHoc = getEle('khSV').value;
    var diemToan = getEle('txtDiemToan').value;
    var diemLy = getEle('txtDiemLy').value;
    var diemHoa = getEle('txtDiemHoa').value;

    // KHỞI TẠO ĐỐI TƯỢNG SINH VIÊN TỪ LỚP ĐỐI TƯỢNG SINHVIEN
    var sinhVien = new SinhVien(maSV, tenSV, email, matKhau, ngaySinh, khoaHoc, diemToan, diemLy, diemHoa);

    // THÊM ĐỐI TƯỢNG SINHVIEN MỚI VÀO MẢNG ĐÃ TẠO Ở TRÊN
    danhSachSinhVien.push(sinhVien);

    // RENDER DANH SÁCH SINHVIEN RA GIAO DIỆN
    renderDSDV();

};