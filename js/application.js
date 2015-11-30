$(document).ready(function() {

  var viewportWidth = $(window).width();

function unwrapAllSections() {
  if ( $("#content-holder").attr("name") === "900" ){
    $("#QueryMethods-title").unWrap();
    $("#Associations-title").unWrap();
    $("#ModelSchema-title").unWrap();
  }
  if ( $("#content-holder").attr("name") === "500" ){
    $("#QueryMethods-title").unWrap();
    $("#Relation-title").unWrap();
  }
}

function nineHundred() {
  $("#QueryMethods-title, #Persistence-title").wrapAll("<section class=\"col-4\"></section>");
  $("#Associations-title, #FinderMethods-title, #Relation-title").wrapAll("<section class=\"col-4\"></section>");
  $("#ModelSchema-title, #SchemaStatments-title").wrapAll("<section class=\"col-4\"></section>");
  $("#content-holder").attr("name", "900");
}

function fiveHundred() {
  $("#QueryMethods-title, #Persistence-title, #Associations-title, #FinderMethods-title").wrapAll("<section class=\"col-6\"></section>");
  $("#Relation-title, #ModelSchema-title, #SchemaStatments-title").wrapAll("<section class=\"col-6\"></section>");
  $("#content-holder").attr("name", "500");
}


  var fitColumnsToScreen = function(){
    if ( viewportWidth > 900 ) {
      if ( $("#content-holder").attr("name") === "900" ){ return };
      unwrapAllSections();
      nineHundred();
    } else if ( (viewportWidth > 500 && viewportWidth <= 900) ) {
      if ( $("#content-holder").attr("name") === "500" ){ return };
      unwrapAllSections();
      fiveHundred();
    };
  }

  fitColumnsToScreen();

  var targetButtonsReset = function(){
    $("a").removeAttr("target");
    $("a.navi").css("color", "#949494");
    $("a.navi").removeClass("activated");
  }

  var activate = function(thisLink){
    thisLink.css("color", "white");
    thisLink.addClass("activated");
  }

  $("#theOtherButton").on("click", function(event){
    event.preventDefault();
    targetButtonsReset();
    $("a").attr("target", "_blank");
    activate($(this));
  })

  $("#thisButton").on("click", function(event){
    event.preventDefault();
    targetButtonsReset();
    activate($(this));
  })

  $("#thatButton").on("click", function(event){
    event.preventDefault();
    targetButtonsReset();
    activate($(this));
  })

  $("a.query").on("click", function(event){
    if ($("#thisButton").hasClass("activated")) {
      event.preventDefault();
      var thisHref = $(this).attr("href");
      $("iframe").attr("src", thisHref);
      $("#floater").show(speed = 600);
    } else {
      return;
    };
  })

  $("#close-iframe").on("click", function(event){
    event.preventDefault();
    $("#floater").hide(speed = 600);
  })

window.onresize = fitColumnsToScreen();

});
