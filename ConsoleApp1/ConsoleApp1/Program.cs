using System;
class assignment2
{
    public static void Main(string[] args)
    {
        assignment2 assignment = new assignment2();
        /*assignment.ManageList();
        assignment.rotation();
        int[] arr = new int[] { 2, 1, 1, 2, 3, 3, 2, 2, 2, 1 };
        assignment.LongestSequence(arr);
        int[] arr1 = new int[] { 4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3 };
        int[] arr2 = new int[] { 7, 7, 7, 0, 2, 2, 2, 0, 10, 10, 10 };
        assignment.MostFrequency(arr2);
        assignment.ReverseString("24tvcoi92");
        assignment.ReverseSentence("C# is not C++, and PHP is not Delphi!");
        assignment.ExtractPalindromes("Hi,exe? ABBA! Hog fully a string: ExE. Bob");
        assignment.ParseURL("www.apple.com");*/
        assignment.ReverseS("The quick brown fox jumps over the lazy dog /Yes! Really!!!/.");
    }


    public void CopyArray()
    {
        int[] initialA = new int[10];
        for (int i = 0; i < initialA.Length; i++)
        {
            initialA[i] = i;
        }
        int[] newA = new int[initialA.Length];
        for (int i = 0; i < newA.Length; i++)
        {
            newA[i] = initialA[i];
        }
    }

    public void ManageList()
    {
        List<string> todo = new List<string>();
        while (true)
        {
            Console.WriteLine("here is your list:");
            foreach(string item in todo)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
            Console.WriteLine("Enter command (+ item, - item, or -- to clear)):");
            string operate = Console.ReadLine();
            if (operate.Substring(0, 2).Equals("+ "))
            {
                todo.Add(operate.Substring(2));
            }
            else if (operate.Substring(0, 2).Equals("- "))
            {
                todo.Remove(operate.Substring(2));
            }
            else if (operate.Substring(0, 2).Equals("--"))
            {
                todo.Clear();
            }
            else
            {
                Console.WriteLine("Please enter a valid operation");
            }
        }

        static List<int> FindPrimesInRange(int startNum, int endNum)
        {
            List<int> prime = new List<int>();
            int flag;
            for (int i = startNum; i <= endNum; i++)
            {
                if (i == 1 || i == 0)
                {
                    continue;
                }
                flag = 1;

                for (int j = 2; j <= i / 2; j++)
                {
                    if (i % j == 0)
                    {
                        flag = 0;
                        break;
                    }
                }
                if (flag == 1)
                {
                    prime.Add(i);
                }
            }
            return prime;
        }

    }

    public void rotation()
    {
        string[] arr = Console.ReadLine().Split();
        int k = Int32.Parse(Console.ReadLine());
        int n = arr.Length;
        int[] nums = new int[n];
        int[] sums = new int[n];
        for (int i = 1; i <= k; i++)
        {
            for (int j = 0; j < n; j++)
            {
                nums[j] = Convert.ToInt32(arr[(j + i) % n]);

            }

            for (int j = 0; j < n; j++)
            {
                sums[j] += nums[j];
            }
        }
        foreach (int item in nums)
        {
            Console.Write($"{item} ");
        }
        Console.WriteLine();

        foreach (int item in sums)
        {
            Console.Write($"{item} ");
        }
        Console.WriteLine();
    }

    public void LongestSequence(int[] arr)
    {
        int count = 1;
        int num = arr[0];
        int longestCount = 1;
        for (int i = 1; i < arr.Length; i++)
        {
            if (arr[i] != arr[i-1])
            {
                count = 0;
            }
            count++;
            if (count > longestCount)
                {
                    longestCount = count;
                    num = arr[i];
                }
            }
        
        for (int i = 0; i < longestCount; i++)
        {
            Console.Write(num.ToString() + ' ');
        }
    }

