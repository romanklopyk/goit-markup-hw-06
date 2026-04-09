class Modal {
    constructor() {
        this.refs = {
            modal: document.querySelector('[data-mobile-menu]'),
            modalClose: document.querySelector('[data-mobile-menu-close]'),
            modalOpen: document.querySelector('[data-mobile-menu-open]'),
        }
        this.init()
    }
    init() {
        this.refs.modalClose.addEventListener('click', () => this.closeModal());
        this.refs.modalOpen.addEventListener('click', () => this.openModal());
    }
    openModal() {
        this.refs.modal.classList.add('is-open');
    }
    closeModal() {
        this.refs.modal.classList.remove('is-open');
    }
}

new Modal();