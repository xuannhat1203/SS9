let toan=+prompt("Nhập điểm môn Toán");
let li=+prompt("Nhập điểm môn Vật Lí");
let hoa=+prompt("Nhập điểm môn Hóa Học");
let van=+prompt("Nhập điểm môn Văn");
let su=+prompt("Nhập điểm môn Sử");
let dia=+prompt("Nhập điểm môn Địa Lí");
let diemTrungBinh = (toan+li+hoa+su+dia+van)/6;
if (diemTrungBinh >8 && diemTrungBinh == 10 ) {
    console.log("Giỏi");
}else if (diemTrungBinh > 6.5 && diemTrungBinh<7.9) {
   console.log("Khá");
} else if (diemTrungBinh > 5.0 && diemTrungBinh < 6.4) {
    console.log("Trung Bình");
}else {
    console.log("Yếu")
}