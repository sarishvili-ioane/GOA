# 1. int() - გარდაქმნის რიცხვად
print(int("10"))     # 10
print(int(3.7))      # 3 (ამოაჭრის ათწილადის ნაწილს)

# 2. float() - გარდაქმნის ათწილადად
print(float("10.5")) # 10.5
print(float(7))      # 7.0

# 3. str() - გარდაქმნის სტრიქონად
print(str(100))      # "100"
print(str(5.75))     # "5.75"

# 4. list() - გარდაქმნის სიად
print(list("hello")) # ['h', 'e', 'l', 'l', 'o']
print(list((1, 2, 3))) # [1, 2, 3]

# 5. tuple() - გარდაქმნის tuple-ად
print(tuple([1, 2, 3])) # (1, 2, 3)
print(tuple("abc")) # ('a', 'b', 'c')

# 6. set() - გარდაქმნის set-ად (ამოიღებს დუბლიკატებს)
print(set([1, 2, 2, 3, 3])) # {1, 2, 3}
print(set("hello")) # {'o', 'h', 'e', 'l'}

# 7. dict() - გარდაქმნის ლექსიკონად (მხოლოდ წყვილებიანი სტრუქტურიდან)
print(dict([(1, "a"), (2, "b")])) # {1: 'a', 2: 'b'}

# 8. bool() - გარდაქმნის ბულეან ტიპად
print(bool(0))      # False
print(bool(1))      # True
print(bool(""))     # False
print(bool("Hello")) # True
