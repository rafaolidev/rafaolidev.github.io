// Example program
#include <iostream>
#include <string>
using namespace std;
int main()
{
  float sexo;
  float Peso;
  float h;
  
  cout<<"Qual seu sexo? (1 para Masculino, 2 para feminino)"<<endl;
  cin>>sexo;
     if (sexo == 1) {
          cout<<"informe sua altura. EX:1,90"<<endl;
          cin>>h;
          Peso = (72.7*h)-58;
          cout<<"seu peso ideal seria por volta de "<<Peso<<" kilos"<<endl;
          cout<<"reinicie o programa para fazer outro calculo"<<endl;
          }
     if (sexo == 2) {
          cout<<"informe sua altura. EX:1,90"<<endl;
          cin>>h;
          Peso = (62.1*h)-44.7;
          cout<<"seu peso ideal seria por volta de "<<Peso<<" kilos"<<endl;
          cout<<"reinicie o programa para fazer outro calculo"<<endl;
          }
    else {
         cout<<"informe um dos numeros validos, reinicie para calcular novamente..."<<endl;
    }
  }
