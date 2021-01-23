; (function () {
    var box = (function () {
        var $box = document.querySelector("#box2");
        return {
            show: function (event) {
                $box.style.display = "block";
            },
            hide: function () {
                $box.style.display = "none";
            }
        };
    })();

    document.querySelector("#close")
        .addEventListener("click", box.show);
    document.querySelector("#close2")
        .addEventListener("click", box.hide);
})();