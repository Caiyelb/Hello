$(".add").click(function(){
    var image =$(".picture-url").val();
    $(".gallery").append("<img src=" + image + ">");
    if (image.match(/\.(jpg|jpeg|gif|png)$/) === null){
        alert("Error: url not loading");
    }
    $(".picture-url").val(" ");
});
