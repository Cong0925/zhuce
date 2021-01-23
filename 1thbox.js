; (function () {
    var box = (function () {
        var $box = document.querySelector("#box");
        return {
            show: function (event) {
                $box.style.display = "block";
            },
            hide: function () {
                $box.style.display = "none";
            }
        };
    })();

    document.querySelector("#dianji")
        .addEventListener("click", box.show);
    document.querySelector("#close")
        .addEventListener("click", box.hide);
})();