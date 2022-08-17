using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public interface IPersonService
    {
        void CalculateAge(DateTime birthday);
        void CalculateSalary(decimal salary, int months);

    }

    public interface IStudentService: IPersonService
    {

    }

    public interface IInstructorSevice: IPersonService
    {

    }
}
