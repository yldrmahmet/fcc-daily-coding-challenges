// Kare matrisi 90 derece saat yönünde döndüren fonksiyon
// Function to rotate a square matrix 90 degrees clockwise
function rotate(matrix) {
  // Matrisin boyutunu al (kaç satır olduğunu)
  // Get the size of the matrix (how many rows)
  const n = matrix.length;
  // Döndürülen matris için yeni boş dizi oluştur
  // Create a new empty array for the rotated matrix
  let rotated = [];

  // Yeni matris için boş satırlar oluştur
  // Create empty rows for the new matrix
  for (let i = 0; i < n; i++) {
    rotated.push([]);
  }

  // Eski matristeki her sayıyı dolaş
  // Go through each number in the old matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // rotated[j][n - 1 - i] formülü: 90° döndürme kuralı
      // j: eski sütun -> yeni satır, (n-1-i): eski satır tersine -> yeni sütun
      // Formula rotated[j][n - 1 - i]: 90° rotation rule
      // j: old column -> new row, (n-1-i): old row reversed -> new column
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }

  // Döndürülmüş matrisi geri döndür
  // Return the rotated matrix
  return rotated;
}

//test
const result = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(result);
