export function Summary() {
  const datas = [
    "八年 web 前端开发经验，三年授课培训经验",
    "精通 vue3 、前端测试领域",
    "终身学习者、TDD 狂热爱好者、前端测试布道者、全键盘爱好者(vim 党) 热衷深入研究技术原理",
    "有良好的产品意识和团队合作意识",
  ];

  return (
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-4xl text-gray-700 font-bold">Summary</h1>
      <p class="text-lg">
        <ol>
          {datas.map((i) => (
            <li>{i}</li>
          ))}
        </ol>
      </p>
    </div>
  );
}
