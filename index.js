// bt quản lí tuyển sinh 
// sơ đồ 3 khối 
/**
 * 
 * INPUT : ĐIểm chuẩn, điểm 3 môn thi, khu vực và đối tượng thi.
 * 
 * PROCESS:1. Nhận giá trị đầu vào từ input
 *         2. Tính điểm tổng kết = điểm 3 môn thi + điểm ưu tiên (điểm cho trong bảng).
 *         3. In kết quả ra màn hình
 * 
 * 
 * 
 * OUTPUT: Thông báo thí sinh đậu hoặc rớt
 *         In tổng điểm ra màn hình.
 * 
 */

// Nhận vào khu vực và trả điểm ưu tiên 

function calcAreaGrade(area) {
    if (area === "A") {
        return 2;
    }
    if (area === "B") {
        return 1;
    }
    if (area === "C") {
        return 0.5;
    }
    return 0;
}

function calcStudentType(studentType) {
    if (studentType === "1") {
        return 2.5;
    }
    if (studentType === "2") {
        return 1.5;
    }
    if (studentType === "3") {
        return 1;
    }
    return 0;
}

function ex1() {
    var standardGrade = 23;
    var sub1 = 6;
    var sub2 = 8;
    var sub3 = 10;
    var area = "A";
    var studentType = "1";

    //tính điểm ưu tiên theo khu vực
    var areaGrade = calcAreaGrade(area);

    // tính điểm ưu tiên theo đối tượng 
    var studentTypeGrade = calcStudentType(studentType);

    var totalGrade = sub1 + sub2 + sub3 + areaGrade + studentTypeGrade;

    if (totalGrade >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0) {
        console.log("Đậu", totalGrade);
    } else {
        console.log("Trượt", totalGrade);
    }

}
ex1();

// Tính tiền điện 
// sơ đồ 3 khối 
/**
 * INPUT: Nhập vào tên và số kw tiêu dùng
 * 
 * PROCESS:1. Nhận giá trị input
 *         2. Tính tiền điện theo quy tắc
 *         3. In ra màn hình
 * 
 * 
 * OUTPUT:in ra tên và số tiền điện người đó phải trả
 */

function ex2() {
    var fullName = prompt("Vui lòng nhập họ tên của bạn:", "");
    var kw = prompt("Vui lòng nhập số kw đã tiêu thụ:", "");
    var totalPrice;
    if (kw <= 50) {
        totalPrice = 500 * kw;
    } else if (kw <= 100) {
        totalPrice = 500 * 50 + (kw - 50) * 650;
    } else if (kw <= 200) {
        totalPrice = 500 * 50 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        totalPrice = 500 * 50 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        totalPrice = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
    console.log("Họ tên :", fullName);
    console.log("Số KW tiêu dùng:", kw);
    console.log("Số tiền phải trả: ", totalPrice);
}
ex2();