'use strict';

 $(function(){

    $("#dropdown-shipmentmilestone li a").click(function(){

      $("#button-selectmilestone:first-child").text($(this).text());
      $("#button-selectmilestone:first-child").val($(this).text());

   });

});

  /*$(function(){

    $("#dropdown-status li a").click(function(){

      $("#button-status:first-child").text($(this).text());
      $("#button-status:first-child").val($(this).text());

   });

});

