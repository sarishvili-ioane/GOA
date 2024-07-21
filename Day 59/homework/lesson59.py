def arithmetic_operations(string_num, num):
    # Convert the string to a number
    string_num = float(string_num)

    # Perform arithmetic operations
    addition = string_num + num
    subtraction = string_num - num
    multiplication = string_num * num
    division = string_num / num

    # Print the results to the console
    print(f"Addition: {string_num} + {num} = {addition}")
    print(f"Subtraction: {string_num} - {num} = {subtraction}")
    print(f"Multiplication: {string_num} * {num} = {multiplication}")
    print(f"Division: {string_num} / {num} = {division}")

# Example usage
arithmetic_operations("10", 5)