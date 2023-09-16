document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.show');
    var divs = document.querySelectorAll('.toggle');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = link.getAttribute('data-part');

            // Hide all divs with the class 'toggle'
            divs.forEach(function (div) {
                div.style.display = 'none';
            });

            // Show the selected div
            var selectedDiv = document.getElementById(target);
            if (selectedDiv) {
                selectedDiv.style.display = 'block';
            }
        });
    });
});