const nick = document.querySelector('#nick');
document.querySelector('#copy').addEventListener('click', async () => {
  await navigator.clipboard.writeText('hzxnzw7');
  nick.textContent = 'COPIADO!';
  setTimeout(() => nick.textContent = 'hzxnzw7', 1800);
});
document.querySelector('#share').addEventListener('click', () => {
  if (navigator.share) navigator.share({ title: 'hzxnzw7', url: location.href });
});
