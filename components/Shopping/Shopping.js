class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">Товар: ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} рублей</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close"  onclick="shoppingPage.handleClear();"><img src="img/catalog/11.png"></div>
                <h2>Добавленные товары</h2>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name"> Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()}рублей</td>
                    </tr>
                    
                </table>
                
                    <h2>Заполните форму и мы с вами свяжемся</h2>
                    <div class="container5">
  <form action="https://formspree.io/f/xgedvdvr"   method="POST">
    <ul class="flex-outer">
      <li>
        <label for="first-name">ВАШЕ ИМЯ</label>
        <input type="text"  id="first-name"name=" Ваше Имя" placeholder="Имя"required>
      </li>
      <li>
        <label for="last-name">ВАШЕ ОТЧЕСТВО</label>
        <input type="text" id="last-name" name=" Ваше Отчество" placeholder="Отчество"required>
      </li>
      <li>
        <label for="email">Email</label>
        <input type="email" id="email" name="Email" placeholder="Email"required>
      </li>
      <li>
        <label for="phone">НОМЕР</label>
        <input type="tel" id="phone" name="Номер телефона"placeholder="Номер"required>
      </li>
      <li>
        <label for="message">ПОЖЕЛАНИЯ</label>
        <textarea rows="6" id="message" name="Пожелания" placeholder="Пожелания"></textarea>
      </li>
      
      <li>
        <button type="submit" class="sub">ОТПРАВИТЬ</button>
      </li>
    </ul>
  </form>
</div>
            </div>
            
    </form>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
