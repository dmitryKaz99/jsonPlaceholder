export const convertBase64 = (img: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};
