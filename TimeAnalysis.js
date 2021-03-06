//-------------1-----------//
for(i=1;i<n;i = i+2)
{
    let a =2; //-------Time n/2
}
//------f(n) = n/2
///----------order of O(n)----------------

//-------------2-----------//
for(i=0;i<n;i++)  //-------Time n+1
{
   for(j=0;i<n;j++)  //-------Time n x (n + 1)
    {
        let a = 2;  //-------Time n x n
    }
}
//------f(n) = 2(n2) + 2n + 1
///----------order of O(n2)----------------

//-------------3-----------//
/*
i j numoftimes
0 0 0
1 0 1
2 1 2
*/
for(i=0;i<n;i++)  
{
   for(j=0;j<i;j++) 
    {
        let a = 2; 
    }
}
//------f(n) = 1 + 2 + 3 + ... + n = n(n+1) / 2 = ((n2) + 1 )/ 2   
///----------order of O(n2)----------------

//-------------4-----------//
p= 0
for(i=1;i<=p;i++)
{
    p += i;     
}
// p = (k x (k + 1)) / 2
// k2 > n then k = ^n
//------f(n) = n/2
///----------order of O(^n)----------------

