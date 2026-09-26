export const defaultPrompts = [
  {
    title: "어휘 1 | Vocabulary 1",
    prompt: `Can you explain vocabulary 1? For each word in the vocabulary list, I want you to provide the following:

1. **Word Details**:
   - The original Korean word.
   - A clear definition of the word directly below it.

2. **Meanings and Related Words**:
   - Primary meaning(s) of the word.
   - Any related words (e.g., synonyms or words from the same category).
   - Opposite meanings (antonyms), if available.

3. **Contextual Usage**:
   - Common phrases or sentences where the word is used (2 simple examples).

4. **Formatting**:
   Use clean headings and bullet points for each word. Organize the output in a visually clear and easy-to-read format, like this:

   ### Word: 요리
   - *Definition*: The act of preparing and cooking food.
   - *Meaning*: Cooking, cuisine
   - *Related Words*: 요리사 (cook/chef), 요리법 (recipe), 요리하다 (cooking), 조리하다 (cooking), 음식을 만들다 (cooking food), (밥을) 짓다 (cooking rice), 재료 (ingredients)
   - *Antonyms*: None (if none exist, explicitly state so)
   - *Example Sentence*:
     나는 요리를 좋아해요. (I like cooking.)
     오늘 저녁은 요리할 거예요. (I will cook tonight for dinner.)

Please follow this format for every word in the vocabulary list and ensure the information is accurate and comprehensive. Do not include pronunciation.`,
    dateCreated: null,
  },
  {
    title: "어휘 2 | Vocabulary 2",
    prompt: `Can you explain vocabulary 2? For each word in the vocabulary list, I want you to provide the following:

1.  **Word Details**:
    - The original Korean word.
    - A clear definition of the word directly below it.

2.  **Meanings and Related Words**:
    - Primary meaning(s) of the word.
    - Any related words (e.g., synonyms or words from the same category).
    - Opposite meanings (antonyms), if available.

3.  **Contextual Usage**:
    - Common phrases or sentences where the word is used (2 simple examples).

4.  **Formatting**:
    Use clean headings and bullet points for each word. Organize the output in a visually clear and easy-to-read format, like this:

    ### Word: 요리
    - *Definition*: The act of preparing and cooking food.
    - *Meaning*: Cooking, cuisine
    - *Related Words*: 요리사 (cook/chef), 요리법 (recipe), 요리하다 (cooking), 조리하다 (cooking), 음식을 만들다 (cooking food), (밥을) 짓다 (cooking rice), 재료 (ingredients)
    - *Antonyms*: None (if none exist, explicitly state so)
    - *Example Sentence*:
      나는 요리를 좋아해요. (I like cooking.)
      오늘 저녁은 요리할 거예요. (I will cook tonight for dinner.)

Please follow this format for every word in the vocabulary list and ensure the information is accurate and comprehensive. Do not include pronunciation.`,
    dateCreated: null,
  },
  {
    title: "대화 1 | Conversation 1",
    prompt: `Explain Conversation 1. I want you to analyze and translate the conversation 1 as follows:

1. **Word-by-Word Breakdown**:

    Break down each sentence in the conversation word by word, placing each word on a new line.
    For each word, write the original Korean word, followed by its English translation on the same line.
    Format it like this:

    Korean Word - Translation
    Korean Word - Translation
    Korean Word - Translation

2. **Full Conversation Translation**:

    After breaking down each sentence word by word, provide the full English translation of the entire conversation below the breakdown.

3. **Formatting**:

    Use clear headings for "Word-by-Word Breakdown" and "Full Translation."
    Organize the output neatly with each word on a new line. Example:

    ### Word-by-Word Breakdown:
    사람 - Person
    안녕하세요 - Hello
    어디 - Where
    가세요 - Are you going

    다음 - Next
    시간 - Time
    에 - At
    뭐 - What
    할까요 - Shall we do

    ### Full Translation:
    Person A: Hello! Where are you going?
    Person B: What shall we do next time?

Please follow this format for every conversation in the chapter. Ensure all translations are accurate and clear. Do not include pronunciation`,
    dateCreated: null,
  },
  {
    title: "대화 2 | Conversation 2",
    prompt: `Explain Conversation 2. I want you to analyze and translate the conversation 2 as follows:

1.  **Word-by-Word Breakdown**:

    Break down each sentence in the conversation word by word, placing each word on a new line.
    For each word, write the original Korean word, followed by its English translation on the same line.
    Format it like this:

    Korean Word - Translation
    Korean Word - Translation
    Korean Word - Translation

2.  **Full Conversation Translation**:

    After breaking down each sentence word by word, provide the full English translation of the entire conversation below the breakdown.

3.  **Formatting**:

    Use clear headings for "Word-by-Word Breakdown" and "Full Translation."
    Organize the output neatly with each word on a new line. Example:

    ### Word-by-Word Breakdown:
    사람 - Person
    안녕하세요 - Hello
    어디 - Where
    가세요 - Are you going

    다음 - Next
    시간 - Time
    에 - At
    뭐 - What
    할까요 - Shall we do

    ### Full Translation:
    Person A: Hello! Where are you going?
    Person B: What shall we do next time?

Please follow this format for every conversation in the chapter. Ensure all translations are accurate and clear. Do not include pronunciation`,
    dateCreated: null,
  },
  {
    title: "문법 1 | Grammer 1",
    prompt: `Explain grammer 1. I want you to analyze and explain the grammar 1 point as follows:

1. **Word-by-Word Breakdown**:
   Break down the entire Korean-written explanation word by word, placing each word on a new line.
   For each word, write the original Korean word followed by its English translation on the same line.
   Format it like this:

   Korean Word - Translation
   Korean Word - Translation
   Korean Word - Translation

2. **Grammar Explanation**:
   Based on the grammar point in the section, explain the grammar in detail.
   Include the following:
    - Why it is used.
    - When it should be used.
    - Conditions or rules for using it.
    - Any exceptions, if applicable.

3. **Examples**:
    Provide 10 very simple example sentences using the grammar point.
    Use only basic and easy Korean words in these sentences.
    For each sentence, provide the English translation below it.
    Format it like this:

    Korean Sentence
    - English Translation

4. **Formatting**:
    Use clear headings for each section: "Word-by-Word Breakdown," "Grammar Explanation," and "Examples."
    Organize the output neatly for readability. Example:

    ### Word-by-Word Breakdown:
    문법 - Grammar
    설명 - Explanation
    입니다 - Is

    ### Grammar Explanation:
    This grammar point is used to indicate ...
    It is used when ...
    Conditions to use it include ...

    ### Examples:
    1. 나는 학교에 갑니다.
       - I go to school.
    2. 그는 책을 읽습니다.
       - He reads a book.
    3. 오늘은 날씨가 좋습니다.
       - The weather is nice today.
    ... (and so on for 5 sentences)

Please follow this format for every grammar section. Ensure all translations and explanations are accurate and simple. Do not include pronunciation`,
    dateCreated: null,
  },
  {
    title: "문법 2 | Grammer 2",
    prompt: `Explain grammer 2. I want you to analyze and explain the grammar 2 point as follows:

1.  **Word-by-Word Breakdown**:
    Break down the entire Korean-written explanation word by word, placing each word on a new line.
    For each word, write the original Korean word followed by its English translation on the same line.
    Format it like this:

    Korean Word - Translation
    Korean Word - Translation
    Korean Word - Translation

2.  **Grammar Explanation**:
    Based on the grammar point in the section, explain the grammar in detail.
    Include the following:
     - Why it is used.
     - When it should be used.
     - Conditions or rules for using it.
     - Any exceptions, if applicable.

3.  **Examples**:
    Provide 10 very simple example sentences using the grammar point.
    Use only basic and easy Korean words in these sentences.
    For each sentence, provide the English translation below it.
    Format it like this:

    Korean Sentence
    - English Translation

4.  **Formatting**:
    Use clear headings for each section: "Word-by-Word Breakdown," "Grammar Explanation," and "Examples."
    Organize the output neatly for readability. Example:

    ### Word-by-Word Breakdown:
    문법 - Grammar
    설명 - Explanation
    입니다 - Is

    ### Grammar Explanation:
    This grammar point is used to indicate ...
    It is used when ...
    Conditions to use it include ...

    ### Examples:
    1. 나는 학교에 갑니다.
       - I go to school.
    2. 그는 책을 읽습니다.
       - He reads a book.
    3. 오늘은 날씨가 좋습니다.
       - The weather is nice today.
    ... (and so on for 5 sentences)

Please follow this format for every grammar section. Ensure all translations and explanations are accurate and simple. Do not include pronunciation`,
    dateCreated: null,
  },
  {
    title: "문화와 정보 | Culture and Information",
    prompt: `Explain Culture and Information section. and ignore the english translation, english passage there, no need to touch it.  I want you to analyze and translate the korean passages as follows:

1. **Word-by-Word Breakdown with Related Meanings**:

    For each paragraph, break down the passage word by word.
    Write the Korean word, its English translation beside it, and if the word has related meanings, include them as well.
    Format it like this:

    Korean Word - Translation (Related Meanings: if applicable)
    Korean Word - Translation
    Korean Word - Translation (Related Meanings: if applicable)

2. **Paragraph Separation**:

    Clearly mark the beginning and end of each paragraph.
    Example:

    *First Paragraph Starting*
    (Word-by-word breakdown)
    *First Paragraph Ending*

    *Second Paragraph Starting*
    (Word-by-word breakdown)
    *Second Paragraph Ending*

3. **Full Translation**:

    After the word-by-word breakdown of all paragraphs, provide the full English translation of the passage at the end.

4. **Formatting**:

    Use clear headings for "Word-by-Word Breakdown" and "Full Translation."
    Organize the output neatly for readability. Example:

    ### Word-by-Word Breakdown:

    *First Paragraph Starting*
    문화 - Culture (Related Meanings: tradition, custom)
    는 - Topic marker
    한국 - Korea
    에서 - In
    *First Paragraph Ending*

    *Second Paragraph Starting*
    정보 - Information
    는 - Topic marker
    사람들 - People (Related Meanings: humans, individuals)
    에 - At
    대해 - About
    *Second Paragraph Ending*

    ### Full Translation:
    The culture in Korea is rich and diverse.
    The information talks about how people value traditions and customs.

Please follow this format for every passage in the Culture and Information section. Ensure all translations, related meanings, and full passage translations are accurate and easy to understand. Do not include pronunciation`,
    dateCreated: null,
  },
];

