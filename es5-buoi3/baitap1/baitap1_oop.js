var getEle = function (id) {
    return document.getElementById(id);
}

var hienThiThongTin = function () {
    var _tenSV = getEle('txtTenSV').value;
    var _maSV = getEle('txtMaSV').value;
    var _hoanCanh = getEle('loaiSV').value;
    var _diemToan = getEle('txtDiemToan').value;
    var _diemVan = getEle('txtDiemVan').value;


    /**
     * Khởi tạo đối tượng sinhVien
     */
    var sinhVien = {
        maSV: _maSV,
        tenSV: _tenSV,
        hoanCanh: _hoanCanh,
        diemToan: _diemToan,
        diemVan: _diemVan,

        tinhDTB() {
            return parseFloat(parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
        },

        xepLoai(dtb) {
            var loai = '';

            if (dtb >= 8 && dtb <= 10) {
                loai = 'Giỏi';
            }
            else if (dtb >= 6.5 && dtb < 8) {
                loai = 'Khá';
            }
            else if (dtb >= 5 && dtb < 6.5) {
                loai = 'Trung bình';
            }
            else {
                loai = 'Yếu';
            }

            return loai;
        },
    };

    var dtb = sinhVien.tinhDTB();
    getEle('spanTenSV').innerHTML = sinhVien.tenSV;
    getEle('spanMaSV').innerHTML = sinhVien.maSV;
    getEle('spanLoaiSV').innerHTML = sinhVien.hoanCanh;
    getEle('spanDTB').innerHTML = sinhVien.tinhDTB();
    getEle('spanXepLoai').innerHTML = sinhVien.xepLoai(dtb);
}


/**
 * Cách ép kiểu chuỗi => số
 * - parseInt('number'); => chuỗi sang số nguyên
 * - parseFloat('number'); => chuỗi sang số thập phân
 * - Number('number');
 * - +'number': tương ứng với Number
 */


