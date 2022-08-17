using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public class Class1
    {
        static void Main(string[] args)
        {
            Class1 task = new Class1();

            int[] numbers = task.GenerateNumbers(10);
            task.Reverse(numbers);
            task.PrintNumbers(numbers);

        }
        public int[] GenerateNumbers(int len)
        {
            int[] numbers = new int[len];
            for (int i = 1; i <= len; i++)
            {
                numbers[i - 1] = i;
            }
            return numbers;
        }

        public void Reverse(int[] numbers)
        {
            int n = numbers.Length;
            if (n % 2 == 0)
            {
                n /= 2;
            }
            else
            {
                n = (n + 1) / 2;
            }
            for (int i = 0; i < n; i++)
            {
                int tmp = numbers[i];
                numbers[i] = numbers[numbers.Length - i - 1];
                numbers[numbers.Length - i - 1] = tmp;
            }
        }

        public void PrintNumbers(int[] numbers)
        {
            foreach (int i in numbers)
            {
                Console.Write(i);
                Console.Write(' ');
            }
        }
    }
}
