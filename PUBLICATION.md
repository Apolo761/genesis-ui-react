# Publicação

1. Confirme que `npm ci`, `npm run build`, `npm run typecheck` e a instalação de teste passam.
2. Atualize a versão em `package.json` e `package-lock.json` e descreva mudanças em um release do GitHub.
3. Revise `npm pack --dry-run`: `dist`, a página `demo`, o comando em `bin`, README, licença e aviso entram no pacote npm.
4. Publique a tag no GitHub após confirmar que os arquivos em `dist/` correspondem ao código-fonte.
5. Com a conta npm proprietária do nome `genesis-ui-react`, publique localmente com `npm publish --access public`. A publicação com proveniência exige um ambiente de CI compatível.

O repositório GitHub hospeda a biblioteca, o build pronto, a demonstração independente e a documentação. Instale a versão publicada com `npm install genesis-ui-react`; a tag do GitHub fica disponível com `npm install github:Apolo761/genesis-ui-react#v0.3.1`.
