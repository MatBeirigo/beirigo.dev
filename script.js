document.addEventListener('DOMContentLoaded', function () {
    var githubProjects = document.getElementById('github-projects');
    if (githubProjects) {
        fetch('https://api.github.com/users/MatBeirigo/repos')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            data.forEach(function (project) {
                var projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = "\n                        <h3>".concat(project.name, "</h3>\n                        <p>").concat(project.description || 'Descrição não disponível.', "</p>\n                        <a href=\"").concat(project.html_url, "\" target=\"_blank\">Ver no GitHub</a>\n                    ");
                projectCard.addEventListener('click', function () {
                    // window.location.href = project.html_url;
                    window.open(project.html_url, '_blank');
                });
                githubProjects.appendChild(projectCard);
            });
        })
            .catch(function (error) {
            console.error('Erro ao carregar os projetos do GitHub:', error);
        });
    }
});
