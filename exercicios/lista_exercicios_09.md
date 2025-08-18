# ☕ Java e Orientação a Objetos
## 📐 Exercícios de Fixação: 09 Exercícios Matrizes em Java

Bem-vindo ao guia de exercícios práticos sobre matrizes em Java! Uma matriz, no contexto da programação, é uma estrutura de dados bidimensional, essencialmente um "array de arrays". Ela organiza dados em linhas e colunas, sendo fundamental para a resolução de diversos problemas, desde a manipulação de tabelas e planilhas até aplicações em computação gráfica e análise de dados.

Os exercícios a seguir foram projetados para fortalecer sua compreensão e habilidade na manipulação de matrizes em Java.

08 

---

## 📝 Problema 1: Diagonal Principal e Contagem de Negativos

Neste desafio, o objetivo é ler uma matriz quadrada, exibir os elementos que compõem sua diagonal principal e, por fim, contar e apresentar a quantidade total de números negativos presentes na matriz.

A **diagonal principal** de uma matriz quadrada é o conjunto de elementos onde o índice da linha é igual ao índice da coluna (ou seja, `matriz[i][i]`).

### Exemplo de Execução

```
Qual a ordem da matriz? 4
Digite o elemento [0][0]: 10
Digite o elemento [0][1]: -2
Digite o elemento [0][2]: 3
Digite o elemento [0][3]: 1
Digite o elemento [1][0]: -5
Digite o elemento [1][1]: 8
Digite o elemento [1][2]: -1
Digite o elemento [1][3]: 4
Digite o elemento [2][0]: 0
Digite o elemento [2][1]: 9
Digite o elemento [2][2]: 6
Digite o elemento [2][3]: 2
Digite o elemento [3][0]: 7
Digite o elemento [3][1]: 1
Digite o elemento [3][2]: 15
Digite o elemento [3][3]: -12

DIAGONAL PRINCIPAL:
10 8 6 -12

QUANTIDADE DE NEGATIVOS = 4
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();

        // Garante que a matriz não exceda o tamanho máximo de 10x10
        if (n > 10) {
            System.out.println("O número máximo de linhas/colunas é 10.");
            n = 10;
        }

        int[][] matriz = new int[n][n];

        // Loop para ler os dados da matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Digite o elemento [%d][%d]: ", i, j);
                matriz[i][j] = sc.nextInt();
            }
        }

        System.out.println("\nDIAGONAL PRINCIPAL:");
        for (int i = 0; i < n; i++) {
            System.out.print(matriz[i][i] + " ");
        }
        System.out.println(); // Pula uma linha

        int contagemNegativos = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matriz[i][j] < 0) {
                    contagemNegativos++;
                }
            }
        }

        System.out.println("\nQUANTIDADE DE NEGATIVOS = " + contagemNegativos);

        sc.close();
    }
}
```

---

## 📊 Problema 2: Soma das Linhas de uma Matriz

Este exercício consiste em ler uma matriz retangular com `M` linhas e `N` colunas. Em seguida, você deve calcular a soma dos elementos de cada linha e armazenar esses resultados em um vetor. Ao final, o vetor com as somas deve ser exibido.

### Exemplo de Execução

```
Qual a quantidade de linhas da matriz? 3
Qual a quantidade de colunas da matriz? 4

Digite os elementos da 1a. linha:
8.0 2.0 3.5 1.5

Digite os elementos da 2a. linha:
10.0 5.0 1.0 4.0

Digite os elementos da 3a. linha:
1.0 1.0 2.0 3.0

VETOR GERADO:
15.0
20.0
7.0
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a quantidade de linhas da matriz? ");
        int m = sc.nextInt();

        System.out.print("Qual a quantidade de colunas da matriz? ");
        int n = sc.nextInt();

        double[][] matriz = new double[m][n];
        double[] vetorSomas = new double[m];

        // Loop para ler os dados e calcular a soma de cada linha
        for (int i = 0; i < m; i++) {
            System.out.printf("\nDigite os elementos da %da. linha:\n", i + 1);
            double somaLinha = 0.0;
            for (int j = 0; j < n; j++) {
                matriz[i][j] = sc.nextDouble();
                somaLinha += matriz[i][j];
            }
            vetorSomas[i] = somaLinha;
        }

        System.out.println("\nVETOR GERADO:");
        for (int i = 0; i < m; i++) {
            System.out.printf("%.1f\n", vetorSomas[i]);
        }

        sc.close();
    }
}
```

---

## 📉 Problema 3: Exibindo Apenas Números Negativos

