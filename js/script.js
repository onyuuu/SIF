$("#nav>ul>li")
  .on("mouseenter focusin", function () {
    $(".dep2").stop().slideDown();
  })
  .on("mouseleave", function () {
    $(".dep2").stop().slideUp();
  });
