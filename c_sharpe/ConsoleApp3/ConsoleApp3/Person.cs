using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public abstract class Person: IPersonService
    {
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        public abstract void GoToSchool();

        public virtual void DoHomework()
        {
            Console.WriteLine("I have homeworks due next week.");
        }

        public virtual void gradeHomework()
        {
            Console.WriteLine();
        }

        public void CalculateSalary(decimal baseSalary, int months)
        {
            if (baseSalary < 0)
            {
                Console.WriteLine("please enter a positive number");
            }
            else
            {
                Console.WriteLine($"Your total salary is {baseSalary * months}.");
            }
        }

        public void CalculateAge(DateTime birthday)
        {
            Console.WriteLine((DateTime.Now - birthday).TotalDays);
        }

        public Person()
        {
            
        }
    }

    public class Student: Person
    {
        private int Sid { get; set; }
        public int CreditHours { get; set; }

        public override void GoToSchool()
        {
            Console.WriteLine("I go to school for learning.");
        }

        public override void DoHomework()
        {
            Console.WriteLine("I have homeworks due tonight");
        }
    }

    public class Instructor: Person
    {
        private int Id { get; set; }
        public string Course { get; set; }
        public override void GoToSchool()
        {
            Console.WriteLine("I go to school for teaching.");
        }

        public override void gradeHomework()
        {
            Console.WriteLine("my class average GPA is 3.2");
        }
    }


}
