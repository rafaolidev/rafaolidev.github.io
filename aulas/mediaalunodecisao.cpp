// Example program
#include <iostream>
#include <string>
using namespace std;
int main(void)
{
    float nota1;
    float nota2;
    float media;
    
   cout<<"digite a primeira nota"<<endl;
   cin>>nota1;
   cout<<"digite a segunda nota"<<endl;
   cin>>nota2;
   media = (nota1+nota2)/2;
   if (media>=6) {
       cout<<"aprovado"<<endl;
       cout<<"sua media e "<<media<<endl;
       if (media>=8) {
           cout<<"parabens voce se esforcou"<<endl;
       }
   }
   else {
       cout<<"REPROVADO"<<endl;
       cout<<"sua media e "<<media<<endl;
       if (media<=3) {
           cout<<"voce precisa estudar mais"<<endl;
       }
   }   
   cout<<"Execute novamente para calcular outra media"<<endl;
   
   
   return 0;
}
