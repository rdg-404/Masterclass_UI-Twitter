Layout figma [here](https://www.figma.com/file/4JXgzLf4GpIuvV6GGXNwiN/Twitter-UI-(Community)?node-id=1%3A937&t=gfmieQAcbbBHbMdN-0)




* Fluxo de renderização: <br><br><br>

- 1 Toda vez que alteramos o estado de um componente, TODO componente é renderizado

- 2 Toda vez que o seu componene PAI renderizar

- 3 Toda vez que alguma das suas propriedades mudarem


<br><br>
* Algoritmo de reconciliação<br><br>

- 1 Cria em memoria a nova versao do HTML de componente

- 2 Compara essa nova versao com a versao anterior do HTML (diff)

- 3 Aplicar as operações JS para alterar somente o necessario no HTML
