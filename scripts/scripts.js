// 示例：点击照片时弹出提示
document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photo-grid img");
    photos.forEach(photo => {
      photo.addEventListener("click", () => {
        alert("你点击了五月织姬的照片！");
      });
    });
  });
  