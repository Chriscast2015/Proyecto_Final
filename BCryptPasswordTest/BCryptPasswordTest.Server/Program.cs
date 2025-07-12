using System;

class Program
{
    static void Main(string[] args)
    {
        var passwordPlano = "admin123";
        var hash = BCrypt.Net.BCrypt.HashPassword(passwordPlano);
        Console.WriteLine("Hash generado:");
        Console.WriteLine(hash);

        bool coincide = BCrypt.Net.BCrypt.Verify(passwordPlano, hash);
        Console.WriteLine("¿Coincide? " + coincide);
    }
}