// export const defaultPrompts = [
//   {
//     title: "어휘 1 | Vocabulary 1",
//     prompt: `Explain vocabulary 1: Korean word, definition, primary meaning(s), related words, antonyms. Format clearly with headings & bullets. No pronunciation.

//     Example Output:
//     ### Word: 요리
//     - *Definition*: The act of preparing and cooking food.
//     - *Meaning*: Cooking, cuisine
//     - *Related Words*: 요리사 (cook/chef), 요리법 (recipe), 요리하다 (cooking), 조리하다 (cooking), 음식을 만들다 (cooking food), (밥을) 짓다 (cooking rice), 재료 (ingredients)
//     - *Antonyms*: None
// `,
//     dateCreated: null,
//   },
//   {
//     title: "어휘 2 | Vocabulary 2",
//     prompt: `Explain vocabulary 2: Korean word, definition, primary meaning(s), related words, antonyms. Format clearly with headings & bullets. No pronunciation.

//         Example Output:
//         ### Word: 요리
//         - *Definition*: The act of preparing and cooking food.
//         - *Meaning*: Cooking, cuisine
//         - *Related Words*: 요리사 (cook/chef), 요리법 (recipe), 요리하다 (cooking), 조리하다 (cooking), 음식을 만들다 (cooking food), (밥을) 짓다 (cooking rice), 재료 (ingredients)
//         - *Antonyms*: None
// `,
//     dateCreated: null,
//   },
//   {
//     title: "대화 1 | Conversation 1",
//     prompt: `Explain Conversation 1: Word-by-word breakdown (Korean - Translation), then full translation. Format clearly. No pronunciation.

