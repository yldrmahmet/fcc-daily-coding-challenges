function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  console.log(videoSize, videoUnit, driveSize, driveUnit);

  // video unit wrong
  if (videoUnit !== "KB" && videoUnit !== "MB" && videoUnit !== "GB") {
    return "Invalid video unit";
  }

  // drive unit wrong
  if (driveUnit !== "GB" && driveUnit !== "TB") {
    return "Invalid drive unit";
  }

  //not wrong anything

  // calculate drive capacity (byte)
  const driveCapacity =
    driveUnit === "GB" ? driveSize * 10 ** 9 : driveSize * 10 ** 12;

  // calculate video capacity (byte)
  const videoCapacity =
    videoUnit === "B"
      ? videoSize
      : videoUnit === "KB"
      ? videoSize * 10 ** 3
      : videoUnit === "MB"
      ? videoSize * 10 ** 6
      : videoSize * 10 ** 9;

  return Math.floor(driveCapacity / videoCapacity);
}
