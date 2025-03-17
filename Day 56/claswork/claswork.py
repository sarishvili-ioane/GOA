numbers = [10, 3, 7, 2, 8, 5]  


min_value = numbers[0]


for num in numbers:
    if num < min_value:
        min_value = num  

print("The smallest number is:", min_value)
