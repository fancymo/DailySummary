# CodeMirror模块

## 特性汇总

特性                                                 | more
-------------------------------------------------- | ----
支持100种语言                                           | -
自动编译                                               | xml
代码折叠                                               | -
可配置的按键绑定                                           | -
Vim, Emacs和 Sublime Text 绑定                        | -
搜索和替换接口                                            | -
括号与标签匹配                                            | -
支持拆分视图                                             | -
Linter 整合                                          | -
混合字体大小和样式                                          | -
多样的主题                                              | -
能够调整大小以适应内容                                        | -
内联与块状元素部件                                          | -
可以编写的沟槽                                            | -
Making ranges of text styled, read-only, or atomic | -
双向文本支持                                             | -

## Configuration(配置选项)

- 常用的配置选项

属性                         | 参数                                                                            | 作用
-------------------------- | ----------------------------------------------------------------------------- | -------------------------------
value                      | string／CodeMirror.Doc                                                         | 编辑器的初始值
mode                       | string／object                                                                 | 指明编辑器的语言（如果没有指明，则以加载的第一个语言js为准）
lineSeparator              | string／null                                                                   | 行分隔符
theme                      | string                                                                        | 编辑器主题（修改编辑器样式，相关css必须加载）
indentUnit                 | integer                                                                       | 缩进字符数
smartIndent                | boolean                                                                       | 是否智能缩进
tabSize                    | integer                                                                       | tab字符的宽度（默认4个字符）
indentWithTabs             | boolean                                                                       | -
electricChars              | boolean                                                                       | 字符输入的时候缩进不正确则重新缩进
specialChars               | RegExp                                                                        | 获取替换特殊字符
specialCharPlaceholder     | function(char) → Element                                                      | 用于替换特殊字符的方法
rtlMoveVisually            | boolean                                                                       | 文本是否从右到左？
keyMap                     | string                                                                        | 键盘映射（用于设置快捷键？）
extraKeys                  | object                                                                        | 指定额外的键绑定到编辑器上
configureMouse             | fn(cm: CodeMirror, repeat: "single"／"double"／"triple", event: Event) → Object | 设置鼠标选择和拖拽的行为，当鼠标左键按下时触发这个方法
lineWrapping               | boolean                                                                       | 是否换行
lineNumbers                | boolean                                                                       | 是否显示行号
firstLineNumber            | integer                                                                       | 行号开始的序号
lineNumberFormatter        | function(line: integer) → string                                              | 自定义行号格式
gutters                    | array`<string>`                                                               | 用于设置心的沟槽的样式
fixedGutter                | boolean                                                                       | -
scrollbarStyle             | string                                                                        | 滑动条样式
coverGutterNextToScrollbar | boolean                                                                       | -
inputStyle                 | string                                                                        | 选择输入框的形式
readOnly                   | boolean/string                                                                | 编辑器内容只读
showCursorWhenSelecting    | boolean                                                                       | 选中文本后光标是否显示
lineWiseCopyCut            | boolean                                                                       | 是否在没有文本选中的时候复制／剪切光标所在的整行
undoDepth                  | integer                                                                       | 撤销操作的最大次数
historyEventDelay          | integer                                                                       | 保存到历史操作记录中的时间间隔（默认1250ms）
tabindex                   | integer                                                                       | 分配给编辑器的标签索引
autofocus                  | boolean                                                                       | 编辑器初始化后是否获得焦点

- 更专业的配置选项

属性                          | 参数              | 作用
--------------------------- | --------------- | --------------------
dragDrop                    | boolean         | 是否可以拖放
allowDropFileTypes          | array`<string>` | -
cursorBlinkRate             | number          | -
cursorScrollMargin          | number          | -
cursorHeight                | number          | -
resetSelectionOnContextMenu | boolean         | -
workTime, workDelay         | number          | -
pollInterval                | number          | -
flattenSpans                | boolean         | -
addModeClass                | boolean         | -
maxHighlightLength          | number          | -
viewportMargin              | integer         | 指明当前滚动的视图渲染的行数（感觉没用）

