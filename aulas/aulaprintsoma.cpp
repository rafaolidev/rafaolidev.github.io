#include<iostream>
//biblioteca usada no projeto
using namespace std;
/*====================================*
*       Xcript feito por R@7@31       *
*                                     *
*====================================*/
int main(int argc,char** argv) {
    unsigned short int numero1;
    short int numero2;
    float soma;
    
    cout<<"Digite o primeiro numero"<<endl;
 	//cin comando de entrada de dados interface humana
 	cin>>numero1;
    cout<<"Digite o segundo numero"<<endl;
 	//cin comando de entrada de dados interface humana
 	cin>>numero2;
 	soma = numero1+numero2;

    
    
    cout<<"O Numero Digitado foi: "<<numero1<<endl;
    cout<<"O Numero digitado foi: "<<numero2<<endl;
    cout<<"O valor da soma e = "<<soma;

 	return 0; 	
 }
