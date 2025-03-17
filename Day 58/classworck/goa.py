def remove_largest_value(lst):
    
    if not lst:
        print("List is empty")
        return
    
  
    max_value = max(lst)
    
    
    lst.remove(max_value)
    
    
    print("Modified list after removing the largest value:", lst)


my_list = [5, 10, 3, 8, 15]
remove_largest_valuemy_list