- 文档上没有的一些配置选项

属性                        | 参数 | 作用
------------------------- | -- | --
direction                 | -  | -
disableInput              | -  | -
moveInputWithCursor       | -  | -
singleCursorHeightPerLine | -  | -
spellcheck                | -  | -
wholeLineUpdateBefore     | -  | -

## 属性列表

属性                         | 解释
-------------------------- | ------------------------------
CodeMirror.version: string | CodeMirror版本号
CodeMirror.defaults        | CodeMirror默认的配置选项
CodeMirror.keyNames        | CodeMirror已经定义了的一些按键别名
CodeMirror.keyMap          | 系统中快捷键操作的别名
CodeMirror.commands        | CodeMirror中定义的在编辑器上执行的非参数操作
cm.state                   | CodeMirror实例的一个属性，用于存储当前编辑器的状态
CodeMirror.Pass            | -

## 方法列表

- CodeMirror类方法

方法                                                                                                          | 功能
----------------------------------------------------------------------------------------------------------- | --------------------
CodeMirror.fromTextArea(textArea: TextAreaElement, ?config: object)                                         | 另一种构建CodeMirror实例的方式
CodeMirror.defineExtension(name: string, value: any)                                                        | -
CodeMirror.defineDocExtension(name: string, value: any)                                                     | -
CodeMirror.defineOption(name: string, default: any, updateFunc: function)                                   | -
CodeMirror.defineInitHook(func: function)                                                                   | -
CodeMirror.registerHelper(type: string, name: string, value: helper)                                        | -
CodeMirror.registerGlobalHelper(type: string, name: string, predicate: fn(mode, CodeMirror), value: helper) | -
CodeMirror.Pos(line: integer, ?ch: integer, ?sticky: string)                                                | -
CodeMirror.changeEnd(change: object) → {line, ch}                                                           | -
CodeMirror.signal(target, name, args...)                                                                    | 触发自己的事件？
CodeMirror.normalizeKeyMap()                                                                                | 处理keymap防止冲突？
CodeMirror.Doc(text, mode, firstLineNumber)                                                                 | 创建新的documents

- CodeMirror.fromTextArea()创建的实例包含的额外的方法

方法                                 | more
---------------------------------- | ----------------------------
cm.save()                          | 复制编辑器的内容到textarea(并没有收到文本内容)
cm.toTextArea()                    | 移除编辑器，保存编辑器的内容到textarea
cm.getTextArea() → TextAreaElement | 返回编辑器绑定的textarea

- CodeMirror实例 && CodeMirror.Doc实例

  ```javascript
    //实例的创建
    CodeMirror(place: Element|fn(Element), ?option: object)
  ```

  > doc---代表CodeMirror和CodeMirror.Doc实例

  > cm---只代表CodeMirror实例

- 内容操作方法

方法                                                                                       | more
---------------------------------------------------------------------------------------- | ----------------------------------
doc.getValue(?separator: string) → string                                                | 获取编辑器文本内容
doc.setValue(content: string)                                                            | 设置编辑器文本内容
doc.getRange(from: {line, ch}, to: {line, ch}, ?separator: string) → string              | 获取某一个区间的文本内容
doc.replaceRange(replacement: string, from: {line, ch}, to: {line, ch}, ?origin: string) | 替换某一区间的文本内容（to为null则是插入文本内容）
doc.getLine(n: integer) → string                                                         | 获得某一行的文本内容
doc.lineCount() → integer                                                                | 获取所有文本所占的行数
doc.firstLine() → integer                                                                | 获取首行的序号（通常是0）
doc.lastLine() → integer                                                                 | 获取尾行的序号（总行数-1）
doc.getLineHandle(num: integer) → LineHandle                                             | 获取行对象
doc.getLineNumber(handle: LineHandle) → integer                                          | 根据给定的行对象获取行序号
doc.eachLine(f: (line: LineHandle))                                                      | 遍历所有的行对象，并执行一些操作
doc.eachLine(start: integer, end: integer, f: (line: LineHandle))                        | 遍历给定范围内的行对象，并执行一些操作
doc.markClean()                                                                          | 设置撤销的截止点（ctrl+z会撤销到最近设置'clean'的地方）
doc.changeGeneration(?closeEvent: boolean) → integer                                     | -
doc.isClean(?generation: integer) → boolean                                              | 检测编辑器是否不能再撤销操作了

