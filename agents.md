# 项目 AI 编程指南

## 开发环境设置

### 技术栈

- 前端：Next.js 16 + TypeScript + TailwindCSS
- 后端：Node.js + Express + PostgreSQL
- 包管理：pnpm

### 常用命令

- 启动开发服务器：`pnpm dev`
- 运行测试：`pnpm test`
- 代码检查：`pnpm lint`
- 构建项目：`pnpm build`

## 编码规范

### 文件组织

```
src/
├── components/ # 可复用组件
├── pages/ # 页面组件
├── hooks/ # 自定义 hooks
├── utils/ # 工具函数
└── types/ # TypeScript 类型定义
```

### 命名约定

- 组件：PascalCase（如：`UserProfile.tsx`）
- 工具函数：camelCase（如：`formatDate.ts`）
- 常量：UPPER_SNAKE_CASE

## 测试策略

### 测试结构

- 单元测试：与源文件同目录，`.test.ts`后缀
- 集成测试：`__tests__`目录下
- e2e 测试：`cypress`目录

### 运行测试

```bash
# 运行所有测试
pnpm test

# 运行特定测试
pnpm test -- --testNamePattern="User"

# 运行 e2e 测试
pnpm cypress:run
```

## PR 规范

### 标题格式

`[<scope>] <description>`
例如：`[auth] 添加用户登录功能`

### 检查清单

- [ ] 所有测试通过
- [ ] 代码符合 ESLint 规则
- [ ] 更新相关文档
- [ ] 添加必要的测试用例

## 进阶示例：React 组件开发专用

# React 组件开发指南

## 组件创建模板

使用以下命令快速创建新组件：

```bash
pnpm generate:component Button
```

## 组件规范

### 文件结构

```
Button/
├── index.ts # 导出文件
├── Button.tsx # 主组件
├── Button.test.tsx # 测试文件
├── Button.stories.tsx # Storybook 故事
└── types.ts # 类型定义
```

### Props 设计原则

1. 使用 TypeScript 严格类型定义
2. 提供合理的默认值
3. 避免过多的 props（遵循"选项对象"模式）

### 样式指南

- 使用 TailwindCSS 工具类
- 优先使用语义化颜色（如 `text-primary`而不是 `text-blue-500`）
- 响应式设计：mobile-first 原则

## 测试最佳实践

### 测试覆盖率目标

- 语句覆盖率：≥80%
- 分支覆盖率：≥75%
- 函数覆盖率：≥80%

### 常用测试模式

```typescript
// 渲染测试
describe('Button', () => {
    it('应该正确渲染按钮文本', () => {
        render(<Button>点击我</Button>);
        expect(screen.getByText('点击我')).toBeInTheDocument();
    });
  
    it('应该触发onClick事件', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>按钮</Button>);
        fireEvent.click(screen.getByText('按钮'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
```
