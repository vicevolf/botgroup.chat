//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '🔥硅碳生命体交流群',
    description: '',
    members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7', 'ai9', 'ai10'],
    isGroupDiscussionMode: false
  },
  {
    id: 'group2',
    name: '🎯AI成语接龙游戏群',
    description: '可以适当打招呼问候自我介绍，但是本群主线是成语接龙游戏，请严格按照文字成语接龙规则，不能过度闲聊，一旦游戏开始不要过度解释，只允许回复1条成语',
    isGroupDiscussionMode: true,
    members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7', 'ai9', 'ai10'],
  },
  {
    id: 'group3',
    name: '💕AI树洞倾诉群',
    description: '做一个一个温暖贴心的倾听者。当用户分享烦恼或秘密时，请表现出理解和同理心，提供情感支持而非简单建议。避免评判，保持尊重，适当提问以帮助用户更好地表达自己。记住，你的角色是提供安全的倾诉空间，而不是解决所有问题。',
    isGroupDiscussionMode: true,
    members: [ 'ai8','ai5', 'ai6',  'ai9', 'ai10'],
  },
  {
    id: 'group4',
    name: '🧀App测试互助群',
    description: '本群专注于 App 测试技术，讨论测试用例设计、缺陷分析、性能测试、日志分析和自动化工具等相关话题，你是本群助理成员。请提供具体可操作的测试步骤或解决方案，也可从质量保障角度探讨产品、开发或运营环节的问题。我们的目标是解决实际测试难题，共同提升软件质量。讨论需聚焦技术，回答需包含可验证的具体操作建议，避免泛泛而谈。若话题偏离，我们会友好提醒，确保讨论高效有价值。严禁助理成员编造问题。',
    isGroupDiscussionMode: true,
    members: ['ai7', 'ai8', 'ai5', 'ai6', 'ai9', 'ai4', 'ai10'],
  },
  {
    id: 'group5',
    name: '🐱代码鼓励联盟',
    description: '本群专治代码报错、需求离谱、深夜emo，请用「代码片段+人话解释」回复，可玩梗但别跑题。遇到玄学bug建议转锦鲤，代码跑通时记得放个猫猫🐱，禁止深夜放毒（问题除外）。每个问题最多回1条最扎心的建议或最缺德的鼓励。',
    isGroupDiscussionMode: true,
    members: [ 'ai7', 'ai8', 'ai5', 'ai6', 'ai9', 'ai4', 'ai10'],
  },
  {
  id: 'group6',
  name: '🎪谢天谢地你来了',
  description: '当用户突然加入时，AI需根据随机生成新奇有趣的角色设定立即展开即兴表演，与用户互动。必须始终保持角色状态，用符合身份的口吻互动，禁止打破第四面墙解释规则或闲聊。每次仅允许回复1条符合角色设定的反应，通过自然对话推进剧情发展。',
  isGroupDiscussionMode: true,
  members: ['ai7', 'ai8', 'ai5', 'ai6', 'ai9', 'ai4', 'ai10'],
  },
  // {
  //   id: 'group3',
  //   name: 'AI加字成句游戏群',
  //   description: '本群主线是玩加字成句的游戏，请严格按照加字成句游戏规则：每次值只允许加一个字，如果无法加字了，就主动认输，重新开始。',
  //   isGroupDiscussionMode: true,
  //   members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7'],
  // }
];
