# Claude Code 中文配置指南

## 🎯 配置目标
将 Claude Code 转换为全中文版本，包括界面、交互提示、错误信息等所有元素。

## 📋 配置方法

### 方法一：命令行配置（推荐）⭐

这是最简单直接的方法，只需在终端执行一条命令：

```bash
# 永久设置为中文界面
claude config set language zh-CN

# 验证设置
claude config get language
```

**效果：**
- ✅ 所有会话永久生效
- ✅ 包含交互提示、帮助文档、错误信息等全部界面元素
- ✅ 重启后依然保持中文

### 方法二：配置文件配置

#### 步骤1：找到配置文件位置

- **macOS / Linux**: `~/.claude/settings.json`
- **Windows**: `%USERPROFILE%\.claude\settings.json`

#### 步骤2：编辑配置文件

在配置文件中添加以下内容：

```json
{
  "language": "zh-CN",
  "hasCompletedOnboarding": true,
  "env": {
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "customInstructions": {
    "language": "请始终使用简体中文回答所有问题。不要使用英文单词，除非是代码语法本身或无法翻译的专业术语。",
    "codeStyle": "代码注释必须使用中文",
    "outputFormat": "所有输出必须使用中文，包括错误信息、提示信息、帮助文档等"
  },
  "includeCoAuthoredBy": false,
  "terminalProgressBarEnabled": true
}
```

#### 步骤3：保存并重启
1. 保存配置文件
2. 重新打开终端或重启 Claude Code

### 方法三：临时会话切换

如果需要临时使用中文（仅当前会话有效）：

```bash
# 在 Claude Code 交互界面中输入
/language zh-CN
```

**注意：** 重启后会恢复原设置。

## 🔍 验证配置是否生效

```bash
# 方法1：查看配置
claude config list

# 方法2：测试交互
claude ask "你好，现在是什么语言？"
```

如果返回中文回复，说明配置成功！

## 📊 界面变化示例

配置前（英文）：
```
Proceed?
❯ 1. Yes
  2. Yes, and don't ask again for this directory
  3. No
```

配置后（中文）：
```
是否继续？
❯ 1. 是
  2. 是，并且不再询问此目录下的操作
  3. 否
```

## 🛠️ 进阶配置

### 项目级中文配置（团队协作推荐）

在项目根目录创建 `.claude/CLAUDE.md` 文件：

```markdown
# 项目语言规范

请严格遵守以下规则：
1. 所有对话、解释、建议必须使用**简体中文**。
2. 代码注释必须使用中文。
3. 生成的 Commit Message 必须使用中文。
4. 严禁出现大段未翻译的英文技术名词。
```

### 记忆功能设置

在对话中使用记忆功能实现持久中文：

```
# 在 Claude Code 中输入
Always reply in Chinese.
```

然后选择保存到 **User memory**，这样每次启动都会自动使用中文。

## ⚠️ 常见问题解决

### 问题1：命令未找到
```bash
# 确保 Claude Code 已正确安装
claude --version
```

### 问题2：配置不生效
```bash
# 清除缓存并重启
claude config clear-cache
```

### 问题3：环境变量冲突
```bash
# Linux/macOS 检查
echo $CLAUDE_LANGUAGE

# Windows 检查
echo %CLAUDE_LANGUAGE%
```

### 问题4：网络连接问题（国内用户）

如果无法连接到官方 API，可以配置国内镜像：

```bash
# 使用 OpenRouter 等中转服务
export ANTHROPIC_BASE_URL="https://openrouter.ai/api/v1"
export ANTHROPIC_AUTH_TOKEN="你的-provider-key"
```

## 🎨 配置对比

| 方法 | 命令/操作 | 生效范围 | 持久性 | 适用场景 |
|------|----------|---------|--------|---------|
| **命令行全局** | `claude config set language zh-CN` | 所有会话 | ✅ 永久 | 日常开发使用 |
| **配置文件** | 编辑 `settings.json` | 所有会话 | ✅ 永久 | 命令行不可用时 |
| **临时会话** | `/language zh-CN` | 当前会话 | ❌ 临时 | 偶尔需要中文 |
| **项目配置** | 创建 `CLAUDE.md` | 项目内 | ✅ 永久 | 团队协作 |

## 💡 最佳实践

1. **优先使用命令行方法** - 最稳定和推荐
2. **备份原配置** - 修改前建议备份原有配置
3. **立即测试** - 修改后立即测试确保正常工作
4. **版本兼容性** - 确保 Claude Code 版本支持中文语言包
5. **团队统一** - 建议团队使用相同的项目级配置文件

## 🚀 使用提示

配置完成后，Claude Code 的所有交互界面、帮助信息、错误提示都将以中文显示，大大提升中文用户的使用体验！

## 📚 参考链接

- 官方文档：https://docs.claude.com
- Claude Code 设置：https://code.claude.com/docs/pt/settings

---

**生成时间**: 2026-06-01
**适用系统**: macOS / Linux / Windows
**Claude Code 版本**: v2.1.0+
