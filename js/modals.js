const mobileMenuBtn = document.querySelector('#mobileMenu');
const myVideoBtn = document.querySelector('#videButton');

const myVideoModal = document.querySelector('#videoModal');
const mobileMenu = document.querySelector('#mobileModalMenu');

const modalCloseBtns = document.querySelectorAll('.modalCloseBtn');

const modalsWrappers = document.querySelectorAll('.modalAreaBgd');
const modalContainers = document.querySelectorAll('.modalAreaContent');

const MODAL_ACTIVE_CLASS = 'modalActive';
const BODY_SCROLL_DISABLE_CLASS = 'bodyScrollDisable';

enableCloseModalOnBgdClick();
hideModalOnMobileMenuElementsClick();

const modals = [mobileMenu, myVideoModal];
const buttons = [mobileMenuBtn, myVideoBtn];

buttons.forEach((btn, index) => {
    const projectModal = modals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});


modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', hideModal);
})

function enableCloseModalOnBgdClick() {
    if (modalContainers.length) {
        modalContainers.forEach(container => {
            container.addEventListener('click', event => event.stopPropagation());
        });
    }

    if (modalsWrappers.length) {
        modalsWrappers.forEach(container => {
            container.addEventListener('click', hideModal);
        });
    }
}


function hideModal() {
    const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

    if (modalToClose) {
        modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
        document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);
    }

    const video = document.querySelector('video');

    if (video) {
        video.pause();
    }
}

function hideModalOnMobileMenuElementsClick() {
    const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
    const menuElements = document.querySelectorAll('.mobileModalMenu__link');

    if (menuElements.length) {
        menuElements.forEach(container => {
            container.addEventListener('click', () => setTimeout(hideModal, MOBILE_MENU_ITEM_CLOSE_DELAY));
        });
    }
}