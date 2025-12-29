# 📚 TypeScript Solid

Neste repositorio armazenei meus estudos e praticas sobre os cinco principios da programação que são utilizados para manter um código limpo, flexivel e facil de ser mantido.

A utilização de cada principio esta sendo mantido em suas determinadas pastas dentro de "./src", juntamente com o código em sua fase primitiva que se encontra em "./src/legacy".

Abaixo esta uma explicação sobre os principios, suas vantagens, desvantagens e como foi implementado o S.O.L.I.D. no código legacy.

## S. - Single Responsability Principle (Princípio da responsabilidade única)

Uma classe deve ter apenas um motivo para mudar. Este princípio está intimamente ligado com outro, conhecido com "Separation of concerns".

OBS: Uma classe pode ser considerada coesa quando ela utiliza os seus atributos dentro dos seus métodos.

## O. - Open/Closed Principle (Princípio do aberto/fechado)

Módulos, classes, objetos e operações devem estar abertos para extensão, mas fechado para modificações.

## L. - Liskov Substitution Principle (Princípio da substituição de Liskov)

Se x é uma propriedade demonstrável dos objetos x de tipo T. Então y deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T. (Subtipos precisam ser substituiveis por seus tipos de base).

## I. - Interface Segregation Principle (Princípio da segregação de interface)

Os clientes não devem ser forçados a depender de interfaces que não utilizam.

## D. - Dependency Inversion Principle (Princípio da inversão de dependência)

Módulos de alto nível não devem ser dependentes do módulo de baixo nível; ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.

## 📊 Vantagens e desvantagens do S.O.L.I.D.

### ✅ Vantagens:

- Código modular
- Código reutilizavel
- Código testavel
- Baixo acoplamento e alta coesão
- Código expansivel
- Separation of concerns (separação de conceitos)
- Fácil manutenção

### ⚠️ Desvantagens:

- Complexidade
- Quantidade de código digitado aumenta

## ⚙️ Aplicação do S.O.L.I.D. no projeto

- Separação de dependencias e serviços
- Criação de novas interfaces
- Criação de arquivo "main"
- Criação da feature "discount" utilizando OCP
- Criação das classes "IndividualCostumere" "EntrepriseCostumer" para melhor separação separação de responsabilidades e atributos