O desafio aqui é simples: ler uma matriz de números inteiros e, depois, percorrer a matriz para imprimir na tela apenas os elementos que são negativos.

### Exemplo de Execução

```
Qual a quantidade de linhas da matriz? 2
Qual a quantidade de colunas da matriz? 4

Elemento [0][0]: 10
Elemento [0][1]: -20
Elemento [0][2]: 15
Elemento [0][3]: -5
Elemento [1][0]: -1
Elemento [1][1]: 0
Elemento [1][2]: 8
Elemento [1][3]: -9

VALORES NEGATIVOS:
-20
-5
-1
-9
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		System.out.print("Qual a quantidade de linhas da matriz? ");
		int m = sc.nextInt();
		System.out.print("Qual a quantidade de colunas da matriz? ");
		int n = sc.nextInt();

		int[][] matriz = new int[m][n];

		// Loop para ler os dados
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				System.out.printf("Elemento [%d][%d]: ", i, j);
				matriz[i][j] = sc.nextInt();
			}
		}

		System.out.println("\nVALORES NEGATIVOS:");
		// Loop para verificar e imprimir os negativos
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				if (matriz[i][j] < 0) {
					System.out.println(matriz[i][j]);
				}
			}
		}
		sc.close();
	}
}
```

---

## 🥇 Problema 4: Maior Elemento de Cada Linha

Neste exercício, você lerá uma matriz quadrada e, para cada linha, deverá encontrar e exibir o maior elemento. A lógica envolve iterar por cada linha e, dentro de cada uma, encontrar o valor máximo.

### Exemplo de Execução

```
Qual a ordem da matriz? 3

Elemento [0][0]: 20
Elemento [0][1]: 30
Elemento [0][2]: 10
Elemento [1][0]: 50
Elemento [1][1]: 25
Elemento [1][2]: 45
Elemento [2][0]: 5
Elemento [2][1]: 15
Elemento [2][2]: 25

MAIOR ELEMENTO DE CADA LINHA:
30
50
25
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();

        int[][] matriz = new int[n][n];

        // Loop para ler os dados da matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d][%d]: ", i, j);
                matriz[i][j] = sc.nextInt();
            }
        }

        System.out.println("\nMAIOR ELEMENTO DE CADA LINHA:");
        // Loop para encontrar o maior elemento de cada linha
        for (int i = 0; i < n; i++) {
            int maiorElemento = matriz[i][0]; // Assume o primeiro como maior
            for (int j = 1; j < n; j++) {
                if (matriz[i][j] > maiorElemento) {
                    maiorElemento = matriz[i][j];
                }
            }
            System.out.println(maiorElemento);
        }

        sc.close();
    }
}
```

---

## ➕ Problema 5: Soma de Duas Matrizes

O objetivo é ler duas matrizes, A e B, de mesmas dimensões. Em seguida, você deve criar uma terceira matriz, C, na qual cada elemento é o resultado da soma dos elementos correspondentes das matrizes A e B. A fórmula é `C[i][j] = A[i][j] + B[i][j]`.

### Exemplo de Execução

```
Quantas linhas vai ter cada matriz? 2
Quantas colunas vai ter cada matriz? 2

Digite os valores da matriz A:
Elemento [0][0]: 10
Elemento [0][1]: 20
Elemento [1][0]: 30
Elemento [1][1]: 40

Digite os valores da matriz B:
Elemento [0][0]: 5
Elemento [0][1]: 10
Elemento [1][0]: 15
Elemento [1][1]: 20

MATRIZ SOMA:
15 30
45 60
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantas linhas vai ter cada matriz? ");
        int m = sc.nextInt();
        System.out.print("Quantas colunas vai ter cada matriz? ");
        int n = sc.nextInt();

        int[][] matrizA = new int[m][n];
        int[][] matrizB = new int[m][n];
        int[][] matrizC = new int[m][n];

        System.out.println("\nDigite os valores da matriz A:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d][%d]: ", i, j);
                matrizA[i][j] = sc.nextInt();
            }
        }

        System.out.println("\nDigite os valores da matriz B:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d][%d]: ", i, j);
                matrizB[i][j] = sc.nextInt();
            }
        }

        // Gera a matriz C (soma)
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
            }
        }

        System.out.println("\nMATRIZ SOMA:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matrizC[i][j] + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
```

---

## ↗️ Problema 6: Soma dos Elementos Acima da Diagonal Principal

Este desafio consiste em ler uma matriz quadrada e calcular a soma de todos os elementos que estão localizados **acima** da diagonal principal. Um elemento está acima da diagonal principal se seu índice de coluna for maior que seu índice de linha (`j > i`).

