# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />
Neste exercício,foi implementado de forma simplificada uma lista de produtos, utilizando React. A aplicação deve possuir um cabeçalho e uma lista de produtos.

Foi <strong>obrigatório</strong> implementar <strong>pelo menos</strong> um destes dois componentes:
<ol>
  <li>
    <strong>ProductsList</strong>: esse componente representa a lista de produtos. Ele recebe como entrada uma lista de produtos para serem mostrados na tela. Para cada um desses produtos recebidos, o componente de lista chama o componente citado abaixo (Product).</li>
  <li>
    <strong>Product</strong>: como o próprio nome diz, esse componente representa um produto. Ele recebe como entrada um objeto que contém informações referentes a um produto específico. Esse componente precisa retornar as seguintes informações obrigatórias que serão mostradas para quem usar a aplicação:
    <ul>
      <li>nome do produto;</li>
      <li>preço do produto;</li>
      <li>imagem do produto.</li>
    </ul>
  </li>
</ol>

</details>
<details>
  <summary><strong>Habilidades</strong></summary><br />

- Criar componentes React reutilizáveis;

- Renderizar as informações contidas em um array em forma de componente;

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro). 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

# Requisitos Obrigatórios

## 1. Crie o componente `<Product />`

<details>
  <summary>Este componente deverá renderizar as informações de um produto</summary>
  
  - Ele deve ser criado dentro da pasta `src/components`.
  
  - Este componente deverá:
    - receber uma `prop` chamada `productInfo`, que será um objeto com as informações de um produto.

    - conter uma tag `li` que envolva todo o seu conteúdo.
  
  - Dentro dessa `li`, este componente deverá renderizar as seguintes informações (que estão dentro do objeto recebido via `props` chamada `productInfo`):

    - o nome do produto;
    - o preço do produto;
    - a imagem do produto.
      - Conter na imagem o atributo `alt` com o valor do nome do produto.
    
  <details>
    <summary><strong>Estrutura do objeto produto</strong></summary>

  ```js
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  }
  ```

  </details>
</details>

<details>
  <summary>💡dicas</summary>

  - Abra o arquivo `src/data.ts` e veja o nome das propriedades de cada produto, escolhendo assim os atributos que mais se adéquam ao projeto. Verificar como receberemos um objeto, bem como o nome de suas chaves, e quais devemos utilizar para resolver nosso requisito, faz parte do dia-a-dia de pessoas programadoras. 😄

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Será verificado se o:
  
    - componente possui a tag `li` envolvendo seu conteúdo.
  
    - nome do produto passado via `props` é renderizado.
  
    - preço do produto passado via `props` é renderizado.
  
  - Será validado se a imagem do produto passado via `props` é renderizada.
  
  - Será validado se a imagem do produto possui o atributo `alt` com o nome do produto passado via `props`.

</details>

## 2. Crie o componente `<ProductsList />`

<details>
  <summary>Este componente deverá renderizar um título e uma <code>ul</code></summary>

  - Este componente deverá:

    - ser criado dentro da pasta `src/components`.

    - conter uma tag `h1` com o texto `Lista de produtos`.
  
    - conter uma tag `ul`. Por enquanto, essa lista estará vazia.

    - receber uma lista de produtos através da `props children`.
      - o `children` deve ser exibido dentro da tag `ul`

    > não se preocupe em passar essa lista de produtos por enquanto, isso será feito no requisito 3.

  - Ser renderizado dentro do `App.tsx`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Será validado se:

    - uma tag `h1` com o texto `Lista de produtos` é renderizado dentro do componente `<ProductsList />`.

    - uma tag `ul` é renderizada dentro do componente `<ProductsList />`.

    - o componente `<ProductsList />` exibe dentro da tag `ul` o que foi passado por meio da `props children`.

    - o componente `<ProductsList />` é renderizado dentro do `App.tsx`.

</details>

## 3. Renderize uma lista com as informações de cada Produto

<details>
  <summary>Renderize uma lista com as informações dos produtos dentro do componente <code>&lt;ProductList /&gt;</code></summary>

  - Você encontrará a lista com as informações dos produtos no arquivo `src/data.ts`.
  
  - Faça a importação do `src/data.ts` no componente `App.tsx`.

  - O componente `<ProductsList />` deve receber a lista de produtos por meio do `propsChildren`.

  - Cada produto da lista deverá ser renderizado pelo componente `Product`. Passe as informações do produto por meio da props `productInfo` que já existe nesse componente.

</details>

<details>
  <summary>💡dicas</summary>

  - Lembre-se de que, quando você está renderizando uma lista no React, é necessário adicionar um atributo `key` em cada elemento. Você pode usar o `id` do produto como `key`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o componente `<ProductsList />` renderiza a quantidade correta de elementos.

  - Se todos os elementos da lista são renderizados.

</details>

<br>
*Exercicíos criado pela [Trybe](https://www.betrybe.com/)
