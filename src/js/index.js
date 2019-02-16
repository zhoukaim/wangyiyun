box.onclick = function () {
    $.ajax({
        url: "/api/list",
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                var html = ""
                data.data.forEach(function (v, i) {
                    html += `
                    <dl>
                        <dt><img src="${v.src}" alt=""></dt>
                        <dd>${v.name}</dd>
                    </dl>`;
                })
                dlbox.innerHTML = html;
            }
        }
    })
    $.ajax({
        url: "/api/swiper",
        dataType: "json",
        success: function (data) {
            if (data.code == 1) {
                var html = ""
                data.data.forEach(function (v, i) {
                    html += `<div class="swiper-slide"><img src="${v.src}"></div>`;
                })
                swiper1.innerHTML = html;
                console.log(html)
            }
        }
    })
}