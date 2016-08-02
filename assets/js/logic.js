// $(document).ready(function () {
//     var expanded = false;
//     $("#arrow-right").click(function () {
//         if (expanded = !expanded) {
//             $("#caseCover").animate({ "margin-left": 0 }, "fast");
//             expanded = expanded;
//             console.log("Expanded has changed to " + expanded);
//         } else {
//             $("#caseCover").animate({ "margin-left": +612 }, "fast");
//             expanded = !expanded;
//             console.log("Expanded has changed to " + expanded);
//         }
//     });
// });

$(function()
{
     $("#arrow-right").click(function()
     {
         $("#caseContent").toggle("slide");
     }); 
});