const links = document.querySelectorAll('.titulo a');
    const sections = document.querySelectorAll('#inicio, #beneficios, #aplicacao');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const target = event.target.getAttribute('data-section'); 

            sections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(target).style.display = 'block';
        });
    });
    
    document.getElementById("inicio").style.display = "block";
    document.getElementById("beneficios").style.display = "none";
    document.getElementById("aplicacao").style.display = "none";