// Example program
#include <iostream>
#include <string>
using namespace std;
int main(void)
{
    float salario;
    cout<<"digite o salario"<<endl;
    cin>>salario;
    
    
    if (salario<500) {
        salario = salario*1.15;
    }
    else {
        if (salario<=1000) {
        salario = salario*1.1;
        }
        else {
            salario = salario*1.05;
        }
    }   
    cout<<"Com reajuste o salario fica "<<salario<<endl;
   return 0;
}
