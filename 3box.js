; (function () {
    var box = (function () {
        var $box = document.querySelector("#box3");
        var $box1 = document.querySelector("#top");
        return {
            show: function (event) {
                $box.style.display = "block";
                $box1.style.display = "block";
            },
            hide: function () {
                $box.style.display = "none";
            }
        };
    })();

    document.querySelector("#close2")
        .addEventListener("click", box.show);
    document.querySelector("#close3")
        .addEventListener("click", box.hide);
})();