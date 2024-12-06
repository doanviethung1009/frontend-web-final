import React from 'react';

const DataItemSelectState = [
    {
        key: "1",
        label: "An Giang",
        value: "AnGiang",
    }
    , {
        key: "2",
        label: "Bà Rịa-Vũng Tàu",
        value: "BaRiaVungTau",
    }
    , {
        key: "3",
        label: "Bắc Giang",
        value: "BacGiang",

    }
    , {
        key: "4",
        label: "Bắc Kạn",
        value: "BacKan",
    }
    , {
        key: "5",
        label: "Bac Lieu",
        value: "BacLieu",
    }
    , {
        key: "6",
        label: "Bắc Ninh",
        value: "BacNinh",
    }
    , {
        key: "7",
        label: "Bến Tre",
        value: "BenTre",
    }
    , {
        key: "8",
        label: "Bình Định",
        value: "BinhDinh",
    }

    , {
        key: "9",
        label: "Bình Dương",
        value: "BinhDuong",
    }
    , {
        key: "10",
        label: "Bình Phước",
        value: "BinhPhuoc",
    }
    , {
        key: "11",
        label: "Bình Thuận",
        value: "BinhThuan",
    }
    , {
        key: "12",
        label: "Cà Mau",
        value: "CaMau",
    }
    , {
        key: "13",
        label: "Cần Thơ",
        value: "CanTho",
    }
    , {
        key: "14",
        label: "Cao Bằng",
        value: "CaoBang",
    }
    , {
        key: "15",
        label: "Đà Nẵng",
        value: "DaNang",
    }
    , {
        key: "16",
        label: "Đắk Lắk",
        value: "DakLak",
    }
    , {
        key: "17",
        label: "Đắk Nông",
        value: "DakNong",
    }
    , {
        key: "18",
        label: "Điện Biên",
        value: "DienBien",
    }
    , {
        key: "19",
        label: "Đồng Nai",
        value: "DongNai",
    }
    , {
        key: "20",
        label: "Đồng Tháp",
        value: "DongThap",
    }
    , {
        key: "21",
        label: "Gia Lai",
        value: "GiaLai",
    }
    , {
        key: "22",
        label: "Hà Giang",
        value: "HaGiang",
    }
    , {
        key: "23",
        label: "Hà Nam",
        value: "HaNam",
    }
    , {
        key: "24",
        label: "Hà Nội",
        value: "HaNoi",
    }
    , {
        key: "25",
        label: "Hà Tĩnh",
        value: "HaTinh",
    }
    , {
        key: "26",
        label: "Hải Dương",
        value: "HaiDuong",
    }
    , {
        key: "27",
        label: "Hải Phòng",
        value: "HaiPhong",
    }
    , {
        key: "28",
        label: "Hậu Giang",
        value: "HauGiang",
    }
    , {
        key: "29",
        label: "TP. Hồ Chí Minh",
        value: "tphcm",
    }
    , {
        key: "30",
        label: "Hòa Bình",
        value: "HoaBinh",
    }
    , {
        key: "31",
        label: "Hưng Yên",
        value: "HungYen",
    }
    , {
        key: "32",
        label: "Khánh Hòa",
        value: "KhanhHoa",
    }
    , {
        key: "33",
        label: "Kiên Giang",
        value: "KienGiang",
    }
    , {
        key: "34",
        label: "Kon Tum",
        value: "KonTum",
    }
    , {
        key: "35",
        label: "Lai Châu",
        value: "LaiChau",
    }
    , {
        key: "36",
        label: "Lâm Đồng",
        value: "LamDong",
    }
    , {
        key: "37",
        label: "Lạng Sơn",
        value: "LangSon",
    }
    , {
        key: "38",
        label: "Lào Cai",
        value: "LaoCai",
    }
    , {
        key: "39",
        label: "Long An",
        value: "LongAn",
    }
    , {
        key: "40",
        label: "Nam Định",
        value: "NamDinh",
    }
    , {
        key: "41",
        label: "Nghệ An",
        value: "NghanAn",
    }
    , {
        key: "42",
        label: "Ninh Bình",
        value: "NinhBinh",
    }
    , {
        key: "43",
        label: "Ninh Thuận",
        value: "NinhThuan",
    }
    , {
        key: "44",
        label: "Phú Thọ",
        value: "PhuTho",
    }
    , {
        key: "45",
        label: "Phú Yên",
        value: "PhuYen",
    }
    , {
        key: "46",
        label: "Quảng Bình",
        value: "QuangBinh",
    }
    , {
        key: "47",
        label: "Quảng Nam",
        value: "QuangNam",
    }
    , {
        key: "48",
        label: "Quảng Ngãi",
        value: "QuangNga",
    }
    , {
        key: "49",
        label: "Quảng Ninh",
        value: "QuangNinh",
    }
    , {
        key: "50",
        label: "Quang Trị",
        value: "QuangTri",
    }
    , {
        key: "51",
        label: "Sóc Trăng",
        value: "SocTrang",
    }
    , {
        key: "52",
        label: "Sơn La",
        value: "SonLa",
    }
    , {
        key: "53",
        label: "Tây Ninh",
        value: "TayNinh",
    }
    , {
        key: "54",
        label: "Thái Bình",
        value: "ThaiBinh",
    }
    , {
        key: "55",
        label: "Thái Nguyên",
        value: "ThaiNguyen",
    }
    , {
        key: "56",
        label: "Thanh Hóa",
        value: "ThanhHoa",
    }
    , {
        key: "57",
        label: "Thừa Thiên Huế",
        value: "ThuaThienHue",
    }
    , {
        key: "58",
        label: "Tiền Giang",
        value: "TienGiang",
    }
    , {
        key: "59",
        label: "Trà Vinh",
        value: "TraVinh",
    }
    , {
        key: "60",
        label: "Tuyên Quang",
        value: "TuyenQuang",
    }
    , {
        key: "61",
        label: "Vĩnh Long",
        value: "VinhLong",
    }
    , {
        key: "62",
        label: "Vĩnh Phúc",
        value: "VinhPhuc",
    }
    , {
        key: "63",
        label: "Yên Bái",
        value: "YenBai",
    }

]

export default DataItemSelectState;