    public void MostFrequency(int[] arr)
    {
        Dictionary<int, int> freq = new Dictionary<int, int>();
        foreach(int item in arr)
        {
            if (freq.ContainsKey(item))
            {
                freq[item]++;
            }
            else
            {
                freq.Add(item, 1);
            }
            
        }
        int m = freq.Values.Max();
        List<int> list = new List<int>();
        foreach (KeyValuePair<int, int> entry in freq)
        {
            if (entry.Value == m)
            {
                list.Add(entry.Key);
            }
        }
        if (list.Count > 1)
        {
            string res = "";
            for (int i = 0; i < list.Count-1; i++)
            {
                res += list[i].ToString();
                res += ' ';
            }
            res += "and ";
            res += list[list.Count-1].ToString();
            Console.WriteLine("The numbers "+res+$" have the same maximal frequence (each occurs {m} times. The leftmost of item is {list[0]}");
        }
        else
        {
            Console.WriteLine($"The number {list[0]} is the most frequent (occurs {m} times)");
        }
        
    }

    public void ReverseString(string s)
    {
        string r = "";
        for(int i = s.Length-1; i >= 0; i--)
        {
            r += s[i];
        }
        Console.WriteLine(r);
    }


    public void ReverseS(string s)
    {
        List<String> words = new List<string>();
        List<String> punct = new List<string>();

        int idx = 0;
        string tmp ;
        while ( idx < s.Length)
        {
            tmp = "";
            while (idx < s.Length && IsSpecial(s[idx]))
            {
                tmp += s[idx];
                idx++;
            }
            if (tmp.Length > 0)
            {
                punct.Add(tmp);
            }

            tmp = "";
            while (idx < s.Length && !IsSpecial(s[idx]))
            {
                tmp += s[idx];
                idx++;
            }
            if (tmp.Length > 0)
            {
                words.Add(tmp);
            }
        }
        /*foreach(String word in words)
        {
            Console.WriteLine(word);
        }
        Console.WriteLine();
        foreach(string pun in punct)
        {
            Console.WriteLine(pun);
        }*/
        string res = "";
        int pi = 0;
        int wi = words.Count - 1;
        while (pi < punct.Count)
        {
            res += words[wi];
            wi--;
            res += punct[pi];
            pi++;
        }
        Console.WriteLine(res);
    }

    public bool IsSpecial(char c)
    {
        if (c == ' ' || c == '.' || c == ',' || c == ':' || c == ';' || c == '=' || c == '(' || c == ')' || c == '&' || c == '[' || c == ']' || c == '"' || c == '\'' || c == '\\' || c == '/' || c == '!' || c == '?')
        {
            return true;
        }
        else
        {
            return false;
        }
    }


    public void ExtractPalindromes(string s)
    {
        string[] words = s.Split(' ', '.',',', ':', ';', '=', '(', ')', '&', '[', ']', '"', '\'', '\\', '/', '!', '?' );
        
        List<string> palindroms = new List<string>();

        for (int i = 0; i < words.Length; i++)
        {
            if (IsPalindrome(words[i]) && !words[i].Equals(""))
            {
                palindroms.Add(words[i]);
            }
        }
        string res = String.Join(",", palindroms);
        Console.WriteLine(res);
    }

    public bool IsPalindrome(string s)
    {
        int start = 0;
        int end = s.Length - 1;
        while (start < end)
        {
            if (s[start] == s[end])
            {
                start++;
                end--;
            }
            else
            {
                return false;
            }
        }
        return true;
    }

    public void ParseURL(string url)
    {
        string protocol, server, resource;
        string[] tmp;

        if (url.Contains("://"))
        {
            protocol = url.Substring(0, url.IndexOf("://"));
            tmp = url.Substring(url.IndexOf("://") + 3).Split('/');
        }
        else
        {
            protocol = "";
            tmp = url.Split('/');
        }
        
        if (tmp.Length > 1)
        {
            server = tmp[0];
            resource = url.Substring(url.IndexOf("://") + 3 + server.Length);

        }
        else
        {
            server=tmp[0];
            resource = "";
        }
        Console.WriteLine($"protocol: {protocol}, server: {server}, resource: {resource}.");
    }
}



