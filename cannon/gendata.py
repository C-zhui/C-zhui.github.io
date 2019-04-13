import random as rd

with open('data.txt','w') as f:
    for i in range(16):
        print(rd.randint(1,1000),file=f)
    