//        Example Output:
//         ### Word-by-Word Breakdown:
//         사람 - Person
//         안녕하세요 - Hello
//         어디 - Where
//         가세요 - Are you going

//         다음 - Next
//         시간 - Time
//         에 - At
//         뭐 - What
//         할까요 - Shall we do

//         ### Full Translation:
//         Person A: Hello! Where are you going?
//         Person B: What shall we do next time?
// `,
//     dateCreated: null,
//   },
//   {
//     title: "대화 2 | Conversation 2",
//     prompt: `Explain Conversation 2: Word-by-word breakdown (Korean - Translation), then full translation. Format clearly. No pronunciation.

//        Example Output:
//         ### Word-by-Word Breakdown:
//         사람 - Person
//         안녕하세요 - Hello
//         어디 - Where
//         가세요 - Are you going

//         다음 - Next
//         시간 - Time
//         에 - At
//         뭐 - What
//         할까요 - Shall we do

//         ### Full Translation:
//         Person A: Hello! Where are you going?
//         Person B: What shall we do next time?
// `,
//     dateCreated: null,
//   },
//   {
//     title: "문법 1 | Grammer 1",
//     prompt: `Explain Grammar 1: Word-by-word breakdown (Korean - Translation), grammar explanation (why, when, rules), 10 simple example sentences with translations. Format clearly. No pronunciation.

