class Modal {
    constructor() {
        this.refs = {
            modal: document.querySelector('[data-modal]'),
            modalClose: document.querySelector('[data-modal-close]'),
            modalOpen: document.querySelector('[data-modal-open]'),
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

new Modal()