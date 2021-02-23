const projectModalFullStack = document.querySelector('#personalProjectFullStack');
const projectModalWeddingProject = document.querySelector('#personalProjectWeddingProject');
const projectModaProTest = document.querySelector('#personalProjecProTest');
const projectModalProjectGoit = document.querySelector('#personalProjecGoit');

const projectModalQuestify = document.querySelector('#personalProjecQuestify');
const projectModalItTest = document.querySelector('#personalProjecItTest');

const projectOpenBtnFullStack = document.querySelector('#personalProjectFullStackBtn');
const projectOpenBtnWeddingProject = document.querySelector('#personalProjectWeddingProjectBtn');
const projectOpenBtnProTest = document.querySelector('#personalProjecProTestBtn');
const projectOpenBtnProjectGoit = document.querySelector('#personalProjecGoitBtn');

const projectOpenBtnQuestify = document.querySelector('#personalProjecQuestifyBtn');
const projectOpenBtnItTest = document.querySelector('#personalProjecItTestBtn');

const projectModals = [projectModalFullStack, projectModalWeddingProject, projectModaProTest, projectModalProjectGoit, projectModalQuestify, projectModalItTest];
const projectBtns = [projectOpenBtnFullStack, projectOpenBtnWeddingProject, projectOpenBtnProTest, projectOpenBtnProjectGoit, projectOpenBtnQuestify, projectOpenBtnItTest];

projectBtns.forEach((btn, index) => {
    const projectModal = projectModals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});