- 光标和选择器方法

方法                                                                                                               | more
---------------------------------------------------------------------------------------------------------------- | -------------------------------------
doc.getSelection(?lineSep: string) → string                                                                      | 获取当前选择的文本
doc.getSelections(?lineSep: string) → array`<string>`                                                            | 获取当前选择的文本（数组）
doc.replaceSelection(replacement: string, ?select: string)                                                       | 替换当前选择的文本
doc.replaceSelections(replacements: array`<string>`, ?select: string)                                            | 替换当前选择的文本（数组）
doc.getCursor(?start: string) → {line, ch}                                                                       | 获取当前光标所在位置
doc.listSelections() → array`<{anchor, head}>`                                                                   | 获取选择列表
doc.somethingSelected() → boolean                                                                                | 是否有被选择的文本
doc.setCursor(pos: {line, ch}/number, ?ch: number, ?options: object)                                             | 设置光标的位置
doc.setSelection(anchor: {line, ch}, ?head: {line, ch}, ?options: object)                                        | 设置单一的选择范围
doc.setSelections(ranges: array`<{anchor, head}>`, ?primary: integer, ?options: object)                          | 设置多个选择范围
doc.addSelection(anchor: {line, ch}, ?head: {line, ch})                                                          | 在选择列表里增加一个新的选择范围，并默认为主选择
doc.extendSelection(from: {line, ch}, ?to: {line, ch}, ?options: object)                                         | 与setSelection类似，区别不太清楚
doc.extendSelections(heads: array<{line, ch}>, ?options: object)                                                 | 与setSelection类似
doc.extendSelectionsBy(f: function(range: {anchor, head}) → {line, ch}), ?options: object)                       | 遍历selections最后调用extendSelections
doc.setExtending(value: boolean)                                                                                 | Sets or clears the 'extending' flag
doc.getExtending() → boolean                                                                                     | Get the value of the 'extending' flag
cm.hasFocus() → boolean                                                                                          | 编辑器是否有聚焦
cm.findPosH(start: {line, ch}, amount: integer, unit: string, visually: boolean) → {line, ch, ?hitSide: boolean} | 给定光标水平移动的参数，返回光标移动之后的位置
cm.findPosV(start: {line, ch}, amount: integer, unit: string) → {line, ch, ?hitSide: boolean}                    | 给定光标垂直移动的参数，返回光标移动之后的位置
cm.findWordAt(pos: {line, ch}) → {anchor: {line, ch}, head: {line, ch}}                                          | 返回给定位置元素(单词、空白、符号等)的起止位置坐标

- 配置方法

方法                                                   | more
---------------------------------------------------- | ------------------------------------------------------------------------
cm.setOption(option: string, value: any)             | 修改编辑器配置（单个修改）
cm.getOption(option: string) → any                   | 获取编辑器的某个配置项的值
cm.addKeyMap(map: object, bottom: boolean)           | 绑定一个额外的键盘映射到编辑器上,比extraKeys和keyMap拥有更高的优先级，后设置的优先级更高，设置bottom为true的优先级最高
cm.removeKeyMap(map: object)                         | 取消一个有addKeyMap添加的键盘映射
cm.addOverlay(mode: string／object, ?options: object) | 启用高亮覆盖
cm.removeOverlay(mode: string／object)                | 移除
cm.on(type: string, func: (...args))                 | 监听某个事件
cm.off(type: string, func: (...args))                | 移除某个事件的处理程序

- Document管理方法

