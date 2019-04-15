import random as rd

with open('data.txt','w') as f:
    for _ in range(100):
        print(rd.randint(1,500),file=f)
    