def remove_max(lst):
    if not lst:
        return "The list is empty."

    max_value = lst[0]

    for num in lst:
        if num > max_value:
            max_value = num

    lst.remove(max_value)  
    return lst

# ტესტი
numbers = [4, 7, 1, 9, 3, 9]
print(remove_max(numbers)) 
