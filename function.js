$(function () {
    function toggleAnimation() {
        $('nav.menu-desktop').fadeToggle(3000, function () {
            console.log("Terminamos nossa animação!");
            // Chame a função novamente após a conclusão da animação
            toggleAnimation();
        });
    }

    // Inicie a animação pela primeira vez
    toggleAnimation();
});


