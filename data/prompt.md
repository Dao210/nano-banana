"Nano Banana" 实际上是 AI 绘画社区（尤其是海外社区和部分国内极客圈）对 **Google Gemini**（特别是 Gemini 2.5 Flash/Pro Image 模型）的昵称或代号。该模型以理解长难句、逻辑性强和生成的图像具有极高的清晰度与质感著称。

针对 Nano Banana (Gemini) 模型“认可”的高质量 Prompt 结构，通常建议包含 **Subject (主体)**、**Style (风格)**、**Material/Texture (材质/纹理)** 和 **Lighting (光影)**。

以下为您生成的三个版本的英文 Prompt，您可以直接复制使用：

1.nanobanana的参数有哪些，怎么设置。ar

2.图片都压缩到100K以下，甚至50K以下

3.prompt 列表页的图片大小为 4:3， 800px:600px


  {

id:'24',

slug:'nano-banana-api-integration',

title:'Nano Banana API Integration',

description:'Optimize prompts for Nano Banana API with technical precision',

prompt:'Optimize this prompt for Nano Banana API integration. Structure the request for maximum efficiency and quality output. Include specific parameters for consistency, style, and technical requirements. Ensure the prompt works well with automated workflows and batch processing while maintaining high-quality results.',

tags: ['character', 'api', 'technical', 'automation', 'workflow'],

previewImage:'/tutorials/api-integration.jpg',

  },

### 选项 1：由简入繁的通用版（推荐，效果最稳）

这个 Prompt 采用了 Gemini 最擅长的描述性语言，强调材质和细节。

> **Prompt:**
> "A highly detailed European family crest featuring a majestic dragon on a shield. The shield is metallic with intricate engravings and an ornate border. The dragon is fierce, depicted in a rampant pose with scales visible, symbolizing strength and heritage. The design is centered, symmetrical, and heraldic. 8k resolution, cinematic lighting, photorealistic texture, white background."

### 选项 2：Nano Banana "Pro" 结构版（更具质感）

根据社区对 Nano Banana 的测试，这种分段式或加入“微距细节” (Micro-details) 的描述能触发模型生成极具冲击力的 3D 效果。

> **Prompt:**
> "Close-up of an ancient European heraldic shield made of polished silver and aged gold. Centerpiece: A three-dimensional embossed dragon with glowing eyes and sharp claws, coiled protectively. Texture: Micro-scratches on the metal, realistic weathering, and intricate filigree patterns. Lighting: Dramatic side lighting creating deep shadows and high contrast. Style: Hyper-realistic, medieval fantasy, 8k masterpiece, unreal engine 5 render style."

### 选项 3：极简复古版（适合生成平面设计图）

如果您需要的是像书本插图一样的平面图案。

> **Prompt:**
> "A vintage illustration of a European coat of arms. A shield shape containing a stylized heraldic dragon. Vector art style, clean lines, flat colors, isolated on a plain background. Classical heraldry aesthetic."

### 💡 给 Nano Banana (Gemini) 写 Prompt 的小技巧：

1. **自然语言**：它比 Midjourney 更能听懂“人话”，你可以用完整的句子描述。
2. **材质关键词**：使用 `embossed` (浮雕), `metallic` (金属感), `weathered` (风化), `filigree` (金银丝工艺) 等词汇，Gemini 在处理这些纹理时表现非常出色。
3. **光影**：加上 `cinematic lighting` 或 `dramatic shadows` 会让生成的盾牌非常有立体感。
