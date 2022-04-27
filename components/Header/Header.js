

class Header {
    
handlerOpenShoppingPage() {
    shoppingPage.render();
}
 render(count) {
        const html = `
           <div class="header-container">
           <div class="header-naz">О нас </div>
           <div class="header-naz">Информация покупателю</div>
           <div class="header-naz">Франшиза</div>

           <div class="dropdown">
           <div class="header-naz"> <button class="dropbtn">Часы работы</button> 
           <div class="dropdown-content">
           <a href="#">пн-вт 8:00-24:00</a>
           <a href="#">ср-чт 6:00-15:00</a>
           <a href="#">пт 12:00-6:00</a>
           <a href="#">сб 14:00-17:00</a>
           <a href="#">вс 18:05-23:00</a></div>
          
          
         </div>
       </div>


           <div class="header-naz">Доставка: 26 апреля</div>
<div class="header-naz" id="top">8 (924) 245 21 65</div>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                   В корзине ${count} товар(ов)
                   <div class="header-counter1"> Нажмите чтобы посмотреть </div>
                </div>
           </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);


const anchors = document.querySelectorAll('a[href="#"]')

