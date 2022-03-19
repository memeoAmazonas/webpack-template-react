class MapperClass {
  RadioButtonItems(data) {
    return data.map((item) => ({ value: item, label: item }));
  }

  GetNameFields(data) {
    return data.map(({ Name }) => (Name));
  }
}
export default new MapperClass();