### Exemplo de Execução

```
Qual a ordem da matriz? 3

Elemento [0][0]: 1
Elemento [0][1]: 5
Elemento [0][2]: 10
Elemento [1][0]: 2
Elemento [1][1]: 8
Elemento [1][2]: 4
Elemento [2][0]: 3
Elemento [2][1]: 6
Elemento [2][2]: 9

SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL = 19
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();

        int[][] matriz = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d][%d]: ", i, j);
                matriz[i][j] = sc.nextInt();
            }
        }

        int soma = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                // Condição para estar acima da diagonal principal
                if (j > i) {
                    soma += matriz[i][j];
                }
            }
        }

        System.out.println("\nSOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL = " + soma);
        sc.close();
    }
}
```

---

## 🧩 Problema 7: Análise Completa da Matriz

Este é um exercício mais completo que integra várias operações em uma única matriz. Você deverá:
a) Calcular a soma de todos os elementos positivos.
b) Imprimir os elementos de uma linha específica, escolhida pelo usuário.
c) Imprimir os elementos de uma coluna específica, escolhida pelo usuário.
d) Imprimir os elementos da diagonal principal.
e) Criar e exibir uma nova matriz onde todos os números negativos da matriz original foram elevados ao quadrado.

### Exemplo de Execução

```
Qual a ordem da matriz? 3

Elemento [0][0]: 10.0
Elemento [0][1]: -2.0
Elemento [0][2]: 5.0
Elemento [1][0]: 3.0
Elemento [1][1]: 4.0
Elemento [1][2]: -9.0
Elemento [2][0]: -1.0
Elemento [2][1]: -3.0
Elemento [2][2]: 12.0

SOMA DOS POSITIVOS: 34.0

Escolha uma linha: 2
LINHA ESCOLHIDA: -1.0 -3.0 12.0

Escolha uma coluna: 1
COLUNA ESCOLHIDA: -2.0 4.0 -3.0

DIAGONAL PRINCIPAL: 10.0 4.0 12.0

MATRIZ ALTERADA:
10.0 4.0 5.0
3.0 4.0 81.0
1.0 9.0 12.0
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();
        double[][] matriz = new double[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d][%d]: ", i, j);
                matriz[i][j] = sc.nextDouble();
            }
        }

        // a) Soma dos positivos
        double somaPositivos = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matriz[i][j] > 0) {
                    somaPositivos += matriz[i][j];
                }
            }
        }
        System.out.printf("\nSOMA DOS POSITIVOS: %.1f\n", somaPositivos);

        // b) Imprimir linha escolhida
        System.out.print("\nEscolha uma linha: ");
        int linhaEscolhida = sc.nextInt();
        System.out.print("LINHA ESCOLHIDA: ");
        for (int j = 0; j < n; j++) {
            System.out.printf("%.1f ", matriz[linhaEscolhida][j]);
        }
        System.out.println();

        // c) Imprimir coluna escolhida
        System.out.print("\nEscolha uma coluna: ");
        int colunaEscolhida = sc.nextInt();
        System.out.print("COLUNA ESCOLHIDA: ");
        for (int i = 0; i < n; i++) {
            System.out.printf("%.1f ", matriz[i][colunaEscolhida]);
        }
        System.out.println();

        // d) Imprimir diagonal principal
        System.out.print("\nDIAGONAL PRINCIPAL: ");
        for (int i = 0; i < n; i++) {
            System.out.printf("%.1f ", matriz[i][i]);
        }
        System.out.println();
        
        // e) Alterar a matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matriz[i][j] < 0) {
                    matriz[i][j] = Math.pow(matriz[i][j], 2);
                }
            }
        }

        System.out.println("\nMATRIZ ALTERADA:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("%.1f ", matriz[i][j]);
            }
            System.out.println();
        }

        sc.close();
    }
}
```

### 🚀 Executando no VS Code ou IntelliJ IDEA

Para executar qualquer um dos códigos de exemplo acima no seu ambiente de desenvolvimento preferido:

1.  **Crie um novo projeto Java.**
2.  Dentro da pasta `src`, crie um pacote (por exemplo, `aplicacao`).
3.  Crie uma nova classe Java (por exemplo, `Programa.java`) dentro do pacote.
4.  **Copie e cole** o código da solução desejada no seu arquivo `Programa.java`.
5.  Clique com o botão direito no arquivo e selecione a opção **"Run"** ou **"Run 'Programa.main()'"**. O programa será executado no terminal integrado da sua IDE.