# Central de tutoriais

Site estático com tutoriais do UC Browser e TeraBox em português, inglês, francês, espanhol e alemão.

## Publicar no GitHub Pages

O site está preparado para publicação pelo GitHub Actions. O fluxo envia o conteúdo de dist/, onde fica o index.html, sem precisar instalar dependências ou compilar o projeto.

1. Crie um repositório no GitHub e envie o conteúdo desta pasta para a raiz dele, incluindo .github/workflows/deploy-pages.yml e dist/.
2. No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** como fonte de publicação.
3. Envie as alterações para a branch main. O fluxo **Deploy site to GitHub Pages** publicará o site; acompanhe o resultado na aba **Actions**.

O endereço padrão será https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/ para um repositório de projeto. O site usa caminhos relativos para scripts, estilos, imagens e bandeiras, então também funciona nesse caminho com o nome do repositório.

Se a branch principal do repositório não for main, atualize a branch no arquivo .github/workflows/deploy-pages.yml. Para usar um domínio próprio, configure-o em **Settings → Pages** no GitHub.

## Atualizar o conteúdo

Edite os arquivos de dist/ e envie as alterações para main. Cada envio inicia uma nova publicação automaticamente.
