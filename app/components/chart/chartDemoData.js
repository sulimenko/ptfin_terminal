// eslint-disable-next-line require-jsdoc
export default function(
  baseTimestamp = Date.now(),
  basePrice = 10382,
  dataSize = 1600
) {
  const dataList = []
  let timestamp = Math.floor(baseTimestamp / 240 / 1000) * 240 * 1000
  let baseValue = basePrice
  const prices = []
  for (let i = 0; i < dataSize; i++) {
    baseValue = baseValue + Math.random() * 20 - 10
    for (let j = 0; j < 4; j++) {
      prices[j] = (Math.random() - 0.5) * 12 + baseValue
    }
    prices.sort()
    const openIdx = +Math.round(Math.random() * 3).toFixed(0)
    let closeIdx = +Math.round(Math.random() * 2).toFixed(0)
    if (closeIdx === openIdx) {
      closeIdx++
    }
    const volume = Math.random() * 50 + 10
    const kLineModel = {
      open: prices[openIdx],
      low: prices[0],
      high: prices[3],
      close: prices[closeIdx],
      volume,
      timestamp,
    } 
    timestamp -= 240 * 1000
    kLineModel.turnover =
      ((kLineModel.open + kLineModel.close + kLineModel.high + kLineModel.low) /
      4) *
      volume
    dataList.unshift(kLineModel)
  }
  // console.log(dataList)
  return dataList
}
