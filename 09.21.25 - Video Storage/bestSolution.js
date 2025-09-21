function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  // Geçerli birimleri tanımla
  const validVideoUnits = ["B", "KB", "MB", "GB"];
  const validDriveUnits = ["GB", "TB"];

  // Birim kontrollerini yap
  if (!validVideoUnits.includes(videoUnit)) {
    return "Invalid video unit";
  }

  if (!validDriveUnits.includes(driveUnit)) {
    return "Invalid drive unit";
  }

  // Byte'a dönüşüm çarpanlarını tanımla
  const conversionToBytes = {
    B: 1,
    KB: 1000,
    MB: 1000 * 1000,
    GB: 1000 * 1000 * 1000,
    TB: 1000 * 1000 * 1000 * 1000,
  };

  // Video ve disk kapasitesini byte'a çevir
  const videoSizeInBytes = videoSize * conversionToBytes[videoUnit];
  const driveSizeInBytes = driveSize * conversionToBytes[driveUnit];

  // Kaç video sığacağını hesapla (tam sayı olarak)
  return Math.floor(driveSizeInBytes / videoSizeInBytes);
}

// Test örnekleri
console.log(numberOfVideos(500, "MB", 100, "GB")); // 200
console.log(numberOfVideos(2000, "B", 1, "TB")); // 500000000
console.log(numberOfVideos(2000, "MB", 100000, "MB")); // "Invalid drive unit"
console.log(numberOfVideos(500000, "KB", 2, "TB")); // 4000
console.log(numberOfVideos(1.5, "GB", 2.2, "TB")); // 1466