方法                                                                       | more
------------------------------------------------------------------------ | -----------------------------------------------------------
cm.getDoc() → Doc                                                        | 获取当前活跃状态的document
doc.getEditor() → CodeMirror                                             | 获取结合了一个document的编辑器
cm.swapDoc(doc: CodeMirror.Doc) → Doc                                    | 将一个新的document固定到编辑器上，返回旧的document
doc.copy(copyHistory: boolean) → Doc                                     | 复制doc
doc.linkedDoc(options: object) → Doc                                     | 创建一个连接到目标document的新的document，被链接的document会与新创建的document保持同步
doc.unlinkDoc(doc: CodeMirror.Doc)                                       | 取消两个document之间的链接关系
doc.iterLinkedDocs(function: (doc: CodeMirror.Doc, sharedHist: boolean)) | 遍历所有与目标document链接的documents

- 历史相关方法

方法                                                 | more
-------------------------------------------------- | -----------------------------------
doc.undo()                                         | 撤销一个操作
doc.redo()                                         | 重新执行一个取消了的操作
doc.undoSelection()                                | 撤消一个编辑或选择更改（相比较undo增加了对选择对处理）
doc.redoSelection()                                | 重新执行一个取消了的操作或选择更改（相比较undo增加了对选择对处理）
doc.historySize() → {undo: integer, redo: integer} | 返回一个对象，其中包含了可以撤销和重做的次数
doc.clearHistory()                                 | 清空编辑器撤销和重做历史
doc.getHistory() → object                          | 获取撤销历史(json序列化)
doc.setHistory(history: object)                    | 替换编辑器的撤销历史

- 文本标记方法

方法                                                                            | more
----------------------------------------------------------------------------- | -------------------
doc.markText(from: {line, ch}, to: {line, ch}, ?options: object) → TextMarker | 标记一段文本
doc.setBookmark(pos: {line, ch}, ?options: object) → TextMarker               | 插入书签，返回TextMarker对象
doc.findMarks(from: {line, ch}, to: {line, ch}) → array`<TextMarker>`         | 返回给定范围内的书签和文本标记列表
doc.findMarksAt(pos: {line, ch}) → array`<TextMarker>`                        | 返回（）的书签和文本标记列表
doc.getAllMarks() → array`<TextMarker>`                                       | 返回所有书签和文本标记列表

- Widget、gutter和decoration方法

方法                                                                                           | more
-------------------------------------------------------------------------------------------- | ---------------------
doc.setGutterMarker(line: integer/LineHandle, gutterID: string, value: Element) → LineHandle | 设置沟槽（行）标记
doc.clearGutter(gutterID: string)                                                            | 清除给定沟槽上的所有标记
doc.addLineClass(line: integer/LineHandle, where: string, class: string) → LineHandle        | 添加行class
doc.removeLineClass(line: integer/LineHandle, where: string, class: string) → LineHandle     | 清除行class
doc.lineInfo(line: integer/LineHandle) → object                                              | 返回一个对象，包含给定行的信息
cm.addWidget(pos: {line, ch}, node: Element, scrollIntoView: boolean)                        | 向document的某个位置添加dom节点
doc.addLineWidget(line: integer/LineHandle, node: Element, ?options: object) → LineWidget    | 向给定行的下面添加一个dom节点

- 大小、滚动、位置方法

方法                                                                                              | more
----------------------------------------------------------------------------------------------- | ----------------------------
cm.setSize(width: number/string, height: number/string)                                         | 设置编辑器的尺寸
cm.scrollTo(x: number, y: number)                                                               | 滚动到编辑器的指定位置
cm.getScrollInfo() → {left, top, width, height, clientWidth, clientHeight}                      | 获取滚动的信息
cm.scrollIntoView(what: {line, ch}/{left, top, right, bottom}/{from, to}/null, ?margin: number) | 使给定的位置（或范围）滚动到视图内
cm.cursorCoords(where: boolean/{line, ch}, mode: string) → {left, top, bottom}                  | 获取光标的位置
cm.charCoords(pos: {line, ch}, ?mode: string) → {left, right, top, bottom}                      | 返回一个任意字符的尺寸和位置
cm.coordsChar(object: {left, top}, ?mode: string) → {line, ch}                                  | 根据给定的坐标，返回对应的行列对象
cm.lineAtHeight(height: number, ?mode: string) → number                                         | 根据给定的高返回对应的行号
cm.heightAtLine(line: integer/LineHandle, ?mode: string, ?includeWidgets: bool) → number        | 获取给定行的高
cm.defaultTextHeight() → number                                                                 | 返回编辑器默认字体的行高
cm.defaultCharWidth() → number                                                                  | 返回编辑器默认字体的宽度
cm.getViewport() → {from: number, to: number}                                                   | 返回当前document内容中被编辑器渲染的部分（行号）
cm.refresh()                                                                                    | 更新编辑器

