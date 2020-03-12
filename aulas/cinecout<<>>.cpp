#include<iostream>
//biblioteca usada no projeto
using namespace std;
/*====================================*
*    Xcript feito por R@7@$1          *
*                                     *
*====================================*/
int main(int argc, char** argv) {
 	float nota1;
 	float nota2;
 	float nota3;
 	float nota4;
 	float media;
 	
 	//primeira entrada para caculo media final
 	//cout saida de interface da maquina visualmente
 	cout<<"Nota primeira prova"<<endl;
 	//cin comando de entrada de dados interface humana
 	cin>>nota1;
 	// 
 	cout<<"Nota segunda prova"<<endl;
 	cin>>nota2;
 	//
 	cout<<"Nota Terceira prova"<<endl;
 	cin>>nota3;
 	//
 	cout<<"Nota Quarta prova"<<endl;
 	cin>>nota4;
 	//media das entradas anteriores 
	media = (nota1+nota2+nota3+nota4)/4;
 	cout<<" Media e = "<<media;
 	
 	return 0; 	
 }
