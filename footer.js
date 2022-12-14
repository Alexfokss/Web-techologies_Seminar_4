let footer = document.createElement("footer");
footer.setAttribute("class","footer-distributed");
footer.setAttribute("id","footer-distributed");
footer.innerHTML = `
    <div class="footer-left">
        <p class="footer-links">
        <a class="link-1" href="index.html">На главную</a>
        <a href="exit.html">Вход</a>
        <a href="album.html">Альбом</a>
        <a href="checkout.html">Оформление заказа</a>
        <a href="table.html">Таблица</a>
        </p> 
        <p>Пудин Михаил © 2022</p>
    </div>
    `
    document.querySelector("body")?.append(footer)