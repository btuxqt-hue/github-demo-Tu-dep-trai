function kiemTra() {

    var ten_vo = document.getElementById('ten_vo');
    var ngay_vo = document.getElementById('ngay_vo');
    var email_vo = document.getElementById('email_vo');

    var ten_vo_er = document.getElementById('ten_vo_er');
    var ngay_vo_er = document.getElementById('ngay_vo_er');
    var email_vo_er = document.getElementById('email_vo_er');

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexNgay = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    var hopLe = true;

    // ===== TÊN VỢ =====
    if(ten_vo.value.length == 0){
        ten_vo_er.innerHTML = "Không được để trống";
        ten_vo_er.style.color = "red";
        hopLe = false;
    } else {
        ten_vo_er.innerHTML = "Hợp lệ";
        ten_vo_er.style.color = "green";
    }

    // ===== NGÀY SINH VỢ =====
    if(!regexNgay.test(ngay_vo.value)){
        ngay_vo_er.innerHTML = "Ngày không hợp lệ";
        ngay_vo_er.style.color = "red";
        hopLe = false;
    } else {
        ngay_vo_er.innerHTML = "Hợp lệ";
        ngay_vo_er.style.color = "green";
    }

    // ===== EMAIL VỢ =====
    if(!regexEmail.test(email_vo.value)){
        email_vo_er.innerHTML = "Email không hợp lệ";
        email_vo_er.style.color = "red";
        hopLe = false;
    } else {
        email_vo_er.innerHTML = "Hợp lệ";
        email_vo_er.style.color = "green";
    }

    return hopLe;
}