// $(document).ready(function() {

//     $(document).on("click", "#save", function(){
//         console.log("fds");
//         console.log($(this).parent().parent().find("img").attr("src"));
//         console.log($(this).parent().parent().parent().parent().find("h3").text());
//         console.log($(this).parent().parent().parent().parent().find("#authors").text());

//         $.ajax({
//             method: "POST",
//             url: "/saved",
//             data: {
//                 title: $(this).parent().parent().parent().parent().find("h3").text(),
//                 author: $(this).parent().parent().parent().parent().find("#authors").text(),
//                 about: $(this).parent().parent().parent().parent().find("#about").text(),
//                 image: $(this).parent().parent().find("img").attr("src")
//             }
//         })
//     })
// });