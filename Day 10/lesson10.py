x = [2, 4, 6, 2, 4, 7, 2, 9]
while (4) in x:
    x.remove(4)

print(x)

#Didn't get it first time

#Doing again different version

nums = [1, 2, 3, 3, 5, 6, 3, 6, 3]
while (3) in nums:
    nums.remove(3)
while (6) in nums:
    nums.remove(6)
print(nums)

#or

x = [2, 4, 6, 2, 4, 7, 2, 9]
for i in range(2):
    x.remove(4)
print(x)

#Done

#Next homework

family = ["shorena", "temo", "ioane"]
ages = [1, 2, 3, 40, 46, 13]
fam = "my mom is: {0}, she is {3} years old, my dad is: {1}, he is {4} years old, my brother is: {2}, he is {5} years old.".format(family[0], family[1], family[2], ages[3], ages[4], ages[5])
print(fam)

ages10 = [40, 46, 13]
ages10 = "my mom will be {0} years old in 10 years, my dad will be {1} years old in 10 years, my brother will be {2} years old in 10 years.".format(ages10[0] + 10, ages10[1] + 10, ages10[2] + 10)
print(ages10)

#Done