- Mode、state和token-related方法

方法                                                                                              | more
----------------------------------------------------------------------------------------------- | ------------------------------------
doc.getMode() → object                                                                          | 获取编辑器外围的mode对象（与getOption("mode")不同）
cm.getModeAt(pos: {line, ch}) → object                                                          | 获取给定位置内部的mode对象（与getMode()有区别）
cm.getTokenAt(pos: {line, ch}, ?precise: boolean) → object                                      | 获取给定位置token的信息
cm.getLineTokens(line: integer, ?precise: boolean) → array`<{start, end, string, type, state}>` | 与getTokenAt方法类似，但是返回的是整行的所有token的信息
cm.getTokenTypeAt(pos: {line, ch}) → string                                                     | 获取给定位置token的类型
cm.getHelpers(pos: {line, ch}, type: string) → array`<helper>`                                  | 获取给定位置的一组实用的辅助值
cm.getHelper(pos: {line, ch}, type: string) → helper                                            | -
cm.getStateAfter(?line: integer, ?precise: boolean) → object                                    | 返回模式的解析器状态

- 其它方法

方法                                                 | more
-------------------------------------------------- | ----------------------------------------------------
cm.operation(func: () → any) → any                 | 当CodeMirror实例内部缓存改变或者DOM结构发生变化时就会执行func，返回值为func当返回值
cm.indentLine(line: integer, ?dir: string/integer) | 调整给定行的凹陷
cm.toggleOverwrite(?value: boolean)                | 在重写和插入两种模式中替换,或者明确设置为重写模式
cm.isReadOnly() → boolean                          | 编辑器是否为只读模式
doc.lineSeparator()                                | 返回行分隔符
cm.execCommand(name: string)                       | 执行给定的command
doc.posFromIndex(index: integer) → {line, ch}      | 返回编辑器中第n个字符的位置
doc.indexFromPos(object: {line, ch}) → integer     | 与posFromIndex相反，返回给定位置的字符在编辑器中所有字符的索引值
cm.focus()                                         | 使编辑器获得焦点
cm.getInputField() → Element                       | 返回编辑器文本输入元素的DOM节点
cm.getWrapperElement() → Element                   | 返回编辑器最外层的DOM节点
cm.getScrollerElement() → Element                  | 返回编辑器滚动元素的DOM节点
cm.getGutterElement() → Element                    | 返回编辑器沟槽元素的DOM节点

## Events(事件)

- CodeMirror实例触发的事件

