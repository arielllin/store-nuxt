// 只是要合併讓分類有背景圖

export default class test {
  constructor(data, test, establishments) {
    Object.assign(this, data)
    this.collection.establishments_name = establishments.find(
      (item, index) => index === test
    ).establishment.name
  }
}
