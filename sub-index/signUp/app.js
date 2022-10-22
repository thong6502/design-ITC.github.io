$(document).ready(function(){
    $('.container-sign').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        infinity: true,
        arrows: true, // hien thi mui ten
        fade: false,  // phai mau
        draggable: false, // co the keo duoc
        autoplay: false,


        prevArrow:`<button type='button' id='dangNhap' class='slick-btn remove' onclick="dangNhapFunction()">
        Đăng Nhập</button>`,

        nextArrow:`<button type='button' id='dangKy'   class='slick-btn' onclick="dangKyFunction()">
        Đăng Ký</button>`,
    });
  });



  function dangNhapFunction() {
    var element1 = document.getElementById("dangNhap");
    element1.classList.add("pull");
    setTimeout(function(){
        var element2 = document.getElementById("dangKy");
        element2.classList.remove("pull");
    }, 450); 
 };

  function dangKyFunction() {
    var element2 = document.getElementById("dangKy");
    element2.classList.add("pull");
    setTimeout(function(){
        var element1 = document.getElementById("dangNhap");
        element1.classList.remove("pull");
        element1.classList.remove("remove");
    }, 450); 

 };
