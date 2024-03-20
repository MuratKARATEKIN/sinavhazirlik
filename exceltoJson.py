import pandas as pd

# Excel dosyasının yolunu belirtin
excel_file_path = r"C:\Users\murat.karatekin\Desktop\PTE2.xlsx"

# Excel dosyasını okuyun
df = pd.read_excel(excel_file_path)

# Verileri JSON formatına dönüştürün
json_data = df.to_json(orient='records', indent=2)

# JSON verisini bir dosyaya kaydedin
json_file_path = r"C:\Users\murat.karatekin\Desktop\PTE.json"
with open(json_file_path, 'w') as json_file:
    json_file.write(json_data)

print(f"Veriler '{json_file_path}' dosyasına kaydedildi.")