//       Example Output:
//         ### Word-by-Word Breakdown:
//         문법 - Grammar
//         설명 - Explanation
//         입니다 - Is

//         ### Grammar Explanation:
//         This grammar point is used to indicate ... It is used when... Conditions to use it include ...

//         ### Examples:
//         1. 나는 학교에 갑니다.
//            - I go to school.
// `,
//     dateCreated: null,
//   },
//   {
//     title: "문법 2 | Grammer 2",
//     prompt: `Explain Grammar 2: Word-by-word breakdown (Korean - Translation), grammar explanation (why, when, rules), 10 simple example sentences with translations. Format clearly. No pronunciation.

//     Example Output:
//         ### Word-by-Word Breakdown:
//         문법 - Grammar
//         설명 - Explanation
//         입니다 - Is

//         ### Grammar Explanation:
//         This grammar point is used to indicate ... It is used when... Conditions to use it include ...

//         ### Examples:
//         1. 나는 학교에 갑니다.
//            - I go to school.
// `,
//     dateCreated: null,
//   },

//   {
//     title: "문화와 정보 | Culture and Information",
//     prompt: `Explain Culture and Information: Word-by-word breakdown (Korean - Translation, related meanings), paragraph separation, then full translation, also mention the title of each culture/information section in that prompt. Ignore English passage. Format clearly. No pronunciation.

//        Example Output:
//         ### Title: Korean Culture

//         ### Word-by-Word Breakdown:

//         *First Paragraph Starting*
//         문화 - Culture (Related Meanings: tradition, custom)
//         는 - Topic marker
//         한국 - Korea
//         에서 - In
//         *First Paragraph Ending*

//         *Second Paragraph Starting*
//         정보 - Information
//         는 - Topic marker
//         사람들 - People (Related Meanings: humans, individuals)
//         에 - At
//         대해 - About
//        *Second Paragraph Ending*

//         ### Full Translation:
//         The culture in Korea is rich and diverse. The information talks about how people value traditions and customs.
// `,
//     dateCreated: null,
//   },
// ];

// export const defaultNepaliPrompts = [
//   {
//     title: "어휘 1 | Vocabulary 1",
//     prompt: `Vocabulary 1 व्याख्या गर्नुहोस्: Korean word, परिभाषा, मुख्य अर्थ(हरू), सम्बन्धित शब्दहरू, विपरीत अर्थहरू। शीर्षक र बुँदाहरूका साथ स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//     उदाहरण आउटपुट:
//     ### Word: 요리
//     - *परिभाषा*: खाना तयार गर्ने र पकाउने कार्य।
//     - *अर्थ*: खाना पकाउने, व्यञ्जन
//     - *सम्बन्धित शब्दहरू*: 요리사 (भान्से/खाना पकाउने व्यक्ति), 요리법 (पकाने विधि), 요리하다 (खाना पकाउनु), 조리하다 (खाना पकाउनु), 음식을 만들다 (खाना बनाउनु), (밥을) 짓다 (भात पकाउनु), 재료 (सामग्रीहरू)
//     - *विपरीत अर्थहरू*: कुनै छैन
// `,
//     dateCreated: null,
//   },
//   {
//     title: "어휘 2 | Vocabulary 2",
//     prompt: `Vocabulary 2 व्याख्या गर्नुहोस्: Korean word, परिभाषा, मुख्य अर्थ(हरू), सम्बन्धित शब्दहरू, विपरीत अर्थहरू। शीर्षक र बुँदाहरूका साथ स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//         उदाहरण आउटपुट:
//         ### Word: 요리
//         - *परिभाषा*: खाना तयार गर्ने र पकाउने कार्य।
//         - *अर्थ*: खाना पकाउने, व्यञ्जन
//         - *सम्बन्धित शब्दहरू*: 요리사 (भान्से/खाना पकाउने व्यक्ति), 요리법 (पकाने विधि), 요리하다 (खाना पकाउनु), 조리하다 (खाना पकाउनु), 음식을 만들다 (खाना बनाउनु), (밥을) 짓다 (भात पकाउनु), 재료 (सामग्रीहरू)
//         - *विपरीत अर्थहरू*: कुनै छैन
// `,
//     dateCreated: null,
//   },
//   {
//     title: "대화 1 | Conversation 1",
//     prompt: `Conversation 1 व्याख्या गर्नुहोस्: Word-by-word breakdown (Korean - Translation), त्यसपछि full translation. स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//        उदाहरण आउटपुट:
//         ### Word-by-Word Breakdown:
//         사람 - व्यक्ति
//         안녕하세요 - नमस्कार
//         어디 - कहाँ
//         가세요 - जानुहुन्छ

