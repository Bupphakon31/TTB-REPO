def simpleCipher(encrypted, k):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = ""

    for ch in encrypted:
        # Find position in alphabet (A = 0, Z = 25)
        position = alphabet.index(ch)

        # Shift back k positions (counter-clockwise)
        new_position = (position - k) % 26

        # Get character from new position
        decrypted_char = alphabet[new_position]
        result += decrypted_char

    return result

# Test
if __name__ == "__main__":
    encrypted = "VTAOG"
    k = 2
    
    print(f"Encrypted: {encrypted}")
    print(f"Shift back: {k} positions")
    print(f"Result: {simpleCipher(encrypted, k)}")
    print(f"Expected: TRYME")
    
    # Show steps
    print("\nDecryption steps:")
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for ch in encrypted:
        pos = alphabet.index(ch)
        new_pos = (pos - k) % 26
        new_ch = alphabet[new_pos]
        print(f"{ch} (pos {pos}) -> {new_ch} (pos {new_pos})")