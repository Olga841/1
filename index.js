let burger = Array.from(document.getElementsByClassName("burger-menu"));
console.log(burger);
document.getElementById("burger-menu").addEventListener("click", function () {
    burger.map(e => {
        
        e.classList.toggle("active");
    });
      
});