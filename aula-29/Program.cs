using System;

class Program
{
    static void Main(string[] args)
    {
        // Comando para mostrar saída no terminal
        Console.WriteLine("Olá Mundo!");
        /*
            Mostrar "Olá Mundo no terminal"
         */

        string nome = "Joana";
        int idade = 30;
        double altura = 1.7;
        bool ativado = true;
        char sexo = 'F';

        Console.WriteLine("Nome: " + nome);
        Console.WriteLine("Idade: " + idade);
        Console.WriteLine("Altura: " + altura);
        Console.WriteLine("Ativado: " + ativado);
        Console.WriteLine("Sexo: " + sexo);

        short mes = 10;
        long distanciaAteSenhorKayoh = 123456789000;
        float salario = 10500.78F;
        decimal pi = 3.141659849230942903M;
        uint peso = 12;

        var cidade = "São Paulo";
        var ano = 2025;

        dynamic x = 234;
        x = "Olá";
        x = true;
        Console.WriteLine(x);

        int? i = null;
        Console.WriteLine(i);
        i = 23;
        Console.WriteLine(i);

        const string mensagem = "Erro interno no servidor.";
        Console.WriteLine(mensagem);

        Console.WriteLine("Ola");
        Console.Write("Ola1");
        Console.Write("Ola2");
        Console.Write("Ola3");

        Console.Clear();
        Console.WriteLine("Digite seu nome:");
        string entrada = Console.ReadLine();

        Console.WriteLine("Bem-vindo(a) " + entrada);

        double a = 8, b = 10;
        Console.WriteLine(a + b);
        Console.WriteLine(a - b);
        Console.WriteLine(a * b);
        Console.WriteLine(b / a);
        Console.WriteLine(b % a);

        int j = 0;
        j = 1; // 1
        j += 2; // 3
        j -= 6; // -3
        j *= 4; // -12
        j /= 6; // -2
        Console.WriteLine(j);

        int c = 0;
        c++; // 1
        ++c; // 2
        --c; // 1
        c--; // 0
        Console.WriteLine(c);

        int p = 4, q = 6;
        Console.WriteLine(p == q); // false
        Console.WriteLine(p != q); // true
        Console.WriteLine(p > q); // false
        Console.WriteLine(p < q); // true
        Console.WriteLine(p >= q); // false
        Console.WriteLine(p <= q); // true

        bool r = true, s = false;
        Console.WriteLine(r && s); // false
        Console.WriteLine(r || s); // true
        Console.WriteLine(!r); // false

        var h = 23.67F;
        Console.WriteLine(h is float); // true

        object texto = "texto";
        string txt = texto as string;
        Console.WriteLine(txt);
    }
}