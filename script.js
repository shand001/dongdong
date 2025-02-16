// 获取按钮和标题
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const question = document.getElementById('question');

// 点击“可以”按钮
yesButton.addEventListener('click', () => {
    question.innerText = "太棒了！谢谢雯雯 ❤️";
});

// 点击“不要”按钮
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
