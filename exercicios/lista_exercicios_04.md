# ☕ Java e Orientação a Objetos
## 📐 Exercícios de Fixação: 04 Exercícios de Estruturas Repetitivas em Java

---

## 🔄 Estrutura `while` (Enquanto)

A estrutura `while` é utilizada para executar um bloco de código repetidamente, enquanto uma determinada condição booleana permanecer verdadeira. É a escolha ideal para situações em que o número de iterações não é conhecido previamente, dependendo de uma entrada do usuário ou do resultado de um processamento.

**Sintaxe básica:**
```java
while (condicao) {
    // Bloco de código a ser executado
}
```

### 📈 Problema "Ordem Crescente"

**Descrição:** Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada dupla uma mensagem que indique se os valores foram digitados em ordem crescente ou decrescente. O programa deve finalizar quando dois valores iguais forem digitados.

**Exemplo com novos dados:**
```
Digite dois números:
10
2
DECRESCENTE!
Digite outros dois números:
7
12
CRESCENTE!
Digite outros dois números:
5
5
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite dois números:");
        int x = sc.nextInt();
        int y = sc.nextInt();

        while (x != y) {
            if (x < y) {
                System.out.println("CRESCENTE!");
            } else {
                System.out.println("DECRESCENTE!");
            }
            System.out.println("Digite outros dois números:");
            x = sc.nextInt();
            y = sc.nextInt();
        }

        sc.close();
    }
}
```

### 👵 Problema "Média de Idades"

**Descrição:** Faça um programa para ler um número indeterminado de idades. A entrada de dados é encerrada quando um valor negativo for digitado (este valor não deve entrar no cálculo). Calcule e imprima a idade média do grupo. Se o primeiro valor digitado for negativo, mostre a mensagem "IMPOSSIVEL CALCULAR".

**Exemplo 1 com novos dados:**
```
Digite as idades:
35
25
40
-10
MEDIA = 33.33
```

**Exemplo 2 com novos dados:**
```
Digite as idades:
-20
IMPOSSIVEL CALCULAR
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite as idades:");
        int idade = sc.nextInt();

        if (idade < 0) {
            System.out.println("IMPOSSIVEL CALCULAR");
        } else {
            int soma = 0;
            int contagem = 0;
            while (idade >= 0) {
                soma += idade;
                contagem++;
                idade = sc.nextInt();
            }
            double media = (double) soma / contagem;
            System.out.printf("MEDIA = %.2f%n", media);
        }

        sc.close();
    }
}
```

### 🔐 Problema "Senha Fixa"

**Descrição:** Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada senha incorreta, informe "Senha Invalida! Tente novamente:". Quando a senha estiver correta, imprima "Acesso Permitido" e encerre o programa. Considere que a senha correta é **2024**.

**Exemplo com novos dados:**
```
Digite a senha: 1234
Senha Invalida! Tente novamente:
4321
Senha Invalida! Tente novamente:
2025
Senha Invalida! Tente novamente:
2024
Acesso Permitido
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int SENHA_CORRETA = 2024;

        System.out.print("Digite a senha: ");
        int senhaDigitada = sc.nextInt();

        while (senhaDigitada != SENHA_CORRETA) {
            System.out.print("Senha Invalida! Tente novamente:\n");
            senhaDigitada = sc.nextInt();
        }

        System.out.println("Acesso Permitido");

        sc.close();
    }
}
```

### 🧭 Problema "Quadrante Cartesiano"

**Descrição:** Escreva um programa para ler as coordenadas (X, Y) de uma quantidade indeterminada de pontos. Para cada ponto, informe a qual quadrante ele pertence (Q1, Q2, Q3 ou Q4). O programa será encerrado quando uma das coordenadas for nula (X=0 ou Y=0).

**Exemplo com novos dados:**
```
Digite os valores das coordenadas X e Y:
5
5
QUADRANTE Q1
Digite os valores das coordenadas X e Y:
-10
5
QUADRANTE Q2
Digite os valores das coordenadas X e Y:
-1
-1
QUADRANTE Q3
Digite os valores das coordenadas X e Y:
8
-2
QUADRANTE Q4
Digite os valores das coordenadas X e Y:
0
5
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite os valores das coordenadas X e Y:");
        int x = sc.nextInt();
        int y = sc.nextInt();

        while (x != 0 && y != 0) {
            if (x > 0 && y > 0) {
                System.out.println("QUADRANTE Q1");
            } else if (x < 0 && y > 0) {
                System.out.println("QUADRANTE Q2");
            } else if (x < 0 && y < 0) {
                System.out.println("QUADRANTE Q3");
            } else {
                System.out.println("QUADRANTE Q4");
            }
            System.out.println("Digite os valores das coordenadas X e Y:");
            x = sc.nextInt();
            y = sc.nextInt();
        }
        sc.close();
    }
}
```

### ⛽ Problema "Preferência de Combustível"

