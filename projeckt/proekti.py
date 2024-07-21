import random  # davamate biblioteka

print("Welcome to the dice rolling simulator!")   # vprintavt misalmebis mesijs
while True:   # vaketebt ise rom terminali usasrulod gagrzeldes
    roll = input("Press enter to roll the dice: ")   # viyenebt inputs rom enter ro davawvebit gagordes kamateli

    roll = ""  # vqmnit roll is cariel cvlads

    num_rolls = 1   # vqmnit cvlads da vaniwebt mnisvnelobas 1s

    roll_results = str(random.randint(1, 6))  # vqmnit cvlads sadac kodi automaturad irchevs 1 dan 6 mde 
    comp_result = str(random.randint(1, 6)) # vqmnit cvlads sadac kodi automaturad irchevs 1 dan 6 mde 4

    for i in range(num_rolls):
        print("Your dice result is: " + roll_results)         #rodesac enters davawert ra ricxvi gavagoret gvichvenebs
        print("computer dice result is: " + comp_result)

    if roll_results > comp_result:
        print("you win")                # aq angarishia vin moigo vin waago
    elif roll_results < comp_result:
        print('You Lose')
    else:
        print('tie')