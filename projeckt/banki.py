current_money = int(input("how much  money you have right now?:"))
deposit = int(input("how much you want to deposit?:"))
print(("now u have ") + str(current_money+deposit) + "₾")
balance = current_money + deposit
withdraw = int(input("how much you want to withdraw?:"))
if withdraw > balance:
    print("srry you dont have enough money")
else:
    print("succesfully redeemed . your balance now will be " + str(balance - withdraw) + "₾") 