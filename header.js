let header = document.createElement("header");
header.setAttribute("class","header");
header.setAttribute("id","header");
header.innerHTML = `
<div class="container">
    <div class="header-inner">
        <a class="logo">
            Пудин Михаил  </a>
    </div>
</div>
<nav>
<li class="active"><i class="fa-solid fa-user"></i><span></span></li>
<li><a href="exit.html"><i class="fa-solid fa-address-card"></i><span>Вход</span></a></li>
<li><a href="album.html"><i class="fa-solid fa-album"></i><span>Альбом</span></a></li>
<li><a href="checkout.html"><i class="fa-solid fa-album"></i><span>Оформление заказа</span></a></li>
<li><a href="index.html"><i class="fa-solid fa-album"></i><span>Главная</span></a></li>
<li><a href="table.html"><i class="fa-solid fa-table"></i><span>Таблица</span></a></li>
</nav> 
`
document.querySelector("body")?.append(header)