事件                                                                                                   | more
---------------------------------------------------------------------------------------------------- | -----------------------------------------
"change" (instance: CodeMirror, changeObj: object)                                                   | 编辑器内容改变的时候触发（在operation结束之前触发，在DOM更新之前触发）
"changes" (instance: CodeMirror, changes: array`<object>`)                                           | 与change类似，但是代表的是一组操作（在operation完成之后触发）
"beforeChange" (instance: CodeMirror, changeObj: object)                                             | 在change触发之前触发，可以撤销改变或者修改改变的内容
"cursorActivity" (instance: CodeMirror)                                                              | 当光标或者选择改变的时候触发
"keyHandled" (instance: CodeMirror, name: string, event: Event)                                      | 当键盘映射相关的按键被按下后触发
"inputRead" (instance: CodeMirror, changeObj: object)                                                | 输入的内容从隐藏的textarea变得可读时触发
"electricInput" (instance: CodeMirror, line: integer)                                                | 输入的内容匹配mode's electric patterns时触发
"beforeSelectionChange" (instance: CodeMirror, obj: {ranges, origin, update})                        | 在选择的内容改变前触发
"viewportChange" (instance: CodeMirror, from: number, to: number)                                    | 视口改变时触发（编辑、滚动...）
"swapDoc" (instance: CodeMirror, oldDoc: Doc)                                                        | 使用swapDoc方法替换editor's document时触发
"gutterClick" (instance: CodeMirror, line: integer, gutter: string, clickEvent: Event)               | 编辑器的沟槽被点击时触发
"gutterContextMenu" (instance: CodeMirror, line: integer, gutter: string, contextMenu: Event: Event) | 编辑器contextmenu触发时触发
"focus" (instance: CodeMirror, event: Event)                                                         | 编辑器获得焦点时触发
"blur" (instance: CodeMirror, event: Event)                                                          | 编辑器失去焦点时触发
"scroll" (instance: CodeMirror)                                                                      | 编辑器滚动时触发
"refresh" (instance: CodeMirror)                                                                     | 编辑器刷新或者调整大小时触发
"optionChange" (instance: CodeMirror, option: string)                                                | 使用cm.setOption改变编辑器配置的时候触发
"scrollCursorIntoView" (instance: CodeMirror, event: Event)                                          | 当编辑器试图将光标滚动到视图时触发
"update" (instance: CodeMirror)                                                                      | 当编辑器更新DOM展示的时候触发
"renderLine" (instance: CodeMirror, line: LineHandle, element: Element)                              | 当一行被渲染的时候触发（在DOM创建之前触发）
"mousedown" (instance: CodeMirror, event: Event)                                                     | 单击
"dblclick" (instance: CodeMirror, event: Event)                                                      | 双击
"touchstart" (instance: CodeMirror, event: Event)                                                    | 触摸
"contextmenu" (instance: CodeMirror, event: Event)                                                   | 右键打开菜单栏
"keydown" (instance: CodeMirror, event: Event)                                                       | 按键按下
"keypress" (instance: CodeMirror, event: Event)                                                      | 按键按下
"keyup" (instance: CodeMirror, event: Event)                                                         | 按键抬起
"cut" (instance: CodeMirror, event: Event)                                                           | 剪切
"copy" (instance: CodeMirror, event: Event)                                                          | 复制
"paste" (instance: CodeMirror, event: Event)                                                         | 粘贴
"dragstart" (instance: CodeMirror, event: Event)                                                     | -
"dragenter" (instance: CodeMirror, event: Event)                                                     | -
"dragover" (instance: CodeMirror, event: Event)                                                      | -
"dragleave" (instance: CodeMirror, event: Event)                                                     | -
"drop" (instance: CodeMirror, event: Event)                                                          | -

- Document对象(instances of CodeMirror.Doc) 触发的事件

事件                                                                       | more
------------------------------------------------------------------------ | ---------------------
"change" (doc: CodeMirror.Doc, changeObj: object)                        | document有变化时触发
"beforeChange" (doc: CodeMirror.Doc, change: object)                     | document有变化之前触发
"cursorActivity" (doc: CodeMirror.Doc)                                   | document中的光标或者选择改变时触发
"beforeSelectionChange" (doc: CodeMirror.Doc, selection: {head, anchor}) | 在选择的内容改变前触发

- 行句柄(Line handles，getLineHandle返回值)支持的事件

事件                                             | more
---------------------------------------------- | ------------------
"delete" ()                                    | 行对象被删除的时候触发
"change" (line: LineHandle, changeObj: object) | 当行对象对应当文本发生改变当时候触发

- Marked range handles (CodeMirror.TextMarker)支持的事件

事件                                         | more
------------------------------------------ | ----------------------------
"beforeCursorEnter" ()                     | 光标进入标记范围当时候触发
"clear" (from: {line, ch}, to: {line, ch}) | 标记范围被清除时触发（通过删除相应当文本不会触发该事件）
"hide" ()                                  | 标记的最后一部分通过编辑操作被移除的时候触发
"unhide" ()                                | 通过编辑操作被移除的标记被撤销操作恢复的时候触发

