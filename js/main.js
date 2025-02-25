(function ($) {
  //window.scrollTo(0, 0);
  
  function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  const questionDoc = getParameterByName('questionDoc');
  //alert(questionDoc);

  document.addEventListener("DOMContentLoaded", function () {
    window.blickDataLayer.push({
        event: "iframe_impression",
        iframe_name: "storytelling_cryptolist",
        iframe_id: "iframe_impression"
    }); 

    window.blickDataLayer.push({
        event: "iframe_impression",
        iframe_name: "Blick Tools client poll",
        iframe_id: questionDoc
    });

    $("body").addClass("is-visible");
  });



  // setTimeout(function () {
  //   $("body").addClass("is-visible");
    
  // }, 1000);

  
  
  





  })(jQuery);
