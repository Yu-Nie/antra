using System;

class assignment1
{
    
    static void Main(string[] args)
    {
        /*int a = 2147483647;
        Console.WriteLine(a);
        a += 1;
        Console.WriteLine(a);*/

        /*int y = 1;
        int x = ++y;
        Console.WriteLine(x);
        Console.WriteLine(y);*/

        /* int max = 500;
         for (byte i = 0; i < max; i++)
         {
             Console.WriteLine(i);
         }
        // it will endlessly print a number between 0 to 255
        */

        assignment1 hacker = new assignment1();
        hacker.HackerName();
        hacker.DataTypes();
        hacker.ConvertCenturies();
        hacker.FizzBuzz();
        hacker.GuessRandom();
        hacker.Pyramid();
        hacker.GuessRandom2();
        hacker.DaysOld();
        hacker.greeting();
        hacker.Counting();
    }
    public void HackerName()
    {
        Console.WriteLine("What is your constellation?");
        string constellation = Console.ReadLine();
        Console.WriteLine("What is your favorate color?");
        string color  = Console.ReadLine();
        Console.WriteLine("What is your lucky number?");
        string lucky = Console.ReadLine();
        Console.WriteLine("Your hackerName is " + color+constellation+lucky);
    }  

    public void DataTypes()
    {
        Console.WriteLine("sbyte has size of 1 byte, range from -128 to 127.");
        Console.WriteLine("byte has size of 1 byte, range from 0 to 255");
        Console.WriteLine("short has size of 2 bytes, range from -32768 to 32767");
        Console.WriteLine("ushort has size of 2 bytes, range from 0 to 65535");
        Console.WriteLine("int has size of 4 bytes, range from -2147483648 to 2147483647");
        Console.WriteLine("uint has size of 4 bytes, range from 0 to 4294967295");
        Console.WriteLine("long has size of 8 bytes, range from -9223372036854775808 to 9223372036854775807");
        Console.WriteLine("ulong has size of 8 bytes, range from 0 to 18446744073709551615");
        Console.WriteLine("float has size of 4 bytes, range from +- 1.5e-45 to +- 3.4e38");
        Console.WriteLine("double has size of 8 bytes, range from +- 5.0e-324 to +- 1.7e308");
        Console.WriteLine("decimal has size of 16 bytes, range from +- 1.0e-28 to +- 7.9e28.");
    }

    public void ConvertCenturies()
    {
        Console.WriteLine("Please enter a positive integer:");
        ulong cen = ulong.Parse(Console.ReadLine());
        ulong year = 100 * cen;
        ulong days = 36524;
        ulong hours = 24 * days;
        ulong minutes = 60 * hours;
        ulong seconds = 60 * minutes;
        ulong milli = 1000 * seconds;
        ulong micro = 1000 * milli;
        ulong nano = 1000 * micro;

        Console.WriteLine($"{cen} centuries = {year} years = {days} days = {hours} hours = {minutes} minutes = {seconds} seconds = {milli} milliseconds = {micro} microseconds = {nano} nanoseconds");

    }

    public void FizzBuzz()
    {
        for (int i = 1; i < 101; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine("FizzBuzz");
            }else if (i % 3 == 0)
            {
                Console.WriteLine("Fizz");
            }else if (i % 5 == 0)
            {
                Console.WriteLine("BUzz");
            }else
            {
                Console.WriteLine(i);
            }
        }
    }

    public void GuessRandom()
    {
        int correctNumber= new Random().Next(3) + 1;
        Console.WriteLine("Please guess a number between 1 and 3:");
        int guess = int.Parse(Console.ReadLine());
        while (guess != correctNumber)
        {
            if (guess < correctNumber)
            {
                Console.WriteLine("your guess is too small");
            }
            else
            {
                Console.WriteLine("your guess is too big");

            }
            Console.WriteLine("Please guess again:");
            guess = int.Parse(Console.ReadLine());
        }
        Console.WriteLine("you got the correct number!");
        
    }

    public void Pyramid()
    {
        Console.WriteLine("please enter the number of rows:");
        int rows = int.Parse(Console.ReadLine());
        int total = rows * 2 - 1;
        for (int i = 1; i <= rows; i++)
        {
            for (int k = 0; k < (total+1)/2-i ; k++)
            {
                Console.Write(" ");
            }
            for(int j = 0; j < i*2 - 1; j++)
            {
                Console.Write('*');
            }
            Console.WriteLine();
        }
    }

    public void GuessRandom2()
    {
        int correctNumber = new Random().Next(3) + 1;
        Console.WriteLine("Please guess a number between 1 and 3:");
        int guess = int.Parse(Console.ReadLine());
        while (guess != correctNumber)
        {
            if (guess < 1 || guess > 3)
            {
                Console.WriteLine("please enter a valid number (between 1 and 3).");
            }
            else if (guess < correctNumber)
            {
                Console.WriteLine("your guess is too small");
            }
            else
            {
                Console.WriteLine("your guess is too big");

            }
            Console.WriteLine("Please guess again:");
            guess = int.Parse(Console.ReadLine());
        }
        Console.WriteLine("you got the correct number!");
    }

    public void DaysOld()
    {
        Console.WriteLine("please enter your birthday");
        DateTime birthday = DateTime.Parse(Console.ReadLine());
        TimeSpan age = DateTime.Now - birthday;
        Console.WriteLine($"you are {Convert.ToInt32(age.TotalDays)} days old.");
        int daysToNextAnniversary = 10000 - (age.Days % 10000);
        Console.WriteLine("your next 10000 day anniverary is " + daysToNextAnniversary);
    }

    
    public void greeting()
    {
        DateTime time = DateTime.Now;
        int currentHour = time.Hour;

        if (currentHour >= 6 && currentHour < 12)
        {
            Console.WriteLine("Good Morning");
        } else if (currentHour >= 12 && currentHour < 18)
        {
            Console.WriteLine("Good Afternoon");
        }else if (currentHour >= 18 && currentHour < 23)
        {
            Console.WriteLine("Good Evening");
        }
        else
        {
            Console.WriteLine("Good Night");
        }
    }

    public void Counting()
    {
        for (int i = 1;i < 5; i++)
        {
            for (int j = 0; j < 25; j += i)
            {
                if (j == 24)
                {
                    Console.Write(j.ToString());
                }
                else
                {
                    Console.Write(j.ToString() + ',');
                }
            }
            Console.WriteLine();
        }
    }
}