- Line widgets (CodeMirror.LineWidget)支持的事件

事件          | more
----------- | -----------------------
"redraw" () | 当编辑器重新添加widget到DOM的时候触发

## Commands

command             | 快接健                                                          | more
------------------- | ------------------------------------------------------------ | -----------------------------
selectAll           | Ctrl-A (PC), Cmd-A (Mac)                                     | 选择所有文本内容
singleSelection     | Esc                                                          | 有多个选择范围的时候，取消除了当前选择范围的其余所有范围
killLine            | Ctrl-K (Mac)                                                 | 删除当前行光标后面的内容
deleteLine          | Ctrl-D (PC), Cmd-D (Mac)                                     | 删除整行
delLineLeft         | Cmd-Delete (Mac）                                             | 删除当前行光标前面的内容
delWrappedLineLeft  | -                                                            | -
delWrappedLineRight | -                                                            | -
undo                | Ctrl-Z (PC), Cmd-Z (Mac)                                     | 撤销
redo                | Ctrl-Y (PC), Shift-Cmd-Z (Mac), Cmd-Y (Mac)                  | 重做
undoSelection       | Ctrl-U (PC), Cmd-U (Mac)                                     | 撤销（包括选择范围的变化）
redoSelection       | Alt-U (PC), Shift-Cmd-U (Mac)                                | 重做（包括选择范围的变化）
goDocStart          | Ctrl-Home (PC), Cmd-Up (Mac), Cmd-Home (Mac)                 | 移动光标到文档开头
goDocEnd            | Ctrl-End (PC), Cmd-End (Mac), Cmd-Down (Mac)                 | 移动光标到文档结尾
goLineStart         | Alt-Left (PC), Ctrl-A (Mac)                                  | 光标移动到当前行开头
goLineStartSmart    | Home                                                         |
goLineEnd           | Alt-Right (PC), Ctrl-E (Mac)                                 | 光标移动到当前行结尾
goLineRight         | Cmd-Right (Mac)                                              | -
goLineLeft          | Cmd-Left (Mac)                                               | -
goLineLeftSmart     | -                                                            | -
goLineUp            | Up, Ctrl-P (Mac)                                             | 光标向上移动一行
goLineDown          | Down, Ctrl-N (Mac)                                           | 光标向下移动一行
goPageUp            | PageUp, Shift-Ctrl-V (Mac)                                   | 向上滑动一屏（光标相对视图位置不变）
goPageDown          | PageDown, Ctrl-V (Mac)                                       | 向下滑动一屏（光标相对视图位置不变）
goCharLeft          | Left, Ctrl-B (Mac)                                           | 光标向左移动一个字符
goCharRight         | Right, Ctrl-F (Mac)                                          | 光标向右移动一个字符
goColumnLeft        | -                                                            | -
goColumnRight       | -                                                            | -
goWordLeft          | Alt-B (Mac)                                                  | 光标移动到当前单词的开头
goWordRight         | Alt-F (Mac)                                                  | 光标移动到当前单词的结尾
goGroupLeft         | Ctrl-Left (PC), Alt-Left (Mac)                               | -
goGroupRight        | Ctrl-Right (PC), Alt-Right (Mac)                             | -
delCharBefore       | -                                                            | -
delCharAfter        | Delete, Ctrl-D (Mac)                                         | 删除一个光标后面的字符
delWordBefore       | Alt-Backspace (Mac）                                          | 删除当前单词位于光标前面的部分
delWordAfter        | Alt-D (Mac)                                                  | 删除当前单词位于光标后面的部分
delGroupBefore      | Ctrl-Backspace (PC), Alt-Backspace (Mac)                     | -
delGroupAfter       | Ctrl-Delete (PC), Ctrl-Alt-Backspace (Mac), Alt-Delete (Mac) | -
indentAuto          | Shift-Tab                                                    | 自动缩进当前行或选择
indentMore          | Ctrl-] (PC), Cmd-] (Mac)                                     | 用一个缩进单元缩进当前行或选定内容
indentLess          | Ctrl-[ (PC), Cmd-[ (Mac)                                     | 取消缩进当前行或选择一个缩进单元
insertTab           | -                                                            | -
insertSoftTab       | -                                                            | -
defaultTab          | Tab                                                          | 如果有选定内容，则缩进一个缩进单元，否则插入一个tab符号
transposeChars      | Ctrl-T (Mac)                                                 | 互换光标前后的字符
newlineAndIndent    | Enter                                                        | 插入新的一行，新的一行自动缩进
toggleOverwrite     | -                                                            | -
openLine            | -                                                            | -
save                | Ctrl-S (PC), Cmd-S (Mac)                                     | Not defined
find                | Ctrl-F (PC), Cmd-F (Mac)                                     | -
findNext            | Ctrl-G (PC), Cmd-G (Mac)                                     | -
findPrev            | Shift-Ctrl-G (PC), Shift-Cmd-G (Mac)                         | -
replace             | Shift-Ctrl-F (PC), Cmd-Alt-F (Mac)                           | -
replaceAll          | Shift-Ctrl-R (PC), Shift-Cmd-Alt-F (Mac)                     | Not defined

## 定制样式

class                                                     | more
--------------------------------------------------------- | ------------
CodeMirror                                                | 编辑器最外层
CodeMirror-focused                                        | 获取焦点之后的编辑器
CodeMirror-gutters                                        | 沟槽区域
CodeMirror-linenumbers                                    | 行号区域
CodeMirror-linenumber                                     | 单个行号所占
CodeMirror-lines                                          | 编辑器已有内容的文本区域
CodeMirror-cursor                                         | 光标
CodeMirror-selected                                       | 选择的内容
CodeMirror-matchingbracket, CodeMirror-nonmatchingbracket | 匹配内容的样式

## 插件列表

插件                             | more
------------------------------ | --------------------------------------------------------
dialog/dialog.js               | Provides a very simple way to query users for text input
search/searchcursor.js         | 查找替换功能
search/search.js               | 实现搜索命令
search/jump-to-line.js         | 实现跳转到指定行的功能（alt+g）
search/matchesonscrollbar.js   | 匹配？
edit/matchbrackets.js          | 当光标靠近匹配括号时，高亮相应的匹配括号
edit/closebrackets.js          | 自动闭合括号引号等
edit/matchtags.js              | 高亮光标附近的标记标签
edit/trailingspace.js          | 拉伸本行末尾的空白？
edit/closetag.js               | 自动闭合标签
edit/continuelist.js           | markdown新起一行的时候自动加入列表的前导字符
comment/comment.js             | 注释与解除注释
fold/foldcode.js               | 代码折叠
fold/foldgutter.js             | 有标记的折叠沟槽
runmode/runmode.js             | 在不打开编辑器的情况下运行一个CodeMirror mode
runmode/colorize.js            |
mode/overlay.js                | -
mode/multiplex.js              | -
hint/show-hint.js              | -
hint/javascript-hint.js        | -
hint/xml-hint.js               | -
hint/html-hint.js              | -
hint/css-hint.js               | -
hint/anyword-hint.js           | -
hint/sql-hint.js               | -
search/match-highlighter.js    | -
lint/lint.js                   | -
selection/mark-selection.js    | -
selection/active-line.js       | -
selection/selection-pointer.js | -
mode/loadmode.js               | -
mode/meta.js                   | -
comment/continuecomment.js     | -
display/placeholder.js         | 没有内容时的占位符
display/fullscreen.js          | 全屏
display/autorefresh.js         | 当编辑器在初始化之后变为可见的时候，避免refresh造成内容不同步
scroll/simplescrollbars.js     | 改变滚动条样式
scroll/annotatescrollbar.js    | -
display/rulers.js              | 添加垂直标尺
display/panel.js               | -
wrap/hardwrap.js               | -
merge/merge.js                 | -
tern/tern.js                   | -

## 写CodeMirror Modes（略）

## VIM Mode API（略）
