import random;


def piFinder():
    n=int(input("Enter the number of random points\n"))
    circpts=0;


    for i in range(n):
        x=random.random();
        y=random.random()
        h= (x**2) + (y**2)
        if h<=1:
            circpts+=1
    
    return 4 * (circpts/n)

print(piFinder())
