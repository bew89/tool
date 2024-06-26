enableLinks();

function enableLinks() {
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('#links a');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                console.log("Link clicked: " + link.href);


                linkClick(link);
                setTimeout(() => {
                   window.location.href = link.href;
                }, 1000);
            });
        })
    });
}

function linkClick(link) {
    link.classList.add('clickedLink');

    console.log("started animation")
}