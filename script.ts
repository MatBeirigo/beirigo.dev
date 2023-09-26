document.addEventListener('DOMContentLoaded', () => {
    const githubProjects = document.getElementById('github-projects');

    if (githubProjects) {
        fetch('https://api.github.com/users/MatBeirigo/repos')
            .then((response) => response.json())
            .then((data) => {
                data.forEach((project) => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.innerHTML = `
                        <h3>${project.name}</h3>
                        <p>${project.description || 'Descrição não disponível.'}</p>
                        <a href="${project.html_url}" target="_blank">Ver no GitHub</a>
                    `;

                    projectCard.addEventListener('click', () => {
                        window.open(project.html_url, '_blank');
                    });

                    githubProjects.appendChild(projectCard);
                });
            })
            .catch((error) => {
                console.error('Erro ao carregar os projetos do GitHub:', error);
            });
    }
});
