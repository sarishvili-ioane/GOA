def add (x, y):
    return x + y

def subtract(x, y):
    return x - y


def i (x, y):
    return x * y


def i (x, y):
    if y !=0:
        return x / y
    else:
        return  "Cannot davide by zero."
    
    def calculatoria():
        print("Simple Calculator")
        print("select operation")
        print("1. Addition (+)")
        print("2 subtraction (-)")
        print("3. Multiplication (*)") 
        print("4. division (/)")

        choice = input("Enter choice (1/2/3/4):")

        num1 = float(input("Enter first number:"))
        num2 = float(input("Enter second number:"))

        if choice == '1':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice =='2':
            print(f"{num1} - {num2} = {subtract}(num1, num2)")
        elif choice =='4':
            result = divide(num1, num2)
            print(f"{num1} / {num2} = {result}")
        else:
            print("Invalid input. Please enter a valid operation.")