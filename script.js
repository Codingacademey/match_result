function toggleOptions(header) {
    const arrow = header.querySelector('.arrow');
    const options = header.nextElementSibling;
    const isOpen = options.style.display === 'block';

    options.style.display = isOpen ? 'none' : 'block';
    arrow.classList.toggle('open', !isOpen);
}

function selectOption(element) {
    const options = element.parentNode.querySelectorAll('.option-card');
    options.forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');
}