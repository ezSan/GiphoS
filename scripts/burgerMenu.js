burgerButton.addEventListener('click', openBurger);
closeBurger.addEventListener('click', closeBurgerMenu)


function openBurger(){
    main.classList.add('none');
    footerContent.classList.add('none');
    ulNav.classList.add('burgerMenuOpen');
    burgerButton.classList.remove('burger');
    closeBurger.classList.add('burger');
    if(getMode ==='true'){
        navBar.classList.add('menuBurgerDark');
    }
}


function closeBurgerMenu(){
    main.classList.remove('none');
    footerContent.classList.remove('none');
    ulNav.classList.remove('burgerMenuOpen');
    burgerButton.classList.add('burger');
    closeBurger.classList.remove('burger');
}