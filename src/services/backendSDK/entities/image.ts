
import { backend } from "../config"

class Image {
  constructor(
    public id: string,
    public dataURL: string | null = null
  ) { }

  public async loadData() {
    const data = (await backend.get('/images/' + this.id, {
      responseType: 'blob'
    })).data;

    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result !== 'string') return;
      this.dataURL = reader.result
    }
    reader.readAsDataURL(data);

  }
}

export {
  Image
}
