// Example program
#include <iostream>
#include <string>
using namespace std;
int main()
{
  float produto;
  //codigo do produto
  float q;
  //quantide do pedido
  float pf;
  //preco final da compra
  
  cout<<"Digite o codigo do produto codigos de nossos produtos 10,11,20,25,30"<<endl;
  cin>>produto;
     if (produto == 10) {
          cout<<"Informe a quantidade desejada..."<<endl;
          cin>>q;
          pf = (q*5.32);
          cout<<"o total de seu pedido e R$"<<pf<<" com preco unitario de R$5.32"<<endl;
          cout<<"reinicie o programa para fazer outra consulta..."<<endl;
          }
     if (produto == 11) {
          cout<<"Informe a quantidade desejada..."<<endl;
          cin>>q;
          pf = (q*6.45);
          cout<<"o total de seu pedido e R$"<<pf<<" com preco unitario de R$6.45"<<endl;
          cout<<"reinicie o programa para fazer outra consulta..."<<endl;
          }
     if (produto == 20) {
          cout<<"Informe a quantidade desejada..."<<endl;
          cin>>q;
          pf = (q*2.37);
          cout<<"o total de seu pedido e R$"<<pf<<" com preco unitario de R$2.37"<<endl;
          cout<<"reinicie o programa para fazer outra consulta..."<<endl;
          }
     if (produto == 25) {
          cout<<"Informe a quantidade desejada..."<<endl;
          cin>>q;
          pf = (q*5.32);
          cout<<"o total de seu pedido e R$"<<pf<<" com preco unitario de R$5.32"<<endl;
          cout<<"reinicie o programa para fazer outra consulta..."<<endl;
          }      
      if (produto == 30) {
          cout<<"Informe a quantidade desejada..."<<endl;
          cin>>q;
          pf = (q*6.45);
          cout<<"o total de seu pedido e R$"<<pf<<" com preco unitario de R$6.45"<<endl;
          cout<<"reinicie o programa para fazer outra consulta..."<<endl;
          }        
      else {
         cout<<"codigo incorreto, reinicie para calcular novamente, codigos de nossos produtos 10,11,20,25,30..."<<endl;
    }
  }
  
