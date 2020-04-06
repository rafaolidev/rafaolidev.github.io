// Example program
#include <iostream>
#include <string>
using namespace std;
int main()
{
  float B;
  //votos nulos, null votes
  float N;
  //votos validos, valid votes
  float V;
  //total de votos, total votes
  float T;
  
  float PB;
 //votos validos percentual, percentege valid votes
  float PN;
  //percentual
  float PV;
  
  cout<<"digite a quantidade de votos brancos"<<endl;
  cin>>B;
  cout<<"digite a quantidade de votos nulos"<<endl;
  cin>>N;
  cout<<"digite a quantidade de votos validos"<<endl;
  cin>>V;
  
  T = (B+N+V);
  PB = (B/T)*100;
  PN = (N/T)*100;
  PV = (V/T)*100;
  
  cout<<"o percentual  de votos brancos e "<<PB<<"%"<<endl;
  cout<<"o percentual  de votos brancos e "<<PN<<"%"<<endl;
  cout<<"o percentual  de votos brancos e "<<PV<<"%"<<endl;
  
  return 0;
}
