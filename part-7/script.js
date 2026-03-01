
 document.getElementById("changeTextButton").addEventListener('click',function(){
    document.getElementById("myParagraph").innerHTML="this the chaned value"
 })

 //e.g 2
 document.getElementById("highlightFirstCity").addEventListener('click',function(){
    let cityList=document.getElementById("citiesList")
    cityList.firstElementChild.classList.add("highlight")
 })


//e.g 3
document.getElementById("changeOrder").addEventListener('click',function(){
    document.getElementById("coffeOrder").innerHTML="Espresso";
})

