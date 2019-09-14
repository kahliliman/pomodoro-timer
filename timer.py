import time

def countdown(n) :
    while n > 0:
        print (n)
        time.sleep(1)
        n -= 1

pomTimer = 25
resTimer = 5

countdown(pomTimer)

# countdown(resTimer)