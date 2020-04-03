// Example program
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
int main(void)
{
    int N;
    
    cout<<"digite o numero"<<endl;
    cin>>N;
    if ((N%2) == 0) {
        cout<<"o numero "<<N<<" e par"<<endl;
        if (N>0) {
            cout<<"esse numero e postivo"<<endl;
        }
    }
    if ((N%2) == 1) {
        cout<<"o numero "<<N<<" e impar"<<endl;
         if (N<0) {
            cout<<"esse numero e postivo"<<endl;
        }
    }
    return 0;
}
