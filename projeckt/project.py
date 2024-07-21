import random

def roll_dice(num_dice):
    return [random.randint(1, 6) for _ in range(num_dice)]

def play_game(player_name, num_dice):
    player_dice = roll_dice(num_dice)
    computer_dice = roll_dice(num_dice)

    print(f"{player_name}'s Dice: {player_dice}")
    print(f"Computer's Dice: {computer_dice}")

    player_score = sum(player_dice)
    computer_score = sum(computer_dice)

    print(f"\n{player_name}'s Total Score: {player_score}")
    print(f"Computer's Total Score: {computer_score}")

    if player_score > computer_score:
        print(f"\nCongratulations! {player_name} wins!")
    elif player_score < computer_score:
        print("\nComputer wins. Better luck next time!")
    else:
        print("\nIt's a tie!")

if __name__ == "__main__":
    print("Welcome to the Dice Roll Game!")
    player_name = input("Enter your name: ")
    num_dice = int(input("Enter the number of dice to roll: "))

    play_game(player_name, num_dice)