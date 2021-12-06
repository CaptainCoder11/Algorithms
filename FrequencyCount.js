function sum(a,n){
    s = 0 ; //------- time == 1 
    for(i=0;i<n;i++) //------- time == n + 1
    {
        s = s + a[i] //------- time == n
    }
    return s; //------- time == 1
}
//f(n) = 2n + 3
//---------O(n)---------- order of degree

function Add(a,b,n){
    for(i=0;i<n;i++) //------- time == n + 1
    {
        for(j=0;j<n;j++) //------- time == n x n + 1
        {
            c[i,j] = a[i,j] + b[i,j] //------- time == n x n
        }
    }
}
//f(n) = 2(n2) + 2n + 1
//---------O(n2)---------- order of degree

function multiply(a,b,n){
    for(i=0;i<n;i++) //------- time == n + 1
    {
        for(j=0;j<n;j++) //------- time == n x n + 1
        {
            c[i,j] = 0 //------- time == n x n
            for(k=0;k<n;k++) //------- time == n x n x (n + 1)
            {
                c[i,j] = c[i+j] + a[i,k] * b[k,j] //------- time == n x n x n
            }
        }
    }
}
//f(n) = 2(n3) + 3(n2) + 2n + 1
//---------O(n3)---------- order of degree