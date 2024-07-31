// document.addEventListener("DOMContentLoaded", () => {
//     const leftArrow = document.querySelector(".left-arrow");
//     const rightArrow = document.querySelector(".right-arrow");
//     const basket1Count = document.querySelector(".Basket-1 h1 span");
//     const basket2Count = document.querySelector(".Basket-2 h1 span");

//     leftArrow.addEventListener("click", () => {
//         let count1 = parseInt(basket1Count.textContent);
//         let count2 = parseInt(basket2Count.textContent);
//         if (count2 > 0) {
//             count2--;
//             count1++;
//             basket1Count.textContent = count1;
//             basket2Count.textContent = count2;
//         }
//     });

//     rightArrow.addEventListener("click", () => {
//         let count1 = parseInt(basket1Count.textContent);
//         let count2 = parseInt(basket2Count.textContent);
//         if (count1 > 0) {
//             count1--;
//             count2++;
//             basket1Count.textContent = count1;
//             basket2Count.textContent = count2;
//         }
//     });
// });







// document.addEventListener("DOMContentLoaded", () => {
//     const leftArrow = document.querySelector(".left-arrow");
//     const rightArrow = document.querySelector(".right-arrow");
//     const basket1Count = document.querySelector(".Basket-1 h1 span");
//     const basket2Count = document.querySelector(".Basket-2 h1 span");

//     const updateCount = (element, newCount) => {
//         element.textContent = newCount;
//         element.classList.add('increased');
//         setTimeout(() => element.classList.remove('increased'), 500);
//     };
     

//     leftArrow.addEventListener("click", () => {
//         let count1 = parseInt(basket1Count.textContent);
//         let count2 = parseInt(basket2Count.textContent);
//         if (count2 > 0) {
//             count2--;
//             count1++;
//             updateCount(basket1Count, count1);
//             basket2Count.textContent = count2;
//         }
//     });

//     rightArrow.addEventListener("click", () => {
//         let count1 = parseInt(basket1Count.textContent);
//         let count2 = parseInt(basket2Count.textContent);
//         if (count1 > 0) {
//             count1--;
//             count2++;
//             updateCount(basket2Count, count2);
//             basket1Count.textContent = count1;
//         }
//     });
// });






document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const basket1Count = document.querySelector(".Basket-1 h1 span");
    const basket2Count = document.querySelector(".Basket-2 h1 span");

    const updateCount = (element, newCount, isIncrease) => {
        element.textContent = newCount;
        if (isIncrease) {
            element.classList.add('increased');
            setTimeout(() => element.classList.remove('increased'), 500);
        } else {
            element.classList.add('decreased');
            setTimeout(() => element.classList.remove('decreased'), 500);
        }
    };

    leftArrow.addEventListener("click", () => {
        let count1 = parseInt(basket1Count.textContent);
        let count2 = parseInt(basket2Count.textContent);
        if (count2 > 0) {
            count2--;
            count1++;
            updateCount(basket1Count, count1, true);  // Increase for basket 1
            updateCount(basket2Count, count2, false); // Decrease for basket 2
        }
    });

    rightArrow.addEventListener("click", () => {
        let count1 = parseInt(basket1Count.textContent);
        let count2 = parseInt(basket2Count.textContent);
        if (count1 > 0) {
            count1--;
            count2++;
            updateCount(basket2Count, count2, true);  // Increase for basket 2
            updateCount(basket1Count, count1, false); // Decrease for basket 1
        }
    });
});