//         다음 - अर्को
//         시간 - समय
//         에 - मा
//         뭐 - के
//         할까요 - गरौँ

//         ### Full Translation:
//        व्यक्ति क: नमस्कार! कहाँ जानुहुन्छ?
//         व्यक्ति ख: अर्को पटक हामी के गरौँ?
// `,
//     dateCreated: null,
//   },
//   {
//     title: "대화 2 | Conversation 2",
//     prompt: `Conversation 2 व्याख्या गर्नुहोस्: Word-by-word breakdown (Korean - Translation), त्यसपछि full translation. स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//        उदाहरण आउटपुट:
//         ### Word-by-Word Breakdown:
//         사람 - व्यक्ति
//         안녕하세요 - नमस्कार
//         어디 - कहाँ
//         가세요 - जानुहुन्छ

//         다음 - अर्को
//         시간 - समय
//         에 - मा
//         뭐 - के
//         할까요 - गरौँ

//         ### Full Translation:
//        व्यक्ति क: नमस्कार! कहाँ जानुहुन्छ?
//         व्यक्ति ख: अर्को पटक हामी के गरौँ?
// `,
//     dateCreated: null,
//   },
//   {
//     title: "문법 1 | Grammar 1",
//     prompt: `Grammar 1 व्याख्या गर्नुहोस्: Word-by-word breakdown (Korean - Translation), grammar explanation (why, when, rules), 10 simple example sentences with translations. स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//       उदाहरण आउटपुट:
//         ### Word-by-Word Breakdown:
//         문법 - व्याकरण
//         설명 - व्याख्या
//         입니다 - हो

//         ### Grammar Explanation:
//         यो व्याकरण बिन्दुले ... दर्शाउन प्रयोग गरिन्छ। यो प्रयोग गरिन्छ जब... यसलाई प्रयोग गर्नका लागि सर्तहरूमा... समावेश छन्।

//         ### Examples:
//         1. 나는 학교에 갑니다.
//            - म विद्यालय जान्छु।
// `,
//     dateCreated: null,
//   },
//   {
//     title: "문법 2 | Grammar 2",
//     prompt: `Grammar 2 व्याख्या गर्नुहोस्: Word-by-word breakdown (Korean - Translation), grammar explanation (why, when, rules), 10 simple example sentences with translations. स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//       उदाहरण आउटपुट:
//         ### Word-by-Word Breakdown:
//         문법 - व्याकरण
//         설명 - व्याख्या
//         입니다 - हो

//         ### Grammar Explanation:
//        यो व्याकरण बिन्दुले ... दर्शाउन प्रयोग गरिन्छ। यो प्रयोग गरिन्छ जब... यसलाई प्रयोग गर्नका लागि सर्तहरूमा... समावेश छन्।

//         ### Examples:
//         1. 나는 학교에 갑니다.
//            - म विद्यालय जान्छु।
// `,
//     dateCreated: null,
//   },
//   {
//     title: "문화와 정보 | Culture and Information",
//     prompt: `Culture and Information व्याख्या गर्नुहोस्: Word-by-word breakdown (Korean - Translation, सम्बन्धित अर्थहरू), paragraph separation, त्यसपछि full translation. अंग्रेजी passage लाई बेवास्ता गर्नुहोस्। स्पष्ट रूपमा ढाँचा मिलाउनुहोस्। उच्चारण नदिनुहोस्।

//        उदाहरण आउटपुट:
//         ### Word-by-Word Breakdown:

//         *पहिलो अनुच्छेद सुरु*
//         문화 - संस्कृति (सम्बन्धित अर्थहरू: परम्परा, रीतिरिवाज)
//         는 - Topic marker
//         한국 - कोरिया
//         에서 - मा
//         *पहिलो अनुच्छेद अन्त्य*

//         *दोस्रो अनुच्छेद सुरु*
//         정보 - जानकारी
//         는 - Topic marker
//        사람들 - मान्छेहरु (सम्बन्धित अर्थहरू: मानव, व्यक्ति)
//         에 - मा
//        대해 - बारेमा
//        *दोस्रो अनुच्छेद अन्त्य*

//         ### Full Translation:
//         कोरियामा संस्कृति धनी र विविध छ। जानकारीले मानिसहरूले परम्परा र रीतिरिवाजलाई कसरी महत्व दिन्छन् भन्ने बारे बताउँछ।
// `,
//     dateCreated: null,
//   },
// ];
