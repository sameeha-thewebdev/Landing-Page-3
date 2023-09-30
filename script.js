const blank = document.querySelector(".blank")
const image = document.querySelector("#image")
const cursor = document.querySelector("#cursor")

blank.addEventListener("mousemove", (dets)=>{
    const rotx = 58 - dets.x/11
    const roty = Math.abs(rotx)
    image.style.transform = `translate(-50%, -50%) rotateX(${rotx}deg) rotateY(${-roty}deg)`;
})

blank.addEventListener("mouseleave", () => {
  setTimeout(() => {
    image.style.transform = `translate(-50%, -50%)`;
  }, 500);
});

document.addEventListener("mousemove", (dets)=>{
    cursor.style.display = "block";
    cursor.style.left = `${dets.clientX}px`
    cursor.style.top = `${dets.clientY}px`;
})

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none"
});