**Descrição:** Um posto de combustíveis deseja saber a preferência de seus clientes. Leia o tipo de combustível abastecido, codificado como: 1.Álcool 2.Gasolina 3.Diesel 4.Fim. Caso o usuário informe um código inválido (fora da faixa de 1 a 4), um novo código deve ser solicitado. O programa encerra quando o código 4 for digitado, mostrando a quantidade de clientes que abasteceu cada tipo de combustível e uma mensagem de agradecimento.

**Exemplo com novos dados:**
```
Informe um codigo (1, 2, 3) ou 4 para parar: 8
Informe um codigo (1, 2, 3) ou 4 para parar: 1
Informe um codigo (1, 2, 3) ou 4 para parar: 9
Informe um codigo (1, 2, 3) ou 4 para parar: 2
Informe um codigo (1, 2, 3) ou 4 para parar: 2
Informe um codigo (1, 2, 3) ou 4 para parar: 3
Informe um codigo (1, 2, 3) ou 4 para parar: 1
Informe um codigo (1, 2, 3) ou 4 para parar: 4
MUITO OBRIGADO
Alcool: 2
Gasolina: 2
Diesel: 1
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int alcool = 0;
        int gasolina = 0;
        int diesel = 0;

        System.out.print("Informe um codigo (1, 2, 3) ou 4 para parar: ");
        int codigo = sc.nextInt();

        while (codigo != 4) {
            switch (codigo) {
                case 1:
                    alcool++;
                    break;
                case 2:
                    gasolina++;
                    break;
                case 3:
                    diesel++;
                    break;
            }
            System.out.print("Informe um codigo (1, 2, 3) ou 4 para parar: ");
            codigo = sc.nextInt();
        }

        System.out.println("MUITO OBRIGADO");
        System.out.println("Alcool: " + alcool);
        System.out.println("Gasolina: " + gasolina);
        System.out.println("Diesel: " + diesel);
        sc.close();
    }
}
```

---

## 🔢 Estrutura `for` (Para)

A estrutura `for` é ideal para situações em que o número de iterações é conhecido ou pode ser facilmente determinado. Ela combina a inicialização de uma variável de controle, a condição de continuidade e o incremento (ou decremento) em uma única linha, tornando o código mais conciso e legível.

**Sintaxe básica:**
```java
for (inicializacao; condicao; incremento) {
    // Bloco de código a ser executado
}
```

### 🔢 Problema "Tabuada"

**Descrição:** Ler um número inteiro N e mostrar a tabuada de N, de 1 a 10.

**Exemplo com novos dados:**
```
Deseja a tabuada para qual valor? 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Deseja a tabuada para qual valor? ");
		int n = sc.nextInt();
		
		for (int i = 1; i <= 10; i++) {
			int produto = n * i;
			System.out.println(n + " x " + i + " = " + produto);
		}
		
		sc.close();
	}
}
```

### ➕ Problema "Soma de Ímpares"

**Descrição:** Leia 2 valores inteiros X e Y em qualquer ordem. A seguir, calcule e mostre a soma dos números ímpares que estão entre eles.

