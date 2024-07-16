from Crypto.Cipher import DES
from Crypto.Random import get_random_bytes


# Key generation
key = get_random_bytes(8)  # DES key size is 8 bytes

# Initialization Vector (IV) generation
iv = get_random_bytes(8)  # DES block size is 8 bytes

# Encryption
cipher = DES.new(key, DES.MODE_CBC, iv)
plaintext = input("Enter the message to encrypt: ").encode()

# Padding the plaintext if needed
block_size = 8
if len(plaintext) % block_size != 0:
    plaintext += b" " * (block_size - len(plaintext) % block_size)

ciphertext = cipher.encrypt(plaintext)

print("Plaintext:", plaintext.decode())
print("Ciphertext:", ciphertext)

# Decryption
decipher = DES.new(key, DES.MODE_CBC, iv)
decrypted_text = decipher.decrypt(ciphertext)

print("Decrypted text:", decrypted_text.decode().strip())
