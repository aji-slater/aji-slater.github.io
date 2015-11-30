function unwrapAllSections() {
  if ( $("#content-holder").attr("name") === "800" ){
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
  $("#QueryMethods-title, #Persistence-title").wrapAll("<section class=\"col-4 tx-gs th-sm\"></section>");
  $("#Associations-title, #FinderMethods-title, #Relation-title").wrapAll("<section class=\"col-4 tx-gs th-sm\"></section>");
  $("#ModelSchema-title, #SchemaStatments-title").wrapAll("<section class=\"col-4 tx-gs th-sm\"></section>");
  $("#content-holder").attr("name", "800");
}

function fiveHundred() {
  $("#QueryMethods-title, #Persistence-title, #Associations-title, #FinderMethods-title").wrapAll("<section class=\"col-6 tx-gs th-sm\"></section>");
  $("#Relation-title, #ModelSchema-title, #SchemaStatments-title").wrapAll("<section class=\"col-6 tx-gs th-sm\"></section>");
  $("#content-holder").attr("name", "500");
}
