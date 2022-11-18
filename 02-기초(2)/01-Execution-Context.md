# Execution Context(실행 맥락)

실행 가능한 자바스크립트 코드 블록이 실행되는 환경을 말한다.

Execution context is the internal javascript construct to track execution of a function or the global code. The js engine maintains a stack data structure - execution context stack or call stack, which contains these contexts and the global execution context stays at the bottom of this stack. And a new execution context is created and pushed to the stack when execution of a function begins. A particular execution context tracks the pointer where statement of the corresponding function is being executed. An execution context is popped from the stack when corresponding function's execution is finished.

- Global Execution Context
- Functional Execution Context
- Eval Function Execution Context

Creation Phase

- Create the global object
- Create the 'this' object and bind it to the global object
- Setup memory heap for storing variables and function references
- Store functions and variables in global execution context and set to "undefined"

Execution Phase

- Execute code line by line
- Create a new execution context for each function call

# global execution context(전역 실행 맥락)

특정 함수 스코프에 속하지 않는 실행 맥락 (콜스택 맨 아래에 존재하게 된다.)

- Global Object (browser: window, Node.js: global)
- this

# Lexical Enviroment

렉시컬 환경은 특정 코드가 작성, 선언된 환경을 의미한다.

it's the internal js engine construct that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and variable is the reference to actual object [including function type object] or primitive value). A lexical environment also holds a reference to a parent lexical environment.

for every execution context a corresponding lexical environment is created.
