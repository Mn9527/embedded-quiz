// 嵌入式系统选择题题库（已验证正确答案）
const QUESTIONS = [
  {
    "id": 2,
    "question": "从层次结构来看，嵌入式系统包括",
    "options": {
      "A": "硬件层",
      "B": "板级支持包",
      "C": "实时操作系统和应用软件",
      "D": "以上都是"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 4,
    "question": "下列不是嵌入式系统的特点的是",
    "options": {
      "A": "嵌入式系统需要专用开发工具和方法进行设计",
      "B": "嵌入式系统使用的操作系统不具有实时约束",
      "C": "嵌入式系统是技术密集、资金密集、高度分散、不断创新的系统",
      "D": "嵌入式系统通常是面向特定任务的，是专用的计算机系统"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 5,
    "question": "与个人计算机（PC）相比，嵌入式系统具有许多不同的特点。下面不属于嵌入式系统特点的是",
    "options": {
      "A": "嵌入式系统与具体应用紧密结合，具有很强的专用性",
      "B": "嵌入式系统通常包含在非计算机设备（系统）中，具有隐蔽性",
      "C": "嵌入式系统的软硬件资源往往受到严格的限制",
      "D": "嵌入式系统性能较低，价格也比较便宜"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 6,
    "question": "与个人计算机（PC）相比，嵌入式系统具有许多不同的特点。下面不属于嵌入式系统特点的是",
    "options": {
      "A": "嵌入式系统一般采用实时操作系统",
      "B": "嵌入式系统得到多种微处理体系的支持",
      "C": "嵌入式系统软件故障带来的后果比PC机大得多",
      "D": "嵌入式系统安装的内存比PC多"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 7,
    "question": "下列系统属于实时系统的是",
    "options": {
      "A": "电子邮件系统",
      "B": "电子书阅读器",
      "C": "微信",
      "D": "飞行控制系统"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 8,
    "question": "下列不是实时操作系统的是",
    "options": {
      "A": "VxWorks",
      "B": "RTAI",
      "C": "RTLinux",
      "D": "Windows7"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 9,
    "question": "关于硬件抽象层，下面的描述中错误的是",
    "options": {
      "A": "硬件抽象层是嵌入式硬件电路板的最基本软件",
      "B": "硬件抽象层包含嵌入式软件中直接访问底层硬件的例程集合",
      "C": "HAL的函数是移植操作系统的基础",
      "D": "硬件抽象层是操作系统内核的重要组成部分"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 10,
    "question": "嵌入式系统有硬件和软件部分构成，以下不属于嵌入式系统软件的是",
    "options": {
      "A": "系统软件",
      "B": "驱动",
      "C": "FPGA编程软件",
      "D": "嵌入式中间件"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 11,
    "question": "以下不是嵌入式微处理器特点的是",
    "options": {
      "A": "对实时多任务有很强的支持能力",
      "B": "能满足大量数据运算要求",
      "C": "具有很强的存储区保护功能",
      "D": "可扩展的处理器结构"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 12,
    "question": "关于嵌入式微控制器，以下说法错误的是",
    "options": {
      "A": "嵌入式微控制器的典型代表是Intel803868",
      "B": "嵌入式微控制器内部集成各种必要功能和外设",
      "C": "单片化，体积大大减小，从而使功耗和成本下降、可靠性提高",
      "D": "微控制器是目前嵌入式系统工业的主流"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 13,
    "question": "关于嵌入式DSP处理器，以下说法错误的是",
    "options": {
      "A": "DSP在系统结构和指令算法方面进行了特殊设计",
      "B": "DSP处理器是专门用于信号处理方面的处理器",
      "C": "在数字滤波、FFT、谱分析等各种仪器上DSP获得了大规模的应用",
      "D": "目前最为广泛应用的嵌入式DSP处理器是STM32F103系列处理器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 14,
    "question": "关于嵌入式微处理器MPU，以下说法错误的是",
    "options": {
      "A": "MPU嵌入式微处理器是由通用计算机中的CPU演变而来的",
      "B": "MPU只保留和嵌入式应用紧密相关的功能硬件，去除其他的冗余功能部分",
      "C": "用最低的功耗和资源实现大量的特殊高性能计算要求",
      "D": "具有体积小、重量轻、成本低、可靠性高的优点"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 15,
    "question": "以下不是国产CPU的是",
    "options": {
      "A": "沁恒ARM",
      "B": "意法ARM",
      "C": "极海ARM",
      "D": "海思ARM"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 16,
    "question": "嵌入式软件具有通用软件的一般特性，但不具备以下特点",
    "options": {
      "A": "规模较大",
      "B": "软件固化存储",
      "C": "开发难度大",
      "D": "高实时性和可靠性要求"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 17,
    "question": "嵌入式系统是对（ ）严格要求的专用计算机系统",
    "options": {
      "A": "功能、可靠性、成本、体积、功耗",
      "B": "性能、可靠性、成本、体积、功耗",
      "C": "功能、安全性、成本、体积、功耗",
      "D": "性能、安全性、成本、体积、功耗"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 18,
    "question": "下列哪种设备不属于嵌入式系统产品",
    "options": {
      "A": "PDA",
      "B": "ATM 取款机",
      "C": "个人计算机",
      "D": "机顶盒"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 19,
    "question": "嵌入式软件开发与通用软件开发对比，增加了以下哪个环节",
    "options": {
      "A": "代码编写",
      "B": "代码调试",
      "C": "代码固化",
      "D": "软件测试"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 20,
    "question": "在嵌入式系统的存储结构中，存取速度最快的是",
    "options": {
      "A": "内存",
      "B": "Cache",
      "C": "寄存器组",
      "D": "Flash"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 22,
    "question": "存储一个32位数0x2168465到2000H～2003H四个字节单元中，若以小端模式存储，则2000H存储单元的内容为",
    "options": {
      "A": "0x21",
      "B": "0x68",
      "C": "0x65",
      "D": "0x02"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 25,
    "question": "ARM Cortex-M3 处理器有两种工作状态包括",
    "options": {
      "A": "Thumb 状态和运行状态",
      "B": "运行状态和调试状态",
      "C": "Thumb 状态和调试状态",
      "D": "运行状态和休眠状态"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 26,
    "question": "下列描述不属于RISC计算机的特点的是",
    "options": {
      "A": "流水线每周期前进一步",
      "B": "更多通用寄存器",
      "C": "指令长度不固定，执行需要多个周期",
      "D": "独立的Load和Store指令完成数据在寄存器和外部存储器之间的传输"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 28,
    "question": "嵌入式系统使用的片上系统英文缩写名为SoC，下面关于SoC叙述中错误的是",
    "options": {
      "A": "SoC也称为系统级芯片，它是电子设计自动化水平的提高和集成电路制造技术飞速发展的产物",
      "B": "SoC芯片中既包含数字电路，也可以包含模拟电路，甚至还能包含数字/模拟混合电路和射频电路",
      "C": "SoC将嵌入式系统的几乎全部功能都集成在一块芯片中，单个芯片就能实现数据的采集、转换、存储、处理和I/O等多种功能",
      "D": "SoC的设计制造难度很大，目前还没有得到广泛使用"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 29,
    "question": "以下关于嵌入式处理器的说法正确的是",
    "options": {
      "A": "RISC是复杂指令集结构计算机",
      "B": "哈佛结构是程序与数据统一的存储结构",
      "C": "ARM处理器的指令编码全部为32位",
      "D": "ARMCortex-M是面向控制的嵌入式Cortex处理"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 30,
    "question": "以下关于ARM处理器说法正确的是",
    "options": {
      "A": "小端格式是指数据的高字节存储在高字节地址中，低字节数据存放在低字节地址中",
      "B": "ARM处理器支持8位、16位、24位和32位数据处理",
      "C": "MPU为ARM处理器的存储器管理单元",
      "D": "MMU为ARM处理器的存储器保护单元"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 31,
    "question": "关于ARM处理器的命名，以下说法错误的是",
    "options": {
      "A": "ARM11之前的命名中TDMI中的T的含义是Thumb，即支持高密度16位Thumb指令集",
      "B": "ARM11之后，采用ARMCortex来命名",
      "C": "ARM Cortex-R为高端应用型Cortex处理器",
      "D": "ARM Cortex-M系列处理器内部没有MMU部件"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 32,
    "question": "Contex–M3处理器的寄存器Ｒ14代表",
    "options": {
      "A": "通用寄存器",
      "B": "链接寄存器",
      "C": "程序计数器",
      "D": "程序状态寄存器"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 33,
    "question": "以下关于Cortex–M3处理器的说法错误的是",
    "options": {
      "A": "Cortex-M3处理器内核采用ARMv8-M框架",
      "B": "采用Thumb-2指令集架构(ISA)的子集",
      "C": "采用哈佛处理器架构",
      "D": "采用三级流水线+分支预测"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 34,
    "question": "以下关于Contex–M3处理器的说法错误的是",
    "options": {
      "A": "具有Thumb状态和ARM状态",
      "B": "具有处理模式和线程模式",
      "C": "具有可中断-继续的LDM/STM、PUSH/POP指令",
      "D": "可实现ISR的低延迟进入和退出"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 35,
    "question": "关于嵌套向量中断控制器(NVIC)的说法不正确的是",
    "options": {
      "A": "NVIC是ARM Cortex-M3处理器中一个完整的部分",
      "B": "ARM Cortex-M3的所有中断机制都由NVIC实现",
      "C": "NVIC可以被高度配置，为处理器提供出色的中断处理能力",
      "D": "NVIC支持优先级分组，可分为抢占优先级和主优先级"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 36,
    "question": "Contex–M3处理器的寄存器Ｒ15代表",
    "options": {
      "A": "通用寄存器",
      "B": "链接寄存器",
      "C": "程序计数器",
      "D": "程序状态寄存器"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 37,
    "question": "Contex–M3处理器的寄存器Ｒ12代表",
    "options": {
      "A": "通用寄存器",
      "B": "链接寄存器",
      "C": "程序计数器",
      "D": "程序状态寄存器"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 38,
    "question": "在STM32内存中0x20000000的第2位(位从0算起)的位带别名地址是",
    "options": {
      "A": "0x20000002",
      "B": "0x22000002",
      "C": "0x22000008",
      "D": "0x20000008"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 39,
    "question": "在STM32内存中0x20000001的第2位(位从0算起)的位带别名地址是",
    "options": {
      "A": "0x20000012",
      "B": "0x22000012",
      "C": "0x22000028",
      "D": "0x20000028"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 40,
    "question": "关于嵌入式处理器，下列描述正确的是",
    "options": {
      "A": "嵌入式处理器和通用处理器几乎没有差别",
      "B": "嵌入式处理器将通用CPU中许多由板卡完成的任务集成到芯片内部",
      "C": "嵌入式处理器就是SoC",
      "D": "嵌入式处理器就是DSP"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 41,
    "question": "以下叙述中，不符合 RISC 指令系统特点的是",
    "options": {
      "A": "指令长度固定，指令种类少",
      "B": "寻址方式种类丰富，指令功能尽量增强",
      "C": "设置大量通用寄存器，访问存储器指令简单",
      "D": "选取使用频率较高的一些简单指令"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 42,
    "question": "下面哪一类嵌入式处理器最适合于用于工业控制",
    "options": {
      "A": "嵌入式微处理器",
      "B": "嵌入式微控制器",
      "C": "DSP",
      "D": "以上都不合适"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 43,
    "question": "对一个字，存储时先存放低字节，再存放高字节（即低字节占低地址，高字节占高地址）。则该种存储格式为",
    "options": {
      "A": "小端模式",
      "B": "大端模式",
      "C": "低端模式",
      "D": "高端模式"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 44,
    "question": "嵌入式系统开发中，要想准确地定位软件和硬件中出现的错误，必须借助多种硬件和软件开发调试工具。下面所列出的不属于嵌入式系统开发调试工具的是",
    "options": {
      "A": "在线仿真器",
      "B": "JTAG适配器",
      "C": "示波器",
      "D": "传感器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 45,
    "question": "以下是交叉编译的是：",
    "options": {
      "A": "在Windows平台上，用 KEIL集成开发工具，编译出针对 ARM CPU 的可执行代码。",
      "B": "在Windows平台上，用 VSCode集成开发工具，编译出的可执行代码。",
      "C": "在LINUX平台上，用GCC工具，编译出的可执行代码。",
      "D": "在Windows平台上，用 GCC工具，编译出的可执行代码。"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 46,
    "question": "以下是交叉编译的是：",
    "options": {
      "A": "在Windows平台上，用gcc，编译出针对Linux平台的可执行代码。",
      "B": "在Windows平台上，用arm-elf-gcc，编译出针对Linux ARM平台的可执行代码。",
      "C": "在LINUX平台上，用gcc，编译出针对Linux平台的可执行代码。",
      "D": "在Linux ARM平台上，编译出针对Linux ARM平台的可执行代码。"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 47,
    "question": "以下是交叉开发软件的是：",
    "options": {
      "A": "IAR EWARM",
      "B": "Keil ARM-MDK",
      "C": "ARM Developer Suite",
      "D": "以上都是"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 48,
    "question": "下列关于JTAG的说法，错误的是",
    "options": {
      "A": "边界扫描技术的基本思想是在靠近芯片的输入输出管脚上增加一个移位寄存器单元",
      "B": "JTAG的这些移位寄存器单元都分布在芯片的边界上(周围)，所以被称为边界扫描寄存器",
      "C": "通过边界扫描寄存器单元，可以实现对芯片输入输出信号的观察和控制",
      "D": "边界扫描链可以串行地输入和输出，因此任何状态下都可以观察和控制芯片"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 49,
    "question": "下列不属于JTAG的TAP信号接口的是",
    "options": {
      "A": "Test Data Require (TDR)",
      "B": "Test Mode Selection Input (TMS)",
      "C": "Test Reset Input (TRST)",
      "D": "Test Clock Input (TCK)"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 50,
    "question": "STM32的IO口可以由软件配置成8种模式，以下哪种模式不属于这8种",
    "options": {
      "A": "推挽输出",
      "B": "开漏复用功能",
      "C": "浮空输出",
      "D": "浮空输入"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 51,
    "question": "STM32的IO口可以由软件配置成8种模式，以下哪种模式不属于这8种",
    "options": {
      "A": "上拉输入",
      "B": "下拉输入",
      "C": "开漏输入",
      "D": "开漏输出"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 52,
    "question": "STM32的IO口可以由软件配置成8种模式，以下哪种模式不属于这8种",
    "options": {
      "A": "上拉复用",
      "B": "开漏复用",
      "C": "推挽复用",
      "D": "开漏输出"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 53,
    "question": "下列关于GPIO描述正确的是",
    "options": {
      "A": "GPIO可以用于模拟Flash的接口，对Flash存储器进行读写操作",
      "B": "GPIO通常用于连接外部的SDRAM，进行高速传输",
      "C": "CPU可以通过编程，决定GPIO是输入、输出的通信功能，但不能是双向的",
      "D": "GPIO可以由CPU编程决定方向，但不能查询其状态"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 54,
    "question": "下列关于GPIO描述错误的是",
    "options": {
      "A": "STM32F103VBT6一共有5组输入/输出端口",
      "B": "每个GPIO端口可通过的最大电流是25mA",
      "C": "所有端口都3.3V与5V兼容",
      "D": "STM32F103VBT6每组IO口有16个IO端口"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 55,
    "question": "下列不是GPIO特点的是",
    "options": {
      "A": "通用输入/输出",
      "B": "软件重新映射IO复用功能",
      "C": "部分端口都有外部中断能力",
      "D": "单独的位设置或位清除"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 56,
    "question": "每组GPIO端口的寄存器包括",
    "options": {
      "A": "GPIOx_CRL，GPIOx_CRH",
      "B": "GPIOx_IDR，GPIOx_ODR",
      "C": "GPIOx_BRR，GPIOx_BSRR",
      "D": "以上都是"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 57,
    "question": "每组GPIO端口的寄存器不包括",
    "options": {
      "A": "32位配置寄存器GPIOx_CRL ，GPIOx_CRH",
      "B": "32位数据寄存器GPIOx_IDR和GPIOx_ODR",
      "C": "16位复位寄存器GPIOx_BRR",
      "D": "32位中断屏蔽寄存器GPIOx_IMR"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 58,
    "question": "对于操作GPIOC-&gt;ODR = 1&lt;&lt;11，以下说明正确的是：",
    "options": {
      "A": "GPIOC的输出设置为0x800",
      "B": "GPIOC的输出设置为0x1",
      "C": "GPIOC的输出设置为0x11",
      "D": "GPIOC的输出设置为0x10000000000"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 59,
    "question": "对于操作GPIOC-&gt;CRH &amp;= 0xFFF00FFF，以下说法正确的是：",
    "options": {
      "A": "设置GPIOC-&gt;CRH的第3-4位为0，其他位置1",
      "B": "设置GPIOC-&gt;CRH的第3-4位为0，其他位不变",
      "C": "设置GPIOC-&gt;CRH的第12-19位为0，其他位不变",
      "D": "设置GPIOC-&gt;CRH的第12-19位为0，其他位置1"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 60,
    "question": "对于操作GPIOC-&gt;CRH = 0xFFF00FFF，以下说法正确的是：",
    "options": {
      "A": "设置GPIOC-&gt;CRH的第3-4位为0，其他位置1",
      "B": "设置GPIOC-&gt;CRH的第3-4位为0，其他位不变",
      "C": "设置GPIOC-&gt;CRH的第12-19位为0，其他位不变",
      "D": "设置GPIOC-&gt;CRH的第12-19位为0，其他位置1"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 61,
    "question": "对于操作GPIOC-&gt;CRH |= 0x00038000;以下说法正确的是：",
    "options": {
      "A": "设置GPIOC-&gt;CRH的第15-17位为1，其他位为0",
      "B": "设置GPIOC-&gt;CRH的第15-17位为1，其他位不变",
      "C": "设置GPIOC-&gt;CRH的第15-17位为0，其他位为1",
      "D": "设置GPIOC-&gt;CRH的第15-17位为0，其他位不变"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 62,
    "question": "对于操作GPIOC-&gt;CRH = 0x00038000;以下说法正确的是：",
    "options": {
      "A": "设置GPIOC-&gt;CRH的第15-17位为1，其他位为0",
      "B": "设置GPIOC-&gt;CRH的第15-17位为1，其他位不变",
      "C": "设置GPIOC-&gt;CRH的第15-17位为0，其他位为1",
      "D": "设置GPIOC-&gt;CRH的第15-17位为0，其他位不变"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 63,
    "question": "STM32F103的端口输出不包含的模式是：",
    "options": {
      "A": "输出模式，最大速度1MHz",
      "B": "输出模式，最大速度2MHz",
      "C": "输出模式，最大速度10MHz",
      "D": "输出模式，最大速度50MHz"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 64,
    "question": "STM32端口编程主要步骤不包括",
    "options": {
      "A": "使能端口IO时钟",
      "B": "复位端口IO",
      "C": "初始化IO端口参数",
      "D": "操作IO口"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 65,
    "question": "共阴极八段数码管显示0的编码是",
    "options": {
      "A": "0x00",
      "B": "0x3f",
      "C": "0x05",
      "D": "0x39"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 66,
    "question": "共阴极八段数码管显示1的编码是",
    "options": {
      "A": "0x01",
      "B": "0x10",
      "C": "0x05",
      "D": "0x06"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 67,
    "question": "按键去抖动方法可以是",
    "options": {
      "A": "延时1毫秒",
      "B": "延时10毫秒",
      "C": "延时1秒",
      "D": "延时10秒"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 68,
    "question": "关于STM32中断说法不正确的是",
    "options": {
      "A": "STM32有76个中断",
      "B": "STM32有16个内核中断",
      "C": "STM32有60个可屏蔽中断",
      "D": "STM32具有256级可编程的中断优先级"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 69,
    "question": "关于STM32的中断优先级说法正确的是",
    "options": {
      "A": "抢占优先级的级别比响应优先级高",
      "B": "抢占优先级的级别比响应优先级低",
      "C": "抢占优先级可以实现中断嵌套",
      "D": "响应优先级可以实现中断嵌套"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 70,
    "question": "中断使能寄存器组ISER",
    "options": {
      "A": "使能某个中断，必须设置相应的ISER位为1",
      "B": "使能某个中断，必须设置相应的ISER位为1，其他位为0",
      "C": "使能某个中断，必须设置相应的ISER位为0",
      "D": "使能某个中断，必须设置相应的ISER位为0，其他位为1"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 71,
    "question": "中断除能寄存器组ICER",
    "options": {
      "A": "写0有效，写1无效",
      "B": "写1有效，写0无效",
      "C": "写1、写0都有效",
      "D": "写1、写0都无效"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 72,
    "question": "关于中断嵌套说法正确的是",
    "options": {
      "A": "只要响应优先级不一样就有可能发生中断嵌套",
      "B": "只要抢占式优先级不一样就有可能发生中断嵌套",
      "C": "只有抢占式优先级和响应优先级都不一才有可能发生中断嵌套",
      "D": "以上说法都不对"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 73,
    "question": "下列关于中断寄存器的说法，错误的是",
    "options": {
      "A": "中断挂起控制寄存器组ISPR，通过置1，可以将正在进行的中断挂起",
      "B": "中断解挂控制寄存器组ICPR，通过设置1，可以将挂起的中断解挂",
      "C": "中断激活标志位寄存器组IABR，通过置1，可以激活对应的中断",
      "D": "中断除能寄存器组ICER，通过置1，可以清除某个中断的使能"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 74,
    "question": "外部中断/事件控制器EXTI",
    "options": {
      "A": "每个中断/事件线都对应有一个边沿检测器",
      "B": "管理了控制器的16个中断/事件线",
      "C": "只有GPIOA的16个管脚可以映射到EXTI上",
      "D": "只有GPIOA的16个管脚不可以映射到EXTI上"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 77,
    "question": "RS485有（ ）根数据信号线",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 79,
    "question": "RS232通信的传输方向为",
    "options": {
      "A": "单工",
      "B": "半双工",
      "C": "全双工",
      "D": "以上都不是"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 80,
    "question": "关于传输速率的说法正确的是",
    "options": {
      "A": "比特率是每秒钟传输二进制代码的位数",
      "B": "波特率是每秒钟传输二进制代码的位数",
      "C": "波特率和比特率总是相同的",
      "D": "比特率表示每秒钟调制信号变化的次数"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 81,
    "question": "关于传输速率的说法正确的是",
    "options": {
      "A": "波特率表示每秒钟调制信号变化的次数",
      "B": "波特率是每秒钟传输二进制代码的位数",
      "C": "波特率和比特率总是相同的",
      "D": "比特率表示每秒钟调制信号变化的次数"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 82,
    "question": "STM32中串口异步通信需要定义的参数有",
    "options": {
      "A": "起始位、数据位（8位或者9位）",
      "B": "停止位（1，1.5，2位）",
      "C": "波特率",
      "D": "以上都需要"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 83,
    "question": "STM32 串口发送字符串，但是在调试助手上面接收到的字符却是一串乱码，可能的原因是",
    "options": {
      "A": "串口发送器坏了",
      "B": "串口接收器坏了",
      "C": "通信双方波特率不相同",
      "D": "通信双方设备不相同"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 84,
    "question": "A/D转换器功能不包括：",
    "options": {
      "A": "采样",
      "B": "保持",
      "C": "比较",
      "D": "编码"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 85,
    "question": "A/D转换器功能不包括：",
    "options": {
      "A": "编码",
      "B": "采样",
      "C": "量化",
      "D": "保存"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 86,
    "question": "A/D转换器类型包括",
    "options": {
      "A": "积分型",
      "B": "逐次比较型",
      "C": "Σ-Δ型",
      "D": "以上都是"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 87,
    "question": "采样定理指出，采样频率大于或等于有效信号最高频率的几倍",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 88,
    "question": "以下不属于A/D转换器类型的是：",
    "options": {
      "A": "逐次比较型",
      "B": "电容阵列逐次比较型",
      "C": "Σ-Ω型",
      "D": "压频变换型"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 89,
    "question": "在数字音频信息数字化过程中，正确的处理顺序是",
    "options": {
      "A": "量化、取样、编码",
      "B": "取样、编码、量化",
      "C": "取样、量化、编码",
      "D": "编码、取样、量化"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 90,
    "question": "以下对STM32的ADC特征的描述，错误的是：",
    "options": {
      "A": "16位分辨率",
      "B": "多达18个通道，可测量16个外部和2个内部信号源",
      "C": "ADC的输入时钟不得超过14MHz",
      "D": "单次和连续转换模式"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 91,
    "question": "关于ADC控制寄存器1(ADC_CR1) 以下描述正确的是：",
    "options": {
      "A": "该位由硬件设置和清除，用于开启或关闭扫描模式",
      "B": "该位为1：关闭扫描模式",
      "C": "该位为0：关闭扫描模式",
      "D": "以上全对"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 92,
    "question": "下面关于ADC使用步骤，不需要的步骤是",
    "options": {
      "A": "开启GPIO端口时钟，设置端口为模拟输入",
      "B": "开启端口复用功能",
      "C": "使能ADC时钟，并设置分频因子",
      "D": "设置ADC的工作模式"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 93,
    "question": "嵌入式(实时)操作系统的重要指标不包括",
    "options": {
      "A": "实时性(中断响应时间、任务切换时间等)",
      "B": "成本(经济、可靠)",
      "C": "尺寸(可裁剪性 )",
      "D": "可扩展性(内核、中间件)"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 95,
    "question": "以下不是uC/OS的性能特点的是",
    "options": {
      "A": "任务栈",
      "B": "可确定性",
      "C": "多线程",
      "D": "多任务"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 96,
    "question": "以下不是uC/OS的性能特点的是",
    "options": {
      "A": "公开源代码",
      "B": "中断管理",
      "C": "系统服务",
      "D": "虚拟内存"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 97,
    "question": "以下不是uC/OS-II提供的系统服务的是",
    "options": {
      "A": "事件标志",
      "B": "消息队列",
      "C": "内存管理",
      "D": "网络协议"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 98,
    "question": "以下不是uC/OS-II提供的系统服务的是",
    "options": {
      "A": "信号量",
      "B": "时钟管理",
      "C": "设备管理",
      "D": "任务管理"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 99,
    "question": "以下不是uC/OS-II任务状态的是",
    "options": {
      "A": "等待状态",
      "B": "删除状态",
      "C": "中断服务状态",
      "D": "睡眠状态"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 101,
    "question": "让uC/OS-II任务进入等待状态的调用是",
    "options": {
      "A": "OSMutexPend()",
      "B": "OSTaskIdle()",
      "C": "OSTimeDlyHMSM()",
      "D": "OSSemPend()"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 102,
    "question": "移植uC/OS-II无须满足的条件条件是",
    "options": {
      "A": "处理器的C编译器能产生可重入代码",
      "B": "处理器支持中断并且能产生定时中断",
      "C": "用C语言可打开和关闭中断",
      "D": "处理器支持MMU"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 103,
    "question": "0x15 &amp; 0x1A 的运算结果是",
    "options": {
      "A": "0x15",
      "B": "0x1A",
      "C": "0x1F",
      "D": "0x10"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 104,
    "question": "0x15 | 0x1A 的运算结果是",
    "options": {
      "A": "0x15",
      "B": "0x1A",
      "C": "0x1F",
      "D": "0x10"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 105,
    "question": "0x25 &amp; 0x4A 的运算结果是",
    "options": {
      "A": "0x25",
      "B": "0x4A",
      "C": "0x6F",
      "D": "0x00"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 106,
    "question": "0x25 | 0x4A 的运算结果是",
    "options": {
      "A": "0x25",
      "B": "0x4A",
      "C": "0x6F",
      "D": "0x00"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 107,
    "question": "RTOS的含义是",
    "options": {
      "A": "片上系统",
      "B": "先进精简指令集机器",
      "C": "存储器管理单元",
      "D": "实时操作系统"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 108,
    "question": "下面关于嵌入式系统逻辑组成的叙述中，错误的是",
    "options": {
      "A": "嵌入式系统由硬件和软件两部分组成",
      "B": "嵌入式系统硬件的主体是中央处理器(CPU)和存储器",
      "C": "嵌入式系统的CPU比通用计算机简单得多，它们都是8位字长的处理器",
      "D": "嵌入式系统通过输入/输出(I/O)接口和输入/输出设备与外部世界进行联系"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 109,
    "question": "片上系统（SoC）是目前广泛使用的一种嵌入式处理芯片，下面有关叙述中错误的是",
    "options": {
      "A": "SoC是电子设计自动化水平提高和大规模集成电路制造技术发展的成果",
      "B": "SoC芯片既包含处理器又包含存储器，既有数字电路也有模拟电路，单个芯片就能实现数据的采集、转换、存储、处理和I/O等多种功能",
      "C": "SoC已成为集成电路设计的发展趋势， 32位嵌入式处理芯片大多是SoC",
      "D": "智能手机已经广泛采用SoC，平板电脑大多还使用传统的Intel处理器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 110,
    "question": "下面与嵌入式处理器有关的叙述中，错误的是",
    "options": {
      "A": "嵌入式处理器本身就是一个嵌入式最小硬件系统",
      "B": "嵌入式处理器只有在供电的情况下才有可能正常工作",
      "C": "嵌入式处理器工作时需要时钟信号",
      "D": "大多数基于ARM处理器核的嵌入式处理器芯片都有调试接口"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 111,
    "question": "下列产品中不属于嵌入式系统的是",
    "options": {
      "A": "有线电视机顶盒",
      "B": "服务器",
      "C": "电饭煲",
      "D": "路由器"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 112,
    "question": "下面关于哈佛结构描述正确的是",
    "options": {
      "A": "程序存储空间与数据存储空间分离",
      "B": "存储空间与IO空间分离",
      "C": "程序存储空间与数据存储空间合并",
      "D": "存储空间与IO空间合并"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 113,
    "question": "以下哪个不是嵌入式系统设计的主要目标",
    "options": {
      "A": "低成本",
      "B": "低功耗",
      "C": "实时要求高",
      "D": "高性能"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 114,
    "question": "下面关于冯·诺依曼结构描述正确的是",
    "options": {
      "A": "程序存储空间与数据存储空间分离",
      "B": "存储空间与 IO 空间分离",
      "C": "程序存储空间与数据存储空间合并",
      "D": "存储空间与 IO 空间合并"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 115,
    "question": "下面哪一类嵌入式处理器最适合于用于工业控制",
    "options": {
      "A": "嵌入式微处理器",
      "B": "嵌入式微控制器",
      "C": "嵌入式DSP处理器",
      "D": "以上都不合适"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 116,
    "question": "下面哪一类嵌入式处理器最适合于做 FFT（快速傅立叶变换）计算",
    "options": {
      "A": "嵌入式微处理器",
      "B": "嵌入式微控制器",
      "C": "嵌入式DSP处理器",
      "D": "以上都不合适"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 117,
    "question": "下面关于UART、RS-232、RS-485的叙述中，错误的是",
    "options": {
      "A": "基于UART可以构成RS-232接口和RS-485接口",
      "B": "RS-485接口标准的最长通信距离与RS-232接口标准的最长通信距离相当",
      "C": "RS-485标准采用差分信号传输方式，因此具有很强的抗共模干扰能力",
      "D": "通过RS-485可构成主从式多机通信系统，主机可采用轮询方式与各从机建立通信连接"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 118,
    "question": "在数字音频信息数字化过程中，正确的处理顺序是",
    "options": {
      "A": "量化、采样、编码",
      "B": "采样、编码、量化",
      "C": "采样、量化、编码",
      "D": "编码、采样、量化"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 119,
    "question": "以下关于嵌入式处理器的说法正确的是",
    "options": {
      "A": "RISC是复杂指令集结构计算机",
      "B": "哈佛结构是程序与数据统一的存储结构",
      "C": "ARM处理器的指令编码全部为32位",
      "D": "ARMCortex-M是面向控制的嵌入式Cortex处理器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 120,
    "question": "下面关于目前嵌入式最小硬件系统的叙述中，错误的是",
    "options": {
      "A": "嵌入式最小硬件系统包括嵌入式处理器",
      "B": "嵌入式最小硬件系统包括时钟电路",
      "C": "嵌入式最小系统包括给系统供电的电源电路",
      "D": "嵌入式处理器片内一般不包括存储器，组成最小系统时必须外扩存储器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 121,
    "question": "嵌入式系统的开发有一些不同于通用计算机应用开发的特点，下面不属于嵌入式系统开发特点的是",
    "options": {
      "A": "通常需要固化程序，即把软件代码烧写到非易失性存储器中",
      "B": "应用软件必须在基于嵌入式操作系统平台上来开发",
      "C": "通常采用宿主机-目标机的开发架构",
      "D": "软件开发中通常涉及许多底层的硬件控制程序"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 122,
    "question": "嵌入式系统开发中，要想准确地定位软件和硬件中出现的错误，必须借助多种硬件和软件开发调试工具。下面所列出的不属于嵌入式系统开发调试工具的是",
    "options": {
      "A": "在线仿真器",
      "B": "JTAG适配器",
      "C": "示波器",
      "D": "传感器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 123,
    "question": "嵌入式系统开发一般是在宿主主机上进行，在目标机上运行，因此需要一个（　）环境",
    "options": {
      "A": "交互平台",
      "B": "交叉编译",
      "C": "交互操作系统",
      "D": "分布式计算"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 124,
    "question": "在STM32处理器中，下面哪种中断方式优先级最高",
    "options": {
      "A": "Reset",
      "B": "SysTick",
      "C": "NMI",
      "D": "HardFault"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 125,
    "question": "在STM32内存中0x40011111的第1位(位从0算起)的位带别名地址是",
    "options": {
      "A": "0x40222222",
      "B": "0x40222224",
      "C": "0x42222222",
      "D": "0x42222224"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 126,
    "question": "在STM32内存中0x40011111的第2位(位从0算起)的位带别名地址是",
    "options": {
      "A": "0x42222224",
      "B": "0x40222224",
      "C": "0x42222228",
      "D": "0x40222228"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 128,
    "question": "STM32的GPIOE的ODR寄存器地址为0x4001180C，该寄存器第2位(位从0算起)的位带别名地址是",
    "options": {
      "A": "0x4023018c",
      "B": "0x4223018c",
      "C": "0x42230188",
      "D": "0x40230188"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 129,
    "question": "STM32的GPIOB的ODR寄存器地址为0x40010C0C，该寄存器第4位(位从0算起)的位带别名地址是",
    "options": {
      "A": "0x40218190",
      "B": "0x42218190",
      "C": "0x40218180",
      "D": "0x42218180"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 130,
    "question": "STM32的GPIOB的ODR寄存器地址为0x40010C0C，该寄存器第0位的位带别名地址是",
    "options": {
      "A": "0x40218180",
      "B": "0x42218180",
      "C": "0x40218190",
      "D": "0x42218190"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 131,
    "question": "嵌入式系统的性能在很大程度上是由CPU决定的, CPU的性能主要表现为指令执行速度的快慢。下列选项中不直接影响CPU速度的是",
    "options": {
      "A": "指令系统结构",
      "B": "cache容量",
      "C": "指令流水线数目",
      "D": "I/O接口的类型和数目"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 132,
    "question": "下面关于嵌入式系统的叙述中，错误的是",
    "options": {
      "A": "嵌入式系统所涉及的应用领域非常广泛",
      "B": "嵌入式系统性能较低，价格也比较便宜",
      "C": "嵌入式系统大多具有不同程度的实时性",
      "D": "嵌入式系统与通用计算机一样，也由硬件和软件两部分组成"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 133,
    "question": "嵌入式系统中的CPU具有一些与通用计算机所使用的CPU不同的特点， 下面不是其特点的是",
    "options": {
      "A": "支持实时处理",
      "B": "低功耗",
      "C": "高主频",
      "D": "集成了测试电路"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 134,
    "question": "数码相机是一种典型的嵌入式系统，下面有关其软硬件组成的叙述中错误的是",
    "options": {
      "A": "它由硬件和软件两部分组成",
      "B": "硬件部分既包括CPU，也包括存储器和输入/输出",
      "C": "使用闪存卡(如cF卡、sD卡等)作为内存，用于存储所运行的软件",
      "D": "软件部分既包括操作系统，也包括应用软件"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 135,
    "question": "下面关于嵌入式系统中常用的简单输入设备和简单输出设备的叙述中，正确的是",
    "options": {
      "A": "键盘的按键数相同时(例如16个按键)，线性键盘接口需要的I/O引脚比矩阵键盘接口需要的I/O引脚少",
      "B": "为方便输入，采用电容式触摸屏时，-般需专用的硬笔",
      "C": "LED发光二极管驱动方便，与ARM芯 片连接时仅需-根GPI0引脚与其直接相连即可，不需其他相关的驱动电路",
      "D": "LED数码管由多个LED组成，这些LED有共阳极接法和共阴极接法两种"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 136,
    "question": "下面关于嵌入式系统的互连通信接的叙述中，错误的是",
    "options": {
      "A": "嵌入式处理器的UART在采用了RS-232电平转换电路后，可延长通信距离",
      "B": "与RS-485标准相比，RS-232标准的通信距离更远、通信速率更高",
      "C": "对于片内无CAN控制器的嵌入式处理芯片，可通过扩展CAN控制器和CAN收发器的方式使其接入CAN总线",
      "D": "嵌入式系统可以通过以太网连接到互联网中"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 137,
    "question": "嵌入式系统的硬件与通用计算机一样，其主体是中央处理器和存储器。下面关于嵌入式系统CPU的叙述中，错误的是",
    "options": {
      "A": "运算器、控制器等各个组成部分全都制作在一块大小仅为几个平方厘米的半导体芯片上",
      "B": "它具有功耗低、实时处理能力强的特点",
      "C": "字长均为32位或64位，8位和16位的CPU已经被淘汰",
      "D": "CPU中大多集成有测试电路"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 138,
    "question": "以下关于嵌入式系统软件与通用计算机系统软件的异同的陈述中，正确的是",
    "options": {
      "A": "嵌入式系统软件不会有图形用户界面",
      "B": "嵌入式系统软件和通用计算机系统软件都必须包含操作系统和应用软件",
      "C": "嵌入式系统软件以提高系统使用的方便程度和快捷程度为目的，力求完善",
      "D": "嵌入式系统应用软件往往内部结构精简化、代码轻量化、占用存储资源少"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 139,
    "question": "下面关于嵌入式系统的叙述中，错误的是",
    "options": {
      "A": "嵌入式系统在应用数量上远远超过了通用计算机系统",
      "B": "嵌入式系统正在逐步渗透到人类社会的各个领域，嵌入式应用无处不在",
      "C": "嵌入式系统的研发能力及产业化水平是衡量一个国家经济发展、科技进步和国防实力的重要标志",
      "D": "嵌入式系统的应用和发展是一个新生事物，它还只有十年左右的历史"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 140,
    "question": "下面对嵌入式操作系统的叙述中，错误的是",
    "options": {
      "A": "嵌入式操作系统是一种用途广泛的系统软件",
      "B": "通常包括与硬件相关的底层驱动软件、系统内核、设备驱动接口、通信协议、图形界面、标准化浏览器等",
      "C": "必须是实时多任务系统，仅适用于特定CPU",
      "D": "嵌入式操作系统负责嵌入式系统的全部软、硬件资源的分配、任务调度，控制、协调并发活动"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 141,
    "question": "下面与uC/OS有关的叙述中，错误的是",
    "options": {
      "A": "uC/OS –II 2.5版本支持64个任务，每个任务一个特定的优先级",
      "B": "系统总是运行进入就绪态优先级最高的任务",
      "C": "系统占用了6个任务，保留优先级为0、1、2、3、4、5",
      "D": "任务优先级号就是任务编号(ID).优先级号也被一些内核功能函数调用"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 142,
    "question": "关于硬件抽象层，下面的描述中错误的是",
    "options": {
      "A": "硬件抽象层是嵌入式硬件电路板的最基本软件",
      "B": "硬件抽象层包含嵌入式软件中直接访问底层硬件的例程集合",
      "C": "HAL的函数是移植操作系统的基础",
      "D": "硬件抽象层是操作系统内核的重要组成部分"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 143,
    "question": "μC/OS-II具有良好的可裁剪性和可移植性，能够支持的任务数最多为（2.5版本）",
    "options": {
      "A": "16",
      "B": "32",
      "C": "64",
      "D": "128"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 144,
    "question": "与个人计算机(PC)相比，嵌入式系统具有许多不同的特点。下面不属于嵌入式系统特点的是",
    "options": {
      "A": "嵌入式系统大多面向控制应用，系统的可靠性十分重要",
      "B": "嵌入式系统不需要操作系统",
      "C": "嵌入式系统大多具有不同程度的实时性",
      "D": "许多嵌入式系统中的软件都固化在只读存储器中"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 145,
    "question": "下列哪个不是嵌入式系统独具的特点",
    "options": {
      "A": "系统内核小",
      "B": "专用性强",
      "C": "可执行多任务",
      "D": "系统精简"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 146,
    "question": "将uC/OS-Ⅱ操作系统移植到ARM处理器上，以下哪个文件不需要修改",
    "options": {
      "A": "os_cpu.h",
      "B": "os_core.c",
      "C": "os_cpu_a.asm",
      "D": "os_cpu_c.c"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 147,
    "question": "嵌入式系统最核心的定义是",
    "options": {
      "A": "安装在个人电脑中的操作系统",
      "B": "以应用为中心，软硬件可裁剪的专用计算机系统",
      "C": "具有大型数据库的网络系统",
      "D": "专用于科学计算的并行计算机"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 148,
    "question": "以下哪个不是嵌入式系统的典型特点",
    "options": {
      "A": "功耗敏感",
      "B": "实时性要求",
      "C": "资源受限",
      "D": "通用性强"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 149,
    "question": "嵌入式系统的“可裁剪性”指的是",
    "options": {
      "A": "硬件尺寸可随意缩小",
      "B": "根据应用需求选择必要的软硬件模块",
      "C": "系统价格可以随意降低",
      "D": "软件代码可任意编写"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 150,
    "question": "嵌入式系统的软件一般存储在",
    "options": {
      "A": "机械硬盘",
      "B": "固态硬盘（SSD）",
      "C": "ROM/Flash 等非易失性存储器",
      "D": "磁带"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 151,
    "question": "以下哪个不是嵌入式系统的硬件组成部分？",
    "options": {
      "A": "微处理器/微控制器",
      "B": "存储器",
      "C": "独立的高性能显卡",
      "D": "I/O接口"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 152,
    "question": "嵌入式系统通常对以下哪个因素最敏感？",
    "options": {
      "A": "外观颜色",
      "B": "成本",
      "C": "品牌",
      "D": "包装材料"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 153,
    "question": "以下哪个领域几乎不会用到嵌入式系统？",
    "options": {
      "A": "汽车电子",
      "B": "工业控制",
      "C": "纯手动机械钟表（无电子部件）",
      "D": "智能家居"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 154,
    "question": "以下哪种处理器体系结构在嵌入式领域应用最广泛？",
    "options": {
      "A": "x86",
      "B": "ARM",
      "C": "POWERPC",
      "D": "SPARC"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 155,
    "question": "微控制器（MCU）与微处理器（MPU）的主要区别在于：",
    "options": {
      "A": "MCU集成内存和外设，MPU通常需要外部芯片",
      "B": "MPU功耗更低",
      "C": "MCU不能运行任何操作系统",
      "D": "MPU只能用于PC"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 156,
    "question": "嵌入式系统中RAM的作用通常是：",
    "options": {
      "A": "长期保存程序代码",
      "B": "掉电后保存数据",
      "C": "运行时存放数据和堆栈",
      "D": "替代CPU运算"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 157,
    "question": "下列属于典型嵌入式处理器的是：",
    "options": {
      "A": "Intel Core i9",
      "B": "AMD Ryzen",
      "C": "ARM Cortex-M",
      "D": "NVIDIA H100"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 158,
    "question": "DSP（数字信号处理器）在嵌入式系统中常用于：",
    "options": {
      "A": "文本编辑",
      "B": "音视频/通信信号处理",
      "C": "数据库管理",
      "D": "网页浏览"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 159,
    "question": "嵌入式系统的“看门狗”定时器的主要作用是：",
    "options": {
      "A": "精确计时",
      "B": "提高处理速度",
      "C": "系统异常时自动复位",
      "D": "节能控制"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 160,
    "question": "关于嵌入式SoC（片上系统），说法正确的是：",
    "options": {
      "A": "必须包含FPGA",
      "B": "将CPU、内存、外设等集成在一个芯片上",
      "C": "只用于手机",
      "D": "不能运行Linux"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 161,
    "question": "嵌入式系统中，外部中断的作用是：",
    "options": {
      "A": "降低功耗",
      "B": "快速响应外部事件",
      "C": "提高主频",
      "D": "增加存储容量"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 162,
    "question": "嵌入式系统中Flash存储器的特点是：",
    "options": {
      "A": "读写速度与DRAM相同",
      "B": "掉电不丢失数据，可多次擦写",
      "C": "只能读不能写",
      "D": "需要定期刷新"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 163,
    "question": "下列哪种通信接口常用于短距离、低功耗嵌入式设备互联？",
    "options": {
      "A": "RS-232",
      "B": "I2C",
      "C": "VGA",
      "D": "PCIe"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 164,
    "question": "以下哪个是典型的嵌入式实时操作系统？",
    "options": {
      "A": "Windows 11",
      "B": "macOS",
      "C": "FreeRTOS",
      "D": "Ubuntu Server"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 165,
    "question": "嵌入式Linux相比于裸机程序的主要优势是：",
    "options": {
      "A": "代码更简单",
      "B": "支持多任务、文件系统和网络协议栈",
      "C": "实时性更强",
      "D": "占用内存更小"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 166,
    "question": "以下哪个不属于嵌入式操作系统？",
    "options": {
      "A": "VxWorks",
      "B": "μC/OS",
      "C": "Android（运行于嵌入式设备）",
      "D": "Oracle Database"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 167,
    "question": "RTOS中的“确定性”是指：",
    "options": {
      "A": "任务执行结果永远相同",
      "B": "任务响应时间可预测",
      "C": "系统不出现故障",
      "D": "代码无bug"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 168,
    "question": "在嵌入式RTOS中，优先级反转问题通常可通过以下哪种机制解决？",
    "options": {
      "A": "中断嵌套",
      "B": "优先级继承协议",
      "C": "时间片轮转",
      "D": "内存锁定"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 169,
    "question": "嵌入式裸机程序（bare-metal）的含义是：",
    "options": {
      "A": "没有操作系统，直接运行在硬件上",
      "B": "没有显示器",
      "C": "使用金属外壳",
      "D": "没有CPU"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 170,
    "question": "以下哪个操作系统常被用于资源受限的嵌入式设备（如几KB RAM）？",
    "options": {
      "A": "Linux",
      "B": "FreeRTOS 或 RIOT OS",
      "C": "Windows CE",
      "D": "macOS"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 171,
    "question": "对于响应时间要求极高（微秒级）的嵌入式应用，通常选择：",
    "options": {
      "A": "通用Linux",
      "B": "裸机中断或硬实时RTOS",
      "C": "Android",
      "D": "无操作系统但轮询"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 172,
    "question": "嵌入式系统中，Bootloader的主要作用是：",
    "options": {
      "A": "运行用户界面",
      "B": "初始化硬件并加载操作系统",
      "C": "杀毒",
      "D": "压缩文件"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 173,
    "question": "STM32F103 系列微控制器采用的内核是？",
    "options": {
      "A": "ARM Cortex-M0",
      "B": "ARM Cortex-M3",
      "C": "ARM Cortex-M4",
      "D": "ARM926EJ-S"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 174,
    "question": "Cortex-M3 内核的指令集属于哪种架构？",
    "options": {
      "A": "ARMv6-M",
      "B": "ARMv7-M",
      "C": "ARMv8-M",
      "D": "ARMV4T"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 175,
    "question": "STM32F103 的最高工作频率是多少？",
    "options": {
      "A": "48 MHz",
      "B": "72 MHz",
      "C": "96 MHz",
      "D": "120 MHz"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 176,
    "question": "STM32F103C8T6 中 “C8” 表示什么？",
    "options": {
      "A": "封装类型",
      "B": "温度范围",
      "C": "Flash容量（64KB）",
      "D": "引脚数目（48脚）"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 177,
    "question": "STM32F103 的调试接口主要支持？",
    "options": {
      "A": "仅 JTAG",
      "B": "仅 SWD",
      "C": "JTAG 和 SWD",
      "D": "仅 UART"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 178,
    "question": "Cortex-M3 内核的寄存器是几位？",
    "options": {
      "A": "8位",
      "B": "16位",
      "C": "32位",
      "D": "64位"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 179,
    "question": "STM32F103 的位带（Bit Band）功能允许：",
    "options": {
      "A": "原子操作单个位",
      "B": "加快浮点运算",
      "C": "增加Flash寿命",
      "D": "降低功耗"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 180,
    "question": "Cortex-M3 的异常（异常）编号中，复位（Reset）的优先级数值是多少？",
    "options": {
      "A": "-3（最高）",
      "B": "0",
      "C": "1",
      "D": "15"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 181,
    "question": "STM32F103 的内核和总线架构中，ICode 总线用于：",
    "options": {
      "A": "数据访问",
      "B": "指令获取",
      "C": "外设访问",
      "D": "DMA 传输"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 182,
    "question": "STM32F103ZET6 中的“Z”代表封装引脚数为？",
    "options": {
      "A": "64 脚",
      "B": "100 脚",
      "C": "144 脚",
      "D": "48 脚"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 183,
    "question": "STM32F103 的 Flash 存储器通常用于存储：",
    "options": {
      "A": "程序代码和常量",
      "B": "堆栈",
      "C": "动态变量",
      "D": "中断向量表（也是Flash）"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 186,
    "question": "STM32F103 的 PLL（锁相环）最大倍频输出是多少MHz？",
    "options": {
      "A": "64 MHz",
      "B": "72 MHz",
      "C": "80 MHz",
      "D": "56 MHz"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 187,
    "question": "Cortex-M3 的存储器映射中，Code 区起始地址是？",
    "options": {
      "A": "0x00000000",
      "B": "0x20000000",
      "C": "0x40000000",
      "D": "0xE0000000"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 188,
    "question": "STM32F103 的外设寄存器位于哪个地址区域？",
    "options": {
      "A": "0x0000 0000 – 0x1FFF FFFF",
      "B": "0x2000 0000 – 0x3FFF FFFF",
      "C": "0x4000 0000 – 0x5FFF FFFF",
      "D": "0x6000 0000 – 0x9FFF FFFF"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 189,
    "question": "使用 HSE 外部晶振时，典型频率可以是：",
    "options": {
      "A": "8 MHz",
      "B": "32.768 kHz",
      "C": "40 kHz",
      "D": "100 kHz"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 190,
    "question": "AHB 总线与 APB2 总线之间的时钟关系通常是：",
    "options": {
      "A": "AHB 频率等于 APB2",
      "B": "AHB 频率高于或等于 APB2",
      "C": "APB2 总是 AHB 的 2 倍",
      "D": "二者无关联"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 191,
    "question": "STM32F103 中用于低功耗运行的 32.768 kHz 时钟源是：",
    "options": {
      "A": "HSI",
      "B": "HSE",
      "C": "LSI",
      "D": "LSE"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 192,
    "question": "如何将 STM32F103 的系统时钟切换为 HSI？",
    "options": {
      "A": "直接设置 SYSCLK 选择位",
      "B": "必须关闭 PLL 才能切换",
      "C": "只能复位后默认 HSI",
      "D": "只有硬件能切换"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 193,
    "question": "Cortex-M3 的中断控制器缩写是？",
    "options": {
      "A": "GIC",
      "B": "NVIC",
      "C": "PIC",
      "D": "IOAPIC"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 194,
    "question": "STM32F103 支持的可屏蔽中断最大数量大约是？",
    "options": {
      "A": "16",
      "B": "32",
      "C": "60",
      "D": "240"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 195,
    "question": "在 NVIC 中，抢占优先级与子优先级的区别是：",
    "options": {
      "A": "抢占优先级决定能否打断低抢占优先级中断",
      "B": "子优先级决定能否嵌套",
      "C": "两者等价",
      "D": "子优先级高的先响应，但不可打断"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 196,
    "question": "配置 NVIC 优先级分组为 2 位抢占 + 2 位子优先级时，抢占优先级可设值为：",
    "options": {
      "A": "0–1",
      "B": "0–3",
      "C": "0–7",
      "D": "0–15"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 197,
    "question": "STM32F103 的 PendSV 异常通常用于：",
    "options": {
      "A": "外部按键中断",
      "B": "调试",
      "C": "RTOS 上下文切换",
      "D": "除零错误"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 198,
    "question": "SysTick 定时器在 STM32F103 中的作用是：",
    "options": {
      "A": "生成 PWM",
      "B": "提供系统心跳或 RTOS 时间基准",
      "C": "精确测频",
      "D": "不常用"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 199,
    "question": "NVIC 中中断使能寄存器是：",
    "options": {
      "A": "ISER",
      "B": "ICER",
      "C": "ISPR",
      "D": "ICPR"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 200,
    "question": "若两个中断的抢占优先级相同，子优先级不同，则：",
    "options": {
      "A": "高子优先级可打断低子优先级",
      "B": "不能互相打断，先处理子优先级高的",
      "C": "同时发生时先处理抢占优先级",
      "D": "由中断号决定"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 201,
    "question": "STM32F103 的外部中断/事件控制器 EXTI 支持多少条外部中断线？",
    "options": {
      "A": "10",
      "B": "16",
      "C": "20",
      "D": "32"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 202,
    "question": "以下哪个中断向量属于系统异常而非外部中断？",
    "options": {
      "A": "USART1 中断",
      "B": "内存管理异常",
      "C": "TIM2 全局中断",
      "D": "EXTI0"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 203,
    "question": "STM32F103 的 GPIO 引脚最大输出速度可达：",
    "options": {
      "A": "2 MHz",
      "B": "10 MHz",
      "C": "50 MHz",
      "D": "72 MHz"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 204,
    "question": "配置 GPIO 为“开漏输出”主要用于：",
    "options": {
      "A": "驱动 LED",
      "B": "I2C 总线",
      "C": "高电平有效按键",
      "D": "推挽驱动"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 205,
    "question": "STM32F103 的 GPIO 输入方式不包含：",
    "options": {
      "A": "浮空输入",
      "B": "上拉输入",
      "C": "下拉输入",
      "D": "差分输入"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 206,
    "question": "以下哪种定时器在 STM32F103 中是基本定时器？",
    "options": {
      "A": "TIM1",
      "B": "TIM2",
      "C": "TIM6",
      "D": "TIM8"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 207,
    "question": "STM32F103 的通用定时器 TIM2/3/4 是多少位的？",
    "options": {
      "A": "8 位",
      "B": "16 位",
      "C": "32 位",
      "D": "24 位"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 208,
    "question": "使用 STM32F103 的 ADC 时，其分辨率为：",
    "options": {
      "A": "8 位",
      "B": "10 位",
      "C": "12 位",
      "D": "16 位"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 209,
    "question": "STM32F103 的 USART 接口不支持哪种模式？",
    "options": {
      "A": "异步串行",
      "B": "同步主模式",
      "C": "IrDA",
      "D": "以太网"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 210,
    "question": "SWD 调试接口最少需要几根信号线？",
    "options": {
      "A": "5 根（JTAG 模式）",
      "B": "2 根（SWDIO + SWCLK）",
      "C": "4 根",
      "D": "1 根"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 211,
    "question": "当 STM32F103 的堆栈指针初始值从 Flash 地址 0x00000000 读取时，该值应为：",
    "options": {
      "A": "0",
      "B": "主堆栈指针的初始地址",
      "C": "复位向量",
      "D": "程序计数器地址"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 212,
    "question": "嵌入式系统开发环境通常由哪两个部分构成？",
    "options": {
      "A": "编译器与调试器",
      "B": "宿主机与目标机",
      "C": "编辑器与链接器",
      "D": "硬件与操作系统"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 213,
    "question": "关于宿主机与目标机的描述，正确的是？",
    "options": {
      "A": "宿主机是运行嵌入式软件的硬件平台",
      "B": "目标机是执行编译、链接的计算机",
      "C": "宿主机与目标机可以是同一台机器",
      "D": "宿主机与目标机的指令架构必须完全相同"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 214,
    "question": "以下哪种情况必须使用交叉编译工具链？",
    "options": {
      "A": "宿主机与目标机指令架构不同",
      "B": "目标机内存较大",
      "C": "宿主机运行Windows系统",
      "D": "开发C语言程序"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 215,
    "question": "“交叉编译”的含义是？",
    "options": {
      "A": "在本地编译本地运行的代码",
      "B": "在不同架构的宿主机上编译目标机代码",
      "C": "多个编译器同时编译",
      "D": "编译过程中进行代码交叉检查"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 216,
    "question": "下列哪项不是嵌入式系统开发需要交叉编译的原因？",
    "options": {
      "A": "目标机处理器性能较弱",
      "B": "目标机存储资源有限",
      "C": "提高代码运行效率",
      "D": "宿主机开发工具更完善"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 217,
    "question": "关于“目标机”（Target Machine）的说法，正确的是？",
    "options": {
      "A": "目标机是开发过程中使用的PC",
      "B": "目标机是嵌入式软件的实际运行环境",
      "C": "目标机不能是仿真系统",
      "D": "目标机与宿主机必须通过网络连接"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 218,
    "question": "嵌入式系统开发与通用软件开发相比，增加了以下哪个环节？",
    "options": {
      "A": "代码编写",
      "B": "代码调试",
      "C": "代码固化",
      "D": "代码编译"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 219,
    "question": "以下关于嵌入式系统开发环境的说法，错误的是？",
    "options": {
      "A": "开发环境包括硬件平台和软件工具",
      "B": "通常需要专门的开发工具",
      "C": "开发环境和运行环境可以是同一个",
      "D": "不需要版本控制系统"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 220,
    "question": "下列哪项是嵌入式开发与PC软件开发最根本的区别？",
    "options": {
      "A": "编程语言不同",
      "B": "需要交叉编译和代码固化",
      "C": "调试方法不同",
      "D": "代码规模更小"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 221,
    "question": "以下哪个是嵌入式开发中常用的开源交叉编译器？",
    "options": {
      "A": "MSVC",
      "B": "GCC",
      "C": "Borland C++",
      "D": "Turbo C"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 222,
    "question": "下列哪个是STM32开发中常用的集成开发环境（IDE）？",
    "options": {
      "A": "Keil MDK",
      "B": "IAR EWARM",
      "C": "STM32CubeIDE",
      "D": "以上都是"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 223,
    "question": "以下哪种调试技术属于硬件调试？",
    "options": {
      "A": "printf打印",
      "B": "日志记录",
      "C": "JTAG调试",
      "D": "断言检查"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 224,
    "question": "关于JTAG接口的说法，正确的是？",
    "options": {
      "A": "JTAG只能用于芯片测试，不能用于调试",
      "B": "JTAG仿真器不能访问I/O设备",
      "C": "JTAG可以访问、控制处理器核和总线上的I/O设备",
      "D": "JTAG只能在Windows下使用"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 225,
    "question": "下列关于仿真器的描述，正确的是？",
    "options": {
      "A": "仿真器只能模拟CPU，不能模拟外设",
      "B": "在线仿真器（ICE）是一种模拟CPU的设备",
      "C": "仿真器不能用于程序下载",
      "D": "仿真器只能在硬件开发阶段使用"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 226,
    "question": "以下哪个是开源且免费的调试器？",
    "options": {
      "A": "GDB",
      "B": "Keil Debugger",
      "C": "IAR C-SPY",
      "D": "J-Link Commander"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 227,
    "question": "嵌入式开发中，“断点”调试的工作原理是？",
    "options": {
      "A": "暂停整个CPU时钟",
      "B": "在指定地址替换为特殊指令，触发异常后暂停",
      "C": "降低CPU频率",
      "D": "关闭所有中断"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 228,
    "question": "下列哪种调试方式对系统实时性影响最小？",
    "options": {
      "A": "printf串口输出",
      "B": "ITM/SWO调试输出",
      "C": "断点调试",
      "D": "逻辑分析仪抓取信号"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 229,
    "question": "以下哪项不是STM32常用的烧录工具/方法？",
    "options": {
      "A": "ST-Link",
      "B": "J-Link",
      "C": "Keil ULink",
      "D": "AVRIsp"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 230,
    "question": "J-Link仿真器的特点不包括？",
    "options": {
      "A": "支持SWD和JTAG接口",
      "B": "支持广泛的ARM芯片",
      "C": "只能用官方IDE",
      "D": "支持GDB调试"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 231,
    "question": "ST-Link是ST公司官方的调试烧录工具，它不支持以下哪种功能？",
    "options": {
      "A": "SWD调试",
      "B": "虚拟串口",
      "C": "大容量Flash编程",
      "D": "WiFi调试"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 232,
    "question": "关于在系统编程（ISP）和在应用编程（IAP）的区别，正确的是？",
    "options": {
      "A": "ISP需要在程序运行时进行",
      "B": "IAP需要在芯片复位时进行",
      "C": "IAP允许应用程序自身更新固件",
      "D": "ISP和IAP没有区别"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 233,
    "question": "通过JTAG/SWD烧录程序时，目标板通常需要什么状态？",
    "options": {
      "A": "完全断电",
      "B": "仅上电，无需其他设置",
      "C": "需要先烧录Bootloader",
      "D": "需要短路复位引脚"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 234,
    "question": "关于Bootloader的描述，正确的是？",
    "options": {
      "A": "Bootloader是操作系统的一部分",
      "B": "Bootloader是系统加电后运行的第一段用户程序",
      "C": "Bootloader只能用汇编编写",
      "D": "Bootloader不能烧写Flash"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 235,
    "question": "STM32F103 的每组GPIO端口有多少个引脚？",
    "options": {
      "A": "8个",
      "B": "12个",
      "C": "16个",
      "D": "32个"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 236,
    "question": "STM32F103最多共有几组GPIO端口（如GPIOA、GPIOB...）？",
    "options": {
      "A": "5组（A-E）",
      "B": "7组（A-G）",
      "C": "4组（A-D）",
      "D": "取决于封装，最大为A-G"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 237,
    "question": "GPIO端口的输出数据寄存器缩写是？",
    "options": {
      "A": "GPIOx_IDR",
      "B": "GPIOx_ODR",
      "C": "GPIOx_BSRR",
      "D": "GPIOx_BRR"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 238,
    "question": "以下哪个不是STM32F103 GPIO支持的工作模式？",
    "options": {
      "A": "浮空输入",
      "B": "上拉输入",
      "C": "差分输入",
      "D": "模拟输入"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 239,
    "question": "当GPIO配置为推挽输出模式时，输出高电平的驱动方式为：",
    "options": {
      "A": "NMOS导通，PMOS截止",
      "B": "PMOS导通，NMOS截止",
      "C": "两个MOS管均导通",
      "D": "两个MOS管均截止"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 240,
    "question": "开漏输出模式下，输出高电平时引脚的实际状态是：",
    "options": {
      "A": "强驱动高电平",
      "B": "高阻态，需要外部上拉电阻",
      "C": "低电平",
      "D": "高电平但驱动能力很弱"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 241,
    "question": "以下哪个工作模式适合读取外部按键输入？",
    "options": {
      "A": "推挽输出",
      "B": "复用推挽输出",
      "C": "上拉输入",
      "D": "模拟输入"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 242,
    "question": "GPIO配置为复用功能输出时，输出的信号来源是：",
    "options": {
      "A": "输出数据寄存器ODR",
      "B": "片上外设（如USART、定时器等）",
      "C": "输入数据寄存器IDR",
      "D": "位设置/清除寄存器"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 243,
    "question": "某GPIO引脚需要连接ADC进行模拟量采集，应配置为：",
    "options": {
      "A": "浮空输入",
      "B": "上拉输入",
      "C": "下拉输入",
      "D": "模拟输入"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 244,
    "question": "GPIO配置寄存器GPIOx_CRL和GPIOx_CRH分别控制：",
    "options": {
      "A": "低8位和高8位引脚",
      "B": "输入模式和输出模式",
      "C": "端口A和端口B",
      "D": "数据寄存器和控制寄存器"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 245,
    "question": "配置GPIO引脚为输出模式，需要配置的寄存器是：",
    "options": {
      "A": "GPIOx_CRL/CRH的模式位(MODE)",
      "B": "GPIOx_CRL/CRH的配置位(CNF)",
      "C": "两者都需要",
      "D": "GPIOx_ODR"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 246,
    "question": "\"输出模式中，MODE位配置为\"\"11\"\"表示：\"",
    "options": {
      "A": "输入模式",
      "B": "输出10MHz",
      "C": "输出2MHz",
      "D": "输出50MHz"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 247,
    "question": "将GPIOA的引脚0配置为推挽输出、50MHz，正确的CNF和MODE设置是：",
    "options": {
      "A": "CNF=00，MODE=11",
      "B": "CNF=01，MODE=11",
      "C": "CNF=10，MODE=11",
      "D": "CNF=11，MODE=11"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 248,
    "question": "将GPIOB的引脚5配置为上拉输入，需要的CNF和MODE设置是：",
    "options": {
      "A": "CNF=00，MODE=00",
      "B": "CNF=10，MODE=00",
      "C": "CNF=01，MODE=00",
      "D": "CNF=11，MODE=00"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 249,
    "question": "上拉输入时，内部上拉电阻的启用是通过设置哪个寄存器实现的？",
    "options": {
      "A": "GPIOx_CRL",
      "B": "GPIOx_BSRR",
      "C": "GPIOx_ODR的对应位为1",
      "D": "GPIOx_IDR"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 250,
    "question": "GPIOx_BSRR寄存器的功能是：",
    "options": {
      "A": "同时设置和清除ODR位",
      "B": "只读引脚状态",
      "C": "配置输入输出模式",
      "D": "控制复用功能"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 251,
    "question": "要将GPIOA的引脚3输出高电平，不影响其他引脚，最安全高效的方式是：",
    "options": {
      "A": "GPIOA-&gt;ODR |= (1&lt;&lt;3)",
      "B": "GPIOA-&gt;BSRR = (1&lt;&lt;3)",
      "C": "GPIOA-&gt;BRR = (1&lt;&lt;3)",
      "D": "GPIOA-&gt;BSRR = (1&lt;&lt;19)"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 252,
    "question": "要将GPIOA的引脚3输出低电平，使用BRR寄存器的正确操作是：",
    "options": {
      "A": "GPIOA-&gt;BRR = (1&lt;&lt;3)",
      "B": "GPIOA-&gt;BRR = (1&lt;&lt;19)",
      "C": "GPIOA-&gt;BSRR = (1&lt;&lt;3)",
      "D": "GPIOA-&gt;ODR &amp;= ~(1&lt;&lt;3)"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 253,
    "question": "读取GPIOB引脚7的当前电平，应读取哪个寄存器？",
    "options": {
      "A": "GPIOB-&gt;ODR",
      "B": "GPIOB-&gt;IDR",
      "C": "GPIOB-&gt;BSRR",
      "D": "GPIOB-&gt;LCKR"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 254,
    "question": "GPIOx_LCKR寄存器的作用是：",
    "options": {
      "A": "锁定引脚配置，防止意外修改",
      "B": "锁定输出数据",
      "C": "锁定输入数据",
      "D": "控制引脚速度"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 255,
    "question": "机械按键直接连接到GPIO输入，不进行软件处理时常见的问题是：",
    "options": {
      "A": "电平反转",
      "B": "引脚损坏",
      "C": "按键抖动",
      "D": "电流过大"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 256,
    "question": "硬件消除按键抖动一般采用：",
    "options": {
      "A": "串联电阻",
      "B": "RC滤波电路",
      "C": "并联电容",
      "D": "加LED"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 257,
    "question": "软件消抖通常采用的方法是：",
    "options": {
      "A": "延时10-20ms后再次检测",
      "B": "连续读取10次取平均值",
      "C": "使用外部中断",
      "D": "提高系统主频"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 258,
    "question": "GPIO配置为浮空输入时，引脚悬空状态下的电平是：",
    "options": {
      "A": "高电平",
      "B": "低电平",
      "C": "不确定，容易受干扰",
      "D": "高阻态"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 259,
    "question": "对于需要检测上升沿的外部信号，GPIO应配置为：",
    "options": {
      "A": "推挽输出",
      "B": "上拉输入或浮空输入",
      "C": "模拟输入",
      "D": "复用开漏"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 260,
    "question": "某按键电路一端接GND，另一端接GPIO，内部应配置为：",
    "options": {
      "A": "浮空输入",
      "B": "上拉输入",
      "C": "下拉输入",
      "D": "推挽输出"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 261,
    "question": "某按键电路一端接VCC，另一端接GPIO，内部应配置为：",
    "options": {
      "A": "浮空输入",
      "B": "上拉输入",
      "C": "下拉输入",
      "D": "推挽输出"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 262,
    "question": "输入引脚的外部干扰可以通过以下哪种方式减弱？",
    "options": {
      "A": "增加输入滤波时间",
      "B": "提高GPIO速度",
      "C": "使用开漏输出",
      "D": "加快IO翻转频率"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 263,
    "question": "读取按键状态时，为了防止抖动误判，常采用：",
    "options": {
      "A": "边缘检测",
      "B": "状态机消抖",
      "C": "上升沿中断",
      "D": "下降沿中断"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 264,
    "question": "GPIO的输入阈值电平（TTL电平）中，高电平最低识别电压约为：",
    "options": {
      "A": "1.2V",
      "B": "1.8V",
      "C": "2.0V",
      "D": "3.3V"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 265,
    "question": "STM32F103 GPIO推挽输出时，单个引脚的最大灌电流约为：",
    "options": {
      "A": "5mA",
      "B": "10mA",
      "C": "25mA",
      "D": "50mA"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 266,
    "question": "一个GPIO端口所有引脚的总电流不能超过：",
    "options": {
      "A": "50mA",
      "B": "100mA",
      "C": "150mA",
      "D": "200mA"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 267,
    "question": "驱动LED时，以下哪种连接方式更常用且安全？",
    "options": {
      "A": "推挽输出高电平驱动LED阳极",
      "B": "推挽输出低电平驱动LED阴极（灌电流）",
      "C": "开漏输出高电平",
      "D": "模拟输出"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 268,
    "question": "GPIO输出50MHz模式适用于：",
    "options": {
      "A": "低频按键检测",
      "B": "驱动普通LED",
      "C": "高速通信接口（SPI、FSMC等）",
      "D": "I2C通信"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 269,
    "question": "对于I2C通信的SDA和SCL引脚，应配置为：",
    "options": {
      "A": "推挽输出",
      "B": "开漏输出（复用）",
      "C": "上拉输入",
      "D": "模拟输入"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 270,
    "question": "对于I2C通信的SDA和SCL引脚，应配置为：",
    "options": {
      "A": "推挽输出",
      "B": "开漏输出（复用）",
      "C": "上拉输入",
      "D": "模拟输入"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 271,
    "question": "关于GPIO输出速度和功耗的关系，正确的是：",
    "options": {
      "A": "速度越高，功耗越低",
      "B": "速度越高，功耗越高",
      "C": "速度不影响功耗",
      "D": "速度影响输入特性"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 272,
    "question": "驱动一个需要20mA电流的LED，以下最好的做法是：",
    "options": {
      "A": "直接连接到GPIO推挽输出",
      "B": "加三极管或MOSFET驱动",
      "C": "使用开漏输出",
      "D": "配置为输入模式"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 273,
    "question": "GPIO配置为开漏输出且无外部上拉时，输出高电平的实际电压为：",
    "options": {
      "A": "VCC",
      "B": "GND",
      "C": "高阻态，电压不确定",
      "D": "1/2 VCC"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 274,
    "question": "复用推挽输出模式用于：",
    "options": {
      "A": "普通IO口控制",
      "B": "片上外设需要强驱动输出",
      "C": "I2C通信",
      "D": "模拟信号输入"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 275,
    "question": "以下哪个外设通常使用复用开漏输出？",
    "options": {
      "A": "USART TX",
      "B": "SPI SCLK",
      "C": "I2C SDA",
      "D": "PWM输出"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 276,
    "question": "外部中断可以支持的触发方式不包括：",
    "options": {
      "A": "上升沿触发",
      "B": "下降沿触发",
      "C": "双边沿触发",
      "D": "高电平触发"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 277,
    "question": "当多个引脚（如PA0和PB0）同时使能外部中断时，会怎样？",
    "options": {
      "A": "两个都能独立触发",
      "B": "只能PA0生效",
      "C": "实际上只有一条EXTI线，只能一个端口",
      "D": "中断冲突，芯片无法工作"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 278,
    "question": "GPIO的位带操作可以实现：",
    "options": {
      "A": "原子级的位读写",
      "B": "提升输出速度",
      "C": "降低功耗",
      "D": "改变工作模式"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 279,
    "question": "在STM32F103中，GPIOA的基地址是：",
    "options": {
      "A": "0x40010800",
      "B": "0x40020000",
      "C": "0x40010000",
      "D": "0x40011000"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 280,
    "question": "以下关于GPIO初始化的错误说法是：",
    "options": {
      "A": "使用前必须使能GPIO时钟",
      "B": "不使用的引脚可以配置为模拟输入降低功耗",
      "C": "输出速度越高EMI干扰越大",
      "D": "同一组GPIO的所有引脚必须配置为相同速度"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 281,
    "question": "STM32F103 的 NVIC 支持最多多少个中断通道？",
    "options": {
      "A": "16个",
      "B": "32个",
      "C": "60个",
      "D": "240个"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 282,
    "question": "STM32F103 的中断优先级分为抢占优先级和子优先级，最多支持多少级抢占优先级？",
    "options": {
      "A": "4级",
      "B": "8级",
      "C": "16级",
      "D": "32级"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 283,
    "question": "关于 NVIC 优先级分组的说法，正确的是？",
    "options": {
      "A": "分组一旦设置，整个系统所有中断必须使用相同的分组",
      "B": "不同中断可以设置不同的优先级分组",
      "C": "优先级分组由每个中断独立配置",
      "D": "优先级分组只对 SysTick 有效"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 284,
    "question": "两个中断同时发生时，NVIC 先响应哪个？",
    "options": {
      "A": "中断号较小的",
      "B": "抢占优先级较高的",
      "C": "子优先级较高的",
      "D": "先使能的中断"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 285,
    "question": "Cortex-M3 内核中，下列哪个异常具有最高的优先级？",
    "options": {
      "A": "SysTick 异常",
      "B": "PendSV 异常",
      "C": "HardFault 异常",
      "D": "复位异常"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 286,
    "question": "关于中断向量表，下列说法正确的是？",
    "options": {
      "A": "向量表位置固定，不能修改",
      "B": "向量表可以重定位到 SRAM 或 Flash 的其他地址",
      "C": "向量表只能放在 Flash 起始地址",
      "D": "向量表大小固定为 32 个条目"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 287,
    "question": "STM32F103 的 NVIC 中，中断挂起状态寄存器的作用是？",
    "options": {
      "A": "清除中断标志",
      "B": "查询中断是否被响应",
      "C": "软件触发中断或查询中断是否挂起",
      "D": "配置中断优先级"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 288,
    "question": "STM32F103 的 EXTI 支持多少个外部中断线（用于 GPIO 输入）？",
    "options": {
      "A": "8个",
      "B": "12个",
      "C": "16个",
      "D": "20个"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 289,
    "question": "当 PA0 和 PB0 同时配置为外部中断输入时，会发生什么？",
    "options": {
      "A": "两个都可以正常工作",
      "B": "只有 PA0 可以工作",
      "C": "只有 PB0 可以工作",
      "D": "同一个中断线不能同时映射到两个 GPIO 引脚"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 290,
    "question": "若一个按键按下时 IO 口电平从高变低，松开时从低变高，要实现按下瞬间触发中断，应配置触发方式为？",
    "options": {
      "A": "上升沿触发",
      "B": "下降沿触发",
      "C": "双边沿触发",
      "D": "低电平触发"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 291,
    "question": "按键消抖的原因是什么？",
    "options": {
      "A": "按键按下时电平变化不稳定，会产生多次抖动",
      "B": "按键按下速度太快",
      "C": "CPU 处理速度太慢",
      "D": "中断优先级设置错误"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 292,
    "question": "常见的按键硬件连接方式中，需要配置 GPIO 为上拉输入的是？",
    "options": {
      "A": "按键一端接 VCC，另一端接 GPIO",
      "B": "按键一端接 GND，另一端接 GPIO",
      "C": "按键两端都悬空",
      "D": "按键两端都接 VCC"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 293,
    "question": "按键与 GPIO 连接时，若不使用外部上拉/下拉电阻，可以如何配置？",
    "options": {
      "A": "配置 GPIO 为推挽输出",
      "B": "配置 GPIO 为浮空输入",
      "C": "配置 GPIO 为复用功能",
      "D": "使能 GPIO 内部上拉/下拉电阻"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 294,
    "question": "按键电路中，串联一个 100Ω~1kΩ 电阻的作用通常是？",
    "options": {
      "A": "增大按键电流",
      "B": "限制电流，保护 GPIO 引脚在意外短路时不受损",
      "C": "提高按键灵敏度",
      "D": "加快电平变化速度"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 295,
    "question": "按键电路设计中，“上拉电阻”的主要作用是？",
    "options": {
      "A": "提高按键按下时的电流",
      "B": "保持空闲时 IO 口为确定的高电平",
      "C": "降低功耗",
      "D": "加快按键响应速度"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 296,
    "question": "关于中断中的按键消抖，最合理的做法是？",
    "options": {
      "A": "中断中直接调用 delay_ms(20) 延时消抖",
      "B": "中断中仅记录触发时间和标志位，在主循环或定时器中检测",
      "C": "中断中不做消抖，相信硬件电路",
      "D": "中断中将按键事件直接处理后返回"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 297,
    "question": "当使用高级编译器优化时，中断服务函数中的变量访问需要注意什么？",
    "options": {
      "A": "无需特殊注意",
      "B": "共享变量应使用 volatile 修饰或使用临界区保护",
      "C": "变量必须定义为静态",
      "D": "变量必须定义为全局"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 298,
    "question": "USART与UART的核心区别是：",
    "options": {
      "A": "工作电压不同",
      "B": "USART支持同步模式，UART仅支持异步",
      "C": "USART速度更快",
      "D": "引脚数量不同"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 299,
    "question": "异步串行通信中，数据帧的起始位电平是：",
    "options": {
      "A": "高电平",
      "B": "低电平",
      "C": "上升沿",
      "D": "下降沿"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 300,
    "question": "串口通信中，LSB First的含义是：",
    "options": {
      "A": "先发送最高有效位",
      "B": "先发送最低有效位",
      "C": "先停止位后数据位",
      "D": "先校验位后数据位"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 301,
    "question": "STM32F103 的USART1挂载在哪条总线上？",
    "options": {
      "A": "AHB总线",
      "B": "APB1总线",
      "C": "APB2总线",
      "D": "直接挂在CPU内核"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 302,
    "question": "串口通信中，空闲帧的定义是：",
    "options": {
      "A": "全0的帧",
      "B": "全1的帧",
      "C": "一个起始位+停止位",
      "D": "没有数据传输"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 303,
    "question": "串口数据的停止位可以配置的长度不包括：",
    "options": {
      "A": "0.5位",
      "B": "1位",
      "C": "1.5位",
      "D": "2位"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 304,
    "question": "最常见的无校验串口数据帧格式为：",
    "options": {
      "A": "8位数据 + 1位起始位 + 1位停止位",
      "B": "7位数据 + 1位起始位 + 2位停止位",
      "C": "8位数据 + 1位起始位 + 1位停止位 + 奇校验",
      "D": "9位数据 + 1位起始位 + 1位停止位"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 305,
    "question": "串口硬件的TX引脚默认空闲状态电平是：",
    "options": {
      "A": "低电平",
      "B": "高电平",
      "C": "高阻态",
      "D": "由配置决定"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 306,
    "question": "STM32F103 的ADC分辨率是多少位？",
    "options": {
      "A": "10位",
      "B": "12位",
      "C": "16位",
      "D": "24位"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 307,
    "question": "STM32F103 系列最多有多少个独立的ADC模块？",
    "options": {
      "A": "1个",
      "B": "2个",
      "C": "3个",
      "D": "4个"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 308,
    "question": "STM32F103 的ADC参考电压通常是？",
    "options": {
      "A": "内部1.2V",
      "B": "VDDA（3.3V）",
      "C": "VREF+（可外部输入）",
      "D": "3.0V固定"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 309,
    "question": "12位ADC的数字量输出范围是？",
    "options": {
      "A": "0–255",
      "B": "0–1023",
      "C": "0–2047",
      "D": "0–4095"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 310,
    "question": "当ADC输入电压等于VREF+时，转换结果约为？",
    "options": {
      "A": "0",
      "B": "2048",
      "C": "4095",
      "D": "4096"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 311,
    "question": "STM32F103 的ADC属于什么类型？",
    "options": {
      "A": "逐次逼近型（SAR）",
      "B": "双积分型",
      "C": "闪存型（Flash）",
      "D": "Σ-Δ型"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 312,
    "question": "STM32F103 的ADC最大采样速率是多少？",
    "options": {
      "A": "100ksps",
      "B": "500ksps",
      "C": "1Msps",
      "D": "5Msps"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 313,
    "question": "ADC转换结果存储在哪个寄存器中？",
    "options": {
      "A": "ADC_CR",
      "B": "ADC_SR",
      "C": "ADC_DR",
      "D": "ADC_SMPR"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 315,
    "question": "STM32F103 的内部温度传感器连接到哪个ADC通道？",
    "options": {
      "A": "通道0",
      "B": "通道16",
      "C": "通道17",
      "D": "通道18"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 316,
    "question": "内部参考电压（VREFINT）连接到哪个ADC通道？",
    "options": {
      "A": "通道16",
      "B": "通道17",
      "C": "通道0",
      "D": "通道15"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 317,
    "question": "使用ADC通道0，对应的GPIO引脚是？",
    "options": {
      "A": "PA0",
      "B": "PA1",
      "C": "PB0",
      "D": "PC0"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 318,
    "question": "ADC输入引脚应配置为什么GPIO模式？",
    "options": {
      "A": "浮空输入",
      "B": "上拉输入",
      "C": "下拉输入",
      "D": "模拟输入"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 319,
    "question": "最多可以配置多少个注入通道？",
    "options": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 320,
    "question": "连续转换模式的含义是？",
    "options": {
      "A": "转换一次停止",
      "B": "连续转换同一通道",
      "C": "自动扫描多个通道",
      "D": "注入通道转换"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 321,
    "question": "扫描模式通常用于？",
    "options": {
      "A": "单次转换单个通道",
      "B": "依次转换多个通道",
      "C": "连续转换单一通道",
      "D": "注入组转换"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 322,
    "question": "间断模式（DiscMode）的作用是？",
    "options": {
      "A": "每组转换一定数量通道后暂停",
      "B": "降低采样精度",
      "C": "提高采样速度",
      "D": "忽略部分通道"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 323,
    "question": "注入模式（Injected）与常规组（Regular）的区别是？",
    "options": {
      "A": "注入组优先级更高",
      "B": "注入组分辨率更高",
      "C": "注入组只能单次转换",
      "D": "两者无差别"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 324,
    "question": "STM32F103 ADC支持的最小采样周期数是多少？",
    "options": {
      "A": "1.5周期",
      "B": "7.5周期",
      "C": "13.5周期",
      "D": "28.5周期"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 325,
    "question": "采样周期越长，下列哪个表述正确？",
    "options": {
      "A": "转换速度越快",
      "B": "采样精度越高",
      "C": "功耗越低",
      "D": "通道数越多"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 326,
    "question": "为了提高ADC精度，开机后应首先执行什么操作？",
    "options": {
      "A": "设置采样时间",
      "B": "校准",
      "C": "使能连续转换",
      "D": "配置DMA"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 328,
    "question": "如果VREF+是3.3V，测量1.65V的电压，12位ADC的期望值约为？",
    "options": {
      "A": "1024",
      "B": "2048",
      "C": "3072",
      "D": "4095"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 329,
    "question": "ADC“失调误差”的概念是？",
    "options": {
      "A": "零点偏移",
      "B": "满量程误差",
      "C": "增益误差",
      "D": "量化误差"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 330,
    "question": "关于ADC的注入通道，下面哪个正确？",
    "options": {
      "A": "注入通道转换结束后会覆盖常规组数据",
      "B": "注入通道可以打断常规组转换",
      "C": "注入通道转换速度更慢",
      "D": "注入通道只能软件触发"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 331,
    "question": "ADC过采样技术的主要作用是？",
    "options": {
      "A": "提高分辨率",
      "B": "提高转换速度",
      "C": "降低功耗",
      "D": "增加通道数"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 332,
    "question": "ADC模拟看门狗的作用是？",
    "options": {
      "A": "检测输入电压超出阈值范围",
      "B": "复位ADC",
      "C": "校准ADC",
      "D": "触发DMA"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 333,
    "question": "STM32F103 ADC的时钟源来自？",
    "options": {
      "A": "HSI直接提供",
      "B": "PCLK2分频提供",
      "C": "外部晶振直接",
      "D": "LSI"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 334,
    "question": "STM32F103系列微控制器共有多少个定时器（不包括SysTick和看门狗）？",
    "options": {
      "A": "4个",
      "B": "6个",
      "C": "8个",
      "D": "10个"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 335,
    "question": "下列哪个定时器属于高级控制定时器？",
    "options": {
      "A": "TIM2",
      "B": "TIM4",
      "C": "TIM6",
      "D": "TIM1"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 336,
    "question": "STM32F103中，基本定时器包括哪两个？",
    "options": {
      "A": "TIM1和TIM8",
      "B": "TIM2和TIM3",
      "C": "TIM6和TIM7",
      "D": "TIM4和TIM5"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 337,
    "question": "通用定时器的计数器位宽是多少？",
    "options": {
      "A": "8位",
      "B": "16位",
      "C": "24位",
      "D": "32位"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 338,
    "question": "关于基本定时器，下列说法错误的是？",
    "options": {
      "A": "不具备输入捕获功能",
      "B": "不具备输出比较功能",
      "C": "可以产生PWM波形",
      "D": "可以触发DAC转换"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 339,
    "question": "高级定时器相比通用定时器，增加了以下哪个功能？",
    "options": {
      "A": "输入捕获",
      "B": "输出比较",
      "C": "互补输出和死区插入",
      "D": "计数器向上计数"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 340,
    "question": "TIM2、TIM3、TIM4、TIM5连接在哪个总线上？",
    "options": {
      "A": "APB1",
      "B": "APB2",
      "C": "AHB",
      "D": "直接连接CPU"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 341,
    "question": "定时器时基单元不包括以下哪个部分？",
    "options": {
      "A": "自动重载寄存器（ARR）",
      "B": "计数器（CNT）",
      "C": "预分频寄存器（PSC）",
      "D": "溢出标志寄存器"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 342,
    "question": "STM32通用定时器的计数器工作模式不包括？",
    "options": {
      "A": "向上计数模式",
      "B": "向下计数模式",
      "C": "中央对齐计数模式",
      "D": "随机计数模式"
    },
    "answer": "D",
    "correct": true
  },
  {
    "id": 343,
    "question": "定时器的预分频系数PSC为多少位寄存器？",
    "options": {
      "A": "8位",
      "B": "16位",
      "C": "24位",
      "D": "32位"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 344,
    "question": "设置TIM2的PSC=7199，ARR=9999，已知定时器时钟为72MHz，定时器的溢出周期是多少？",
    "options": {
      "A": "0.1秒",
      "B": "1秒",
      "C": "10秒",
      "D": "100毫秒"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 345,
    "question": "STM32的SysTick定时器是多少位的？",
    "options": {
      "A": "8位",
      "B": "16位",
      "C": "24位",
      "D": "32位"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 346,
    "question": "高级定时器的互补输出功能主要用于什么应用？",
    "options": {
      "A": "音频播放",
      "B": "电机控制",
      "C": "按键扫描",
      "D": "串口通信"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 347,
    "question": "高级定时器的“刹车”（Break）功能的作用是？",
    "options": {
      "A": "停止所有PWM输出",
      "B": "降低定时器频率",
      "C": "清除所有中断标志",
      "D": "重置计数器"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 348,
    "question": "关于死区时间（Dead Time）的描述，正确的是？",
    "options": {
      "A": "死区时间越长越好",
      "B": "死区时间用于避免互补PWM的上下管直通",
      "C": "基本定时器也支持死区设置",
      "D": "死区时间由用户程序动态调整"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 349,
    "question": "输入捕获模式主要用于什么场景？",
    "options": {
      "A": "产生PWM波形",
      "B": "测量外部信号的频率、周期和脉宽",
      "C": "进行模数转换",
      "D": "触发DMA传输"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 350,
    "question": "若想使用TIM1的PWM输出，以下哪项配置必不可少？",
    "options": {
      "A": "使能MOE（主输出使能）位",
      "B": "设置TIM1为基本定时器模式",
      "C": "禁用所有中断",
      "D": "将GPIO配置为模拟输入"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 351,
    "question": "关于独立看门狗（IWDG），下列说法正确的是？",
    "options": {
      "A": "使用LSI或LSE作为时钟，在停止和待机模式下仍能工作",
      "B": "使用APB1总线时钟",
      "C": "12位递减计数器",
      "D": "需要定期喂狗，否则产生NMI中断"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 353,
    "question": "SysTick定时器的主要用途是？",
    "options": {
      "A": "产生PWM信号",
      "B": "提供RTOS系统时钟节拍、提供精确延时",
      "C": "测量外部信号频率",
      "D": "驱动蜂鸣器"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 354,
    "question": "使用定时器实现精确延时，以下说法正确的是？",
    "options": {
      "A": "使用循环空指令即可实现精确延时",
      "B": "使用定时器中断并在中断中设置标志位是最精确的延时方式",
      "C": "使用定时器查询方式（等待更新标志）可以获得微秒级精度",
      "D": "定时器精度永远高于SysTick"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 355,
    "question": "μC/OS-III 是一个什么类型的操作系统？",
    "options": {
      "A": "非抢占式内核",
      "B": "抢占式实时多任务内核",
      "C": "分时操作系统",
      "D": "协作式内核"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 356,
    "question": "关于 μC/OS 的任务，下列说法错误的是？",
    "options": {
      "A": "任务通常是一个无限循环",
      "B": "任务函数可以执行 return 语句正常返回",
      "C": "每个任务都有自己的任务堆栈",
      "D": "任务由任务堆栈、任务控制块和任务函数三部分组成"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 357,
    "question": "STM32F103 的 Cortex-M3 内核中，μC/OS 的任务切换通常通过哪个异常/中断实现？",
    "options": {
      "A": "HardFault",
      "B": "SysTick",
      "C": "PendSV",
      "D": "SVC"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 358,
    "question": "μC/OS 的系统心跳通常由 STM32F103 的哪个外设提供？",
    "options": {
      "A": "TIM2",
      "B": "SysTick",
      "C": "USART1",
      "D": "RTC"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 359,
    "question": "在 μC/OS-II 中，所有任务都具有不同的优先级，这属于哪种调度算法？",
    "options": {
      "A": "时间片轮转调度",
      "B": "先来先服务调度",
      "C": "固定优先级抢占式调度",
      "D": "多级队列调度"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 360,
    "question": "在 STM32F103 上移植 μC/OS，需要修改启动文件，主要是为了重定向哪个中断向量？",
    "options": {
      "A": "HardFault_Handler",
      "B": "PendSV_Handler 和 SysTick_Handler",
      "C": "NMI_Handler",
      "D": "USB_HP_CAN1_TX_IRQHandler"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 361,
    "question": "任务控制块（OS_TCB）的作用是什么？",
    "options": {
      "A": "存储任务函数代码",
      "B": "记录任务的堆栈指针、优先级、状态等属性",
      "C": "存储全局变量",
      "D": "用于中断服务函数"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 362,
    "question": "关于临界段（Critical Section）代码，以下描述正确的是？",
    "options": {
      "A": "可以被中断打断",
      "B": "必须通过关中断或锁调度器来保护",
      "C": "仅能通过互斥信号量保护",
      "D": "执行时间越长越好"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 363,
    "question": "在 main 函数中，μC/OS 启动任务调度的函数是？",
    "options": {
      "A": "OSInit()",
      "B": "OSTaskCreate()",
      "C": "OSStart()",
      "D": "OSSched()"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 364,
    "question": "下列关于中断服务函数（ISR）的写法，正确的 μC/OS 规范是？",
    "options": {
      "A": "直接编写代码，无需特殊处理",
      "B": "在 ISR 开头调用 OSIntEnter()，结尾调用 OSIntExit()",
      "C": "禁止在 ISR 中调用任何函数",
      "D": "必须使用 OS_CRITICAL_ENTER()"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 365,
    "question": "在 μC/OS-II 中，任务切换最终是通过触发哪个异常来实现的？",
    "options": {
      "A": "通过软中断指令触发 SVC",
      "B": "通过设置 PendSV 异常挂起位",
      "C": "直接跳转到函数地址",
      "D": "通过复位 CPU"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 366,
    "question": "以下关于 os_cpu_a.asm 文件作用的描述，正确的是？",
    "options": {
      "A": "定义系统配置文件",
      "B": "编写系统主函数",
      "C": "用汇编语言实现任务切换、中断进入/退出等底层代码",
      "D": "初始化外设"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 367,
    "question": "当高优先级任务就绪后，μC/OS-III 会立即剥夺当前低优先级任务的 CPU 使用权，这体现了什么特性？",
    "options": {
      "A": "时间片管理",
      "B": "抢占式内核",
      "C": "不可剥夺内核",
      "D": "协作式多任务"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 368,
    "question": "任务中调用OSTimeDlyHMSM(0，0，1，0) 的作用是？",
    "options": {
      "A": "死机",
      "B": "任务进入就绪态",
      "C": "任务挂起1秒后进入等待状态，触发任务调度",
      "D": "删除任务"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 369,
    "question": "μC/OS 中，优先级数值与优先级高低的关系通常是？",
    "options": {
      "A": "数值越大，优先级越高",
      "B": "数值越小，优先级越高",
      "C": "数值等于优先级",
      "D": "由用户任意定义"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 370,
    "question": "下面哪个 API 函数用于恢复被挂起的任务？",
    "options": {
      "A": "OSTaskDel()",
      "B": "OSTaskSuspend()",
      "C": "OSTaskResume()",
      "D": "OSTaskChangePrio()"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 371,
    "question": "空闲任务（Idle Task）在 μC/OS 中的优先级一般是？",
    "options": {
      "A": "最高优先级",
      "B": "最低优先级",
      "C": "与用户任务相同",
      "D": "不可配置"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 372,
    "question": "调用 OSTaskDel() 删除任务后，该任务占用的堆栈和 TCB 空间会怎样？",
    "options": {
      "A": "立即被其他任务占用",
      "B": "标记为空闲，需要应用代码手动回收或等待系统空闲任务回收",
      "C": "仍然存在，无法删除",
      "D": "自动清零"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 373,
    "question": "关于“优先级反转”（Priority Inversion）问题，以下说法正确的是？",
    "options": {
      "A": "高优先级任务被低优先级任务无限期阻塞的现象",
      "B": "低优先级任务被高优先级任务抢占",
      "C": "任务运行速度变快",
      "D": "系统时钟紊乱"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 374,
    "question": "在 μC/OS 中，每个任务都需要定义任务堆栈，堆栈大小的确定依据是？",
    "options": {
      "A": "固定的 64 字节",
      "B": "只要能编译通过即可",
      "C": "根据任务的局部变量、函数调用嵌套深度和中断保存现场需求估算",
      "D": "与 CPU 的主频成正比"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 375,
    "question": "调用 OS_CRITICAL_ENTER() 进入临界区后，若此时发生外部中断，系统会如何处理？",
    "options": {
      "A": "立即响应中断",
      "B": "中断被暂时禁止，直到退出临界区",
      "C": "系统死机",
      "D": "仅响应 PendSV 中断"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 376,
    "question": "下列哪个机制常用于解决多任务访问同一共享资源的问题？",
    "options": {
      "A": "信号量",
      "B": "消息队列",
      "C": "事件标志组",
      "D": "时间片"
    },
    "answer": "A",
    "correct": true
  },
  {
    "id": 377,
    "question": "以下哪个是 μC/OS 提供的任务间通信机制，可以传递多个字节的数据？",
    "options": {
      "A": "全局变量",
      "B": "消息队列",
      "C": "事件标志",
      "D": "信号量"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 378,
    "question": "使用信号量进行任务同步时，如果信号量初始值为 0，任务 A 调用 OSSemPend()，会发生什么？",
    "options": {
      "A": "任务继续运行",
      "B": "任务进入就绪态",
      "C": "任务进入等待态，直到其他任务调用 OSSemPost()",
      "D": "系统崩溃"
    },
    "answer": "C",
    "correct": true
  },
  {
    "id": 379,
    "question": "在 STM32F103 上，以下哪种情况会触发 HardFault（硬错误）？",
    "options": {
      "A": "执行 NOP 指令",
      "B": "访问非法内存地址或堆栈溢出导致 PC 指针指向无效地址",
      "C": "调用 OSTimeDly",
      "D": "使能中断"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 380,
    "question": "μC/OS 的内存管理特点是什么？",
    "options": {
      "A": "提供可变大小的内存分配",
      "B": "提供固定大小的内存块分配，用于解决内存碎片问题",
      "C": "使用标准的 malloc/free",
      "D": "不支持动态内存"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 381,
    "question": "对于任务中的局部变量，以下描述正确的是？",
    "options": {
      "A": "存储在全局区",
      "B": "存储在任务的堆栈中",
      "C": "存储在 TCB 中",
      "D": "存储在寄存器中"
    },
    "answer": "B",
    "correct": true
  },
  {
    "id": 382,
    "question": "关于 μC/OS 的中断嵌套，以下说法正确的是？",
    "options": {
      "A": "不支持中断嵌套",
      "B": "通过 OSIntNestingCtr 记录嵌套深度，允许高优先级中断打断低优先级中断",
      "C": "必须手动保存所有寄存器",
      "D": "中断嵌套会导致死机"
    },
    "answer": "B",
    "correct": true
  }
];
