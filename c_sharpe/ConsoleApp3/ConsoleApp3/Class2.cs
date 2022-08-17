using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public class Class2
    {
        public int Fibonacci(int n)
        {
            if (n == 1 || n == 2) { return 1; }
            int a = 1, b = 1;
            int count = 2;
            int res = 0;
            while (count < n)
            {
                res = a + b;
                a = b;
                b = res;
                count++;
            }
            return res;
        }
    }
}