**Exemplo com novos dados:**
```
Digite dois numeros:
5
12
SOMA DOS IMPARES = 27
```
*Explicação: Os ímpares entre 5 e 12 são 7, 9 e 11. A soma é 7 + 9 + 11 = 27.*

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite dois numeros:");
		int x = sc.nextInt();
		int y = sc.nextInt();
		
		int menor, maior;
		if (x < y) {
			menor = x;
			maior = y;
		}
		else {
			menor = y;
			maior = x;
		}
		
		int soma = 0;
		for (int i = menor + 1; i < maior; i++) {
			if (i % 2 != 0) {
				soma += i;
			}
		}
		
		System.out.println("SOMA DOS IMPARES = " + soma);
		
		sc.close();
	}
}
```

### ✅ Problema "Par ou Ímpar"

**Descrição:** Leia um valor inteiro N, que indica a quantidade de números que serão lidos em seguida. Para cada valor lido, mostre se ele é PAR ou ÍMPAR e se é POSITIVO ou NEGATIVO. Caso o valor seja zero, imprima "NULO".

**Exemplo com novos dados:**
```
Quantos numeros voce vai digitar? 5
Digite um numero: -10
PAR NEGATIVO
Digite um numero: 7
IMPAR POSITIVO
Digite um numero: 0
NULO
Digite um numero: -9
IMPAR NEGATIVO
Digite um numero: 2
PAR POSITIVO
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos numeros voce vai digitar? ");
		int n = sc.nextInt();
		
		for (int i = 0; i < n; i++) {
			System.out.print("Digite um numero: ");
			int valor = sc.nextInt();
			
			if (valor == 0) {
				System.out.println("NULO");
			}
			else {
				if (valor % 2 == 0) {
					System.out.print("PAR ");
				}
				else {
					System.out.print("IMPAR ");
				}
				
				if (valor > 0) {
					System.out.println("POSITIVO");
				}
				else {
					System.out.println("NEGATIVO");
				}
			}
		}
		
		sc.close();
	}
}
```

### ⚖️ Problema "Média Ponderada"

**Descrição:** Leia um valor N, que representa o número de casos de teste. Cada caso de teste consiste em 3 valores reais, para os quais você deve calcular a média ponderada, com pesos 2, 3 e 5, respectivamente.

**Exemplo com novos dados:**
```
Quantos casos voce vai digitar? 2
Digite tres numeros:
5.0
7.0
8.0
MEDIA = 7.1
Digite tres numeros:
9.0
8.0
9.5
MEDIA = 8.95
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos casos voce vai digitar? ");
		int n = sc.nextInt();
		
		for (int i = 0; i < n; i++) {
			System.out.println("Digite tres numeros:");
			double val1 = sc.nextDouble();
			double val2 = sc.nextDouble();
			double val3 = sc.nextDouble();
			
			double media = (val1 * 2.0 + val2 * 3.0 + val3 * 5.0) / 10.0;
			
			System.out.printf("MEDIA = %.2f%n", media);
		}
		
		sc.close();
	}
}
```

### ➗ Problema "Divisão"

**Descrição:** Escreva um algoritmo que leia um número N, e depois repita N vezes a leitura de dois números, imprimindo o resultado da divisão do primeiro pelo segundo. Caso a divisão não seja possível (denominador igual a zero), mostre a mensagem "DIVISAO IMPOSSIVEL".

**Exemplo com novos dados:**
```
Quantos casos voce vai digitar? 3
Entre com o numerador: 10
Entre com o denominador: 2
DIVISAO = 5.00
Entre com o numerador: -9
Entre com o denominador: 0
DIVISAO IMPOSSIVEL
Entre com o numerador: 0
Entre com o denominador: 5
DIVISAO = 0.00
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos casos voce vai digitar? ");
		int n = sc.nextInt();
		
		for (int i = 0; i < n; i++) {
			System.out.print("Entre com o numerador: ");
			int numerador = sc.nextInt();
			System.out.print("Entre com o denominador: ");
			int denominador = sc.nextInt();
			
			if (denominador == 0) {
				System.out.println("DIVISAO IMPOSSIVEL");
			}
			else {
				double divisao = (double) numerador / denominador;
				System.out.printf("DIVISAO = %.2f%n", divisao);
			}
		}
		
		sc.close();
	}
}
```

### 🔬 Problema "Experiências de Laboratório"

**Descrição:** Maria organiza experimentos com cobaias (sapos, ratos e coelhos). Faça um programa que leia um número N de casos de teste. Cada caso de teste informa a quantidade e o tipo de cobaia ('C', 'R' ou 'S'). Ao final, apresente o total de cobaias, o total de cada tipo e o percentual de cada tipo em relação ao total.

**Exemplo com novos dados:**
```
Quantos casos de teste serao digitados? 5
Quantidade de cobaias: 10
Tipo de cobaia: C
Quantidade de cobaias: 5
Tipo de cobaia: R
Quantidade de cobaias: 8
Tipo de cobaia: S
Quantidade de cobaias: 12
Tipo de cobaia: R
Quantidade de cobaias: 15
Tipo de cobaia: C

RELATORIO FINAL:
Total: 50 cobaias
Total de coelhos: 25
Total de ratos: 17
Total de sapos: 8
Percentual de coelhos: 50.00 %
Percentual de ratos: 34.00 %
Percentual de sapos: 16.00 %
```

**Solução em Java:**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		int totalCoelhos = 0;
		int totalRatos = 0;
		int totalSapos = 0;
		
		System.out.print("Quantos casos de teste serao digitados? ");
		int n = sc.nextInt();
		
		for (int i = 0; i < n; i++) {
			System.out.print("Quantidade de cobaias: ");
			int quantidade = sc.nextInt();
			System.out.print("Tipo de cobaia: ");
			char tipo = sc.next().charAt(0);
			
			switch (tipo) {
				case 'C':
					totalCoelhos += quantidade;
					break;
				case 'R':
					totalRatos += quantidade;
					break;
				case 'S':
					totalSapos += quantidade;
					break;
			}
		}
		
		int totalCobaias = totalCoelhos + totalRatos + totalSapos;
		double percentualCoelhos = (double) totalCoelhos / totalCobaias * 100.0;
		double percentualRatos = (double) totalRatos / totalCobaias * 100.0;
		double percentualSapos = (double) totalSapos / totalCobaias * 100.0;
		
		System.out.println("\nRELATORIO FINAL:");
		System.out.println("Total: " + totalCobaias + " cobaias");
		System.out.println("Total de coelhos: " + totalCoelhos);
		System.out.println("Total de ratos: " + totalRatos);
		System.out.println("Total de sapos: " + totalSapos);
		System.out.printf("Percentual de coelhos: %.2f %%%n", percentualCoelhos);
		System.out.printf("Percentual de ratos: %.2f %%%n", percentualRatos);
		System.out.printf("Percentual de sapos: %.2f %%%n", percentualSapos);
		
		sc.close();
	}
}
```