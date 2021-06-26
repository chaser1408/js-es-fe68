function DanhSachNhanVien() {
    this.arr = [];

    this.themNhanVien = function (NhanVien) {
        this.arr.push(NhanVien);
    }

    this.xoaNhanVien = function (maNV) {
        var viTri = this.timViTri(maNV);
        if (viTri !== -1) {
            this.arr.splice(viTri, 1);
        }
    }

    this.timViTri = function (maNV) {
        /**
         * findIndex:
         * TÌM THẤY THÌ TRẢ VỀ INDEX
         * KO TÌM THẤY SẼ TRẢ VỀ -1
         */
        return this.arr.findIndex(function (nv) {
            return maNV === nv.maNV;
        })
    }
}