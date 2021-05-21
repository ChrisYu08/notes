## Canvas和SVG的优缺点（区别）

- Canvas是使用JavaScript在网页上绘制图像。

Canvas优势：
1.Canvas能够以.png或者.jpg格式保存结果图像
2.Canvas最适合图像密集型的游戏
Canvas缺点：
1.Canvas依赖分辨率
2.Canvas不支持事件处理
3.Canvas弱文本渲染能力

- SVG是使用XML描述2D图形的语言。
SVG优势：
1.SVG图像可以通过文本编辑器来创建和修改
2.SVG图像可被搜索、索引、脚本化或者压缩
3.SVG是可伸缩的
4.SVG图像可以在任何分辨率下被高质量的打印
5.SVG可在图像质量不下降的情况下被放大
6.SVG不依赖分辨率
7.SVG支持事件处理
8.SVG适合大型渲染区域
SVG缺点：
1.SVG复杂度高会减慢渲染速度
2.SVG不适合游戏应用


- svg可以动态的根据某个参数来改变图像的属性，比如颜色等，canvas只能重新绘制