$("input[name=phone]").mask("+7 (999) 999-9999");
 
loader = document.querySelector(".loading__wrap");
success = document.querySelector(".loading__success");
btn = document.querySelector(".ivent__button");
let btn1 = document.getElementById("submit");

console.log(loader);

// function checkParams() {
//   var name = $("#name").val();
//   var email = $("#email").val();
//   var phone = $("#phone").val();

//   if (name.length != 0 && email.length != 0 && phone.length != 0) {
//     $("#submit").removeAttr("disabled");
//   } else {
//     $("#submit").attr("disabled", "disabled");
//     btn.textContent("rnmmgoenrboenbeonbeonbe");
//   }
// }

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

function checkInputs() {
  const res = [];
  inputs.forEach((el) => {
    el.value ? res.push(1) : 0;
  });
  const result = res.reduce((a, b) => a + b);
  if (result === 3) btn1.innerHTML = "Отправить заявку";
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.id === "name") {
      let val = e.target.value;
      v = val.replace(/[0-9]/g, "");
      e.target.value = v;
    }
    checkInputs();
  });
});

$("form").submit(function (e) {
  e.preventDefault();
  console.log($(this));
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  console.log(btn1);
  console.log(name);
  console.log(email);
  console.log(phone);
  if (name.length != 0 && email.length != 0 && phone.length != 0) {
    btn.style.display = "none";
    loader.style.display = "flex";

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      // data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(".loaderImage").hide();
      $("form").trigger("reset");
      loader.style.display = "none";
      success.style.display = "flex";
      setTimeout(() => {
        success.style.display = "none";
        btn.style.display = "block";
      }, 3000);
    });
    return false;
  } else {
    btn1.innerHTML = "Заполните все необходимые поля";
  }
});





$(window)
  .on("resize", function (e) {
    var init = $(".why__boxs").data("init-slider");
    if (window.innerWidth < 1010) {
      if (init != 1) {
        $(".why__boxs")
          .slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow:
              '<button class="slider__arrows-left-why"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
            nextArrow:
              '<button class="slider__arrows-right-why"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
          })
          .data({ "init-slider": 1 });
      }
    } else {
      if (init == 1) {
        $(".why__boxs").slick("unslick").data({ "init-slider": 0 });
      }
    }
  })
  .trigger("resize");
