#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

double randZeroToOne()
{
    return rand() / (RAND_MAX + 1.0);
}

double piFinder(int n)
{
  int circpts=0;
  for(int i=0 ;i<n;i++)
  {
    double x=randZeroToOne();
    double y=randZeroToOne();
    double ans=(x*x)+(y*y);
    if(ans<=1)
    {
      circpts++;
    }

  }
  return 4*(circpts/static_cast<double>(n));
}

int main()
{
  int n;
  cout<<"Enter number of points"<<endl;
  cin>>n;
  cout<<(piFinder(n))<<endl;
  return 0;
}
