// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有文章卡片和分类/标签链接
  const postCards = document.querySelectorAll('.post-card');
  const categoryLinks = document.querySelectorAll('.card-categories a');
  const tagLinks = document.querySelectorAll('.card-tags a');

  // 分类筛选
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // 阻止默认跳转
      const category = this.textContent.trim().split('(')[0];  // 提取分类名
      
      // 筛选文章：只显示包含该分类的文章
      postCards.forEach(card => {
        const cardCategory = card.querySelector('.post-meta .categories')?.textContent;
        card.style.display = cardCategory?.includes(category) ? 'block' : 'none';
      });
    });
  });

  // 标签筛选
  tagLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // 阻止默认跳转
      const tag = this.textContent.trim().split('(')[0];  // 提取标签名
      
      // 筛选文章：只显示包含该标签的文章
      postCards.forEach(card => {
        const cardTags = card.querySelector('.post-meta .tags')?.textContent;
        card.style.display = cardTags?.includes(tag) ? 'block' : 'none';
      });
    });
  });
});