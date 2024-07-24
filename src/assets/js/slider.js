const container = document.getElementById('container');
const images = document.querySelectorAll('.image');

let positions = [];
const speed = 2;  // 控制图片移动速度
let isMoving = true;

function initializePositions() {
    let containerWidth = container.clientWidth;
    images.forEach((image, index) => {
        let positionX = containerWidth + index * (image.clientWidth + 10);  // 间隔10像素
        positions.push(positionX);
        image.style.left = positionX + 'px';
    });
}

function moveImages() {
    if (isMoving) {
        const containerWidth = container.clientWidth;
        images.forEach((image, index) => {
            positions[index] -= speed;

            // 当图片完全移出容器左侧时，将其位置重置到容器右侧
            if (positions[index] < -image.clientWidth) {
                positions[index] = containerWidth;
            }

            image.style.left = positions[index] + 'px';
        });
    }
}

initializePositions();
setInterval(moveImages, 20);  // 每20毫秒更新一次图片位置

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        isMoving = false;  // 鼠标悬停时停止移动
    });

    image.addEventListener('mouseout', () => {
        isMoving = true;  // 鼠标移出时继续移动
    });
});
