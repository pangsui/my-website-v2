$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
    console.log("this is " + this);
  });

  $(".top-nav .nav-link").on("click", function () {
    $("menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('.nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 10,
      },
      2000
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
  });

  // form validation
  $(".submit").click(function (event) {
    //event.preventDefault()
    console.log("clicked button");

    var name = $(".name").value;
    var email = $(".email").value;
    var contact = $(".contact-num").value;
    var message = $(".message").value;
    var statusElm = $(".status-failure");
    var statusSuccess = $(".status-success");
    var numbers = /^[0-9]+$/;

    statusElm.empty();
    statusSuccess.empty();

    if (
      email.length > 8 &&
      email.includes("@") &&
      email.includes(".") &&
      contact.length > 8 &&
      contact.match(numbers) &&
      message.length > 0
    ) {
      console.log("Messent sent");
      alert("Message Sent");

      //document.getElementById('name').style.content = '';
      //location.reload();
      statusSuccess.append("<div> Message Sent </div>");
    } else {
      event.preventDefault();
      statusElm.append("<div> Make sure you fill all fields correctly</div>");
    }
    document.getElementById("name").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("contact-num").textContent = "";
    document.getElementById("message").textContent = "";
  });
});
