async function fetchData() {
    try {
        /* ожидаем ответ с сервера. response принимает данные  */
        const response = await fetch("data.json");
        console.log(response);
        /* если все ок логика пропускается */
        if (!response.ok) {
            throw new Error("Не удалось получить данные с data JSON");
        };
    /* парсим json и получаем стандартный массив */
    const data = await response.json();
    console.log(data);
    const productBox = document.querySelector(".featured__grid");
    console.log(productBox);

    data.forEach(({ image, title, subtext, price }) => {
        const productEl = `
        <div class="featured__item">
            <img class="fetured__img" src="${image}" alt="" />
            <div class="featured__subitem">
                <h2 class="featured__subtitle2">${title}</h2>
                <p class="featured__subtext">${subtext}</p>
                <p class="featured__price">${price}</p>
            </div>
        </div>`;
      /* помещаем шаблон с помощью insertAdjacentHTML */
      /* в качестве аргумента beforeend */
    productBox.insertAdjacentHTML("beforeend", productEl);
    });
    /* const btns = document.querySelectorAll(".btn__del"); */
    /* btns.forEach((el) => {
        el.addEventListener("click", () => {
            const product = el.closest(".product");
        product.remove();
        });
    }); */
} catch (error) {
    console.error(error);
    }
}
fetchData();
