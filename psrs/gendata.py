import random as rd

with open('data.txt','w') as f:
    for _ in range(1000):
        print(rd.randint(1,500),file=f)
    